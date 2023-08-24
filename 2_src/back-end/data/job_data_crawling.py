# package import
import requests
from bs4 import BeautifulSoup
import pandas as pd
from collections import deque
import pymysql

# api key 경로 설정
#job_api_path =
# job_api_path = r"C:\SH\gpt\job_api_key.txt"
job_api_path = "/Users/sehyun/Desktop/job_api_key.txt"
# db 연결
# db connection
conn = pymysql.connect(host = "i9a801.p.ssafy.io",port=3306,
                       user = "ssafy",
                       password = "jinajjang1128!",
                       database = "test",
                       charset = "utf8")

# 데이터 저장할 리스트
auth_no_list = deque()
job_df = pd.DataFrame(columns=['id', 'company_id', 'company_data', 'company_url', 'job_content', 'end_date', 'sal', 'job_data'])

occupation = ['023', # 컴퓨터시스템
              '024', # 소프트웨어
              '025', # 데이터·네트워크 및 시스템 운영
              '026', # 정보 보안 및 통신·방송 송출
              '033', # 컴퓨터·기술·기능계 강사
              '056', # 미디어콘텐츠·UX/UI 디자이너
              ]


# api key
with open(job_api_path, "r") as f:
    api_key = f.read()

# 채용공고 아이디 리스트 받아오기
for ocp in occupation:
    for page in range(1,1000):
        print(f"page {page} crawling...")
        api_url = f"http://openapi.work.go.kr/opi/opi/opia/wantedApi.do?authKey={api_key}&callTp=L&returnType=XML&startPage={page}&display=100&occupation={ocp}"
        cnt = 0
        req = requests.get(api_url)
        soup = BeautifulSoup(req.text, 'xml')
        for i in soup.find_all("wanted"):
            cnt += 1
            wanted_auth_no = i.find("wantedAuthNo").get_text()
            auth_no_list.append(wanted_auth_no)
        if cnt == 0:
            break

# 상세정보 출력
def get_job_data(url):
    req = requests.get(api_url_detail)
    soup = BeautifulSoup(req.text, 'xml')

    id = wanted_auth_no
    company_id = soup.find('corpNm').text

    try:
        reper_nm = soup.find('reperNm').text
    except:
        reper_nm = ' '
    try:
        tot_psncnt = soup.find('totPsncnt').text
    except:
        tot_psncnt = ' '
    try:
        capital_amt = soup.find('capitalAmt').text
    except:
        capital_amt = ' '
    try:
        yr_sales_amt = soup.find('yrSalesAmt').text
    except:
        yr_sales_amt = ' '
    try:
        ind_tpCd_nm = soup.find('indTpCdNm').text
    except:
        ind_tpCd_nm = ' '
    company_data = reper_nm + ',' + tot_psncnt +','+ capital_amt +','+ yr_sales_amt +','+ ind_tpCd_nm

    try:
        company_url = soup.find('homePg').text
    except:
        company_url = ' '

    try:
        job_content = soup.find('jobCont').text
    except:
        job_content = ' '

    try:
        end_date = soup.find('receiptCloseDt').text
    except:
        end_date = ' '
    
    try:
        sal = soup.find('salTpNm').text
    except:
        sal = ' '

    try:
        major = soup.find('major').text
    except:
        major = ' '
    try:
        certificate = soup.find('certificate').text
    except:
        certificate = ' '
    try:
        pfCond = soup.find('pfCond').text
    except:
        pfCond = ' '
    try:
        etcPfCond = soup.find('etcPfCond').text
    except:
        etcPfCond = ' '
    job_data = major + ',' + certificate + ',' + pfCond +','+ etcPfCond
    
    job_data_list = [id, company_id, company_data, company_url, job_content, end_date, sal, job_data]
    
    print(job_data_list)

    return job_data_list

for wanted_auth_no in auth_no_list:
    api_url_detail = f'http://openapi.work.go.kr/opi/opi/opia/wantedApi.do?authKey={api_key}&callTp=D&returnType=XML&wantedAuthNo={wanted_auth_no}&infoSvc=VALIDATION'
    job_data_list = get_job_data(api_url_detail)

    idx = len(job_df)
    job_df.loc[idx] = job_data_list

# csv로 저장
# job_df.to_json("job_data2.json")


curs = conn.cursor()

# db insert
for i in range(len(job_df)):
    id = job_df.id.loc[i]
    company_id = job_df.company_id.loc[i]
    company_data = job_df.company_data.loc[i]
    company_url = job_df.company_url.loc[i]
    job_content = job_df.job_content.loc[i]
    end_date = job_df.end_date.loc[i]
    sal = job_df.sal.loc[i]
    job_data = job_df.job_data.loc[i]

    sql2 = f"insert into job_post values('{id}','{company_id}','{company_data}','{company_url}','{job_content}','{end_date}','{sal}','{job_data}')"

    try:
        curs.execute(sql2)
    except:
        pass

conn.commit()
