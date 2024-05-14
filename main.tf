terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.45.0"
    }
  }

  required_version = ">= 1.2.0"

  cloud {
    organization = "Aaron-Clark"

    workspaces {
      name = "resume-aws"
    }
  }
  
}

provider "aws" {
  # profile = "default"
  access_key = var.AWS_ACCESS_KEY_ID
  secret_key = var.AWS_SECRET_ACCESS_KEY
  region  = "ap-southeast-2"
}

provider "aws" {
  # profile = "default"
  access_key = var.AWS_ACCESS_KEY_ID
  secret_key = var.AWS_SECRET_ACCESS_KEY
  region  = "us-east-1"
  alias = "us"
}