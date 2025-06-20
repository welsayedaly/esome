import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import News from "../components/News";
import CopyRight from "../components/CopyRight";
import PageTitle from "../components/PageTitle";

const BlogListPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkModeEnabled", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <PageTitle title="Blog - DevOps, Cloud & Kubernetes Insights" />
      
      <button className="theme-switcher-label" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <>
            <FaSun />
          </>
        ) : (
          <>
            <FaMoon />
          </>
        )}
      </button>

      <div className="tokyo_tm_all_wrap" data-magic-cursor="show">
        <div className="leftpart">
          <div className="leftpart_inner">
            <div className="logo">
              <Link className="navbar-brand" to="/">
                <img src="/assets/img/logo/dark.png" alt="brand" />
              </Link>
            </div>

            <div className="menu">
              <ul>
                <li>
                  <Link to="/home">
                    <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/cicdx">
                    <img
                      className="svg"
                      src="/assets/img/svg/cicd.svg"
                      alt="cicdx"
                    />
                    <span className="menu_content">CICDX</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <img
                      className="svg"
                      src="/assets/img/svg/setting.svg"
                      alt="services"
                    />
                    <span className="menu_content">Services</span>
                  </Link>
                </li>
                <li className="active">
                  <Link to="/blog">
                    <img
                      className="svg"
                      src="/assets/img/svg/paper.svg"
                      alt="blog"
                    />
                    <span className="menu_content">Blog</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="about"
                    />
                    <span className="menu_content">About</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <img
                      className="svg"
                      src="/assets/img/svg/mail.svg"
                      alt="contact"
                    />
                    <span className="menu_content">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            <CopyRight />
          </div>
        </div>

        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <News />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogListPage;