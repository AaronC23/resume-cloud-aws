import json
import boto3

client = boto3.client('dynamodb')
dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table('website_resume')
tableName = 'website_resume'

def lambda_handler(event, context):
    print('Event received...', event)

    # Check if item exists
    response = table.get_item(
        Key={
            "id": "1",
        }
    )

    if response:
        # Update the current view count
        response = table.update_item(
            Key={"id":"1"},
            UpdateExpression="SET view_count = view_count + :val",
            ExpressionAttributeValues={':val': 1},
            ReturnValues="UPDATED_NEW"
        )
    else:
        response = table.put_item(
            Item = {
                "id": "1",
                "view_count": 1
            }
        )
    
    # Return the updated view count
    return {
        'statusCode': 200,
        'body': str(response['Attributes']['view_count']),
        'headers': {
        "Content-Type": "application/json"
        }
    }