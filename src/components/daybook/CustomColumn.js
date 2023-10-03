import React from "react";

const CustomColumn = ({ title, content }) => {
  return (
    <div className="custom-column">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default CustomColumn;