console.log('Hello, World! This is my first Node.js library.');

const fs = require('fs');

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    console.log('Conteúdo do arquivo:', data);
});


