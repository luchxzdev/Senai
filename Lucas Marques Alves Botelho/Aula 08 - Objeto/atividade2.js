const estoque = [
{ 
    modelo: "iPhone 13", 
    marca: "Apple", 
    preco: 4500, 
    emEstoque:true 
},
{ 
    modelo: "Galaxy S23", 
    marca: "Samsung", 
    preco: 3800, 
    emEstoque:true 
},
{ 
    modelo: "Redmi Note 12", 
    marca: "Xiaomi", 
    preco: 1500,
    emEstoque: false 
},
{ 
    modelo: "Moto G54", 
    marca: "Motorola", 
    preco: 1200, 
    emEstoque:true 
},
{ 
    modelo: "Galaxy A54", 
    marca: "Samsung", 
    preco: 2200, 
    emEstoque:true 
}
];
console.log("=-=-=-=-=MODELOS DISPONÍVEIS=-=-=-=-=")
estoque.forEach(estoque => {
    if (estoque.emEstoque==true){
    console.log(estoque.modelo)
    }
});
console.log("=-=-=-=-=Custo-Banefício=-=-=-=-=")

let custobeneficio = estoque.filter(x=>
    x.preco<2500)
     
    custobeneficio.forEach(x => {
          if (x.emEstoque==true){
        console.log(x.modelo)
          }
});

let soma = estoque.reduce((acumulador, x)=>{
    return acumulador+ x.preco
}, 0)
console.log("=-=-=-=SOMA DOS VALORES=-=-=-=")
console.log(soma)
   
