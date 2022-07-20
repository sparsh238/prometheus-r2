import json
import pymysql
import logging

rds_host = 'database-1-instance-1.co1va4lf6ic8.ap-south-1.rds.amazonaws.com'
name = 'admin'
password = 'password'
db_name = 'comedy_db'
port = 3306
conn = None

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    conn = pymysql.connect(host=rds_host,user=name,
                           passwd=password,db=db_name,
                           connect_timeout=5,
                           cursorclass=pymysql.cursors.DictCursor)
    statusCode = 200
    data = {}
    if conn is None:
        statusCode=500
    else:
        with conn.cursor() as cur:
            cur.execute('SELECT * FROM users ORDER BY id DESC LIMIT 1')
            logger.info(cur)
            row = cur.fetchone()
            logger.info(row)
            data['name'] = row['nam']
            data['password'] = row['pass']
            data['email'] = row['email']
            data['comedian'] = row['comedian']
            cur.close()
        conn.close()
        
    return {
        'statusCode': 200,
        'body': json.dumps(data),
        'headers': {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*"
        }
    }
