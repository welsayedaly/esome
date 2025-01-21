import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Education",
      resume: [
        {
          id: 1,
          year: "10.2005 – 02.2010",
          institute: "University of Applied Sciences, Worms, Germany",
          degree: "Diplom-Informatiker",
        },
        {
          id: 2,
          year: "10.2000 – 07.2001",
          institute: "Alexandria University, Egypt",
          degree: "Communication Center, Telecommunications course",
        },
        {
          id: 3,
          year: "09.1993 – 07.1997",
          institute: "Upper secondary school, Alexandria, Egypt",
          degree: "High school diploma",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "01-2022 - Now",
          institute: "LR Health & Beauty Systems, Ahlen, Germany",
          degree: "Software Architect / Lead Software Developer ",
        },
        {
          id: 2,
          year: "07.2019-12.2021",
          institute: "Deutsche Bahn / DB Systel, Frankfurt Niederrad, Germany",
          degree: "Lead Software Developer / Product Owner",
        },
        {
          id: 3,
          year: "01.2019-06.2019",
          institute: "Trusted Shops GmbH, Cologne, Germany",
          degree: "Lead Software Developer",
        },
        {
          id: 4,
          year: "11.2013 - 12.2018",
          institute: "1&1 Internet AG, Montabaur, Germany",
          degree: "Software Developer",
        },
        {
          id: 5,
          year: "06.2013 - 10.2013",
          institute: "Lufthansa Technik, Hamburg, Germany",
          degree: "Scrum Master/ Software Developer",
        },
        {
          id: 6,
          year: "07.2012 - 05.2013",
          institute: "Telekom AG, Darmstadt, Germany",
          degree: "Software Developer",
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
