import { Container } from "./components/Container";
import { Aside } from "./components/Aside";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";
import { DailyBudget } from "./components/DailyBudget";
import Card from "./components/Card";
import { SavingsStatus } from "./components/SavingsStatus";

import styles from "./app.module.css";
import { Transactions } from "./components/Transactions";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <div className={styles.container}>
          <SearchInput />
          <div>
            <Typography variant="h1">Olá, seja bem-vindo(a)!</Typography>
            <Typography variant="body">
              Veja como estão as suas finanças hoje.
            </Typography>
          </div>
          <section className={styles.grid}>
            <Card>
              <Card.Header>Orçamento diário disponível:</Card.Header>
              <Card.Body>
                <DailyBudget value={1000} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body>
                <SavingsStatus percent={75} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Movimentação financeira
              </Card.Header>
              <Card.Body>
                <Transactions />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Typography variant="h2">Saldo</Typography>
              </Card.Header>
              <Card.Body>
                <Typography variant="h3">R$ 1.000,00</Typography>
              </Card.Body>
            </Card>
          </section>
        </div>
      </Main>
    </Container>
  );
}

export default App;
