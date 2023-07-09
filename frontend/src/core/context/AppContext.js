import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [finalScore, setFinalScore] = useState(null);
  const [tryAgain, setTryAgain] = useState(false);

  const handleFinalScore = (score) => {
    setFinalScore(score);
  };

  const handleTryAgain = () => {
    setFinalScore(null);
    setTryAgain(false);
  };

  return (
    <AppContext.Provider
      value={{ finalScore, tryAgain, handleFinalScore, handleTryAgain }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
