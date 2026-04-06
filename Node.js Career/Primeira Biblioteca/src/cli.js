import fs from "fs";
import path from "path";
import chalk from "chalk";
import { treatError } from "./errors/erroFunctions.js";
import { countWords } from "./index.js";
import { fileCleaned } from "./helpers.js";
import { Command } from "commander";

const program = new Command();
program
  .version("1.0.0")
  .description("Contador de palavras duplicadas em um arquivo de texto")
  .option("-f, --file <path>", "Caminho do arquivo de texto")
  .option("-d, --destiny <path>", "Caminho de destino para salvar o resultado")
  .action((options) => {
    const { file, destiny } = options;
    if (!file) {
      console.error(
        chalk.red("Por favor, forneça o caminho do arquivo usando a opção -f ou --file."),
      );
      program.help();
      return;
    }
    if (!destiny) {
      console.error(
        chalk.yellow("Por favor, forneça o caminho de destino usando a opção -d ou --destiny."),
      );
      program.help();
      return;
    }

    const dataPath = path.resolve(file);
    const destinyPath = path.resolve(destiny);

    try {
      processFile(dataPath, destinyPath);
    } catch (error) {
      console.error(chalk.red("Erro ao processar o arquivo:"), chalk.red(error.message));
    }
  });

program.parse();

function processFile(link, destiny) {
  fs.readFile(link, "utf8", (err, data) => {
    try {
      if (err) throw err;
      const result = countWords(data);
      const cleanedResult = fileCleaned(result);
      createAndSaveFile(cleanedResult, destiny);
    } catch (error) {
      treatError(error);
    }
  });
}

function createAndSaveFile(content, localPath) {
  const newFile = `${localPath}/result.txt`;
  fs.promises
    .writeFile(newFile, content, "utf8")
    .then(() => console.log(chalk.green("Arquivo criado com sucesso:"), chalk.cyan(newFile)))
    .catch((err) => {
      throw new Error("Erro ao criar o arquivo:", err);
    });
}
