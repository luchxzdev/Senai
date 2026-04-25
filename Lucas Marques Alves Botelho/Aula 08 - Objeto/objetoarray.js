let alunosesi = [
    {
        nome: "João",
        idade: 14,
        nota: 7.4
    },
    {
        nome: "Maria",
        idade: 13,
        nota: 9.1
    }

]

console.log(alunosesi[0].nome)
console.log(alunosesi[1].nome)

alunosesi.forEach(aluno => {
    console.log("O nome do aluno é ", aluno.nome, " e tem", aluno.idade)    
});