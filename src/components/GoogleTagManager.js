import React from "react";
import { Helmet } from "react-helmet-async";

const GoogleTagManager = () => {
  return (
    <Helmet>
      {/* Google tag (gtag.js) - Google Ads */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17047641910"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17047641910');
          
          // Page view conversion tracking
          gtag('event', 'conversion', {
            'send_to': 'AW-17047641910/w0WjCPiilt8aELa--cA_'
          });
        `}
      </script>

      {/* Google Analytics 4 (GA4) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-D7QS407D82"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-D7QS407D82');
        `}
      </script>

      {/* Google Tag Manager */}
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GT-W6KS5D8B');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleTagManager;