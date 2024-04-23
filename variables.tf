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