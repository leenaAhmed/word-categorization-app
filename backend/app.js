const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Example route for /words endpoint
app.get("/words", (req, res) => {
  // Read the JSON file
  const filePath = path.join(__dirname, "data", "TestData.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);

  // Get the wordsList from the TestData
  const wordsList = data.wordList;

  // Shuffle the array
  const shuffledWords = shuffleArray(wordsList);

  // Select at least one adjective, adverb, noun, and verb
  const selectedWords = [];
  let hasAdjective = false;
  let hasAdverb = false;
  let hasNoun = false;
  let hasVerb = false;

  // Iterate through the shuffledWords until we have at least one of each part of speech
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

    // Break the loop if we have at least one of each part of speech
    if (hasAdjective && hasAdverb && hasNoun && hasVerb) {
      break;
    }
  }

  res.json(selectedWords);
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Example route for /rank endpoint

app.post("/words", (req, res) => {
  console.log(req.body);
  res.json({ success: true });
});
app.post("/rank", (req, res) => {
  const { score } = req.body;

  if (score === undefined) {
    return res
      .status(400)
      .json({ error: "Score is missing in the request body." });
  }
  console.log(req.body);

  //   Read the JSON file
  const filePath = path.join(__dirname, "data", "TestData.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);

  // Get the scoresList from the TestData
  const scoresList = data.scoresList;

  // Calculate the rank percentage
  const belowScores = scoresList.filter((s) => s < score);
  const rankPercentage = (belowScores.length / scoresList.length) * 100;

  // Round the rank percentage to the nearest hundredth
  const roundedRankPercentage = Math.round(rankPercentage * 100) / 100;

  res.json({ rankPercentage: roundedRankPercentage });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
