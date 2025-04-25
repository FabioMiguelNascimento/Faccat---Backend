# Ativade avaliativa 24/04/25
Atividade tem foco em testar endpoints gets simples, permitindo utilizar funcoes e importar/exportar arquivos

## Rodar o projeto

```bash
npm i

# Caso rodando em powershell
nodemon

# Caso rodando em cmd
npx nodemon
```

## Endpoints

```js
// Retorna quantidadeTotal das vendas
GET /quantidadeTotal 

// Retorna valorTotal das vendas
GET /valorTotal

// Retorna precoMedio das vendas
GET /precoMedio 

// Retorna vendas agrupadas por data
GET /group/groupByData

// Retorna vendas agrupadas por UF
GET /groupByUF

// Retorna todos os dados: quantidadeTotal, valorTotal e precoMedio
GET /getAll
```

## Testar endpoints
Pode usar o Postman/Insomnia, ou pode ser feito direto no navegador.

Exemplos:
```
http://localhost:3000/quantidadeTotal
http://localhost:3000/valorTotal
http://localhost:3000/precoMedio
http://localhost:3000/group/groupByData
http://localhost:3000/groupByUF
http://localhost:3000/getAll
```

⚠️ **Nota**: Certifique-se que o servidor está rodando antes de testar os endpoints.