import styles from "../core/assets/styles/ButtonContainer.module.css";

const Options = ({ options, onOptionClick }) => {
  return (
    <div className={styles.buttonContainer}>
      {options.map((option) => (
        <button
          className={styles.button}
          key={option}
          onClick={() => onOptionClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
