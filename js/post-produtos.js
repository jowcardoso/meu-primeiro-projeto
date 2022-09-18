const formCadastro = document.getElementById('cadastro-produto')
const inputNome = document.getElementById('nomeProduto')
const inputDesc = document.getElementById('descricao')
const inputPrec = document.getElementById('preco')
const inputCate = document.getElementById('categoria')

formCadastro.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})


function checkInputs() {

    const inputNomeValue = inputNome.value.trim()
    const inputDescValue = inputDesc.value.trim()
    const inputPrecValue = inputPrec.value.trim()
    const inputCateValue = inputCate.value.trim()

    if (inputNomeValue === '' || inputNomeValue.length <= 1) {
        // mostrar erro
        // add classe
        setErrorFor(inputNome, 'Preencha esse campo com no mínimo 2 caracteres')
    } 


    if (inputDescValue === '' || inputDescValue.length <= 9) {
        // mostrar erro
        // add classe
        setErrorFor(inputDesc, 'Preencha esse campo com no mínimo 10 caracteres')
    } 


    if (inputCateValue === '' || inputCateValue.length <= 3) {
        // mostrar erro
        // add classe
        setErrorFor(inputCate, 'Preencha esse campo com no mínimo 4 caracteres')
    } 

    if (inputPrecValue === '' || inputPrecValue.value <= 1) {
        // mostrar erro
        // add classe
        setErrorFor(inputPrec, 'Preencha esse campo com valor maior que 0')
    } 
}

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small')

        small.innerText = message

        formControl.className = 'cadastro-produto__controle error'
    }


    const btnSalvar = document.querySelector('.cadastro-produto__enviar')

    btnSalvar.addEventListener('click', () => {
        // e.preventDefault();
        const produto = getDadosForm()
        enviarDadosAPI(produto)
    })

    function getDadosForm() {
        const produto = {
            nome: inputNome.value,
            descricao: inputDesc.value,
            preco: inputPrec.value,
            categoria: inputCate.value
        }
        return produto
    }

    async function enviarDadosAPI(produto) {
        try {
            const resposta = await fetch('http://localhost:3000/produtos', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(produto)
            })
            if (resposta.status === 201) {
                window.alert('Produto cadastrado com sucesso') 
                limpaInputs();
                location.reload();
            } else {
                console.log('Falha ao cadastrar produto.(enviarDadosAPI)')
            }
        } catch (erro) {
            console.error(erro)
        }
    }

    function limpaInputs(){
        inputNome.value = ''
        inputDesc.value = ''
        inputPrec.value = ''
        inputCate.value = ''
    }