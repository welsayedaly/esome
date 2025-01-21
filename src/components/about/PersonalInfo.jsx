import React from "react";
const currentDate = new Date();
const birthYear = 1980;
const age = currentDate.getFullYear() - birthYear;

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
          content: age.toString(),
        },
        {
          id: 3,
          name: "Address",
          content: "Montabaur, Germany",
        },
        {
          id: 4,
          name: "Nationality",
          content: "German",
        },
        
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Study",
          content: "University of Applied Sciences, Worms",
        },
        {
          id: 2,
          name: "Degree",
          content: "Master",
        },
        {
          id: 3,
          name: "Interest",
          content: "Running | Reading | New Technologies | AI",
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
