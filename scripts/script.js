//Captura o elemento html h2 que tem o id=area
var area = document.getElementById('area')

//Definindo um usuario para teste
const usuarioCadastrado = "nara"
const senhaCadastrada = 123456
const nomeUsuarioCadastrado = "Nara Alencar"

function entrar(event) {
    usuario = document.getElementById('usuario').value
    senha = document.getElementById('senha').value
    event.preventDefault()
    //Verifica se a variável nome está vazia ou é nula
    if(usuario != usuarioCadastrado || senha != senhaCadastrada) {
        alert("Usuário ou senha inválidos!")
    }else {
        //Redireciona para uma nova página
        window.location.href = 'calculadora.html'
    }

    document.getElementById('usuario').value = ""
    document.getElementById('senha').value = ""
}

function sair() {
    alert("Até mais!")
    //Muda o texto do elemento area
    area.innerText = "Gerenciamento de Estoque"
}

function cadastrar() {
    var nome = prompt("Digite seu nome completo: ")
    var usuario = prompt("Digite seu nome de usuario: ")
    var senha = prompt("Digite sua senha: ")

    if(nome === null || usuario === null || senha === null){
        alert("Por favor, tente novamente e insira todos os dados!")
    }else {
        alert("Cadastro feito com sucesso!")
    }
}