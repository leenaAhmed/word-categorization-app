const WordModel = require("../models/WordModel");
const { shuffleArray } = require("../utils/utils");

class WordController {
  constructor() {
    this.wordModel = new WordModel();
  }

  getWords(req, res) {
    const wordsList = this.wordModel.getWordsList();
    const shuffledWords = shuffleArray(wordsList);
    const selectedWords = [];
    let hasAdjective = false;
    let hasAdverb = false;
    let hasNoun = false;
    let hasVerb = false;
    for (const word of shuffledWords) {
      selectedWords.push(word);

      if (word.pos === "adjective" && !hasAdjective) {
        hasAdjective = true;
      } else if (word.pos === "adverb" && !hasAdverb) {
        hasAdverb = true;
      } else if (word.pos === "noun" && !hasNoun) {
        hasNoun = true;
      } else if (word.pos === "verb" && !hasVerb) {
        hasVerb = true;
      }
      if (hasAdjective && hasAdverb && hasNoun && hasVerb) {
        break;
      }
    }
    res.json(selectedWords);
  }

  rankScore(req, res) {
    const { score } = req.body;

    if (score === undefined) {
      return res
        .status(400)
        .json({ error: "Score is missing in the request body." });
    }

    const scoresList = this.wordModel.getScoresList();

    // Calculate the rank percentage
    const belowScores = scoresList.filter((s) => s < score);
    const rankPercentage = (belowScores.length / scoresList.length) * 100;

    // Round the rank percentage to the nearest hundredth
    const roundedRankPercentage = Math.round(rankPercentage * 100) / 100;
    res.json({ rankPercentage: roundedRankPercentage });
  }
}

module.exports = WordController;
