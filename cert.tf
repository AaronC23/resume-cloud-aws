resource "aws_acm_certificate" "cert" {
  domain_name       = var.domain_name
  subject_alternative_names = ["*.${var.domain_name}"]
  validation_method = "DNS"
  provider = aws.us
  
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_zone" "zone" {
  name = "aaron-clark-dev.com"
}

resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.zone.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.distribution.domain_name
    zone_id                = aws_cloudfront_distribution.distribution.hosted_zone_id
    evaluate_target_health = false
  }
}