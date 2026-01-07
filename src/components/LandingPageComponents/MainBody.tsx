import React, { useContext } from "react";
import { ContentContext } from "../../contentContext.js";
import WhatsAppChat from "./WhatsappChat.js";
import CalInvite from "./CalInvite.js";

const MainBody = () => {
  const content = useContext(ContentContext);

  let output;
  switch (content) {
    case "home":
      output = <WhatsAppChat />;
      break;
    case "experience":
      output = <CalInvite />;
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
      output = <WhatsAppChat />;
      break;
  }

  return <div className="">{output}</div>;
};

export default MainBody;
