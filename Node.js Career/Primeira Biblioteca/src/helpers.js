function filter(text) {
    return Object.keys(text).filter((key) => text[key] > 1);
}

function fileCleaned(listWords) {
    let finalText = '';
    listWords.forEach((paragraph, index) => {
        const duplicates = filter(paragraph).join(', ');
        finalText += `Parágrafo ${index + 1} - Palavras duplicadas: ${duplicates}\n`;
    });
    return finalText;
}
export {
    fileCleaned,
};