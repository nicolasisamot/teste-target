let numeroInformado = 89;
let fibonaccisLimit = 500;
let sequenciaFibonacci = [0, 1];

function fibonacci(num1, num2) {
  let soma = num1 + num2;
  if (soma > fibonaccisLimit) {
    return sequenciaFibonacci;
  }
  sequenciaFibonacci.push(soma);

  fibonacci(num2, soma);
}

fibonacci(sequenciaFibonacci[0], sequenciaFibonacci[1]);

console.log(sequenciaFibonacci.includes(numeroInformado));
console.log(sequenciaFibonacci);
