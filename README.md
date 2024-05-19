<!-- ABOUT THE PROJECT -->
## About The Project

This is inspired by the [Cloud-Resume-Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/). The purpose was to build up my AWS skills outside of work and deploy a simple resume website via the cloud.

The website can be found at: https://aaron-clark-dev.com

### Built With

* AWS Cloud Services
* HTML
* CSS (Tailwind)
* Terraform (Infrastructure as Code)

## AWS Architecture Diagram

![AWS Cloud Resume](https://github.com/AaronC23/resume-cloud-aws/assets/28281365/e6845b72-be08-47b1-bb9f-885f230280b2)

## AWS Components Overview

### S3
S3 bucket is used to store static files (HTML/CSS/JS) and host the website.

### Route 53
Certificates, permissions and routing was done using Route 53, ACM and IAM policies.

### Cloudfront
Cloudfront acted as a CDN to provide caching and HTTPS certification for the website.

### Lambda / DynamoDB
Lambda was used with DynamoDB to provide a visitor counter which is updated on load.

### API Gateway
 API Gateway was used to provide an API endpoint for accessing the lambda function. 

## Terraform
Terraform was fully utilised to configure and provision all AWS services.

## Github Actions

When a PR is created, the GitHub actions will perform a terraform plan to preview any infrastructure changes for AWS.

![Example PR GitHub actions](https://github.com/AaronC23/resume-cloud-aws/assets/28281365/333af35a-74ab-4ed1-8171-664a2cb2ef47)

On merge to master the GitHub actions perform the following:
   
   * terraform apply (auto approve)
   * S3 sync static files (HTML/CSS/JS) 
   * Invalidate the cloudfront cache to reload any HTML changes (if needed)

![Example merge to main GitHub actinos](https://github.com/AaronC23/resume-cloud-aws/assets/28281365/d6a60310-bde9-4610-82b1-22bfddb34315)

<!-- ROADMAP -->
## Roadmap

- [ ] Add mobile support
- [ ] Tidy up CSS!
- [ ] Add About Page to Website

<!-- CONTACT -->
## Contact

Aaron Clark - aaronclarkofficial@gmail.com

Project Link: [https://github.com/AaronC23/resume-cloud-aws](https://github.com/AaronC23/resume-cloud-aws)
