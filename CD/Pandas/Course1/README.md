# Pandas — Curso 1: Imobiliária

Projeto de estudos do curso de **Pandas** na [Alura](https://www.alura.com.br), parte da formação de Ciência de Dados.

O projeto analisa dados de aluguel de apartamentos usando Pandas.

---

## Tecnologias utilizadas

- Python 3
- Pandas
- Jupyter Notebook

---

## Tópicos estudados

### Introdução ao Pandas
- Criação de `Series` e `DataFrame`
- Leitura de arquivos CSV com `pd.read_csv()`
- Inspeção do DataFrame: `.head()`, `.tail()`, `.info()`, `.describe()`

### Seleção e filtragem de dados
- Seleção de colunas e linhas com `[]`, `.loc[]` e `.iloc[]`
- Filtragem com condições booleanas
- Filtragem com múltiplas condições (`&`, `|`)

### Limpeza de dados
- Identificação de valores nulos com `.isnull()` e `.notnull()`
- Remoção de nulos com `.dropna()`
- Preenchimento de nulos com `.fillna()`
- Remoção de duplicatas com `.drop_duplicates()`

### Transformações
- Criação de novas colunas
- Aplicação de funções com `.apply()` e `.map()`
- Renomeação de colunas com `.rename()`

### Análise estatística
- Agrupamentos com `.groupby()`
- Agregações: `.sum()`, `.mean()`, `.count()`, `.max()`, `.min()`
- Ordenação com `.sort_values()`

---

## Datasets utilizados

| Arquivo                        | Descrição                       |
|--------------------------------|---------------------------------|
| `aluguel_apartamentos.csv`     | Preços e características de aluguel de apartamentos |
| `dados_completos_dev.csv`      | Dataset complementar de desenvolvedores |

---

## Como executar

```bash
jupyter notebook projeto_imobiliaria.ipynb
```
