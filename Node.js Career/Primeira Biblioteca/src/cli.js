import fs from "fs";
import { treatError } from "./errors/erroFunctions.js";
import { countWords } from "./index.js";
import { fileCleaned } from "./helpers.js";

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, "utf8", (err, data) => {
  try {
    if (err) throw err;
    const result = countWords(data);
    const cleanedResult = fileCleaned(result);
    createAndSaveFile(cleanedResult, "./");
  } catch (error) {
    treatError(error);
  }
});

function createAndSaveFile(content, localPath) {
  const newFile = `${localPath}/result.txt`;
  fs.promises
    .writeFile(newFile, content, "utf8")
    .then(() => console.log("Arquivo criado com sucesso:", newFile))
    .catch((err) => { throw new Error("Erro ao criar o arquivo:", err); });
}
