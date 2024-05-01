var form = document.querySelector("#app")

 /*Não está aparecendo o botão sair:
        Error: A listener indicated an asynchronous response by returning true, 
        but the message channel closed before a response was received   
        //Cria um elemento do tipo button
        let botaoSair = document.createElement('button')
        //Adiciona um texto no botão
        botaoSair.innerText = "Sair da conta"
        //Adiciona um evento no botão chamando a função sair
        botaoSair.onclick = sair
        //Adiciona o elemento filho botaoSair ao elemento form 
        form.appendChild(botaoSair)*/
        
function calcular(event) {
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
    }else {
        alert("Por favor, preencha os campos peso e altura para calcular.")
    }

    document.getElementById('peso').value = ""
    document.getElementById('altura').value = ""
}