let nota = 7.2
let situacao

/*if(nota >= 6) {
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
}*/

/*if(nota >= 6) situacao = 'APROVADO'
else situacao = 'REPROVADO'*/

// As três partes do sperador ternário
// 1ª parte: condição (que iria depois do if)
// Entre a 1ª e a 2ª parte -> ? (como se fosse uma pergunta)
// 2ª parte: o resultado, caso a condiçaõ seja VERDADEIRA
// Entre a 2ª e a 3ª parte -> : (como se fosse um else)
// 3ª parte: o resultado, caso a condição seja FALSA
situacao = (nota >= 6 ? 'APROVADO' : 'REPROVADO')

console.log(situacao)

let user = 'azename'
let userType

userType = user ==='admin' || user === 'root' ? 'Superuser' : 'Ordinary user'

console.log(userType)