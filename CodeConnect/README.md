# CodeConnect

Projeto de estudos desenvolvido durante a formação **React** na [Alura](https://www.alura.com.br).

CodeConnect é uma rede social voltada para desenvolvedores, onde é possível ler posts de blog, interagir com comentários e realizar autenticação.

---

## Tecnologias utilizadas

- React 19
- React Router v7
- Vite
- CSS Modules
- ESLint

---

## Tópicos estudados

### Roteamento com React Router
- Configuração do `BrowserRouter` e `Routes`
- Uso de `<Route>` para mapear páginas a caminhos (`/auth/login`, `/auth/register`, `/feed`, `/blogpost`)
- Navegação entre páginas com componente `<Link>`

### Componentização
- Criação de componentes reutilizáveis: `Button`, `Input`, `Label`, `Typography`, `Avatar`, `CardPost`, `Comment`, `Spinner`, etc.
- Separação de responsabilidades: componentes de layout (`Aside`, `AuthFormContainer`) separados dos componentes de conteúdo

### Autenticação
- Estrutura de páginas de Login e Registro
- Hook customizado `useAuth` para centralizar lógica de autenticação
- Layouts específicos: `App` (autenticado) e `Auth` (não autenticado)

### Providers e Context API
- Gerenciamento de estado global via Providers
- Separação da lógica de negócio da camada de apresentação

### Formulários
- Componentes controlados: `Input`, `Checkbox`, `Fieldset`, `Form`
- Estrutura de formulários acessíveis com `Label`

---

## Estrutura de páginas

| Página    | Rota              | Descrição                       |
|-----------|------------------|---------------------------------|
| Login     | `/auth/login`    | Autenticação do usuário         |
| Register  | `/auth/register` | Cadastro de novo usuário        |
| Feed      | `/feed`          | Lista de posts do blog          |
| BlogPost  | `/blogpost`      | Leitura de um post individual   |

---

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## Próximos passos

- [ ] Integração com API real
- [ ] Paginação no Feed
- [ ] Upload de avatar
- [ ] Autenticação com JWT
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
