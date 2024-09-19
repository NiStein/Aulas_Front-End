function $(id) {
    return document.getElementById(id);
}

var botaoCriarParagrafo = $('botaoCriarParagrafo');
botaoCriarParagrafo.addEventListener('click', criarParagrafo);
var contador = 1;

function criarParagrafo() {
    var divParagrafo = $('divParagrafo');
    var paragrafo = document.createElement('p');
    paragrafo.innerHTML = 'Texto do Parágrafo ' + contador;
    contador = contador + 1;
    divParagrafo.appendChild(paragrafo);
};

var botaoAdicionarItens = $('botaoAdicionarItens');
botaoAdicionarItem.addEventListener('click', adicionarItem);

function adicionarItem() {
    var listaItens = $('listaItens');
    var textoItem = $('textoItem');
    var item = document.createElement('li');
    item.innerHTML = textoItem.value
    listaItens.appendChild(item);

    textoItem.value = '';
    textoItem.focus();
}

var botaoAdicionarOpcao = $('botaoAdicionarOpcao');
botaoAdicionarOpcao.addEventListener('click', adicionarOpcao);

function adicionarOpcao() {
    var selectOpcoes = $('selectOpcoes');
    var textoOpcao = $('textoOpcao');

    var opcao = document.createElement('option');
    opcao.innerHTML = textoOpcao.value;

    selectOpcoes.appendChild(opcao);
    textoOpcao.value = '';
    textoOpcao.focus();
}

var botaoRemoverOpcao = $('botaoRemoverOpcao');
botaoRemoverOpcao.addEventListener('click', removerOpcao);

function removerOpcao() {
    var selectOpcoes = $('selectOpcoes');
    var opcaoSelecionada = selectOpcoes.selectedOptions;
    selectOpcoes.remove(opcaoSelecionada);
}