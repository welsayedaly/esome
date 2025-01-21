import React from "react";

const Pricing = () => {
  const pricingContent = [
    {
      id: 1,
      price: "0",
      type: "Free Consultation",
      features: [
        "Initial Consultation (30 mins)",
        "Basic Needs Assessment",
        "General Cloud Strategy Overview",
        "Email Support (1 query)",
      ],
      isPopular: "",
    },
    {
      id: 2,
      price: "$110",
      type: "Standard",
      features: [
        "Detailed Consultation (1 hour)",
        "Custom Cloud Strategy Plan",
        "Migration Guidance",
        "Priority Email Support",
      ],
      isPopular: "Popular",
    },
    {
      id: 3,
      price: "$300",
      type: "Premium",
      features: [
        "Comprehensive Consultation (2 hours)",
        "End-to-End Cloud Implementation Guidance",
        "Performance Optimization Strategy",
        "Dedicated Support for 30 Days",
      ],
      isPopular: "",
    },
  ];
  return (
    <>
      {pricingContent.map((item) => (
        <li key={item.id}>
          <div className="list_inner">
            <div className="price">
              <h3>
                <span>
                  {item.price}
                  <span className="currency">$</span>
                </span>
              </h3>
            </div>
            <div className="plan">
              <h3>{item.type}</h3>
            </div>
            <ul className="item">
              {item.features.map((feature, i) => (
                <li className="active" key={i}>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
            {/* <div className="tokyo_tm_button" data-position="left">
              <a href="#">
                <span>Purchase</span>
              </a>
            </div> */}
            {item.isPopular ? (
              <>
                <span className="popular">Popular</span>
              </>
            ) : (
              ""
            )}
          </div>
        </li>
      ))}
    </>
  );
};

export default Pricing;
