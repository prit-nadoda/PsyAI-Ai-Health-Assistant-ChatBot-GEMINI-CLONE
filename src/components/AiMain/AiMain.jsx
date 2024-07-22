import React, { useContext } from "react";
import "./AiMain.css";
import { assets } from "../../assets/assets";
import { AiContext } from "../../context/AiAssistantContext";

const AiMain = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(AiContext);

  const blue = {
    color: "#4b90ff",
    fontSize: "28px",
  };
  const Yellow = {
    color: "#ffb003",
    fontSize: "28px",
  };
  return (
    <div className="ai-main">
      <div className="nav">
        <p>
          <span style={blue}>Psy</span>
          <span style={Yellow}>Ai </span>| Virtual Health Assistant
        </p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Prit.</span>
              </p>
              <p>How can I assist you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  I can provide assistance to route yourself to the mental
                  well-being.
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Can give you ideas you how good and balanced mental health.
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  You can chat with me to get a fresh mood to cope with anxiety.
                </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Ask me about managing and healing any mental condition.</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.psyAi_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a promt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            PsyAi Assistant may display inaccurate info, including any topic so
            double-check its responses. It is an AI model and may not be
            precise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiMain;
