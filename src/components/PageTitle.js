import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Walid El Sayed Aly</title>
    </Helmet>
  );
};

export default PageTitle;
