//Ativar links no header menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  if (location.href.includes(link.href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar produtos em orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);
