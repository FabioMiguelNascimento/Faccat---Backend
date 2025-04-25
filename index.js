const func = require('./functions.js')
const express = require('express')
const vendas = require('./vendas.json');

const PORT = 3000

const app = express()

app.use(express.json())


app.get('/ping', (req, res) => {
  res.send('pong')
  })

app.listen(PORT, () => {
  console.log('Server rodando na porta ', PORT)
})

/**
 * Endpoint /quantidadeTotal
 */
app.get('/quantidadeTotal', (req, res) => {
  const quantidadeTotal = func.calcularQuantidadeTotal(vendas);
  res.json({ quantidadeTotal });
})

/**
 * Endpoint /valorTotal
 */
app.get('/valorTotal', (req, res) => {
  const valorTotal = func.calcularQuantidadeTotal(vendas)
  res.json({valorTotal})
})

/**
 * Endpoint /precoMedio
 */
app.get('/precoMedio', (req, res) => {
  const quantidadeTotal = func.calcularQuantidadeTotal(vendas);
  const valorTotal = func.calcularValorTotal(vendas);
  const precoMedio = Number(func.calcularPrecoMedio(quantidadeTotal, valorTotal).toFixed(2))
  res.json({precoMedio})
})

/**
 * Endpoint /groupByData
 */
app.get('/group/groupByData', (req, res) => {
  const groupedByData = func.agruparPor(vendas, 'data');
  res.json(groupedByData);
})

app.get('/groupByUF', (req, res) => {
  const groupedByUF = func.agruparPor(vendas, 'uf');
  res.json(groupedByUF);
})

/**
 * Endpoint /getAll
 */
app.get('/getAll', (req, res) => {
  const quantidadeTotal = func.calcularQuantidadeTotal(vendas);
  const valorTotal = func.calcularValorTotal(vendas);
  const precoMedio = func.calcularPrecoMedio(valorTotal, quantidadeTotal);


  res.json({quantidadeTotal, valorTotal, precoMedio})
})