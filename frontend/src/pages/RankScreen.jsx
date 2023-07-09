import React, { useState, useEffect } from "react";
import { calculateRank } from "../core/utils/RankUtils";
import styles from "../core/assets/styles/RankScreen.module.css";
import button from "../core/assets/styles/ButtonContainer.module.css";

const RankScreen = ({ finalScore, onTryAgain }) => {
  const [rankPercentage, setRankPercentage] = useState(null);
  const [rank, setRank] = useState(null);

  useEffect(() => {
    handleRankCalculation();
  }, []);

  const handleRankCalculation = async () => {
    try {
      const rankData = await calculateRank(finalScore);
      setRankPercentage(rankData.rankPercentage);
      setRank(rankData.rank);
    } catch (error) {
      console.error("Error calculating rank:", error);
    }
  };

  const handleTryAgain = () => {
    setRank();
    onTryAgain();
  };

  const renderRankDetails = () => {
    if (rankPercentage !== null) {
      return (
        <div className={styles.rankDetails}>
          Your Rank: {rank} ({rankPercentage}%)
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Discover Your Ranking</h2>
      <div className={styles.score}>Your Score: {finalScore}</div>
      {renderRankDetails()}
      <div className={button.buttonContainer}>
        <button className={button.button} onClick={handleTryAgain}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default RankScreen;
