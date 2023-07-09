export function calculateFinalScore(correctAnswers, totalWords) {
  const correctCount = correctAnswers.filter(Boolean).length;
  const score = (correctCount / totalWords) * 100;
  return score.toFixed(2);
}
