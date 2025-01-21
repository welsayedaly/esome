import React from "react";

const CopyRight = () => {
  return (
    <div className="copyright">
      <p>
        &copy; {new Date().getFullYear()} wesa.dev <br /> Created by
        <a
          href="https://wesa.dev"
          target="_blank"
          rel="noreferrer"
        >
          wesa
        </a>
      </p>
    </div>
  );
};

export default CopyRight;
