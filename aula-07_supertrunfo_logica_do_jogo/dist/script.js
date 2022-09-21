var Carta = function (nome, imagem, ataque, defesa, magia) {
  this.nome = nome;
  this.imagem = imagem;
  this.atributos = {
    ataque: ataque,
    defesa: defesa,
    magia: magia
  };
};

const deck = [
  new Carta(
    "Arrow",
    "https://ik.imagekit.io/d27feyc9fo/clow-arrow_QQiCpphrV.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663154500182",
    93,
    71,
    84
  ),
  new Carta(
    "Big",
    "https://ik.imagekit.io/d27feyc9fo/clow-big_oZMCMnGR-.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663154500170",
    48,
    6,
    19
  ),
  new Carta(
    "Bubbles",
    "https://ik.imagekit.io/d27feyc9fo/clow-bubbles_uOTrgIsz3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663154500231",
    48,
    87,
    72
  ),
  new Carta(
    "Fight",
    "https://ik.imagekit.io/d27feyc9fo/clow-fight_GkNbHJHKe.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663154500233",
    100,
    42,
    8
  ),
  new Carta(
    "Illusion",
    "https://ik.imagekit.io/d27feyc9fo/clow-illusion_KThAinzQ-.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663154500256",
    41,
    52,
    86
  )
];

let deckEmUso = JSON.parse(JSON.stringify(deck));

var cartaMaquina;
var cartaJogador;
function sortearCartas() {
  cartaMaquina = sortearCarta();
  cartaJogador = sortearCarta();
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirOpcoes();
  exibirCartaJogador();
}

function sortearCarta() {
  var numeroCartaRandomico = parseInt(Math.random() * deckEmUso.length);
  const cartaEscolhida = deckEmUso.splice(numeroCartaRandomico, 1)[0];
  return cartaEscolhida;
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += `<input type="radio" name="atributo" value="${atributo}">${atributo}`;
  }
  opcoes.innerHTML = opcoesTexto;
  console.log(cartaJogador);
}

function exibirCartaJogador() {
  let elementoCarta = document.getElementById("carta-jogador");
  elementoCarta.innerHTML += `<img src="${cartaJogador.imagem}"/>`;
  let textoCarta = document.getElementById("atributos-carta");
  textoCarta.innerHTML = `<h2>${cartaJogador.nome}</h2>`;
  textoCarta.innerHTML += `<h3>Ataque: ${cartaJogador.atributos.ataque}</h3>`;
  textoCarta.innerHTML += `<h3>Defesa: ${cartaJogador.atributos.defesa}</h3>`;
  textoCarta.innerHTML += `<h3>Magia: ${cartaJogador.atributos.magia}</h3>`;
}

function exibirCartaMaquina() {
  let elementoCarta = document.getElementById("carta-maquina");
  elementoCarta.innerHTML += `<img src="${cartaMaquina.imagem}"/>`;
  let textoCarta = document.getElementById("atributos-maquina");
  textoCarta.innerHTML = `<h2>${cartaMaquina.nome}</h2>`;
  textoCarta.innerHTML += `<h3>Ataque: ${cartaMaquina.atributos.ataque}</h3>`;
  textoCarta.innerHTML += `<h3>Defesa: ${cartaMaquina.atributos.defesa}</h3>`;
  textoCarta.innerHTML += `<h3>Magia: ${cartaMaquina.atributos.magia}</h3>`;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  let atributoSelecionado = obtemAtributoSelecionado();
  let elementoResultado = document.getElementById("resultado");
  let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (atributoSelecionado === undefined) {
    elementoResultado.innerHTML = "Você precisa escolher uma das 3 opções";
    return;
  } else if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu!";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior!";
  } else {
    elementoResultado.innerHTML = "Empate";
  }
  exibirCartaMaquina();
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}

function prepararNovaPartida() {
  deckEmUso = JSON.parse(JSON.stringify(deck));
  let elementoCartaJogador = document.getElementById("carta-jogador");
  elementoCartaJogador.innerHTML = "";
  let textoCartaJogador = document.getElementById("atributos-carta");
  textoCartaJogador.innerHTML = "";
  let elementoCartaMaquina = document.getElementById("carta-maquina");
  elementoCartaMaquina.innerHTML = "";
  let textoCartaMaquina = document.getElementById("atributos-maquina");
  textoCartaMaquina.innerHTML = "";
  let elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";
}