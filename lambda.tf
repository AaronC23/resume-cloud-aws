data "aws_iam_policy_document" "policy_doc" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

// dynamodb table Read Policy
data "aws_iam_policy_document" "dynamo_policy" {
    # Set perms for DynamoDB
    statement {
        actions = [
            "dynamodb:DescribeTable",
            "dynamodb:GetItem",
            "dynamodb:GetRecords",
            "dynamodb:ListTables",
            "dynamodb:Query",
            "dynamodb:Scan",
        ]

    resources = ["arn:aws:dynamodb:ap-southeast-2:718617175776:table/*"]

    effect = "Allow"
  }
}


resource "aws_iam_role" "iam_for_lambda" {
  name               = "iam_for_lambda"
  assume_role_policy = data.aws_iam_policy_document.policy_doc.json
  policy = data.aws_iam_policy_document.dynamo_policy.json
}

data "archive_file" "lambda" {
  type        = "zip"
  source_file = "scripts/lambda_function.py"
  output_path = "scripts/lambda_function.zip"
}

resource "aws_lambda_function" "test_lambda" {
  # If the file is not in the current working directory you will need to include a
  # path.module in the filename.
  filename      = "scripts/lambda_function.zip"
  function_name = "my_lambda"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "lambda_function.lambda_handler"

  source_code_hash = data.archive_file.lambda.output_base64sha256

  runtime = "python3.12"
}

# Helpful URL https://dynobase.dev/dynamodb-permissions-lambda/ 