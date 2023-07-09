import { useState, useEffect } from "react";
import { fetchWords } from "../api/wordsApi";
import { calculateFinalScore } from "../utils/scoreUtils";

const usePracticeScreen = (onFinalScore) => {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState([]);

  useEffect(() => {
    fetchWordsData();
  }, []);

  async function fetchWordsData() {
    try {
      const wordsData = await fetchWords();
      setWords(wordsData);
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const currentWord = words[currentWordIndex];
    const isCorrect = option === currentWord.pos;
    const updatedCorrectAnswers = [...correctAnswers];
    updatedCorrectAnswers[currentWordIndex] = isCorrect;
    setCorrectAnswers(updatedCorrectAnswers);
    if (isCorrect) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect!");
    }
    const nextWordIndex = currentWordIndex + 1;
    const isLastWord = nextWordIndex === words.length;
    if (isLastWord) {
      const finalScore = calculateFinalScore(correctAnswers, words.length);
      onFinalScore(finalScore);
    } else {
      setCurrentWordIndex(nextWordIndex);
    }
  };

  const progress = (currentWordIndex / words.length) * 100;

  return {
    words,
    currentWordIndex,
    selectedOption,
    feedback,
    progress,
    handleOptionClick
  };
};

export default usePracticeScreen;
