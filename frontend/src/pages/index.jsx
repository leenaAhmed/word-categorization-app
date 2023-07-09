import React from "react";
import { useContext } from "react";
import PracticeScreen from "./PracticeScreen";
import RankScreen from "./RankScreen";
import { AppContext } from "../core/context/AppContext";

export default function PracticeHomeScreen() {
  const { finalScore, tryAgain, handleFinalScore, handleTryAgain } =
    useContext(AppContext);
  return (
    <div>
      {finalScore === null && !tryAgain ? (
        <PracticeScreen onFinalScore={handleFinalScore} />
      ) : (
        <RankScreen finalScore={finalScore} onTryAgain={handleTryAgain} />
      )}
    </div>
  );
}
