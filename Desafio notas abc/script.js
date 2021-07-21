function transformar(){
    let nota = document.getElementById('inNota').value

    try{
        if(nota < 0 || nota > 100) throw "Por favor colocar uma nota válida de 0 à 100"
    } catch(e){
        outAlf.innerHTML = e
        return
    }

    let scoreA = nota >= 90
    let scoreB = nota >= 80
    let scoreC = nota >= 70
    let scoreD = nota >= 60
    let scoreF = nota < 60
    let scoreFinal;

    if(scoreA){
        scoreFinal = 'A'
    } else if(scoreB){
        scoreFinal = 'B'
    } else if(scoreC){
        scoreFinal = 'C'
    } else if(scoreD){
        scoreFinal = 'D'
    } else if(scoreF){
        scoreFinal = 'F'
    }
    outAlf.innerHTML = `O caractere referente à ${nota} é: ${scoreFinal}`
}