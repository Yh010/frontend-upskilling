import React, { useContext } from "react";
import { ContentContext } from "../../contentContext.js";

const MainBody = () => {
  const content = useContext(ContentContext);

  let output;
  switch (content) {
    case "home":
      output = <p>home</p>;
      break;
    case "experience":
      output = <p> experience</p>;
      break;
    case "motion":
      output = <p> motion</p>;
      break;

    case "contactme":
      output = <p> contactme</p>;
      break;

    case "projects":
      output = <p> projects</p>;
      break;

    case "certificates":
      output = <p> certificates</p>;
      break;

    case "blogsNmedia":
      output = <p> blogsNmedia</p>;
      break;

    default:
      output = <p>home</p>;
      break;
  }

  return <div className="">{output}</div>;
};

export default MainBody;
