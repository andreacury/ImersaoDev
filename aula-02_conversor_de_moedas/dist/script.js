function ConverterMoeda() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var valorEmReal = valorNumerico * document.getElementById("moedas").value;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Real é R$ " + valorEmReal.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterTemperatura() {
  var valorElemento = document.getElementById("temperatura");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var valorEmCelsius = eval(
    document
      .getElementById("temperaturas")
      .value.replace("dinamico", valorNumerico)
  );

  var elementoValorConvertido = document.getElementById("valorTemperatura");
  var valorConvertido = "O resultado em Celsius é " + valorEmCelsius.toFixed(1);
  elementoValorConvertido.innerHTML = valorConvertido;
}