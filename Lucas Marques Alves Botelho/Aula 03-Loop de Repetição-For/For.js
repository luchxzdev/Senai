// For é o mesmo que "para-faca-fimpara"

let somapar=0;
let soma=0;
for(let i=1;i<=100;i++ ){
   if (i%2!=0){
     console.log(i)
        soma=soma+i
   }else {
    somapar=somapar+i
   }
   }
console.log(soma)
console.log(somapar)
