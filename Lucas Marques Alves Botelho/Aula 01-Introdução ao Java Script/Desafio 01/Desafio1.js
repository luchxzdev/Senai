// Lucas Marques, Arthur Fonseca e Gabriel Araújo

{

let nota
let presença
let participação
let trabalho

nota = 0
presença = 0
participação = 0
trabalho = 0

console.log ("Nota Final:", nota)
console.log ("Presença:", presença)
console.log ("Participação:", participação)
console.log ("Nota de Trabalho:", trabalho)

// Aprovado

if (nota >= 7 && presença >= 75 && participação >= 60 && trabalho >= 6) {
    console.log ("Situação: APROVADO")
}

// Recuperação

else if (nota >= 5 && nota <= 6.9 && presença >= 60) {
    console.log ("Situação: RECUPERAÇÃO")
}

else if (nota >= 7 && presença < 75) {
    console.log ("Situação: RECUPERAÇÃO")
}

else if (participação < 60 && nota >= 5) {
    console.log ("Situação: RECUPERAÇÃO")
}

// Reprovado

else if (nota < 5) {
    console.log ("Situação: REPROVADO")
}

else if (presença < 60) {
    console.log ("Situação: REPROVADO")
}

else if (trabalho < 6) {
    console.log ("Situação: REPROVADO")
}

}