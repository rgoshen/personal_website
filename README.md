# My Personal Website

This repository contains the source code for my personal website. It is built using **standard HTML, CSS, vanilla JavaScript**, and **Material Design for Bootstrap 4**. The site is hosted on AWS, with infrastructure managed through Terraform. Below are the details of the setup and deployment process.

## Features

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Design Framework**: Material Design for Bootstrap 4
- **Hosting**: AWS (S3 Bucket, CloudFront, Route53)
- **Infrastructure as Code**: Terraform
- **Continuous Integration/Continuous Deployment (CI/CD)**: GitHub Actions

## AWS Services and Configurations

- **AWS S3**: Used to store and serve the website’s static files.
- **AWS CloudFront**: Provides a global content delivery network (CDN) for caching and optimizing website delivery for faster load times.
- **AWS Route53**: Manages the DNS settings, including DNSSec configuration for secure email service records.
- **Email Service**: Configured with DNSSec for secure email communication.
- **Newsletter Service**: Easily integrate a newsletter service like [ConvertKit](https://convertkit.com/).
- **Name Servers**: Configured for the domain `yourwebsite.com` through Route53.

## Continuous Deployment

The website is automatically deployed using **GitHub Actions**. The CI/CD pipeline is configured to:

1. Build and deploy the website upon command within a minute.
2. Push changes to the S3 bucket and invalidate the CloudFront cache to ensure the latest version is available globally.

## How to Deploy

1. Push your changes to the main branch.
2. GitHub Actions will trigger the pipeline automatically.
3. The site will be deployed to AWS S3 and served via CloudFront.

## Infrastructure

The infrastructure is configured using **Terraform** to automate the setup of AWS resources:

- **S3 Bucket** for storing static files.
- **CloudFront** for global caching and optimization.
- **Route53** for DNS and domain management.

### DNS Configuration
- **Email Service Records**: Configured with DNSSec for security.
- **Name Server**: Linked to the domain `yourwebsite.com` for efficient traffic routing.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.
