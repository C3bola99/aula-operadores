//let raçaDeCusco = ['Salsichinha','Yorkshire','Shitzu','Poodle','Rottwailer']
//let frase = prompt("insira um número de 0 a 4")
//frase = Number(frase)
//console.log("a raça escolhida foi:", raçaDeCusco[frase] )


//let meuArray = [1, 2, 3, 4, 5, 6];
//let tamanhoOriginal = meuArray.length;
//console.log("Tamanho original do array:", tamanhoOriginal);
//meuArray.push(7);
//meuArray.splice(3, 2);
//let novoTamanho = meuArray.length;
//console.log("Novo tamanho do array:", novoTamanho);
//console.log(meuArray);

//Exercícios de interpretação
let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

//a- nao retorna nada
//b- retorna nulo
//c- retorna 11(.LENGHT)
//d- retorna 3
//e- retorna uma array(11)
//f- retorna 9

//Exercícios de interpretação 2

//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//Qual será o valor impresso no console se a entrada do usuário for:  "Subi num ônibus em Marrocos"?

//o valor impresso será de: SUBI NUM ONIBUS EM MIRROCOS (LENGHT(27))



//Exercícios de escrita de código
//exercício 1

//let nome = prompt( " digite seu nome: " )
//let email = prompt( " qual seu email? " )
//console.log ("o Email" , email , " foi cadastrado com sucesso, seja bem vindo" , nome )


//exercício 2

// Array com as comidas preferidas
let minhasComidasPreferidas = ["Lasanha", "Sushi", "Pizza", "Hambúrguer", "Shoarma"];

console.log("Minhas comidas preferidas:", minhasComidasPreferidas);
console.log("Essas são as minhas comidas preferidas:\n" + minhasComidasPreferidas.join("\n"));
let minhasComidasPreferidas = ["Lasanha", "Sushi", "Pizza", "Hambúrguer", "Tacos"];

// Perguntar ao usuário uma comida preferida e substituir a segunda comida da lista
minhasComidasPreferidas[1] = prompt("Digite uma comida que você gosta:") ?? minhasComidasPreferidas[1];

// Imprimir a nova lista no console
console.log("Nova lista de comidas preferidas:", minhasComidasPreferidas);


//exercício 3

// Criar um array vazio e armazená-lo em uma variável listaDeTarefas
let listaDeTarefas = [];
// Perguntar ao usuário 3 tarefas que ele precise realizar no dia e armazená-las no array
for (let i = 0; i < 3; i++) {
    let tarefa = prompt(`Digite a tarefa ${i + 1}:`);
    listaDeTarefas.push(tarefa);
}
console.log("Lista de Tarefas:", listaDeTarefas);
let indiceRealizada = prompt("Digite o índice da tarefa que você já realizou (0, 1 ou 2):");
// Remover da lista o item de índice que o usuário escolheu (se o índice for válido)
listaDeTarefas.splice(indiceRealizada >= 0 && indiceRealizada < listaDeTarefas.length ? indiceRealizada : -1, 1);
// Imprimir a lista atualizada no console
console.log("Lista de Tarefas atualizada:", listaDeTarefas);


//desafios
// Receber a frase como entrada do usuário
let frase = prompt("Digite uma frase:");

// Dividir a frase em palavras, ignorando os espaços em branco
let arrayPalavras = frase.split(" ").filter(palavra => palavra !== "");

// Imprimir o array resultante no console
console.log(arrayPalavras);


//desafio2

// Array fornecido
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

// Encontrar o índice da palavra "Abacaxi"
let indiceAbacaxi = frutas.indexOf("Abacaxi");

// Imprimir o índice e o tamanho do array
console.log("Índice da palavra 'Abacaxi':", indiceAbacaxi);
console.log("Tamanho do array:", frutas.length);
