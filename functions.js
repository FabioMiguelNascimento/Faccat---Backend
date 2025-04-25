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

// function groupByValue(group, vendas) {
//   const groupedData = {};
//   let arr = [];
//   for(let i = 0; i < vendas.length; i++){
//     if(arr.includes(vendas[i][group]) == false){
//       arr.push(vendas[i][group]);
//     }
//   }

//   vendas.forEach(({ quantidade, precoUnitario }, arr) => {
//     console.log(arr)
//     arr.forEach(i => {
//       groupedData[i] = {
//         quantidadeTotal: 0,
//         valorTotal:0
//       }
  
//       groupedData[i].quantidadeTotal += quantidade;
//       groupedData[i].valorTotal += precoUnitario;
//       groupedData[i].precoMedio = Number((groupedData[i].valorTotal / groupedData[i].quantidadeTotal).toFixed(2));
//     })
//   });
//   return groupedData
// }

export { calcularPrecoMedio, calcularQuantidadeTotal, calcularValorTotal}