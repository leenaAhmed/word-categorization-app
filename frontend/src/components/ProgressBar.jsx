import styles from "../core/assets/styles/ProgressBar.module.css";

const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
