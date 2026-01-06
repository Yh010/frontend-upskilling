import "./App.css";
import { useState } from "react";
import { ContentContext, type ContentType } from "./contentContext.js";
import Navbar from "./components/LandingPageComponents/Navbar.js";
import MainBody from "./components/LandingPageComponents/MainBody.js";

function App() {
  const [content, setContent] = useState<ContentType>("home");
  return (
    <div>
      <ContentContext value={content}>
        <Navbar setContent={setContent} />
        <div className="pt-14">
          <MainBody />
        </div>
      </ContentContext>
    </div>
  );
}

export default App;
