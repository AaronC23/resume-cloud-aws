terraform {
  backend "s3" {
    bucket = "clarka-terraform-bucket"
    key = "key/terraform.tfstate"
    region = "ap-southeast-2"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.45.0"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  profile = "default"
  region  = "ap-southeast-2"
}

provider "aws" {
  profile = "default"
  region  = "us-east-1"
  alias = "us"
}


