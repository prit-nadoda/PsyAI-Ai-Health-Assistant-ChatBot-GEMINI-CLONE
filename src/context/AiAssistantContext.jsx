import { createContext, useState } from "react";
import runChat from "../config/AiAssistantScript";

export const AiContext = createContext();

const AiContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompts, setPreviousPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };
  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPreviousPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }

    const responseArray = response.split("**");
    let newResponse = ""; 
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "</br><b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    let FinalResponse = newResponse2.split(" ");
    for (let i = 0; i < FinalResponse.length; i++) {
      const nextWord = FinalResponse[i];
      delayPara(i, nextWord + " ");
    }
    setLoading(false);
    setInput("");
  };
  const AiContextValue = {
    previousPrompts,
    setPreviousPrompts,
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    loading,
    resultData,
    showResult,
    setShowResult,
    onSent,
    newChat,
  };

  return (
    <AiContext.Provider value={AiContextValue}>
      {props.children}
    </AiContext.Provider>
  );
};

export default AiContextProvider;
