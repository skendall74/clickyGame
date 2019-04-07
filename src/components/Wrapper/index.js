import React from "react";
import "./style.css";

  const Wrapper = (props) => {
    return <div className="wrapper">{props.children}</div>;
  };

export default Wrapper;
