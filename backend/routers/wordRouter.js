const express = require("express");
const WordController = require("../controllers/WordController");

const router = express.Router();
const wordController = new WordController();

router.get("/", wordController.getWords.bind(wordController));
router.post("/rank", wordController.rankScore.bind(wordController));

module.exports = router;
