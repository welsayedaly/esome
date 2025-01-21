import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Knowledge",
      content: [
        " Cloud Architektur Module | Amazon Web Services | Microsoft Azure",
        " IaaS Infrastructure as a Service / Containers Orchestrierung & Microservices",
        " Kubernetes | Helm | Rancher | Instana | Docker",
        " Datenvisualisierung & Monitoring | Grafana | Prometheus | Kibana | Graylog",
        " Streaming / Message Broker",
        " Infrastruktur-Provisioning | Terraform | Ansible",
        " Build-System | Jenkins | GitLab CI/CD | GitHub Actions",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Interests",
      content: [
        " IT-Management | IT-Strategie ",
        " Mobile App",
        " Web Development",
        " AI & Machine Learning",
        " IoT & Smart Home",
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className="svg"
                      src="assets/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
