resource "aws_dynamodb_table" "websiteTable" {
  name         = "website_resume"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }
}

# create initial item :)
resource "aws_dynamodb_table_item" "initial_items" {
  table_name = aws_dynamodb_table.websiteTable.name
  hash_key   = aws_dynamodb_table.websiteTable.hash_key
  item       = <<ITEM
  {
    "id": {"S": "1"},
    "view_count": {"N": "0"}
  }
  ITEM
}