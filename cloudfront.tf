resource "aws_cloudfront_distribution" "distribution" {
  enabled         = true
  is_ipv6_enabled = true

  aliases=[var.root_domain_name, var.www_domain_name]

  origin {
    domain_name = aws_s3_bucket_website_configuration.hosting.website_endpoint
    origin_id   = aws_s3_bucket.bucket.bucket_regional_domain_name

    custom_origin_config {
      http_port                = 80
      https_port               = 443
      origin_keepalive_timeout = 5
      origin_protocol_policy   = "http-only"
      origin_read_timeout      = 30
      origin_ssl_protocols = [
        "TLSv1.2",
      ]
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.cert.arn
    ssl_support_method = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  default_cache_behavior {
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.bucket.bucket_regional_domain_name
  }
}