import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlogContent from "./BlogContent";
import blogSEO from "./BlogSEO";
import BlogStructuredData from "./BlogStructuredData";
import RelatedPosts from "./RelatedPosts";
import Breadcrumbs from "./Breadcrumbs";
import ShareButtons from "./ShareButtons";

const BlogPage = () => {
  const { slug } = useParams();
  const [blogData, setData] = useState({
    title: "",
    date: "",
    author: "Walid El Sayed Aly",
    content: "",
    imageUrl: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get SEO data for current blog - initialize it safely
  const seoData = (slug && blogSEO[slug]) ? blogSEO[slug] : {};

  useEffect(() => {
    if (!slug) {
      setError("No blog post specified");
      setLoading(false);
      return;
    }
    
    async function fetchBlogContent() {
      try {
        const response = await fetch(`/blog/${slug}.md`);
        
        if (!response.ok) {
          throw new Error(`Failed to load blog content: ${response.status}`);
        }
        
        const markdown = await response.text();
        
        // Extract title from first line of markdown (with error handling)
        let title = "";
        try {
          title = markdown.split('\n')[0].replace('# ', '');
        } catch (e) {
          title = "Blog Post";
          console.error("Error extracting title:", e);
        }
        
        setData({
          title: (seoData && seoData.title) ? seoData.title : title,
          date: getBlogDate(slug),
          author: (seoData && seoData.author) ? seoData.author : "Walid El Sayed Aly",
          content: markdown,
          imageUrl: (seoData && seoData.imageUrl) ? seoData.imageUrl : `/assets/img/news/${getImageNumber(slug)}.jpg`
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    
    fetchBlogContent();
    
    // Scroll to top when loading new blog
    window.scrollTo(0, 0);
  }, [slug]);

  // Helper function to get image number
  const getImageNumber = (slug) => {
    const slugToImageMap = {
      "spring-framework": "1",
      "k8s-scanners": "2",
      "aws-ec2-github": "3",
      "mongodb-kubernetes": "4",
      "secure-passwords": "5"
    };
    
    return slugToImageMap[slug] || "1";
  };
  
  // Helper function to get blog date
  const getBlogDate = (slug) => {
    const slugToDateMap = {
      "spring-framework": "28 Oct 2024",
      "k8s-scanners": "13 Dec 2021",
      "aws-ec2-github": "10 Nov 2021",
      "mongodb-kubernetes": "25 May 2020",
      "secure-passwords": "28 Aug 2018"
    };
    
    return slugToDateMap[slug] || "";
  };

  // Calculate reading time (approx 200 words per minute)
  const calculateReadingTime = (content) => {
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  if (loading) {
    return <div className="blog-loading">Loading...</div>;
  }

  if (error) {
    return <div className="blog-error">Error loading blog: {error}</div>;
  }

  const readingTime = calculateReadingTime(blogData.content);

  return (
    <>
      <Helmet>
        <title>{blogData.title || 'Blog Post'} | Walid El Sayed Aly</title>
        <meta name="description" content={(seoData && seoData.description) || blogData.title || 'Blog Post'} />
        <meta name="keywords" content={(seoData && seoData.keywords) || ""} />
        <meta name="author" content={blogData.author || 'Walid El Sayed Aly'} />
        <meta property="og:title" content={blogData.title || 'Blog Post'} />
        <meta property="og:description" content={(seoData && seoData.description) || blogData.title || 'Blog Post'} />
        <meta property="og:image" content={blogData.imageUrl || ''} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogData.title || 'Blog Post'} />
        <meta name="twitter:description" content={(seoData && seoData.description) || blogData.title || 'Blog Post'} />
        <meta name="twitter:image" content={blogData.imageUrl || ''} />
        <link rel="canonical" href={window.location.href} />
        {slug && blogData.title && (
          <script type="application/ld+json">
            {BlogStructuredData({ slug, blogData })}
          </script>
        )}
      </Helmet>
      
      <div className="tokyo_tm_section">
        <div className="container">
          <Breadcrumbs title={blogData.title} />
          <div className="tokyo_tm_blog_single">
            <div className="tokyo_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Blog • {readingTime}</span>
                  <h3>{blogData.title}</h3>
                </div>
                <div className="right">
                  <Link to="/" className="tokyo_tm_button">
                    <span>Back to Home</span>
                  </Link>
                </div>
              </div>
            </div>
            
            <BlogContent 
              title={blogData.title}
              date={blogData.date}
              author={blogData.author}
              content={blogData.content}
              imageUrl={blogData.imageUrl}
            />
            
            <div className="news_share">
              <span>Share:</span>
              <ShareButtons 
                url={window.location.href}
                title={blogData.title}
                description={(seoData && seoData.description) || `Read ${blogData.title} by ${blogData.author}`}
              />
            </div>
            
            <RelatedPosts currentSlug={slug} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;