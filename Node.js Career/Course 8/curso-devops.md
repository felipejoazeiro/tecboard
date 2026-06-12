# DevOps: construindo e gerindo containers com o Docker

## Objetivo do curso

Aprender os fundamentos de DevOps com foco em Docker, entendendo como empacotar aplicações, criar imagens, subir containers e organizar um fluxo básico de desenvolvimento e entrega.

## Pré-requisitos

- Noções básicas de linha de comando.
- Conhecimento inicial de Node.js e npm.
- Docker Desktop instalado.
- Editor de código configurado.

## Estrutura de estudo

### 1. Conceitos iniciais

- O que é DevOps.
- Diferença entre imagem e container.
- Por que usar Docker no desenvolvimento.
- Ciclo de vida de um container.

### 2. Primeiros comandos Docker

- `docker --version`
- `docker ps`
- `docker images`
- `docker run`
- `docker stop`
- `docker rm`

### 3. Trabalhando com imagens

- Criar um `Dockerfile`.
- Entender `FROM`, `WORKDIR`, `COPY`, `RUN`, `EXPOSE` e `CMD`.
- Build de imagem com `docker build`.
- Executar a aplicação com `docker run`.

### 4. Organização do projeto

- Separar código da aplicação.
- Criar arquivo `Dockerfile`.
- Criar `docker-compose.yml` quando houver mais de um serviço.
- Documentar comandos essenciais no `README`.

### 5. Docker Compose

- Subir múltiplos containers.
- Configurar portas e volumes.
- Definir variáveis de ambiente.
- Orquestrar serviços locais.

### 6. Boas práticas

- Usar imagens leves.
- Evitar copiar arquivos desnecessários.
- Trabalhar com `.dockerignore`.
- Rodar containers com o mínimo de permissões possível.

## Checklist prático

- [ X ] Instalar o Docker Desktop.
- [ X ] Testar se o Docker está funcionando.
- [ X ]  Criar um primeiro `Dockerfile`.
- [ X ] Gerar uma imagem da aplicação.
- [ X ] Rodar a aplicação em um container.
- [ X ] Criar um `docker-compose.yml`.
- [ X ] Adicionar variáveis de ambiente.
- [ X ] Documentar tudo no repositório.

## Comandos úteis

- `docker build -t minha-app .` - cria a imagem da aplicação a partir do `Dockerfile` da pasta atual.
- `docker run -p 3000:3000 minha-app` - inicia um container a partir da imagem e expõe a porta 3000.
- `docker compose up -d` - sobe os serviços definidos no `docker-compose.yml` em segundo plano.
- `docker compose down` - para e remove os containers criados pelo Docker Compose.

## Comandos utilizados no curso

- `docker run hello-world` - verifica se o Docker está instalado corretamente e consegue executar containers.
- `sudo usermod -aG docker $USER` - adiciona o usuário atual ao grupo `docker` no Linux para permitir o uso do Docker sem precisar digitar `sudo` em cada comando.
- `docker pull ubuntu` - baixa a imagem oficial do Ubuntu no Docker Hub para a máquina.
- `docker run ubuntu` - cria e executa um container usando a imagem `ubuntu` já baixada.
- `docker ps` - mostra os containers que estão em execução no momento.
- `docker ps -a` - mostra todos os containers, incluindo os que já pararam.
- `docker stop CONTAINERNAME` - interrompe a execução de um container ativo.
- `docker start CONTAINERNAME` - inicia novamente um container que já foi criado e parado.
- `docker exec -it CONTAINERID bash` - executa um comando dentro de um container em execução de forma interativa; normalmente é usado para abrir um terminal no container.
- `ls -a` - lista todos os arquivos e pastas do diretório atual, inclusive os ocultos.
- `touch FILENAME` - cria um arquivo vazio com o nome informado ou atualiza o horário de modificação de um arquivo existente.
- `docker stop -t=0 CONTAINERID` - para um container imediatamente, sem esperar o tempo padrão de encerramento.
- `docker pause CONTAINERID` - pausa o container.
- `docker run -d -P docker/exemple-project` - inicia em segundo plano e publica portas automaticamente.
- `docker run -d -p 3000:80 docker/exemple-project` - inicia em segundo plano e mapeia a porta 3000 para 80.
- `docker stop $(docker container ls -q)` - para todos os containers em execução.
- `docker image ls` - mostra as imagens locais.
- `docker pull nginx` - baixa a imagem `nginx`.
- `docker ` - comando incompleto.