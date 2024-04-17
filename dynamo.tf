resource "aws_dynamodb_table" "viewCountTable" {
  name         = "Resume_Website"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }

  attribute {
    name = "view_count"
    type = "N"
  }
}