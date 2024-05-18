const produtos = ["Computador", "Telefone", "Mouse", "Teclado"];
console.log("Lista de produtos: " + produtos);
console.log("Quantidade de produtos: " + produtos.length);
let indexMouse = produtos.indexOf("Mouse");

// Tirando produto Mouse da lista e retornando apenas os que sobraram. 
console.log(produtos.filter((element) => element !== "Mouse"));

const findProduto = produtos.find((element) => element == "Computador");

if(findProduto) {
    console.log(`Este produto existe: ${findProduto}`);
}else {
    console.log("Desculpe, este produto não foi encontrado.");
}

console.log("Lista de produtos: " + produtos);
produtos.splice(1, 1);
console.log("Lista de produtos: " + produtos);


const numeros = [1, 3, 5, 7, 0, 9];
console.log("Numeros ordenados: " + numeros.sort());

console.log("Lista de numeros: " + numeros);
console.log("Numero removido " + numeros.shift());
console.log("Invertendo a lista: " + numeros.reverse());

let hoje = "18/05/2024";
//A função split divide uma string em substrings
const [dia, mes, ano] = hoje.split("/");
console.log("Dia: " + dia);
console.log("Mês: " + mes);
console.log("Ano: " + ano);