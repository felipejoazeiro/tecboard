# Pandas — Curso 3: Análise de Dados Reais

Projeto de estudos do curso de **Pandas** na [Alura](https://www.alura.com.br), com foco em análise exploratória de dados reais de grande volume.

---

## Tecnologias utilizadas

- Python 3
- Pandas
- openpyxl / xlrd
- Matplotlib / Seaborn (visualização)
- Jupyter Notebook

---

## Tópicos estudados

### Trabalhando com Excel de grande porte
- Leitura de arquivos `.xlsx` e `.xls` com muitas linhas
- Otimização de memória ao carregar dados
- Inspeção de estrutura de arquivos com múltiplas abas

### Limpeza e preparação de dados
- Tratamento de valores ausentes em datasets reais
- Padronização de tipos de dados
- Filtragem por critérios populacionais e geográficos

### Análise exploratória
- Análise de emissões de gases por estado (dataset SEEG)
- Análise de dados populacionais por município (IBGE 2022)
- Cruzamento de informações entre datasets

### Visualização
- Criação de gráficos a partir de DataFrames
- Análise de distribuições e tendências

---

## Datasets utilizados

| Arquivo                                              | Conteúdo                                    |
|------------------------------------------------------|---------------------------------------------|
| `1-SEEG10_GERAL-BR_UF_2022.10.27-FINAL-SITE.xlsx`   | Emissões de gases de efeito estufa (SEEG)   |
| `POP2022_Municipios.xls`                             | Estimativa populacional de municípios IBGE  |

---

## Como executar

```bash
jupyter notebook projeto.ipynb
```
