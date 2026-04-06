# Poupap — Controle Financeiro

Projeto de estudos desenvolvido durante a formação **React** na [Alura](https://www.alura.com.br).

Poupap é uma aplicação de controle financeiro pessoal que exibe contas e transações, com navegação entre a página principal e uma página de configurações.

---

## Tecnologias utilizadas

- React 19
- React Router DOM v7
- Tailwind CSS v4
- Vite
- ESLint

---

## Tópicos estudados

### Roteamento com React Router DOM
- Configuração de rotas com `BrowserRouter`, `Routes` e `Route`
- Navegação entre `PrincipalPage` (/) e `ConfigPage` (/config)

### Tailwind CSS
- Estilização utility-first com classes do Tailwind
- Integração do Tailwind v4 com Vite via plugin `@tailwindcss/vite`
- Componentes estilizados sem necessidade de CSS externo

### Dados e estrutura
- Leitura de dados mockados em JSON (`accounts.json`, `transactions.json`)
- Exibição de contas e transações financeiras

### Componentes e páginas
- `PrincipalPage`: visão geral das contas e transações
- `ConfigPage`: configurações do usuário
- Componentes reutilizáveis organizados em `/components`

---

## Estrutura de páginas

| Página         | Rota      | Descrição                           |
|----------------|-----------|-------------------------------------|
| PrincipalPage  | `/`       | Visão geral de contas e transações  |
| ConfigPage     | `/config` | Configurações do aplicativo         |

---

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## Próximos passos

- [ ] Gráficos de gastos por categoria
- [ ] Adição manual de transações
- [ ] Autenticação de usuário
- [ ] Integração com API financeira

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
