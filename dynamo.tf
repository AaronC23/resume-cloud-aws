resource "aws_dynamodb_table" "viewCountTable" {
  name         = "website_resume"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"
  range_key    = "view_count"

  attribute {
    name = "id"
    type = "S"
  }

  attribute {
    name = "view_count"
    type = "N"
  }
}