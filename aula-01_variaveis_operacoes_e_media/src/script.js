var notaDoPrimeiroBimestre = 9;
var notaDoSegundoBimestre = 7;
var notaDoTerceiroBimestre = 8;
var notaDoQuartoBimestre = 9;

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4;

var notaFixada = notaFinal.toFixed(2)

console.log(notaFixada);
document.getElementById("resultado-nota").innerHTML=notaFixada;

// Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não
if (notaFixada >= 7) {
  console.log("Você foi Aprovado(a)");
  document.getElementById("resultado-descricao").innerHTML="Você foi Aprovado(a)";
} else{
    console.log("Você foi Reprovado(a)");
  document.getElementById("resultado-descricao").innerHTML="Você foi Reprovado(a)";
  }


//Criar um conversor de temperaturas entre fahrenheit e celsius
var celsius = 25;
var fahrenheit = 85;

var celsiusFahrenheit = celsius * 1.8 + 32;
var fahrenheitCelsius = (fahrenheit - 32) / 1.8;

var resultadoFahrenheit = ("A temperatura em Fahrenheit é " + celsiusFahrenheit.toFixed(1))
var resultadoCelsius = ("A temperatura em Celsius é " + fahrenheitCelsius.toFixed(1));

console.log(resultadoFahrenheit);
document.getElementById("resultado-fahrenheit").innerHTML=resultadoFahrenheit;

console.log(resultadoCelsius)
document.getElementById("resultado-celsius").innerHTML=resultadoCelsius;