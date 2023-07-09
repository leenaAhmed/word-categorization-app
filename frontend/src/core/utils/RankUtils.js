import { fetchRankData } from "./../api/RankAPI";

export const getRankLabel = (percentage) => {
  if (percentage >= 90) {
    return "Excellent";
  } else if (percentage >= 70) {
    return "Good";
  } else if (percentage >= 50) {
    return "Average";
  } else {
    return "Below Average";
  }
};

export const calculateRank = async (finalScore) => {
  try {
    const data = await fetchRankData(finalScore);
    return {
      rankPercentage: data.rankPercentage,
      rank: getRankLabel(data.rankPercentage)
    };
  } catch (error) {
    console.error("Error calculating rank:", error);
    return null;
  }
};
