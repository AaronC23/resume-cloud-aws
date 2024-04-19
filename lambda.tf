# Create aws iam role for lambda
resource "aws_iam_role" "lambdaRole" {
  name = "LambdaRole"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

# Create iam policy for dynamo db access
resource "aws_iam_policy" "dynamoDBLambdaPolicy" {
  name = "DynamoDBLambdaPolicy"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "dynamodb:*"
        ]
        # Reference dynamo db table created in dynamo.tf
        Resource = [
          aws_dynamodb_table.websiteTable.arn
        ]
      }
    ]
  })
}

# Attach the iam policy to the lambda role
resource "aws_iam_role_policy_attachment" "lambda-policy-attachment" {
  role       = aws_iam_role.lambdaRole.name
  policy_arn = aws_iam_policy.dynamoDBLambdaPolicy.arn
}

# Archive for lambda script
data "archive_file" "lambda" {
  type        = "zip"
  source_file = "scripts/lambda_function.py"
  output_path = "scripts/lambda_function.zip"
}

# Create our lambda function
resource "aws_lambda_function" "test_lambda" {
  filename      = "scripts/lambda_function.zip"
  function_name = "my_lambda"
  role          = aws_iam_role.lambdaRole.arn
  handler       = "lambda_function.lambda_handler"

  source_code_hash = data.archive_file.lambda.output_base64sha256

  runtime = "python3.12"
}