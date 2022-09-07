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


//Criar um conversor de temperaturas entre farenheit e celsius
var celsius = 25;
var farenheit = 85;

var celsiusFarenheit = celsius * 1.8 + 32;
var farenheitCelsius = (farenheit - 32) / 1.8;

var resultadoFarenheit = ("A temperatura em Farenheit é " + celsiusFarenheit.toFixed(1))
var resultadoCelsius = ("A temperatura em Celsius é " + farenheitCelsius.toFixed(1));

console.log(resultadoFarenheit);
document.getElementById("resultado-farenheit").innerHTML=resultadoFarenheit;

console.log(resultadoCelsius)
document.getElementById("resultado-celsius").innerHTML=resultadoCelsius;

// Revisão
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação

//Desafios desta aula:
//Alterar o fundo da tela da maneira que achar mais legal
//Imprimir na própria página o resultado, ao invés do console
//Criar um conversor de temperaturas entre farenheit e celcius
//Colocar a conta inteira da média em apenas uma linha