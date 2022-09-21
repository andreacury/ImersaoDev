var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/a/a0/Le_fabuleux_destin_d%27Am%C3%A9lie_Poulain.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/3/3c/Nuovo_Cinema_Paradiso.jpg",
  "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_SY445_.jpg"
];

listaFilmes.push(
  "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b7c6b9756d1fcc53987ae7ba88b1cb04d3daa47db2ffa11f88cbc57a8deb7683._RI_V_TTW_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
);

const listaDosFilmesJaAdicionados = [];

for (var i = 0; i < listaFilmes.length; i++) {
  const enderecoDaImagem = listaFilmes[i];

  // verificar se esta url já não se encontra na lista
  const jaFoiAdicionado = listaDosFilmesJaAdicionados.includes(
    enderecoDaImagem
  );
  if (jaFoiAdicionado) {
    alert("Esse filme já foi adicionado!");
    continue;
  }

  // processo para adicionar um Elemento HTML
  const elementoImagem = document.createElement("img");
  elementoImagem.setAttribute("src", enderecoDaImagem);
  const box = document.getElementById("box-filmes");
  box.appendChild(elementoImagem);

  // processo para adicionar o filme na lista dos Ja Adicionados
  listaDosFilmesJaAdicionados.push(enderecoDaImagem);
}

function adicionarFilmesNoIncluir(enderecoDaImagem) {
  // verificar se esta url já não se encontra na lista
  const jaFoiAdicionado = listaDosFilmesJaAdicionados.includes(
    enderecoDaImagem
  );
  if (jaFoiAdicionado) {
    alert("Esse filme já foi adicionado!");
    return;
  }

  // processo para adicionar um Elemento HTML
  const elementoImagem = document.createElement("img");
  elementoImagem.setAttribute("src", enderecoDaImagem);
  const box = document.getElementById("box-filmes");
  box.appendChild(elementoImagem);

  // processo para adicionar o filme na lista dos Ja Adicionados
  listaDosFilmesJaAdicionados.push(enderecoDaImagem);
}
