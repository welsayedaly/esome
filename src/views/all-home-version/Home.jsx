import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "../../components/Home";
import CopyRight from "../../components/CopyRight";
import LandingPageSEO from "../../components/LandingPageSEO";

const HomeLight = () => {
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
      <LandingPageSEO />

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
        {/* START LEFT MENU CONTENT */}
        <div className="leftpart">
          <div className="leftpart_inner">
            <div className="logo">
              <Link className="navbar-brand" to="/">
                <img src="/assets/img/logo/dark.png" alt="brand" />
              </Link>
            </div>
            {/* END LOGO */}

            <div className="menu">
              <ul>
                <li className="active">
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
                
                <li>
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
            {/* END MENU */}

            <CopyRight />
            {/* END COPYRIGHT */}
          </div>
        </div>
        {/* END LEFT MENU CONTENT */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <div data-aos="fade-right" data-aos-duration="1200">
                <Home />
              </div>
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </div>
    </>
  );
};

export default HomeLight;