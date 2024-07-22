import React from "react";
import AiAssistant from "./Pages/AiAssistant";
import AiContextProvider from "./context/AiAssistantContext";

const App = () => {
  return (
    <>
      <AiContextProvider>
        <AiAssistant />
      </AiContextProvider>
    </>
  );
};

export default App;
