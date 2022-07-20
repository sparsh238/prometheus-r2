import json
import pymysql
import logging

rds_host = 'database-1-instance-1.co1va4lf6ic8.ap-south-1.rds.amazonaws.com'
userDB = 'admin'
passwordDB = 'password'
db_name = 'comedy_db'
port = 3306

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    # TODO implement
    conn = pymysql.connect(host=rds_host,user=userDB,
                           passwd=passwordDB,db=db_name,
                           connect_timeout=5,
                           cursorclass=pymysql.cursors.DictCursor)
    statusCode = 200
    body = "Success!"
    name = event['queryStringParameters']['name']
    password = event['queryStringParameters']['password']
    email = event['queryStringParameters']['email']
    comedian = event['queryStringParameters']['comedian']
    
    if conn is None:
        statusCode=500
        body="Failure"
    else:
        with conn.cursor() as cur:
            cur.execute('insert into users (nam, pass, email, comedian) values ("' + name + '", "' + password + '", "' + email + '", "' + comedian + '")')
            conn.commit()
            cur.close()
        conn.close()
        
    return {
        'statusCode': statusCode,
        'body': body,
        'headers': {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Credentials" : "true"
        }
    }
