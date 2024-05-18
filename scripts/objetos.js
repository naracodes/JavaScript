//Criando um objeto
let pessoa = {
    nome: "Edinara",
    sobrenome: "Alencar",
    empresa: "Atêlie Alencar",
    cargo: "Administrativo"
};

console.log(pessoa.nome, pessoa.sobrenome);

//Desconstruindo um objeto para simplificar o código na hora da chamada 
//Depois dos nome do atributo eu posso renomear para um outro nome
const {nome:nomePessoa, sobrenome} = pessoa;

console.log(nomePessoa, sobrenome);

//Criando um array
let nomes = ["Edinara", "Nathan", "Lara"];

//Desconstruindo um array
const {0:primeira, 1:segunda, 2:terceira} = nomes;
console.log(primeira);

function convidados(...nomes) {
    console.log(nomes);
}

convidados("Maria", "lucas");