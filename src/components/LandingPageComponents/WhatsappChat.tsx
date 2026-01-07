import React from "react";

const WhatsAppChat = () => {
  const phone = "918369573424";
  const message = encodeURIComponent("Hi, I want to work with you");

  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 border rounded"
    >
      Chat on WhatsApp
    </a>
  );
};

export default WhatsAppChat;
