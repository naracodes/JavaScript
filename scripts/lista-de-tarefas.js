let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let tarefas = [];

function renderTarefas() {
    //Limpa a lista para não ficar duplicando valores 
    listElement.innerHTML = "";
    
    //Map percorre a lista, tarefa acessa cada item 
    tarefas.map((tarefa) => {
        let liElement = document.createElement("li");
        //Cria um texto com o que o usuario digitou e armazena na variavel tarefaText
        let tarefaText = document.createTextNode(tarefa);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode(" excluir");
        linkElement.appendChild(linkText);
 
        //Pegando a posição da tarefa para usar depois para excluir
        let posicaoTarefa = tarefa.indexOf(tarefa);

        linkElement.setAttribute("onclick", `excluirTarefa(${posicaoTarefa})`);
        
        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}

function adicionarTarefa() {
    if(inputElement.value === "") {
        alert("Digite alguma tarefa.");
        return false;
    }else {
        let novaTarefa = inputElement.value;
        //Adiciona a nova tarefa a lista tarefas
        tarefas.push(novaTarefa);
        inputElement.value = "";
        //Chama a função para mostrar a lista de tarefas
        renderTarefas();
    }

    
}

buttonElement.onclick = adicionarTarefa;

function excluirTarefa(posicaoTarefa) {
    //Removendo um item da lista
    tarefas.splice(posicaoTarefa, 1);
    renderTarefas();
}
