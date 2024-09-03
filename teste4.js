const resumoFaturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

let faturamentoTotal = 0;
for (let valor of Object.values(resumoFaturamentoPorEstado)) {
  faturamentoTotal = faturamentoTotal + Number(valor);
}

let representacaoFaturamentoPorEstado = {};

for (const [estado, valor] of Object.entries(resumoFaturamentoPorEstado)) {
  let percentual = (valor / faturamentoTotal) * 100;
  representacaoFaturamentoPorEstado[estado] = `${percentual.toFixed(2)}%`;
}
console.log(representacaoFaturamentoPorEstado);
