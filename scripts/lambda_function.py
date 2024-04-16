import json
import boto3

client = boto3.client('dynamodb')
dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table('website_values')
tableName = 'website_values'

def lambda_handler(event, context):
    print('Event received...', event)

    # Update the current view count
    response = table.update_item(
        Key={"id":"1"},
        UpdateExpression="SET view_count = view_count + :val",
        ExpressionAttributeValues={':val': 1},
        ReturnValues="UPDATED_NEW"
    )
    
    # Return the updated view count
    return {
        'statusCode': 200,
        'body': str(response['Attributes']['view_count']),
        'headers': {
        "Content-Type": "application/json"
        }
    }