//Captura o elemento html h2 que tem o id=area
var area = document.getElementById('area')
var form = document.getElementById('form-calc')

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
        window.location.href = 'calculadora.html';
        //Muda o texto do elemento area
        //area.innerText = "Bem Vindo, " + nomeUsuarioCadastrado + " "
        
        //Cria um elemento do tipo button
        let botaoSair = document.createElement('button')
        //Adiciona um texto no botão
        botaoSair.innerText = "Sair da conta"
        //Adiciona um evento no botão chamando a função sair
        botaoSair.onclick = sair
        //Adiciona o elemento filho botaoSair ao elemento area 
        form.appendChild(botaoSair)
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

function calcular(event) {
    /*Valores do IMC
    Menor que 18,5      Magreza
    Entre 18,5 e 24,9	Normal	        
    Entre 25,0 e 29,9	Sobrepeso	    
    Maior que 30,0	    Obesidade*/	   

    var peso
    var altura
    var imc
    var resultado

    //Evita que o formulario atualize e apague os dados preenchidos
    event.preventDefault()

    //Captura os elementos do html
    peso = document.getElementById('peso').value
    altura = document.getElementById('altura').value

    imc = peso / (altura*altura)
    resultado = document.getElementById('resultado')

    if(imc < 18.5) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado! Você está abaixo do peso.'
    }else if(imc > 18.5 && imc <= 24.9) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está no peso ideal.'
    }else if(imc > 25 && imc <= 29.9) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está acima do peso.'
    }else if(imc >= 30) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado! Você está muito acima do peso.'
    }

    document.getElementById('peso').value = ""
    document.getElementById('altura').value = ""
}