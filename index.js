//exercício 1

let idade = prompt( "qual a sua idade:" )
let idadeAmigo= prompt( "qual a idade do seu amigo(a)? " )

console.log ("Sua idade é maior do que a do seu melhor amigo?" , idade>idadeAmigo)
console.log ("A diferença de idade entre os dois é de:" , idade>idadeAmigo)


//fim exercício1

//exercício 2

let N1 = prompt( "Digite um número:" )
const resultado = (Number(N1) %2 )

console.log ("o resto da divisão desse número é de:" , resultado)
//o restante da divisão de número sempre retorna 0
//o restando da divisão de número ímpar sempre retorna 1

//fim do exercício 2


//exercício 3

// Pergunta a idade do usuário em anos
let idadeAnos = prompt("Qual é a sua idade em anos?");

// Converte a idade para números inteiros
idadeAnos = parseInt(idadeAnos);

// Calcula a idade em meses, dias e horas
let idadeMeses = idadeAnos * 12;
let idadeDias = idadeAnos * 365; // Considerando que um ano tem 365 dias
let idadeHoras = idadeDias * 24;

// Imprime as informações no console
console.log("Sua idade em meses é: " + idadeMeses);
console.log("Sua idade em dias é: " + idadeDias);
console.log("Sua idade em horas é: " + idadeHoras);

//fim do exercício 3


//exercício 4

// Pergunta ao usuário dois números
let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");

// Converte os números para tipo numérico
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

// Verifica se o primeiro número é maior que o segundo
let maiorQue = numero1 > numero2;

// Verifica se o primeiro número é igual ao segundo
let igualA = numero1 === numero2;

// Verifica se o primeiro número é divisível pelo segundo
let divisivelPor = numero1 % numero2 === 0;

// Verifica se o segundo número é divisível pelo primeiro
let divisivelPor2 = numero2 % numero1 === 0;

// Imprime os resultados
console.log("O primeiro número é maior que o segundo? " + maiorQue);
console.log("O primeiro número é igual ao segundo? " + igualA);
console.log("O primeiro número é divisível pelo segundo? " + divisivelPor);
console.log("O segundo número é divisível pelo primeiro? " + divisivelPor2);


//escrevendo em diferentes strings

let nome = prompt( "qual seu nome?" )
let corFavorita= prompt( "qual sua cor favorita? " )
let frase = `a cor preferida de ${nome} é ${corFavorita}`
console.log (frase)
