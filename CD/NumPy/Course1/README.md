# NumPy — Curso 1

Projeto de estudos do curso de **NumPy** na [Alura](https://www.alura.com.br), parte da formação de Ciência de Dados.

---

## Tecnologias utilizadas

- Python 3
- NumPy
- Jupyter Notebook

---

## Tópicos estudados

### Fundamentos do NumPy
- Criação de arrays com `np.array()`
- Arrays unidimensionais e multidimensionais (matrizes)
- Tipos de dados (`dtype`): `int`, `float`, `bool`

### Operações com arrays
- Operações aritméticas vetorizadas (+, -, *, /)
- Funções matemáticas: `np.sum()`, `np.mean()`, `np.std()`, `np.max()`, `np.min()`
- Broadcasting: operações entre arrays de dimensões diferentes

### Indexação e fatiamento
- Indexação simples e fatiamento (`array[0:3]`)
- Indexação booleana (filtros)
- Indexação de matrizes (`array[linha, coluna]`)

### Manipulação de arrays
- Reshape com `np.reshape()`
- Transposição com `.T`
- Concatenação com `np.concatenate()`, `np.vstack()` e `np.hstack()`

### Leitura de dados
- Importação de arquivos CSV com `np.loadtxt()` e `np.genfromtxt()`

---

## Arquivos de dados utilizados

| Arquivo         | Descrição                            |
|-----------------|--------------------------------------|
| `bytebank.csv`  | Dados financeiros para análise       |
| `citrus.csv`    | Dataset de frutas cítricas           |
| `apples_ts.csv` | Série temporal de maçãs              |
| `dados.csv`     | Dataset genérico para exercícios     |

---

## Como executar

Abra o arquivo `projeto.ipynb` no Jupyter Notebook ou VS Code com a extensão Jupyter.

```bash
jupyter notebook projeto.ipynb
```
