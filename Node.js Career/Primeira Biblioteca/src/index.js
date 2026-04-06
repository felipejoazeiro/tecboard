function countWords(text) {
  const lines = extractParagraphs(text);
  const count = lines
    .filter((line) => line.trim() !== "")
    .flatMap((line) => {
      return checkDoubleWords(line);
    });
  return count;
}

function extractParagraphs(text) {
  return text.toLowerCase().split(/\r?\n/);
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

export {
  countWords,
};