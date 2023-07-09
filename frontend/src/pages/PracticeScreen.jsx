import React from "react";
import ProgressBar from "../components/ProgressBar";
import WordDisplay from "../components/WordDisplay";
import Options from "../components/Options";
import styles from "../core/assets/styles/PracticeScreen.module.css";
import usePracticeScreen from "../core/custom/usePracticeScreen";

const PracticeScreen = ({ onFinalScore }) => {
  const {
    words,
    currentWordIndex,
    selectedOption,
    feedback,
    progress,
    handleOptionClick
  } = usePracticeScreen(onFinalScore);

  return (
    <div className={styles.practiceScreen}>
      <h2>Improve Your Vocabulary Skills</h2>
      <p className={styles.description}>
        Expand your word knowledge and enhance your language proficiency through
        practice.
      </p>

      <ProgressBar progress={progress} />
      <WordDisplay word={words[currentWordIndex]?.word} />
      <Options
        options={["noun", "adverb", "adjective", "verb"]}
        selectedOption={selectedOption}
        onOptionClick={handleOptionClick}
      />
      <div className={styles.feedback}>{feedback}</div>
    </div>
  );
};

export default PracticeScreen;
