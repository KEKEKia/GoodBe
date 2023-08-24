import requests
import pandas as pd
import json


def get_all_job_post():
    '''
    전체 채용 공고를 가져오는 함수
    각 공고의 모든 정보를 한 문장으로 반환
    '''
    url = "http://localhost:8083/api/search/jobPost/all"
    req = requests.get(url)
    if req.status_code == 200:
        # JSON 데이터를 문자열로 가져옴
        json_data = req.text

        # JSON 데이터를 Python 데이터 구조로 파싱
        parsed_data = json.loads(json_data)

        # 파싱된 데이터를 사용하여 원하는 작업 수행
        # df = pd.DataFrame(parsed_data)
        # return df

        data_list = []

        for i in range(len(parsed_data)):
            text = parsed_data[i]["companyId"] + parsed_data[i]["companyData"] + parsed_data[i]["jobContent"] + parsed_data[i]["jobData"]
            data_list.append(text)
        return data_list
    else:
        return False

def get_job_post_by_keyword(keyword):
    '''
    키워드에 따른 채용공고를 가져오는 함수
    각 공고의 모든 정보를 한 문장으로 반환
    '''
    url = f"http://localhost:8083/api/search/jobPost/{keyword}"
    req = requests.get(url)
    if req.status_code == 200:
        # JSON 데이터를 문자열로 가져옴
        json_data = req.text

        # JSON 데이터를 Python 데이터 구조로 파싱
        parsed_data = json.loads(json_data)

        # 파싱된 데이터를 사용하여 원하는 작업 수행
        # df = pd.DataFrame(parsed_data)
        # return df

        data_list = []

        for i in range(len(parsed_data)):
            text = parsed_data[i]["companyId"] + parsed_data[i]["companyData"] + parsed_data[i]["jobContent"] + parsed_data[i]["jobData"]
            data_list.append(text)
        return data_list
    else:
        return False
    
def get_edu_by_keyword(word_list):
    '''
    키워드에 따른 채용공고를 가져오는 함수
    각 공고의 모든 정보를 한 문장으로 반환
    '''
    url = f"http://localhost:8083/api/search/edu/{word_list}"
    req = requests.get(url)
    if req.status_code == 200:
        # JSON 데이터를 문자열로 가져옴
        json_data = req.text

        # JSON 데이터를 Python 데이터 구조로 파싱
        parsed_data = json.loads(json_data)

        # 파싱된 데이터를 사용하여 원하는 작업 수행
        # df = pd.DataFrame(parsed_data)
        # return df

        return parsed_data
    else:
        return False