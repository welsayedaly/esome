import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Birthday",
          content: "26.02.1980",
        },
        {
          id: 2,
          name: "Age",
          content: "45",
        },
        {
          id: 3,
          name: "Address",
          content: "Montabaur, Germany",
        },
        {
          id: 4,
          name: "Email",
          content: (
            <>
              <a href="mailto:m@wesa.dev">m@wesa.dev</a>
            </>
          ),
        },
        {
          id: 5,
          name: "Phone",
          content: (
            <>
              <a href="tel:+49 171 3340421">+49 (0) 171 3340421</a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "German",
        },
        {
          id: 2,
          name: "Study",
          content: "University of Applied Sciences, Worms",
        },
        {
          id: 3,
          name: "Degree",
          content: "Master",
        },
        {
          id: 4,
          name: "Interest",
          content: "Playing Football",
        },
        {
          id: 5,
          name: "Freelance",
          content: "Available",
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
