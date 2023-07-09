import styles from "../core/assets/styles/PracticeScreen.module.css";

const WordDisplay = ({ word }) => {
  return <div className={styles.wordDisplay}>Word: {word}</div>;
};

export default WordDisplay;
