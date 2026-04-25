// Questão 1 
console.log("Questão 1:")

let numeros = [7, 8, 5, 10, 6, 8, 9, 5, 10, 7];

numeros.forEach(numero => {
    console.log("Nota: ", numero)
});

// Questão 2
console.log("Questão 2:")

let notasdobro = numeros.map(function(numero){
    return numero*2
})
console.log("Nota:", notasdobro)

// Questão 3 
console.log("Questão 3:")

let maiorque7 = numeros.filter(numero=>numero>=7)
    console.log("Notas maiores ou iguais a 7: ", maiorque7)

// Questão 4
console.log("Questão 4:")

let media = 0
let soma = numeros.reduce((acumulador, numero)=>{
    return acumulador+numero
}, 0)
console.log("A soma das notas é:", soma)
media = soma/10
console.log("A média das notas é:", media)

// Questão 5
console.log("Questão 5:")

console.log(numeros.indexOf(5))
console.log(numeros.lastIndexOf(5))

