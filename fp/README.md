# TecBoard — Painel de Eventos Tech

Projeto de estudos desenvolvido durante a formação **React** na [Alura](https://www.alura.com.br).

TecBoard é um painel de gerenciamento de eventos de tecnologia, onde o usuário pode cadastrar e visualizar eventos por tema (Front-end, Back-end, DevOps, IA, Data Science, Cloud).

---

## Tecnologias utilizadas

- React 19
- Vite
- CSS Modules
- ESLint

---

## Tópicos estudados

### Estado com `useState`
- Gerenciamento de lista de eventos com estado local
- Atualização imutável do array de estado com spread operator (`[...estado, novoEvento]`)
- Passagem de funções como props para componentes filhos (`onSubmit`)

### Componentes e Props
- Criação de componentes funcionais: `EventCard`, `EventForm`, `Banner`, `Theme`
- Passagem de dados via props
- Renderização de listas dinâmicas com `.map()`

### Formulários controlados
- Captura de dados do formulário com campos de título, data, capa e tema
- Seleção de tema a partir de lista pré-definida

### Organização de componentes
- Estrutura de pastas por componente
- Separação de estilos com arquivos CSS por componente

---

## Temas de eventos disponíveis

- Front-end
- Back-end
- DevOps
- IA
- Data Science
- Cloud

---

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## Próximos passos

- [ ] Persistência de dados com `localStorage`
- [ ] Filtro de eventos por tema
- [ ] Edição e remoção de eventos
- [ ] Responsividade mobile

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
