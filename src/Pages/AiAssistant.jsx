import React from "react";
import AiSidebar from "../components/AiSidebar/AiSidebar.jsx";
import AiMain from "../components/AiMain/AiMain.jsx";
import "./AiAssistant.css";

function AiAssistant() {
  return (
    <div className="ai-root">
      <AiSidebar />
      <AiMain />
    </div>
  );
}

export default AiAssistant;
