const formBusca = document.getElementById('busca-produto')
const botaoBuscar = document.querySelector('#botaoPesquisar')
const inputBuscar = document.querySelector('#pesquisar')
const listagemCard = document.querySelector('.listagem')
const apiUlr = 'http://localhost:3000/produtos'


async function listagemProdutos() {
    const retorno = await fetch('http://localhost:3000/produtos')
    const bancoProdutos = await retorno.json()
    
    if (bancoProdutos.length <= 0) {
        console.log('vazia')
        const mensagemExibirHTML = `
             <h2 class="sem-produto">Não há produtos cadastrados</h2>
        `
        listagemCard.innerHTML = listagemCard.innerHTML + mensagemExibirHTML

    } else {
        preencheTela(bancoProdutos)

    }
}

const formatacao = Intl.NumberFormat('pt-BR',{
    style:"currency",
    currency: 'BRL',
    maximumFractionDigits: 2,
})

function preencheTela(valorBuscado) {
    valorBuscado.forEach(listagem => {
        const listagemHTML = `
        <div class="listagem-card">
            <div class="listagem-card__head">
                <aside class="listagem-card__nome">${listagem.nome}</aside>
                <aside class="listagem-card__cate">- ${listagem.categoria}</aside>
            </div>
            <div class="listagem-card__main">
            <p class="listagem-card__desc">${listagem.descricao}</p>
            </div>
            <div class="listagem-card__foot">
            <span class="listagem-card__prec">${formatacao.format(listagem.preco)} reais</span>
            </div>
        </div>
        `
        listagemCard.innerHTML = listagemCard.innerHTML + listagemHTML
    });
}

listagemProdutos()




function filtroLista(){
    const filtro = inputBuscar.value.toLowerCase();
    const listagem = document.querySelectorAll('.listagem-card');

    listagem.forEach((item) => {
        let texto = item.textContent;
        if(texto.toLowerCase().includes(filtro.toLowerCase())){
            item.style.display = '';

        } else {
            item.style.display='none';            
            
        }
    })
}

function mudarValorBtnBusca() {

}

let filtroAtivo = false;


formBusca.addEventListener('submit', (e) => {
    if(filtroAtivo == false){
        filtroLista();
        filtroAtivo = true;
        botaoBuscar.value = 'Limpar'
    } else {
        botaoBuscar.value = 'Enviar'
        location.reload();
        
    }
    e.preventDefault();
})
