import boto3
import json

client = boto3.client('dynamodb')
dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table('website_resume')

def lambda_handler(event, context):
    response = table.update_item(
        Key={'id': '1'},
        UpdateExpression="SET view_count = view_count + :val",
        ExpressionAttributeValues={':val': 1},
        ReturnValues="UPDATED_NEW"
    )
    
    # Return the updated view count
    return {
        'statusCode': 200,
        'body': json.dumps({
                'view_count': str(response['Attributes']['view_count']),
            }),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        }
    }