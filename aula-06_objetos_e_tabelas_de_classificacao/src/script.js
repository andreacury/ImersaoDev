var andrea = {
  nome: "Andréa",
  imagem: "https://www.personality-database.com/profile_images/741.png",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var roberto = {
  nome: "Roberto",
  imagem: "https://avatarfiles.alphacoders.com/213/21387.jpg",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var carolina = {
  nome: "Carolina",
  imagem: "https://avatarfiles.alphacoders.com/213/21365.jpg",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

andrea.pontos = calculaPontos(andrea);
roberto.pontos = calculaPontos(roberto);
carolina.pontos = calculaPontos(carolina);

var jogadores = [andrea, roberto, carolina];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td><img src=" + jogadores[i].imagem + " width='20'></td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}
exibeJogadoresNaTela(jogadores);

function adicionarVitoria(vencedor) {
  jogadores.forEach((jogador, posicao) => {
    if (posicao === vencedor) {
      jogador.vitorias++;
    } else {
      jogador.derrotas++;
    }
    jogador.pontos = calculaPontos(jogador);
  });
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  jogadores.forEach((jogador) => {
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
  });
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(perdedor) {
  jogadores.forEach((jogador, posicao) => {
    if (posicao === perdedor) {
      jogador.derrotas++;
    } else {
      jogador.vitorias++;
    }
    jogador.pontos = calculaPontos(jogador);
  });
  exibeJogadoresNaTela(jogadores);
}

function zerarPontos(i) {
  jogadores.forEach((jogador) => {
    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.derrotas = 0;
    jogador.pontos = calculaPontos(jogador);
  });
  exibeJogadoresNaTela(jogadores);
}

function adicionarJogador() {
  var jogador = document.getElementById("jogador").value;
  var imagem = document.getElementById("imagem").value;

  jogadores.push({
    nome: jogador,
    imagem: imagem,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
  exibeJogadoresNaTela(jogadores);
  document.getElementById("jogador").value = "";
  document.getElementById("imagem").value = "";
}

exibeJogadoresNaTela(jogadores);
