import {Container } from "../components/PrincipalPage/Container";
import { Main } from "../components/PrincipalPage/Main";
import { Aside } from "../components/PrincipalPage/Aside";
import { SearchInput } from "../components/PrincipalPage/SearchInput";
import { Typography } from "../components/PrincipalPage/Typography";
import { DailyBudget } from "../components/PrincipalPage/DailyBudget";
import Card from "../components/PrincipalPage/Card";
import { SavingsStatus } from "../components/PrincipalPage/SavingsStatus";
import { Accounts } from "../components/PrincipalPage/Accounts";
import { Transactions } from "../components/PrincipalPage/Transactions";
import styles from "./principal.module.css";

export const PrincipalPage = () => {
  return (
    <div className={styles.page}>
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
                <Card.Header>Movimentação financeira</Card.Header>
                <Card.Body>
                  <Transactions />
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Contas</Card.Header>
                <Card.Body>
                  <Accounts />
                </Card.Body>
              </Card>
            </section>
          </div>
        </Main>
      </Container>
    </div>
  );
};
