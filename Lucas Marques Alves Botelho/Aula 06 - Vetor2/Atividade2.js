// Questão 1
console.log("Questão 1:")

let numeros = [20,23,54,8,1];

console.log(numeros.some(numero=>
    numero>10
))

// Questão 2 
console.log("Questão 2:")

let idade = [20, 40, 18, 19,23];

console.log(idade.every(idade=>
    idade>=18
))

// Questão 3
console.log("Questão 3:")

let nomes = ["Lucas", "Arthur", "Guilherme", "Pedro", "Gabriel", "Lara", "Rafaella", "Luanna"]

let elementos = nomes.slice(0,3);
console.log("Os três primeiros nomes são: ", elementos)

let elementos2 = nomes.slice(5,8);
console.log("Os três últimos nomes são: ", elementos2)


// Questão 4
console.log("Questão 4:")

let frutas = ["Uva", "Laranja", "Tanjerina"];

let legumes = ["Pepino", "Berinjela", "Cenoura"]

let juntar = frutas.concat(legumes);
console.log(juntar)


// Questão 5
console.log("Questão 5:")

let palavras = ["Oi", "Como", "Você", "Está", "Hoje?"];

let frase = palavras.join(" ");
console.log(frase)