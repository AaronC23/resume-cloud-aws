variable "instance_name" {
  description = "Value of the Name tag for the EC2 instance"
  type        = string
  default     = "ExampleAppServerInstance"
}

variable "bucket_name" {
  description = "Bucket name for website files"
  type        = string
}

variable "root_domain_name" {
  description = "Root domain name for website"
  type        = string
}

variable "www_domain_name" {
  description = "www domain name for website"
  type        = string
}

variable "AWS_ACCESS_KEY_ID" {
  type = string
  default = ""
}

variable "AWS_SECRET_ACCESS_KEY" {
  type = string
  default = ""
}

variable "acm_certificate_arn" {
  description = "ARN of existing ACM certificate in us-east-1"
  type        = string
}