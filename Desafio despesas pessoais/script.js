let despesas = []
let receitas = []
let somaReceita = 0
let somaDespesa = 0
function incluirDespesa(){
    let refDesp = document.getElementById('inDespesa').value
    let valDesp = Number(document.getElementById('inValDespesa').value)
    //testa as entrada e caso haja erro reporta
    try{
        if(refDesp == '') throw `Por favor digite um nome de<br> referência válido...`
        if(valDesp<=0) throw `Por favor digite um <br>valor válido...`
    } catch(e){
        saidaDesp.innerHTML = e
        return
    }
    //coloca o objeto person no array
    despesas.push(new Person(refDesp, valDesp))
    //limpa as saidas para não concatenar
    inDespesa.value = ''
    inValDespesa.value = ''
    saidaTotal.innerHTML = ''
    saidaDesp.innerHTML = ''
    somaDespesa=0
    //cria o loop para as entradas serem mostradas e somadas
    for(let i = 0;i<despesas.length;i++){
        somaDespesa += despesas[i].valor
        saidaDesp.innerHTML += `${despesas[i].ref} R$ ${despesas[i].valor}\n`
        somaDesp.innerHTML = `Soma total: ${somaDespesa.toFixed(2)}`
    }
    
}
//cria o objeto 
function Person(refDesp, valDesp){
    this.ref = refDesp
    this.valor = valDesp
}


function incluirReceita(){
    let refRec = document.getElementById('inReceita').value
    let valRec = Number(document.getElementById('inValReceita').value)
    //testar as entradas
    try{
        if(refRec == '') throw `Por favor digite um nome de<br> referência válido...`
        if(valRec<=0) throw `Por favor digite um <br>valor válido...`
    } catch(e){
        saidaRec.innerHTML = e
        return
    }
    //adicionar um novo objeto ao array
    receitas.push(new Person(refRec, valRec))
    //limpar todas as saídas para não concatenar
    inReceita.value = ''
    inValReceita.value = ''
    somaReceita=0
    saidaTotal.innerHTML = ''
    saidaRec.innerHTML = ''
    //cria o loop para as entradas serem mostradas e somadas
    for(let i = 0;i<receitas.length;i++){
        somaReceita += receitas[i].valor
        saidaRec.innerHTML += `${receitas[i].ref} R$ ${receitas[i].valor}\n`
        somaRec.innerHTML = `Soma total: ${somaReceita.toFixed(2)}\n`
    }
}
//cria o objeto
function Person(refRec, valRec){
    this.ref = refRec
    this.valor = valRec
}
//faz o calculo do total, analisando se o saldo é positivo ou negativo
function calcular(){
    let somaGeral
    somaGeral = 0
    somaGeral = somaReceita - somaDespesa
    if(somaGeral < 0){
        saidaTotal.innerHTML = `Controle melhor seus gastos, seu saldo devedor é: R$ ${somaGeral.toFixed(2)}`
    } else if(somaGeral>0) {
        saidaTotal.innerHTML = `Parabéns, você está controlando bem seus gastos, seu saldo é: R$ ${somaGeral.toFixed(2)}`
    } else {
        saidaTotal.innerHTML = `Você empatou suas receitas e despesas, seu saldo é: R$ ${somaGeral.toFixed(2)}`
    }
    
}
