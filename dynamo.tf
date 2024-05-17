resource "aws_dynamodb_table" "websiteTable" {
  name         = "website_resume"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }
}