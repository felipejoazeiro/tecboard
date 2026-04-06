# Pandas — Curso 2: Leitura de Múltiplos Formatos

Projeto de estudos do curso de **Pandas** na [Alura](https://www.alura.com.br), com foco na importação e tratamento de dados em diferentes formatos de arquivo.

---

## Tecnologias utilizadas

- Python 3
- Pandas
- openpyxl / xlrd (Excel)
- lxml / BeautifulSoup (HTML/XML)
- Jupyter Notebook

---

## Tópicos estudados por arquivo

### Excel (`projeto_excel.ipynb`)
- Leitura de `.xlsx` com `pd.read_excel()`
- Seleção de abas específicas com `sheet_name`
- Exportação de volta para Excel com `.to_excel()`

### CSV (`projeto_csv.ipynb`)
- Leitura com `pd.read_csv()` com diferentes separadores
- Parâmetros: `sep`, `encoding`, `header`, `index_col`
- Exportação com `.to_csv()`

### Google Planilhas (`projeto_google_planilha.ipynb`)
- Leitura de planilhas públicas do Google via URL exportada como CSV

### JSON (`projeto_json.ipynb`)
- Leitura com `pd.read_json()` e `json_normalize()`
- Tratamento de JSON aninhado
- Dados de pacientes (`pacientes.json`, `pacientes_normalizados.json`)

### Web Scraping (`projeto_web.ipynb`)
- Leitura de tabelas HTML com `pd.read_html()`
- Extração de dados de páginas web

### XML (`projeto_xml.ipynb`)
- Parsing de XML com `lxml` ou `ElementTree`
- Conversão de dados XML em DataFrame
- Datasets: `imdb_top_1000.xml`, `top_10_filmes.xml`

---

## Datasets utilizados

| Arquivo                    | Formato  | Conteúdo                          |
|----------------------------|----------|-----------------------------------|
| `clientes_mercado.csv`     | CSV      | Clientes de mercado               |
| `percapita.xlsx`           | Excel    | Dados de renda per capita         |
| `pacientes.json`           | JSON     | Dados de pacientes                |
| `pacientes_normalizados.json` | JSON  | Dados normalizados de pacientes   |
| `filmes_wikipedia.html`    | HTML     | Tabela de filmes extraída da web  |
| `imdb_top_1000.xml`        | XML      | Top 1000 filmes IMDb              |

---

## Como executar

Abra o notebook correspondente ao formato desejado no Jupyter.

```bash
jupyter notebook projeto_csv.ipynb
```
