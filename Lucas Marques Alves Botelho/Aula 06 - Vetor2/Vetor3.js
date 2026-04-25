let frutas = ["Maçã", "Uva", "Banana", "Laranja"];

let numeros = [1,3,-10,3.4,1];

//SOME-se um elemento do vetor satisfazer a condição
console.log(numeros.some(numero=>
    numero>1
))

//EVERY-Se todos os elementos satisfazerem a condição 
console.log(numeros.every(numero=>
    numero>-11
))

//SLICE-Corta o vetor - primeiro número=posição do início do corte no vetor   segundo número=posição do fnal do corte
let elementos = numeros.slice(1,4);
console.log(elementos)

//CONCAT-junta os vetores criando um só 
let juntar = frutas.concat(numeros, elementos);
console.log(juntar)

//JOIN-Tranforma o vetor em texto
let texto = frutas.join(" - ");
console.log(texto)