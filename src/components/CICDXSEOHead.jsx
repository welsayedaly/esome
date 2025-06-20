import React from "react";
import { Helmet } from "react-helmet-async";

const CICDXSEOHead = () => {
  return (
    <Helmet>
      <title>CICDX - CI/CD Automation & Pipeline Migration Tool | Walid El Sayed Aly</title>
      <meta 
        name="description" 
        content="CICDX is a next-generation CI/CD automation tool that generates and translates high-quality CI/CD pipelines between different tools. Migrate from Jenkins to GitHub Actions, GitLab CI/CD to CircleCI, and more. Save 50% migration time and thousands in engineering costs." 
      />
      <meta 
        name="keywords" 
        content="CICDX, CI/CD automation, pipeline migration, Jenkins to GitHub Actions, GitLab CI/CD, CircleCI, Azure Pipelines, DevOps automation, CI/CD translation, pipeline conversion" 
      />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="CICDX - CI/CD Automation & Pipeline Migration Tool" />
      <meta 
        property="og:description" 
        content="Automate CI/CD pipeline migration between Jenkins, GitHub Actions, GitLab CI/CD, CircleCI, and Azure Pipelines. Save 50% migration time with CICDX." 
      />
      <meta property="og:url" content="https://wesa.dev/#cicdx" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="CICDX - CI/CD Automation & Pipeline Migration Tool" />
      <meta 
        property="twitter:description" 
        content="Automate CI/CD pipeline migration between Jenkins, GitHub Actions, GitLab CI/CD, CircleCI, and Azure Pipelines. Save 50% migration time with CICDX." 
      />
      
      {/* Structured Data - Product */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "CICDX",
          "description": "CICDX is a next-generation CI/CD automation tool that generates and translates high-quality CI/CD pipelines between different tools, saving you time and money.",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Cross-platform",
          "offers": {
            "@type": "Offer",
            "description": "Early Access Program"
          },
          "author": {
            "@type": "Person",
            "name": "Walid El Sayed Aly"
          },
          "features": [
            "Pipeline Translation",
            "Automated Migration", 
            "DevOps Platform Integration",
            "Cost & Time Savings"
          ]
        })}
      </script>
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Walid El Sayed Aly" />
      <link rel="canonical" href="https://wesa.dev/cicdx" />
      
      {/* CICDX-Specific Conversion Events */}
      <script>
        {`
          // CICDX Page View Event
          if (typeof gtag !== 'undefined') {
            gtag('event', 'cicdx_page_view', {
              'event_category': 'CICDX',
              'event_label': 'CICDX Product Page',
              'value': 1
            });
            
            // Google Ads Conversion Events for CICDX
            gtag('event', 'conversion', {
              'send_to': 'AW-17047641910/CONVERSION_LABEL',
              'value': 1.0,
              'currency': 'USD',
              'event_category': 'CICDX',
              'event_label': 'CICDX Page View'
            });
          }
        `}
      </script>
    </Helmet>
  );
};

export default CICDXSEOHead;