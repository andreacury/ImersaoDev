var Carta = function (nome, imagem, ataque, defesa, magia) {
  this.nome = nome;
  this.imagem = imagem;
  this.atributos = {
    ataque: ataque,
    defesa: defesa,
    magia: magia
  };
};

const deckJogador = [
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
    26,
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
    99,
    42,
    28
  ),
  new Carta(
    "Illusion",
    "https://ik.imagekit.io/d27feyc9fo/clow-illusion_KThAinzQ-.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663154500256",
    41,
    52,
    86
  ),
  new Carta(
    "Change",
    "https://ik.imagekit.io/d27feyc9fo/clow-change_UQFYz-WQ_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191588566",
    57,
    38,
    97
  ),
  new Carta(
    "Cloud",
    "https://ik.imagekit.io/d27feyc9fo/clow-cloud_h-MrFcnap_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589371",
    20,
    82,
    77
  ),
  new Carta(
    "Create",
    "https://ik.imagekit.io/d27feyc9fo/clow-create_kqs89uD3TM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589607",
    17,
    25,
    96
  ),
  new Carta(
    "Dark",
    "https://ik.imagekit.io/d27feyc9fo/clow-dark_CobUVDgP38.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191588965",
    76,
    69,
    53
  ),
  new Carta(
    "Dash",
    "https://ik.imagekit.io/d27feyc9fo/clow-dash_x4f9Ao2yK1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589102",
    42,
    94,
    16
  ),
  new Carta(
    "Dream",
    "https://ik.imagekit.io/d27feyc9fo/clow-dream_V-dSmkaMuw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589429",
    65,
    11,
    81
  ),
  new Carta(
    "Earthy",
    "https://ik.imagekit.io/d27feyc9fo/clow-earthy_lWk6yGbZYO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589411",
    50,
    50,
    48
  ),
  new Carta(
    "Erase",
    "https://ik.imagekit.io/d27feyc9fo/clow-erase_ddteofNOBg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589517",
    45,
    75,
    77
  ),
  new Carta(
    "Firey",
    "https://ik.imagekit.io/d27feyc9fo/clow-firey_SZZi0yMTXe.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589577",
    90,
    90,
    57
  ),
  new Carta(
    "Float",
    "https://ik.imagekit.io/d27feyc9fo/clow-float_M1i9idsaNG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589117",
    62,
    85,
    64
  ),
  new Carta(
    "Flower",
    "https://ik.imagekit.io/d27feyc9fo/clow-flower_nwoGpl5fFZ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589495",
    37,
    46,
    78
  ),
  new Carta(
    "Fly",
    "https://ik.imagekit.io/d27feyc9fo/clow-fly_ue6zUQi_r2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589079",
    33,
    70,
    81
  ),
  new Carta(
    "Freeze",
    "https://ik.imagekit.io/d27feyc9fo/clow-freeze_y3XiGSzMYm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589238",
    76,
    87,
    54
  ),
  new Carta(
    "Glow",
    "https://ik.imagekit.io/d27feyc9fo/clow-glow_3m04_9iJaP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589465",
    21,
    27,
    56
  ),
  new Carta(
    "Jump",
    "https://ik.imagekit.io/d27feyc9fo/clow-jump_y4i3CL5b_b.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589141",
    33,
    95,
    53
  ),
  new Carta(
    "Libra",
    "https://ik.imagekit.io/d27feyc9fo/clow-libra_WFZESdB-rO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589476",
    33,
    35,
    51
  ),
  new Carta(
    "Light",
    "https://ik.imagekit.io/d27feyc9fo/clow-light_RCYbOfwpao.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589491",
    75,
    23,
    83
  ),
  new Carta(
    "Little",
    "https://ik.imagekit.io/d27feyc9fo/clow-little_aXyUn0LRcC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589469",
    16,
    13,
    83
  ),
  new Carta(
    "Lock",
    "https://ik.imagekit.io/d27feyc9fo/clow-lock_bdZXDimDvh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589284",
    23,
    96,
    74
  ),
  new Carta(
    "Loop",
    "https://ik.imagekit.io/d27feyc9fo/clow-loop_DX4yJrrbg8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589391",
    12,
    46,
    93
  ),
  new Carta(
    "Maze",
    "https://ik.imagekit.io/d27feyc9fo/clow-maze_O9MRHn4sU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589721",
    10,
    15,
    96
  ),
  new Carta(
    "Mirror",
    "https://ik.imagekit.io/d27feyc9fo/clow-mirror_V8LQfwoEMG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589618",
    71,
    40,
    84
  ),
  new Carta(
    "Mist",
    "https://ik.imagekit.io/d27feyc9fo/clow-mist_q9Z3c5mRv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191588538",
    20,
    49,
    80
  ),
  new Carta(
    "Move",
    "https://ik.imagekit.io/d27feyc9fo/clow-move_kRJDM4gp1B.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589394",
    12,
    86,
    72
  ),
  new Carta(
    "Power",
    "https://ik.imagekit.io/d27feyc9fo/clow-power__0_YdPeKt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191588465",
    80,
    27,
    76
  ),
  new Carta(
    "Rain",
    "https://ik.imagekit.io/d27feyc9fo/clow-rain_B4LbPmjPgC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589323",
    52,
    47,
    68
  ),
  new Carta(
    "Return",
    "https://ik.imagekit.io/d27feyc9fo/clow-return_rR1fx9X-3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589060",
    16,
    48,
    81
  ),
  new Carta(
    "Sand",
    "https://ik.imagekit.io/d27feyc9fo/clow-sand_MKjMg-a92q.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589385",
    43,
    74,
    82
  ),
  new Carta(
    "Shadow",
    "https://ik.imagekit.io/d27feyc9fo/clow-shadow_5vUXHut5yW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589400",
    50,
    87,
    77
  ),
  new Carta(
    "Shield",
    "https://ik.imagekit.io/d27feyc9fo/clow-shield_OYEPx8EJIk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589535",
    22,
    99,
    44
  ),
  new Carta(
    "Shot",
    "https://ik.imagekit.io/d27feyc9fo/clow-shot_i8Mmj3DRYw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589360",
    98,
    32,
    67
  ),
  new Carta(
    "Silent",
    "https://ik.imagekit.io/d27feyc9fo/clow-silent_LmP5tu-Xl2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589708",
    34,
    31,
    52
  ),
  new Carta(
    "Sleep",
    "https://ik.imagekit.io/d27feyc9fo/clow-sleep_9T5PUO3QjL.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589375",
    22,
    75,
    81
  ),
  new Carta(
    "Snow",
    "https://ik.imagekit.io/d27feyc9fo/clow-snow_NQQ6oMIm0t.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589245",
    11,
    76,
    78
  ),
  new Carta(
    "Song",
    "https://ik.imagekit.io/d27feyc9fo/clow-song_cLiWg7PE6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191588689",
    40,
    42,
    86
  ),
  new Carta(
    "Storm",
    "https://ik.imagekit.io/d27feyc9fo/clow-storm_MrVihoCG3n.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589364",
    38,
    76,
    82
  ),
  new Carta(
    "Sweet",
    "https://ik.imagekit.io/d27feyc9fo/clow-sweet_2kPtpgUWc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589094",
    18,
    44,
    61
  ),
  new Carta(
    "Sword",
    "https://ik.imagekit.io/d27feyc9fo/clow-sword_dPxTxaWGcx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589316",
    98,
    26,
    47
  ),
  new Carta(
    "Through",
    "https://ik.imagekit.io/d27feyc9fo/clow-through_8UoC3F9x0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589230",
    18,
    68,
    73
  ),
  new Carta(
    "Thunder",
    "https://ik.imagekit.io/d27feyc9fo/clow-thunder_4hdj_Cn6fP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589435",
    88,
    23,
    79
  ),
  new Carta(
    "Time",
    "https://ik.imagekit.io/d27feyc9fo/clow-time_VPxkq-9BmE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589632",
    28,
    82,
    72
  ),
  new Carta(
    "Twin",
    "https://ik.imagekit.io/d27feyc9fo/clow-twin_FMtmovJr3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191588812",
    27,
    42,
    53
  ),
  new Carta(
    "Voice",
    "https://ik.imagekit.io/d27feyc9fo/clow-voice_wGSYeeG8e.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191588870",
    76,
    63,
    72
  ),
  new Carta(
    "Watery",
    "https://ik.imagekit.io/d27feyc9fo/clow-watery_vIxM9GIgl1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589612",
    82,
    44,
    52
  ),
  new Carta(
    "Wave",
    "https://ik.imagekit.io/d27feyc9fo/clow-wave_eqUhK83TWt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589136",
    52,
    50,
    48
  ),
  new Carta(
    "Windy",
    "https://ik.imagekit.io/d27feyc9fo/clow-windy_Ceo8S_ko4K.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191589287",
    43,
    35,
    62
  ),
  new Carta(
    "Wood",
    "https://ik.imagekit.io/d27feyc9fo/clow-wood_ShnuXOhqB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663191588918",
    85,
    74,
    60
  )
];

let deckMaquina = JSON.parse(JSON.stringify(deckJogador));

let cartaMaquina;
let cartaJogador;
function sortearCartas() {
  cartaMaquina = sortearCarta(deckMaquina);
  cartaJogador = sortearCarta(deckJogador);
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirOpcoes();
  exibirCartaJogador();
}

function sortearCarta(deck) {
  let numeroCartaRandomico = parseInt(Math.random() * deck.length);
  const cartaEscolhida = deck.splice(numeroCartaRandomico, 1)[0];
  return cartaEscolhida;
}

function realizarTroca(cartaDoada, deckGanhador) {
  deckGanhador.push(cartaDoada);
}

function exibirOpcoes() {
  let opcoes = document.getElementById("opcoes");
  let opcoesTexto = "";

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
  let radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked) {
      return radioAtributos[i].value;
    }
  }
}

function devolverCarta(cartaDevolvida, deckDestino) {
  deckDestino.push(cartaDevolvida);
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
    realizarTroca(cartaMaquina, deckJogador);
    devolverCarta(cartaJogador, deckJogador);
    elementoResultado.innerHTML = "Você venceu!";
  } else if (valorCartaMaquina > valorCartaJogador) {
    realizarTroca(cartaJogador, deckMaquina);
    devolverCarta(cartaMaquina, deckMaquina);
    elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior!";
  } else {
    elementoResultado.innerHTML = "Empate";
    devolverCarta(cartaJogador, deckJogador);
    devolverCarta(cartaMaquina, deckMaquina);
  }
  exibirCartaMaquina();

  if (deckJogador.length == 0) {
    elementoResultado.innerHTML = "Acabaram suas cartas, você perdeu!";
    return;
  } else if (deckMaquina.length == 0) {
    elementoResultado.innerHTML = "Acabaram as cartas da máquina, você ganhou!";
    return;
  }
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}

function prepararNovaPartida() {
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