# Curso de Git - Modelo de Anotações

> Use este arquivo para registrar comandos, conceitos e dúvidas durante o curso.

## Informações do curso

- **Curso: GIT e Github: Compatilhando e colaborando em projetos** 
- **Plataforma:Alura** 

## Objetivo

- Comandos Github


## Comandos utilizados

```bash
# Exemplo:
git init
git status
git add .
git commit -m "mensagem do commit"
git branch
git log --oneline
```

## Explicação dos comandos

### `git init`
- Comando criar um novo repositório Gir na pasta atual. Na prática, cria uma pasta oculta chamada .git, onde o Git começa a guardar todo o histórico, configurações e controle de versões daquele projeto.

### `git status`
- Mostra o estado atual do repositório. Ele informa quais arquivos foram alterados, quais estão prontos para commit e quais ainda não foram adicionados ao staging.

### `git add`
- Coloca arquivos na área de preparação do Git, também chamada de staging area. 

### `git commit`
- Salva no histórico as alterações que já foram preparadas com git add. Ele cria um ponto de restauração no projeto com uma mensagem explicando o que foi feito.

### `git branch`
- Mosta as branchs existentes. 

### `git checkout` / `git switch`
- Servem para trocar de branch. Switch usado principalmente para mudar de branch, porém pode criar também utilizando o -c. Checkout é mais antigo e pode ser usado para voltar arquivos a um estado anterior, além de mudar de branch.

### `git merge`
- Une uma branch a outra. Preserva o histórico criando um commit de merge.

## `git rebase`
- Une uma branch a outra, porém reescreve o histórico para deixá-lo linear.

### `git pull`
- Busca alterações do repositório remoto e já aplica elas na sua branch atual. Na prática, ele faz o trabalho de baixar e integrar as mudanças de uma vez. 

### `git push`
- Envia seus commit locais para o repositório remoto. É o comando que publica o que você já salvou com git commit.

## `git remote`
- Serve para gerenciar as conexões com repositórios remotos. Ele permite ver quais repositórios remotos estão lgiados ao seu projeto e também adicionar, remover ou renomear esses links.

## `git stash`
- Salva alterações temporariamente. Serve para trocar de branch rapidamente sem precisar commitar.

## `git log`
- Visualiza o histórico.

## `git reset`
- Desfaz commits. --soft mantém as alterações enquanto --hard remove as alterações.

## `git revert`
- Cria um commit que desfaz outro, preservando o histórico.

## `git fetch`
- Baixa alterações sem aplicá-las.

## `git cherry-pick`
- Copia um commit específico (Muito usado quando precisa levar uma correção para outra branch).

## `git tag`
- Criação de versões. 

## `git diff`
- Comparar alterações.

## `git remote`
- Visualiza repositórios remotos.

## `git blame`
- Descobrir quem alterou uma linha. Muito usado em sistemas legados.

## `git reflog`
- Mostra tudo que aconteceu localmente. Serve para recuperar commits perdidos após reset. 

## Conceitos importantes

- **Repositório local:** 
- **Repositório remoto:** 
- **Commit:** 
- **Branch:** 
- **Merge:** 
- **Pull request:** 
- **Conflito:** 
