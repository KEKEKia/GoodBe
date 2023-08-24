import requests
import pymysql
import pandas as pd
import xml.etree.ElementTree as ET

# 경로
# job_api_path = r"edu_api_key.txt"
# edu_api_path = r"C:\SH\gpt\edu_api_key.txt"
edu_api_path ="/Users/sehyun/Desktop/edu_api_key.txt"

# api key
with open(edu_api_path, "r") as f:
    api_key = f.read()

# db connection
conn = pymysql.connect(host = "i9a801.p.ssafy.io",port=3306,
                       user = "ssafy",
                       password = "jinajjang1128!",
                       database = "test",
                       charset = "utf8")

# 데이터 집어넣을 곳
edu_df = pd.DataFrame(columns=['trprId', 'TITLE', 'TITLE_LINK', 'SUB_TITLE', 'SUB_TITLE_LINK', 'TEL_NO', 'ADDRESS', 'content'])
# trprId : 훈련과정 ID
# TITLE : 훈련과정 이름
# TITLE_LINK : 훈련과정 url
# SUB_TITLE : 훈련기관 이름
# SUB_TITLE_LINK : 훈련기관 url
# TEL_NO : 훈련기관 전화번호
# ADDRESS : 훈련기관 주소
# content : 훈련 정보

page_size = 100

edu_data = [] 
for page in range(1,1000):
    cnt = 0
    print(f"page {page} crawling...")

    api_url = f"https://www.hrd.go.kr/jsp/HRDP/HRDPO00/HRDPOA60/HRDPOA60_1.jsp?returnType=XML&authKey={api_key}&pageNum={page}&pageSize={page_size}&srchTraStDt=20230809&srchTraEndDt=20231109&outType=1&sort=ASC&sortCol=TRNG_BGDE&srchTraArea1=00&srchNcs1=20"
    xml_data = requests.get(api_url).text

    root = ET.fromstring(xml_data)
    for i in root.findall('.//scn_list'): 
        cnt += 1
        edu = {}
        try:
            edu["trprId"] = i.find("trprId").text
        except:
            edu["trprId"] = " "
        try:
            edu["title"] = i.find("title").text
        except:
            edu["title"] = " "
        try:
            edu["title_link"] = i.find("titleLink").text
        except:
            edu["title_link"]= " "
        try:
            edu["sub_title"] = i.find("subTitle").text
        except:
            edu["sub_title"] = " "
        try:
            edu["sub_title_link"] = i.find("subTitleLink").text
        except:
            edu["sub_title_link"] = " "
        try:
            edu["tel_no"] = i.find("telNo").text
        except:
            edu["tel_no"] = " "
        try:
            edu["address"] = i.find("address").text
        except:
            edu["address"]  = " "
        edu["content"] = " "

        edu_data.append(edu)
    if cnt == 0:
        break

edu_df = pd.DataFrame(edu_data)
print(edu_df)

# db 저장
curs = conn.cursor()

for i in range(len(edu_df)):
    trprId = edu_df.trprId.loc[i]
    title = edu_df.title.loc[i]
    title_link = edu_df.title_link.loc[i]
    sub_title = edu_df.sub_title.loc[i]
    sub_title_link = edu_df.sub_title_link.loc[i]
    tel_no = edu_df.tel_no.loc[i]
    address = edu_df.address.loc[i]
    content = edu_df.content.loc[i]

    sql2 = f"insert into edu values('{trprId}','{title}','{title_link}','{sub_title}','{sub_title_link}','{tel_no}','{address}','{content}')"

    try:
        curs.execute(sql2)
    except:
        pass

conn.commit()
