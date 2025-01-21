import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

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
                <div className="image" onClick={toggleModalOne}>
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

                  <h3 className="title" onClick={toggleModalOne}>
                    Why We Should Stop Using the Spring Framework
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalOne}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
                {/* END DETAILS */}

                {/* START MODAL */}
                <Modal
                  isOpen={isOpen}
                  onRequestClose={toggleModalOne}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news">
                    <button className="close-modal" onClick={toggleModalOne}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE ICON */}
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
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
                          <h3 className="title">
                            Why We Should Stop Using the Spring Framework
                          </h3>
                        </div>
                        {/* END DETAILS */}
                        <div className="main_content ">
                          <div className="descriptions">
                            <p className="bigger">
                              The Spring Framework has long dominated the Java landscape, promising convenience, quick setup, and flexibility through dependency injection and powerful abstractions. But does it deliver on those promises without long-term trade-offs? Here’s why Spring, often seen as a quick win for developers, could end up causing more harm than good.
                            </p>
                            <p>
                              <h2>The Illusion of Convenience</h2>
                              Spring markets itself as a framework that makes development easy and fast, especially with its annotations and code generation. These features may save time in initial setup, but as projects grow, so do the hidden costs. Spring’s quick wins often backfire, adding significant maintenance overhead as debugging and enhancements become increasingly challenging.

                              Spring’s abstraction can lead to a steep learning curve if you need to do anything outside of Spring’s typical use cases. Often, this means diving deep into Spring’s configuration options or “magic” methods, making debugging and troubleshooting a lengthy ordeal.
                            </p>
                            <p>
                              <a href="https://medium.com/@welsayedaly/why-we-should-stop-using-the-spring-framework-6261ee321376">read more</a>
                            </p>
                          </div>
                          {/* END DESCRIPTION */}
                          <div className="news_share">
                            <span>Share:</span>
                            <Social />
                            {/* END SOCIAL SHARE */}
                          </div>
                          {/* END NEWS SHARE */}
                        </div>
                      </div>
                    </div>
                    {/* END BOX INNER */}
                  </div>
                  {/* END MODALBOX NEWS */}
                </Modal>
                {/* END MODAL */}
              </div>
            </li>
            {/* END SINGLE BLOG */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="list_inner">
                <div className="image" onClick={toggleModalTwo}>
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

                  <h3 className="title" onClick={toggleModalTwo}>
                    12 Scanners to Find Security Vulnerabilities and Misconfigurations in Kubernetes
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalTwo}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>

                <Modal
                  isOpen={isOpen2}
                  onRequestClose={toggleModalTwo}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news">
                    <button className="close-modal" onClick={toggleModalTwo}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE MODAL */}
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
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
                              <span>12 Dec 2021</span>
                            </p>
                          </div>
                          <h3 className="title">
                            12 Scanners to Find Security Vulnerabilities and Misconfigurations in Kubernetes
                          </h3>
                        </div>
                        {/* END DETAILS */}
                        <div className="main_content ">
                          <div className="descriptions">
                            <p className="bigger">
                              Kubernetes has become the de facto operating system of the cloud. Developers love K8s because Kubernetes makes it easy for developers to package their applications into portable microservices.

                              More than 90% of companies dealing with cloud and microservices orchestration are going towards Kubernetes. There are more than 24,441 companies that use Kubernetes.
                            </p>
                            <p>
                              <a href="https://medium.com/towardsdev/12-scanners-to-find-security-vulnerabilities-and-misconfigurations-in-kubernetes-332a738d076d">read more</a>

                            </p>

                          </div>
                          <div className="news_share">
                            <span>Share:</span>
                            <Social />
                            {/* END SOCIAL */}
                          </div>
                          {/* END NEWS SHARE */}
                        </div>
                        {/* END MAIN CONTENT */}
                      </div>
                    </div>
                  </div>
                </Modal>
                {/* END MODAL */}
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
                <div className="image" onClick={toggleModalThree}>
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

                  <h3 className="title" onClick={toggleModalThree}>
                    Create AWS EC2 instance with SSH access via GitHub CI/CD Actions and Terraform Cloud.
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalThree}>
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
                {/* END DETAILS */}

                {/* START MODAL */}
                <Modal
                  isOpen={isOpen3}
                  onRequestClose={toggleModalThree}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news">
                    <button className="close-modal" onClick={toggleModalThree}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(assets/img/news/3.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className="details">
                          <div className="extra">
                            <p className="date">
                              By <a href="#">Walid El Sayed Aly</a>
                              <span>15 Feb 2021</span>
                            </p>
                          </div>
                          <h3 className="title">
                            Create AWS EC2 instance with SSH access via GitHub CI/CD Actions and Terraform Cloud.
                          </h3>
                        </div>
                        <div className="main_content ">
                          <div className="descriptions">
                            <p className="bigger">
                              In this article, I will focus on how to create an AWS EC2 instance using the GitHub CI/CD action and the Terraform Cloud app. In the process, I will provide SSH access to the new AWS EC2 instance using Terraform Cloud.
                            </p>
                            <p>
                              <a href="https://medium.com/towards-aws/create-aws-ec2-instance-with-ssh-access-via-github-ci-cd-actions-and-terraform-cloud-b003ac52b8cb">read more</a>
                            </p>

                          </div>
                          <div className="news_share">
                            <span>Share:</span>
                            <Social />
                            {/* END SCCIAL SHARE */}
                          </div>
                        </div>
                        {/* END MAIN CONTENT */}
                      </div>
                    </div>
                  </div>
                </Modal>
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
                <div className="image" onClick={toggleModalFour}>
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

                  <h3 className="title" onClick={toggleModalFour}>
                    Deploy MongoDB Replica Sets in Kubernetes with HELM
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalFour}>
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
                {/* END DETAILS */}
                <Modal
                  isOpen={isOpen4}
                  onRequestClose={toggleModalFour}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news">
                    <button className="close-modal" onClick={toggleModalFour}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE ICON */}
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
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
                              By <a href="#toggleButton">Walid El Sayed Aly</a>
                              <span>25 May 2020</span>
                            </p>
                          </div>
                          <h3 className="title">
                            Deploy MongoDB Replica Sets in Kubernetes with HELM
                          </h3>
                        </div>
                        {/* END DETAILS */}

                        <div className="main_content ">
                          <div className="descriptions">
                            <p className="bigger">
                              In this tutorial, I will show you how to deploy two or more Replica Set MongoDB instances running on Kubernetes.

                              MongoDB is one of the most popular document stores available both as a fully managed cloud service and for the deployment on self-managed infrastructures.

                              Kubernetes is the industry-leading container orchestration platform.
                            </p>
                            <p>
                              <a href="https://medium.com/towardsdev/deploy-mongodb-replica-sets-in-kubernetes-with-helm-e8562fb3e7ed">read more</a>
                            </p>

                          </div>
                          <div className="news_share">
                            <span>Share:</span>
                            <Social />
                            {/* END SOCIAL SHARE */}
                          </div>
                        </div>
                        {/* END MAIN CONTENT */}
                      </div>
                    </div>
                  </div>
                </Modal>
                {/* END MODAL */}
              </div>
              {/* END LIST INNER */}
            </li>



            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="list_inner">
                <div className="image" onClick={toggleModalOne}>
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

                  <h3 className="title" onClick={toggleModalOne}>
                    Are you sure that your passwords are secure?
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalOne}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
                {/* END DETAILS */}

                {/* START MODAL */}
                <Modal
                  isOpen={isOpen}
                  onRequestClose={toggleModalOne}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news">
                    <button className="close-modal" onClick={toggleModalOne}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE ICON */}
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
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
                          <h3 className="title">
                            Are you sure that your passwords are secure?
                          </h3>
                        </div>
                        {/* END DETAILS */}
                        <div className="main_content ">
                          <div className="descriptions">
                            <p className="bigger">
                              Access data or credentials are environment-specific configuration settings whose management requires strict methods for safeguarding by their users. A storage of these credentials in various environments that is both gapless and secure as well as a confidential handling represents a challenge for access authorization and secure recording.
                              Modern methods simplify these processes and allow a secure management and storage of passwords in different environments for different apps. One of those methods is the use of HashiCorp Vault, which centrally saves and manages passwords by use of various mechanisms, such as key/value or dynamic processes.
                              Also, Spring offers a high-level abstraction of HashiCorp Vault — which is called “Spring Vault” -, which features a client-side support for existing Spring applications and thus simplifies the transition to HashiCorp Vault. Spring Vault offers REST interfaces for the access to the passwords that are saved in HashiCorp. A short explanation of the use of these two new technologies illustrates their benefits.
                            </p>
                            <p>
                              <a href="https://medium.com/@welsayedaly/are-you-sure-that-your-passwords-are-secure-8a29d053c773">read more</a>
                            </p>
                          </div>
                          {/* END DESCRIPTION */}
                          <div className="news_share">
                            <span>Share:</span>
                            <Social />
                            {/* END SOCIAL SHARE */}
                          </div>
                          {/* END NEWS SHARE */}
                        </div>
                      </div>
                    </div>
                    {/* END BOX INNER */}
                  </div>
                  {/* END MODALBOX NEWS */}
                </Modal>
                {/* END MODAL */}
              </div>
            </li>


          </ul>
        </div>
      </div>
    </>
  );
};

export default News;
