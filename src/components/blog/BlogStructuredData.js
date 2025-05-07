import blogSEO from "./BlogSEO";

// This is not a React component anymore - just returns a JSON string
const BlogStructuredData = ({ slug, blogData }) => {
  const seoData = blogSEO[slug] || {};
  const baseUrl = "https://wesa.dev";
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogData.title,
    "image": [
      `${baseUrl}${blogData.imageUrl}`
    ],
    "datePublished": formatDateForSchema(blogData.date),
    "dateModified": formatDateForSchema(blogData.date),
    "author": {
      "@type": "Person",
      "name": blogData.author,
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Walid El Sayed Aly",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/assets/img/logo/logo.png`
      }
    },
    "description": seoData.description || "",
    "keywords": seoData.keywords || "",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`
    }
  };

  // Just return the stringified JSON
  return JSON.stringify(structuredData);
};

// Helper to format date for schema.org (ISO format)
function formatDateForSchema(dateString) {
  if (!dateString) return "";
  
  // Parse date string like "28 Oct 2024"
  const parts = dateString.split(' ');
  if (parts.length !== 3) return "";
  
  const day = parts[0];
  const monthMap = {
    'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06',
    'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
  };
  const month = monthMap[parts[1]];
  const year = parts[2];
  
  if (!month) return "";
  
  return `${year}-${month}-${day.padStart(2, '0')}`;
}

export default BlogStructuredData;