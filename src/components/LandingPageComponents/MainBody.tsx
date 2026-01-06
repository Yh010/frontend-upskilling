import React, { useContext } from "react";
import { ContentContext } from "../../contentContext.js";

const MainBody = () => {
  const content = useContext(ContentContext);
  return <div className="">context value is {content}</div>;
};

export default MainBody;
