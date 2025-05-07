import React from "react";
import ReactMarkdown from "react-markdown";

const BlogContent = ({ title, date, author, content, imageUrl }) => {
  // Process content to extract first paragraph for meta description if needed
  const getFirstParagraph = (markdownContent) => {
    const paragraphs = markdownContent.split('\n\n');
    // Skip title (first line) and get first actual paragraph
    for (let i = 1; i < paragraphs.length; i++) {
      const paragraph = paragraphs[i].trim();
      if (paragraph && !paragraph.startsWith('#') && paragraph.length > 10) {
        return paragraph;
      }
    }
    return '';
  };

  // Remove title from content since we display it separately
  const processContent = (rawContent) => {
    const lines = rawContent.split('\n');
    if (lines[0].startsWith('# ')) {
      return lines.slice(1).join('\n').trim();
    }
    return rawContent;
  };
  
  const processedContent = processContent(content);
  
  return (
    <div className="blog-content">
      <div className="blog-header">
        {imageUrl && (
          <div className="blog-image">
            <img src={imageUrl} alt={title} loading="eager" />
          </div>
        )}
        <h1 className="blog-title">{title}</h1>
        <div className="blog-meta">
          <p>
            By {author} <span>{date}</span>
          </p>
        </div>
      </div>
      <div className="blog-body">
        <ReactMarkdown components={{
          // Add proper heading levels for SEO
          h1: ({node, ...props}) => <h2 {...props} />,
          h2: ({node, ...props}) => <h3 {...props} />,
          h3: ({node, ...props}) => <h4 {...props} />,
          // Add proper image alt tags and lazy loading
          img: ({node, alt, ...props}) => <img alt={alt || title} loading="lazy" {...props} />,
          // Add proper link attributes for SEO
          a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />
        }}>
          {processedContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogContent;