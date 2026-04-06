import chalk from "chalk";

function treatError(error) {
  if (error.code === "ENOENT") {
    throw new Error(chalk.red("Arquivo não encontrado. Verifique o caminho e tente novamente."));
  } else {
    console.error(chalk.red("Erro ao ler o arquivo:"), chalk.red(error.message));
  }
}

export {
  treatError,
};