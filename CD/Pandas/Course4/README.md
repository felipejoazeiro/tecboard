# Pandas — Curso 4: Projeto de Hospedagem

Projeto de estudos do curso de **Pandas** na [Alura](https://www.alura.com.br), com foco em análise e manipulação de dados de um sistema de hospedagem/aluguel de imóveis.

---

## Tecnologias utilizadas

- Python 3
- Pandas
- Jupyter Notebook

---

## Tópicos estudados

### Análise de dados de hospedagem
- Leitura de dados JSON com `pd.read_json()` e `json_normalize()`
- Exploração de datasets de hospedagem (`dados_hospedagem.json`)
- Análise de disponibilidade de imóveis (`moveis_disponiveis.json`)

### Transformações avançadas
- Merge e join de DataFrames
- Pivot tables com `pd.pivot_table()`
- Agrupamentos e agregações complexas

### Filtros e consultas
- Consultas com `.query()`
- Filtros combinados para análise de disponibilidade
- Ranqueamento com `.rank()` e `.nlargest()` / `.nsmallest()`

### Exportação de resultados
- Geração de relatórios em CSV e Excel
- Preparação de dados para visualização

---

## Datasets utilizados

| Arquivo                   | Conteúdo                               |
|---------------------------|----------------------------------------|
| `dados_hospedagem.json`   | Dados de reservas e hospedagem         |
| `moveis_disponiveis.json` | Imóveis disponíveis para aluguel       |

---

## Como executar

```bash
jupyter notebook projeto.ipynb
```
