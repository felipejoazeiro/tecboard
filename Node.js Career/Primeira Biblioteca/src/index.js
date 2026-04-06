console.log("Hello, World! This is my first Node.js library.");

const fs = require("fs");

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  const lines = lineBreak(data);
  console.log("Linhas do arquivo:", lines);
});

function lineBreak(text) {
  const lines = text.toLowerCase().split("\n");
  const count = lines
    .filter((line) => line.trim() !== "")
    .flatMap((line) => {
      return checkDoubleWords(line);
    });
  console.log("Contagem de palavras:", count);
  return lines;
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
