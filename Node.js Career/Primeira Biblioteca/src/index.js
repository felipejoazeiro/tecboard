const { count } = require("console");
const fs = require("fs");
const { treatError } = require("./errors/erroFunctions");

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, "utf8", (err, data) => {
  try {
    if (err) throw err;
    countWords(data);
  } catch (error) {
    treatError(error);
  }
});

function countWords(text) {
  const lines = extractParagraphs(text);
  const count = lines
    .filter((line) => line.trim() !== "")
    .flatMap((line) => {
      return checkDoubleWords(line);
    });
  console.log("Contagem de palavras:", count);
  return lines;
}

function extractParagraphs(text) {
  return text.toLowerCase().split("\n");
}

function checkDoubleWords(line) {
  const words = line.split(" ");
  const wordCount = {};
  words.forEach((word) => {
    if (word.length >= 3) {
      const cleanWord = cleanWords(word);
      wordCount[cleanWord] = (wordCount[cleanWord] || 0) + 1;
    }
  });
  return wordCount;
}

function cleanWords(text) {
  return text.replace(/[^a-zA-Z0-9\s]/g, "");
}
