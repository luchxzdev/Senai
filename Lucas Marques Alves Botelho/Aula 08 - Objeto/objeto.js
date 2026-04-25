console.log("Bom dia")

// Objeto

let aluno = {
    nome: "José",
    idade: 16,
    notas: [7, 8, 5]
}

console.log(aluno.nome)
console.log(aluno.idade)
aluno.idade = 17
console.log(aluno["idade"])

delete aluno.notas
console.log(aluno)

