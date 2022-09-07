var numeroSecreto = parseInt(Math.random() * 11);
var tentativasRestantes = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    return;
  }

  if (tentativasRestantes == 0) {
    elementoResultado.innerHTML = "Você não tem mais tentativas";
    return;
  }

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "Você chutou alto, tente mais " + tentativasRestantes + " vez(es)";
  } else {
    elementoResultado.innerHTML =
      "Você chutou baixo, tente mais " + tentativasRestantes + " vez(es)";
  }
  tentativasRestantes--;
}

//Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final.OK
//Quando a pessoa errar, deixar na mensagem se o número chutado é maior ou menor que o número secreto. OK
