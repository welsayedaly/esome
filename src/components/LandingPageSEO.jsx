import React from "react";
import { Helmet } from "react-helmet-async";

const LandingPageSEO = () => {
  return (
    <Helmet>
      <title>Walid El Sayed Aly - Top Kubernetes & AWS Expert | CICDX Automation | Extra Something IT Consulting Montabaur</title>
      <meta 
        name="description" 
        content="Top Kubernetes & AWS Expert Walid El Sayed Aly offers CICDX CI/CD Automation, Cloud Migration, DevOps Solutions, and IT Beratung in Montabaur. Expert Software Cloud Consulting and Rust development services." 
      />
      <meta 
        name="keywords" 
        content="Kubernetes Expert, AWS Expert, CICDX, CI/CD Automation, Montabaur Cloud Consultants, Rust DevOps Solutions, Seamless Cloud Migration, IT Beratung Montabaur, Kubernetes Beratung, CI/CD Migration, CICD Pipeline Migration, Software Consulting Montabaur, Extra Something IT Consulting, Walid El Sayed Aly, Software Cloud Beratung, Cloud Services Montabaur" 
      />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Walid El Sayed Aly - Top Kubernetes & AWS Expert | CICDX Automation" />
      <meta 
        property="og:description" 
        content="Top Kubernetes & AWS Expert offering CICDX CI/CD Automation, Cloud Migration, and DevOps Solutions in Montabaur. Expert IT consulting and software development." 
      />
      <meta property="og:url" content="https://wesa.dev/" />
      <meta property="og:site_name" content="Extra Something IT Consulting" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Walid El Sayed Aly - Top Kubernetes & AWS Expert | CICDX Automation" />
      <meta 
        property="twitter:description" 
        content="Top Kubernetes & AWS Expert offering CICDX CI/CD Automation, Cloud Migration, and DevOps Solutions in Montabaur." 
      />
      
      {/* Local Business Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Extra Something IT Consulting",
          "alternateName": "Walid El Sayed Aly",
          "description": "Top Kubernetes & AWS Expert offering CICDX CI/CD Automation, Cloud Migration, DevOps Solutions, and IT Beratung in Montabaur",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Montabaur",
            "addressCountry": "DE"
          },
          "founder": {
            "@type": "Person",
            "name": "Walid El Sayed Aly",
            "jobTitle": "Senior Cloud & DevOps Consultant"
          },
          "serviceArea": {
            "@type": "Place",
            "name": "Montabaur, Germany"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "IT Consulting Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Kubernetes Consulting",
                  "description": "Expert Kubernetes consulting and implementation services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "AWS Cloud Consulting",
                  "description": "AWS cloud architecture and migration services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "CICDX Automation",
                  "description": "CI/CD pipeline automation and migration with CICDX"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "DevOps Solutions",
                  "description": "Complete DevOps transformation and Rust development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cloud Migration",
                  "description": "Seamless cloud migration and modernization services"
                }
              }
            ]
          },
          "knowsAbout": [
            "Kubernetes",
            "AWS",
            "CI/CD Automation", 
            "DevOps",
            "Rust Programming",
            "Cloud Migration",
            "Software Consulting"
          ],
          "url": "https://wesa.dev",
          "sameAs": [
            "https://linkedin.com/in/walid-el-sayed-aly"
          ]
        })}
      </script>
      
      {/* Person Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Walid El Sayed Aly",
          "jobTitle": "Senior Cloud & DevOps Consultant",
          "description": "Top Kubernetes & AWS Expert specializing in CICDX CI/CD Automation, Cloud Migration, and DevOps Solutions",
          "worksFor": {
            "@type": "Organization",
            "name": "Extra Something IT Consulting"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Montabaur",
            "addressCountry": "DE"
          },
          "knowsAbout": [
            "Kubernetes Architecture",
            "AWS Cloud Services",
            "CI/CD Pipeline Automation",
            "DevOps Best Practices",
            "Rust Programming Language",
            "Cloud Migration Strategies",
            "Software Architecture"
          ],
          "url": "https://wesa.dev"
        })}
      </script>
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Walid El Sayed Aly" />
      <meta name="geo.region" content="DE-RP" />
      <meta name="geo.placename" content="Montabaur" />
      <meta name="geo.position" content="50.4357;7.8287" />
      <meta name="ICBM" content="50.4357, 7.8287" />
      
      {/* Language and location */}
      <meta name="language" content="en,de" />
      <meta httpEquiv="content-language" content="en,de" />
      
      <link rel="canonical" href="https://wesa.dev/" />
      
      {/* Local Business verification */}
      <meta name="google-site-verification" content="" />
    </Helmet>
  );
};

export default LandingPageSEO;