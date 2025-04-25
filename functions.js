function calcularQuantidadeTotal(vendas) {
  let total = 0;
  for (const item of vendas) {
      total += item.quantidade;
  }
  return total;
}

function calcularValorTotal(vendas) {
  let valorTotal = 0;
  for (const item of vendas) {
      valorTotal += item.precoUnitario * item.quantidade;
  }
  return valorTotal;
}

function calcularPrecoMedio(valorTotal, quantidadeTotal) {
  return quantidadeTotal ?? valorTotal / quantidadeTotal;
}

function agruparPor(vendas, campo) {
  const agrupado = {};

  vendas.forEach(({ [campo]: valor, quantidade, precoUnitario }) => {
    if (!agrupado[valor]) {
      agrupado[valor] = {
        quantidadeTotal: 0,
        valorTotal: 0
      };
    }
    
    agrupado[valor].quantidadeTotal += quantidade;
    agrupado[valor].valorTotal += quantidade * precoUnitario;
    agrupado[valor].precoMedio = Number((agrupado[valor].valorTotal / agrupado[valor].quantidadeTotal).toFixed(2));
  });

  return agrupado;
}

module.exports = {
  calcularPrecoMedio,
  calcularQuantidadeTotal,
  calcularValorTotal,
  agruparPor
};