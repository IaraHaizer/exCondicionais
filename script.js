/*Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez.*/

var nota1 = parseFloat(prompt('Digite sua primeira nota'))
var nota2 = parseFloat(prompt('Digite aqui sua segunda nota'))
var media = parseFloat((nota1 + nota2) / 2)
var res = window.document.getElementById('res')
if (media >= 7 && media < 10) {
    res.innerHTML = `Sua média foi ${media}. APROVADO!`
} else if (media == 10) {
    res.innerHTML = `Sua média foi ${media}. Você foi APROVADO com distinção!<br>Parabéns!!!`
} else if (media <7){
    res.innerHTML = `Sua média foi ${media}. Infelizmente você foi REPROVADO!`
} else{
    res.innerHTML = `Parece que você digitou algo errado! O valor máximo de cada nota é 10! Verifique e tente outra vez ♥!`
}
document.body.style.background = '#155059'
document.body.style.textAlign = 'center'