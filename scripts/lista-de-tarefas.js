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
        //Cria um texto com o que o usuario digitou e armazena na variavel tarefaNode
        let tarefaNode = document.createTextNode(tarefa);

        liElement.appendChild(tarefaNode);
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