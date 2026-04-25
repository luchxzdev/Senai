let numeros = [-10, 2, 3, -1];

let frutas = ["Maçã", "Uva", "Laranja", "Melancia"];

// REVERSE-reverte a ordem do vetor
console.log(numeros.reverse())

// SORT-deixa em ordem alfabética(não serve em números)

frutas.sort();
console.log(frutas)

// Ordem crescente (modificação para usar com números)

numeros.sort((a,b)=>a-b)
console.log(numeros)

let vetor = [1, 2, [3, 4]];
let vetornovo = vetor.flat();
console.log(vetornovo);

let novo = [...numeros];
numeros.push(30);
console.log(novo)
