//Desafio 1


// Função para converter Fahrenheit para Kelvin
function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9) + 273.15;
}

// Função para converter Celsius para Fahrenheit
function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

// Função para converter Celsius para Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

// Calcula e mostra os resultados
console.log("77°F é igual a " + fahrenheitToKelvin(77).toFixed(2) + " K");
console.log("80°C é igual a " + celsiusToFahrenheit(80).toFixed(2) + " °F");
console.log("30°C é igual a " + celsiusToFahrenheit(30).toFixed(2) + " °F e " + celsiusToKelvin(30).toFixed(2) + " K");

let temperaturaUsuario = prompt("Digite a temperatura em graus Celsius que deseja converter:");
temperaturaUsuario = parseInt(temperaturaUsuario);
console.log(temperaturaUsuario + "°C é igual a " + celsiusToFahrenheit(temperaturaUsuario).toFixed(2) + " °F e " + celsiusToKelvin(temperaturaUsuario).toFixed(2) + " K");


//Desafio 2


// Definindo o custo por quilowatt-hora
const custoQuilowattHora = 0.05;

// Calcula o valor a ser pago sem desconto
let quilowattHora = 280;
let valorSemDesconto = quilowattHora * custoQuilowattHora;
console.log("a) Valor a ser pago sem desconto: R$" + valorSemDesconto);

// Calcula o valor a ser pago com desconto de 15%
let descontoPorcentagem = 15;
let valorComDesconto = valorSemDesconto - (valorSemDesconto * (descontoPorcentagem / 100));
console.log("b) Valor a ser pago com " + descontoPorcentagem + "% de desconto: R$" + valorComDesconto);


//Desafio 3


// a) Convertendo libra (lb) para quilograma (kg)
let lb = 20;
let kg = lb * 0.453592;
console.log("a) 20lb equivalem a " + kg + " kg");

// b) Convertendo onça (oz) para quilograma (kg)
let oz = 10.5;
kg = oz * 0.0283495;
console.log("b) 10.5oz equivalem a " + kg + " kg");

// c) Convertendo milha (mi) para metro (m)
let mi = 100;
let m = mi * 1609.34;
console.log("c) 100mi equivalem a " + m + " m");

// d) Convertendo pés (ft) para metro (m)
let ft = 50;
m = ft * 0.3048;
console.log("d) 50ft equivalem a " + m + " m");

// e) Convertendo galão (gal) para litro (l)
let gal = 103.56;
let l = gal * 3.78541;
console.log("e) 103.56gal equivalem a " + l + " l");

// f) Convertendo xícara (xic) para litro (l)
let xic = 450;
l = xic * 0.24;
console.log("f) 450 xic equivalem a " + l + " l");

// g) Convertendo milhas (mi) para metros (m) com entrada do usuário
mi = prompt("Digite a quantidade de milhas:");
m = mi * 1609.34;
console.log("g) " + mi + " mi equivalem a " + m + " m");




