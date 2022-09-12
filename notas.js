function notasAlunos(){

    let nota1 = prompt ("Digite a primeira nota: ")
    let nota2 = prompt ("Digite a segunda nota: ")
    let nota3 = prompt ("Digite a terceira nota: ")
    let media = nota1 + nota2 + nota3 / 3
    
    let situacao = (media >= 7) ? "APROVADO" : "REPROVADO"
        alert(situacao) 

}

function resto(){
    let nt1 = prompt ("Digite a primeira nota: ")
    let nt2 = prompt ("Digite a segunda nota: ")
    let soma = parseFloat(nt1 ) + parseFloat(nt2)
    let notaMinima = 21 - soma
    alert("Você precisa de: " + notaMinima +' para ser aprovado.')
}

resto()




