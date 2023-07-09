const fs = require("fs");
const path = require("path");

class WordModel {
  constructor() {
    this.filePath = path.join(__dirname, "TestData.json");
    this.data = this.loadData();
  }

  loadData() {
    const jsonData = fs.readFileSync(this.filePath, "utf8");
    return JSON.parse(jsonData);
  }

  getWordsList() {
    return this.data.wordList;
  }

  getScoresList() {
    return this.data.scoresList;
  }
}

module.exports = WordModel;
