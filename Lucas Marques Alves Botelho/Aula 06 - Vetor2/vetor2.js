let frutas = ["Uva", "Maçã", "Banana", "Laranja"];

let numeros = [10, 2, -1, 5.3, 10]

// foreach

frutas.forEach(fruta => {
    console.log("A fruta é: ", fruta)
});

//.map

let dobrados = numeros.map(function(numero){
    return numero*2
})
console.log(dobrados)

// .filter

let maiorque1 = numeros.filter(numero=>numero>1)
    console.log(maiorque1)

// .reduce

let soma = numeros.reduce((acumulador, numero)=>{
    return acumulador+numero
}, 0)
console.log(soma)

// indexof mostra a primeira posição que o elemento aparece - lastindexof mostra a última posição do elemento
// entre parenteses é colocado o elemento

console.log(numeros.indexOf(10))

console.log(numeros.lastIndexOf(10))

// FIND-encontrar elemento na array

let buscar = frutas.find(item => item == "Maçã")
    console.log(buscar)