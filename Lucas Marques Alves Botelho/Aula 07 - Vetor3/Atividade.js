const produtos = ["Teclado", "Mouse", "Monitor", "CPU", "MousePad"];
const preços = [20, 30, 500, 2000, 10];

// Parte 1
console.log("Parte 1:")

// .1

produtos.forEach(produto => {
    console.log(produto)
});
preços.forEach(preço => {
    console.log(preço)
});

// .2
let nomeapenas = produtos.map(nome=>nome);
console.log(nomeapenas)


// .3

let maiorque500 = preços.filter(preço=>preço>500)
    console.log(maiorque500)

// .4

let total = preços.reduce((acumulador, preço)=>{
    return acumulador+preço
})
console.log(total)

// Parte 2
console.log("Parte 2:")

// .5

let buscarmouse = produtos.find(item => item == "Mouse");
    console.log(buscarmouse)
// .6

console.log(produtos.indexOf("Monitor"))

// .7

let teclado = produtos.includes("Teclado");
console.log(teclado)

// .8
console.log(preços.some(preço=>
    preço>3000
))

// .9
console.log(preços.every(preço=>
    preço>0
))

// Parte 3
console.log("Parte 3:")

// .10
let elementos = produtos.slice(0,3);
console.log(elementos)

// .11

const adicionar = produtos.concat("Gabinete");
    console.log(adicionar)

// .12

const texto = adicionar.join(" - ")
console.log(texto)

// .13
console.log(adicionar.reverse())

// .14

preços.sort((a,b)=>a-b)
console.log(preços)

// PARTE 5
console.log("pARTE 5:")

// .15
 const novosprodutos = [...produtos,"Headset"];
 console.log(novosprodutos)

 const novopreço = [...preços,"150"];
 console.log(novopreço)


