import React from "react";
import { Link } from "react-router-dom";
import blogSEO from "./BlogSEO";

const RelatedPosts = ({ currentSlug }) => {
  // Safely get all blog posts except current one
  const allSlugs = Object.keys(blogSEO || {}).filter(slug => slug !== currentSlug);
  
  // Get 2-3 related posts (randomly selected if we don't have a sophisticated algorithm)
  const relatedSlugs = getRandomElements(allSlugs, Math.min(3, allSlugs.length));
  
  if (relatedSlugs.length === 0) return null;
  
  return (
    <div className="related-posts">
      <h4 className="related-title">You may also like</h4>
      <div className="related-posts-grid">
        {relatedSlugs.map(slug => {
          const post = blogSEO[slug];
          if (!post) return null;
          
          // Ensure image URL has proper format
          const imageUrl = post.imageUrl && post.imageUrl.startsWith('/')
            ? post.imageUrl
            : `/assets/img/news/${getImageNumber(slug)}.jpg`;
          
          return (
            <div key={slug} className="related-post-item">
              <Link to={`/blog/${slug}`} onClick={() => window.scrollTo(0, 0)}>
                <div className="related-post-image">
                  <img src={imageUrl} alt={post.title} />
                </div>
                <h5 className="related-post-title">{post.title}</h5>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Helper function to get image number if needed
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

// Helper function to get random elements from array
function getRandomElements(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default RelatedPosts;