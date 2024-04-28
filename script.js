//Captura o elemento html h2 que tem o id=area
var area = document.getElementById('area')

//Definindo um usuario para teste
const usuarioCadastrado = "nara"
const senhaCadastrada = 123456
const nomeUsuarioCadastrado = "Nara Alencar"

function entrar() {
    //Recebe uma entrada de dados do usuario através de uma caixa de diálogo
    var usuario = prompt("Digite seu usuario: ")
    var senha = prompt("Digite sua senha: ")

    //Verifica se a variável nome está vazia ou é nula
    if(usuario != usuarioCadastrado && senha != senhaCadastrada) {
        alert("Usuário ou senha inválidos!")
    }else {
        //Muda o texto do elemento area

        area.innerText = "Bem Vindo, " + nomeUsuarioCadastrado + " "
        
        //Cria um elemento do tipo button
        let botaoSair = document.createElement("button")
        //Adiciona um texto no botão
        botaoSair.innerText = "Sair da conta"
        //Adiciona um evento no botão chamando a função sair
        botaoSair.onclick = sair
        //Adiciona o elemento filho botaoSair ao elemento area 
        area.appendChild(botaoSair)
    }
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