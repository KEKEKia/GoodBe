import pymysql
import pandas as pd

job_df = pd.read_json("job_data2.json")

# db connection
conn = pymysql.connect(host = "localhost",port=3306,
                       user = "root",
                       password = "ssafy",
                       database = "test",
                       charset = "utf8")

curs = conn.cursor()

# db insert
for i in range(len(job_df)):
    print(i)
    print(job_df.loc[i])
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



