# Primeira Biblioteca — Node.js

> Projeto de estudos da formação **Back End com Node.js** na [Alura](https://www.alura.com.br).

---

## 🎯 Objetivo do Estudo Atual

Retomada dos estudos de **Back End com Node.js** na plataforma Alura, com foco em consolidar os fundamentos da plataforma antes de avançar para tópicos mais avançados como APIs REST, bancos de dados e autenticação.

---

## 📚 O que foi estudado neste projeto

### Módulo: Primeira Biblioteca

Este é o primeiro projeto prático da formação. Os tópicos abordados foram:

### Node.js — Fundamentos

- **Hello World com Node.js**
  - Execução de scripts `.js` diretamente pelo Node fora do navegador.
  - Uso do `console.log` para saída no terminal.

- **Módulo `fs` (File System)**
  - Importação de módulos nativos do Node.js com `require`.
  - Leitura assíncrona de arquivos com `fs.readFile`.
  - Tratamento básico de erros com callback `(err, data)`.
  - Leitura de arquivos em codificação `utf8`.

- **`process.argv`**
  - Captura de argumentos passados via linha de comando.
  - Uso do argumento `process.argv[2]` como caminho dinâmico para o arquivo a ser lido.

### Exemplo de uso

```bash
node src/index.js arquivos/texto-aprendizado.txt
```

### Arquivos de texto utilizados nos testes

| Arquivo                   | Conteúdo                                               |
|---------------------------|--------------------------------------------------------|
| `texto-aprendizado.txt`   | Artigo sobre aprendizado contínuo (Lifelong Learning)  |
| `texto-kanban.txt`        | Conteúdo relacionado à metodologia Kanban              |
| `texto-web.txt`           | Conteúdo sobre tecnologias e desenvolvimento web       |

---

## 🗂️ Estrutura do Projeto

```
Primeira Biblioteca/
├── arquivos/
│   ├── texto-aprendizado.txt
│   ├── texto-kanban.txt
│   └── texto-web.txt
└── src/
    └── index.js
```

---

## ▶️ Como executar

Certifique-se de ter o [Node.js](https://nodejs.org) instalado.

```bash
# Na raiz do projeto
node src/index.js arquivos/texto-aprendizado.txt
```

Substitua o nome do arquivo pelo de sua preferência entre os disponíveis em `arquivos/`.

---

## 🛣️ Próximos passos na formação

- [ ] Manipulação avançada de arquivos com `fs`
- [ ] Criação de módulos próprios
- [ ] Introdução ao NPM e gerenciamento de dependências
- [ ] Construção de uma API REST com Express
- [ ] Conexão com banco de dados

---

## 🔗 Referências

- [Alura — Formação Node.js](https://www.alura.com.br/formacao-node-js)
- [Documentação oficial do Node.js](https://nodejs.org/docs/latest/api/)
- [Módulo fs — Node.js Docs](https://nodejs.org/api/fs.html)
