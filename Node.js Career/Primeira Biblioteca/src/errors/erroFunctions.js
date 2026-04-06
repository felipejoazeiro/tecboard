function treatError(error) {
  if (error.code === "ENOENT") {
    throw new Error("Arquivo não encontrado. Verifique o caminho e tente novamente.");
  } else {
    console.error("Erro ao ler o arquivo:", error.message);
  }
}

export {
  treatError,
};