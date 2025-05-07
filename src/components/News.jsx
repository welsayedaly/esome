import React from "react";
import { Link } from "react-router-dom";
import Social from "./Social";

const News = () => {
  const openBlogInNewWindow = (slug) => {
    try {
      window.open(`/blog/${slug}`, '_blank');
    } catch (e) {
      console.error('Error opening window:', e);
      // Fallback to regular navigation if popup blocked
      window.location.href = `/blog/${slug}`;
    }
  };
  
  const shareBlog = (e, slug, title) => {
    e.stopPropagation();
    e.preventDefault();
    
    const shareUrl = `${window.location.origin}/blog/${slug}`;
    const shareText = `Check out this article: ${title}`;
    
    if (navigator.share) {
      // Use Web Share API if available (mobile devices)
      navigator.share({
        title: title,
        text: shareText,
        url: shareUrl,
      })
        .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback to a simple popup
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
        'share-twitter',
        'width=600,height=400'
      );
    }
  };

  return (
    <>
      <div className="container">
        <div className="tokyo_tm_news">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>News</span>
                <h3>Latest Blogs</h3>
              </div>
            </div>
          </div>
          {/* END TITLE */}

          <ul>
            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="list_inner">
                <div className="image" onClick={() => openBlogInNewWindow('spring-framework')}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/1.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}
                <div className="details">
                  <div className="extra">
                    <p className="date">
                      By <a href="#">Walid El Sayed Aly</a>
                      <span>28 Oct 2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => openBlogInNewWindow('spring-framework')}>
                    Why We Should Stop Using the Spring Framework
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => openBlogInNewWindow('spring-framework')}>
                      <span>Read More</span>
                    </a>
                    <a 
                      className="share-icon" 
                      onClick={(e) => shareBlog(e, 'spring-framework', 'Why We Should Stop Using the Spring Framework')}
                      title="Share this article"
                    >
                      <img src="/assets/img/svg/share.svg" alt="Share" />
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
                {/* END DETAILS */}
              </div>
            </li>
            {/* END SINGLE BLOG */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="list_inner">
                <div className="image" onClick={() => openBlogInNewWindow('k8s-scanners')}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/2.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      By <a href="#">Walid El Sayed Aly</a>
                      <span>13 Dec 2021</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => openBlogInNewWindow('k8s-scanners')}>
                    12 Scanners to Find Security Vulnerabilities and Misconfigurations in Kubernetes
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => openBlogInNewWindow('k8s-scanners')}>
                      <span>Read More</span>
                    </a>
                    <a 
                      className="share-icon" 
                      onClick={(e) => shareBlog(e, 'k8s-scanners', '12 Scanners to Find Security Vulnerabilities and Misconfigurations in Kubernetes')}
                      title="Share this article"
                    >
                      <img src="/assets/img/svg/share.svg" alt="Share" />
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="list_inner">
                <div className="image" onClick={() => openBlogInNewWindow('aws-ec2-github')}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/3.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      By <a href="#">Walid El Sayed Aly</a>
                      <span>10 Nov 2021</span>
                    </p>
                  </div>

                  <h3 className="title" onClick={() => openBlogInNewWindow('aws-ec2-github')}>
                    Create AWS EC2 instance with SSH access via GitHub CI/CD Actions and Terraform Cloud.
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => openBlogInNewWindow('aws-ec2-github')}>
                      <span>Read More</span>
                    </a>
                    <a 
                      className="share-icon" 
                      onClick={(e) => shareBlog(e, 'aws-ec2-github', 'Create AWS EC2 instance with SSH access via GitHub CI/CD Actions and Terraform Cloud')}
                      title="Share this article"
                    >
                      <img src="/assets/img/svg/share.svg" alt="Share" />
                    </a>
                  </div>
                </div>
                {/* END DETAILS */}
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="list_inner">
                <div className="image" onClick={() => openBlogInNewWindow('mongodb-kubernetes')}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/4.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      By <a href="#">Walid El Sayed Aly</a>
                      <span>25 May 2020</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => openBlogInNewWindow('mongodb-kubernetes')}>
                    Deploy MongoDB Replica Sets in Kubernetes with HELM
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => openBlogInNewWindow('mongodb-kubernetes')}>
                      <span>Read More</span>
                    </a>
                    <a 
                      className="share-icon" 
                      onClick={(e) => shareBlog(e, 'mongodb-kubernetes', 'Deploy MongoDB Replica Sets in Kubernetes with HELM')}
                      title="Share this article"
                    >
                      <img src="/assets/img/svg/share.svg" alt="Share" />
                    </a>
                  </div>
                </div>
                {/* END DETAILS */}
              </div>
              {/* END LIST INNER */}
            </li>

            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="list_inner">
                <div className="image" onClick={() => openBlogInNewWindow('secure-passwords')}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/5.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}
                <div className="details">
                  <div className="extra">
                    <p className="date">
                      By <a href="#">Walid El Sayed Aly</a>
                      <span>28 Aug 2018</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => openBlogInNewWindow('secure-passwords')}>
                    Are you sure that your passwords are secure?
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => openBlogInNewWindow('secure-passwords')}>
                      <span>Read More</span>
                    </a>
                    <a 
                      className="share-icon" 
                      onClick={(e) => shareBlog(e, 'secure-passwords', 'Are you sure that your passwords are secure?')}
                      title="Share this article"
                    >
                      <img src="/assets/img/svg/share.svg" alt="Share" />
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
                {/* END DETAILS */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default News;