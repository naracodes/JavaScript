//Captura o elemento html h2 que tem o id=area
var area = document.getElementById('area')

function entrar() {
    //Recebe uma entrada de dados do usuario através de uma caixa de diálogo
    var nome = prompt("Digite seu nome: ")

    //Verifica se a variável nome está vazia ou é nula
    if(nome === "" || nome === null) {
        alert("Ops, algo deu errado!")
        //Muda o texto do elemento area
        area.innerText = "Clique no botão para acessar..."
    }else {
        //Muda o texto do elemento area
        area.innerText = "Bem Vindo, " + nome + " "
        
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
    area.innerText = "Você saiu!"
}