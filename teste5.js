const texto = "NICOLAS TOMASI";

function inverteTexto(texto) {
  let inicio = 0;
  let fim = texto.length - 1;
  const textoArr = texto.split("");

  while (inicio < fim) {
    let tem1 = textoArr[inicio];
    let tem2 = textoArr[fim];
    textoArr[inicio] = tem2;
    textoArr[fim] = tem1;
    inicio++;
    fim--;
  }
  console.log(textoArr);
}

inverteTexto(texto);
