resource "aws_acm_certificate" "cert" {
  domain_name       = var.root_domain_name
  subject_alternative_names = [var.www_domain_name]
  validation_method = "DNS"
  provider = aws.us

  lifecycle {
    create_before_destroy = true
  }
}