const faturamento = [
  { dia: 1, valor: 100.0, isDiaUtil: true }, // Segunda-feira
  { dia: 2, valor: 200.0, isDiaUtil: true }, // Terça-feira
  { dia: 3, valor: 170.0, isDiaUtil: true }, // Quarta-feira
  { dia: 4, valor: 150.0, isDiaUtil: true }, // Quinta-feira
  { dia: 5, valor: 90.0, isDiaUtil: true }, // Sexta-feira
  { dia: 6, valor: 0.0, isDiaUtil: false }, // Sábado (sem faturamento)
  { dia: 7, valor: 0.0, isDiaUtil: false }, // Domingo (sem faturamento)
  { dia: 8, valor: 100.0, isDiaUtil: true }, // Segunda-feira
  { dia: 9, valor: 300.0, isDiaUtil: true }, // Terça-feira
  { dia: 10, valor: 0.0, isDiaUtil: false }, // Quarta-feira (sem faturamento)
];

function calcularMetricas(faturamento) {
  let maiorFaturamento = 0;

  let contador = 0;
  let total = 0;

  for (let i = 0; i < faturamento.length; i++) {
    if (faturamento[i].isDiaUtil == true) {
      contador = contador + 1;
      total = total + faturamento[i].valor;
    }
    if (
      faturamento[i].isDiaUtil == true &&
      faturamento[i].valor >= maiorFaturamento
    ) {
      maiorFaturamento = faturamento[i].valor;
    }
  }

  let menorFaturamento = maiorFaturamento;
  for (let i = 0; i < faturamento.length; i++) {
    if (
      faturamento[i].isDiaUtil == true &&
      faturamento[i].valor <= menorFaturamento
    ) {
      menorFaturamento = faturamento[i].valor;
    }
  }
  let mediaFaturamento = total / contador;

  let diasFaturamentoAcimaDaMedia = 0;

  for (let i = 0; i < faturamento.length; i++) {
    if (
      faturamento[i].isDiaUtil == true &&
      faturamento[i].valor >= mediaFaturamento
    ) {
      diasFaturamentoAcimaDaMedia = diasFaturamentoAcimaDaMedia + 1;
    }
  }
  return {
    maiorFaturamento,
    menorFaturamento,
    diasFaturamentoAcimaDaMedia,
  };
}

const resumoFaturamento = calcularMetricas(faturamento);

console.log(resumoFaturamento);
