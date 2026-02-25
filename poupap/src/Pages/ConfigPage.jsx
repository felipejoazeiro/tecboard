import { Aside } from "../components/ConfigPage/Asides";
import { Container } from "../components/ConfigPage/Container";
import { Main } from "../components/ConfigPage/Main";
import { SearchInput } from "../components/ConfigPage/SearchInput";
import { Typography } from "../components/ConfigPage/Typography";
import Card from "../components/ConfigPage/Card";
import { FormConfig } from "../components/ConfigPage/FormConfig";

export const ConfigPage = () => {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>
          <SearchInput />
          <div>
            <Typography variant="h1">Configurações</Typography>
            <Typography variant="body">
              Aqui você pode configurar as suas preferências.
            </Typography>
          </div>
          <section>
            <Card>
                <Card.Header>Configurações de conta</Card.Header>
                <Card.Body>
                  <FormConfig />
                </Card.Body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  );
};
