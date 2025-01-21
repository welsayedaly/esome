import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/1.jpg",
    name: "Walid El Sayed Aly", 
    designation: "Freelance software architect | DevOps & cloud consultant | Expert for on-premises & customized solutions",
    text: (
      <>
        <p>
        👋 Hi, my name is Walid El Sayed Aly I am an experienced Software Developer and Cloud Engineer with over 15 years of expertise across various industries. My focus is on developing custom solutions, resolving conflicts efficiently, and optimizing business processes to enhance performance, improve customer satisfaction, and increase revenue. I am a passionate problem solver, dedicated to fixing software issues with great enthusiasm.
        </p>
        <p>
        In my fifteen years of experience as an IT Developer and Consultant, I have helped numerous companies expand their market share through process optimization. My clients include well-known companies in the fields of transport and logistics, airlines, telecommunications, and banking. My project experience spans Cloud Transformation, Architecture, Team Leadership, Backend Development, Project Management, and Process Optimization.

I am flexible with my working hours, fluent in English, German, and Arabic, and place a high value on precise and efficient work. Reliability and trustworthiness are fundamental to my approach.


        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
