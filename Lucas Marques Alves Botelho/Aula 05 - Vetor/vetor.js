let teste = ["Lucas", "Senai", 21, 1.5];

console.log(teste[0])
console.log(teste) 

// Tamanho do Vetor - LENGTH
console.log("O vetor tem: ", teste.length)

// Adicionar elemento na última posição - PUSH
teste.push("Sesi")
console.log("Vetor depois do push: ", teste)

// Remover o elemento na última posição - POP
teste.pop();
teste.pop();
console.log("Vetor depois do pop: ", teste)

// Adicionar elemento na primera posição - UNSHIFT
teste.unshift("2D")
console.log("Vetor depois do unshift: ", teste)

// Retira o elemento ma primeira posição - SHIFT
teste.shift();
console.log("Vetor depois do shift: ", teste)

// Substitiu o elemento e pode excluir - SPLICE
teste.splice(1,0,"Professor")
console.log("Vetor depois de splice: ", teste)

teste.splice(1,2,"2D")
console.log("Vetor depois do splice: ", teste)
teste[2] = "SESI"
console.log(teste)