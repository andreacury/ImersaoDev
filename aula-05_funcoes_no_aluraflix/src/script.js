Element.prototype.remove = function () {
  this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
};

function adicionarFilme() {
  //extração das informações
  var imagemFilme = document.getElementById("filme").value;
  var nomeFilme = document.getElementById("nome-filme").value;

  if (!imagemFilme.toLowerCase().endsWith(".jpg")) {
    console.error("Endereço de filme inválido");
    return;
  }

  listarFilmesNaTela(imagemFilme, nomeFilme);

  document.getElementById("filme").value = "";
  document.getElementById("nome-filme").value = "";
}

function adicionarNomeDoFilme() {}

var idDoFilme = 0;
function listarFilmesNaTela(imagem, nome) {
  var elementoFilmeFavorito = `<div class="item-filme" id="${++idDoFilme}"><img src="${imagem}"><button class="delete-button" onClick="removerFilme('${idDoFilme}')">X</button><p class="titulo-filme">${nome}</p></div>`;
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

function removerFilme(id) {
  document.getElementById(id).remove();
}
