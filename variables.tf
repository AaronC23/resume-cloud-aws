variable "instance_name" {
  description = "Value of the Name tag for the EC2 instance"
  type        = string
  default     = "ExampleAppServerInstance"
}

variable "bucket_name" {
  description = "Bucket name for website files"
  type        = string
}

variable "domain_name" {
  description = "Domain name for website"
  type        = string
}