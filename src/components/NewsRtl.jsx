import React from "react";
import { Link } from "react-router-dom";
import Social from "./Social";

const NewsRtl = () => {
  const openBlogInNewWindow = (slug) => {
    try {
      window.open(`/blog/${slug}`, '_blank');
    } catch (e) {
      console.error('Error opening window:', e);
      // Fallback to regular navigation if popup blocked
      window.location.href = `/blog/${slug}`;
    }
  };

  return (
    <>
      <div className="container">
        <div className="tokyo_tm_news">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>أخبار</span>
                <h3>أحدث الأخبار</h3>
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
                      بواسطة <a href="#">وليد السيد علي</a>
                      <span>28 أكتوبر 2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => openBlogInNewWindow('spring-framework')}>
                    لماذا يجب أن نتوقف عن استخدام إطار عمل سبرينج
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => openBlogInNewWindow('spring-framework')}>
                      <span>اقرأ أكثر</span>
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
              data-aos-delay="100"
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
                      بواسطة <a href="#">وليد السيد علي</a>
                      <span>13 ديسمبر 2021</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => openBlogInNewWindow('k8s-scanners')}>
                    12 ماسحًا للعثور على نقاط الضعف الأمنية في كوبرنيتس
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => openBlogInNewWindow('k8s-scanners')}>
                      <span>اقرأ أكثر</span>
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
                      بواسطة <a href="#">وليد السيد علي</a>
                      <span>10 نوفمبر 2021</span>
                    </p>
                  </div>

                  <h3 className="title" onClick={() => openBlogInNewWindow('aws-ec2-github')}>
                    إنشاء مثيل AWS EC2 مع وصول SSH عبر GitHub CI/CD و Terraform Cloud
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => openBlogInNewWindow('aws-ec2-github')}>
                      <span>اقرأ أكثر</span>
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
                      بواسطة <a href="#">وليد السيد علي</a>
                      <span>25 مايو 2020</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => openBlogInNewWindow('mongodb-kubernetes')}>
                    نشر مجموعات MongoDB Replica في Kubernetes باستخدام HELM
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => openBlogInNewWindow('mongodb-kubernetes')}>
                      <span>اقرأ أكثر</span>
                    </a>
                  </div>
                </div>
                {/* END DETAILS */}
              </div>
              {/* END LIST INNER */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NewsRtl;