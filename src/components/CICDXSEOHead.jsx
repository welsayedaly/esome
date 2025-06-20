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
      <link rel="canonical" href="https://wesa.dev/#cicdx" />
      
      {/* Google Analytics 4 (GA4) - Replace GA_MEASUREMENT_ID with your actual ID */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-D7QS407D82"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </script>
      
      {/* Google Ads Conversion Tracking - Replace AW-CONVERSION_ID with your actual ID */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17047641910"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-CONVERSION_ID');
        `}
      </script>
      
      {/* Enhanced Conversion Tracking */}
      <script>
        {`
          gtag('config', 'AW-CONVERSION_ID', {
            'allow_enhanced_conversions': true
          });
        `}
      </script>
      
      {/* Google Analytics Conversion Events */}
      <script>
        {`
          gtag('event', 'conversion_event_page_view', {
            'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
            'value': 1.0,
            'currency': 'USD'
          });
        `}
      </script>
      
      <script>
        {`
          gtag('event', 'conversion_event_page_view_1', {
            'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL_2',
            'value': 1.0,
            'currency': 'USD'
          });
        `}
      </script>
      
      {/* Google Tag Manager (Optional - Replace GTM-XXXXXXX with your container ID) */}
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GT-W6KS5D8B');
        `}
      </script>
      
      {/* Facebook Pixel (Optional - Replace YOUR_PIXEL_ID) */}
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </script>
      <noscript>
        <img height="1" width="1" style={{display: 'none'}} 
             src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" />
      </noscript>
    </Helmet>
  );
};

export default CICDXSEOHead;