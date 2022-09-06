function ConverterMoeda() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var valorEmReal = valorNumerico * document.getElementById("moedas").value;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Real é R$ " + valorEmReal;
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

function ConverterQuilometro() {
  var valorElemento = document.getElementById("quilometro");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var valorEmAnoLuz = valorNumerico * 1.057e-13;

  var elementoValorConvertido = document.getElementById("valorAnoLuz");
  var valorConvertido = "O resultado em Ano-luz é " + valorEmAnoLuz;
  elementoValorConvertido.innerHTML = valorConvertido;
}
//Adicionar outras moedas para converter OK
//Conversor de quilômetros para anos luz.OK 
//Conversor de temperaturas entre farenheit, kelvin e celsius.OK
//Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.OK
