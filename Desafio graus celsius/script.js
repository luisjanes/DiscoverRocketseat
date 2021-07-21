
function transform(temperature){
    const celsiusExisist = temperature.toUpperCase().includes('C')
    const fahrenheitExisist = temperature.toUpperCase().includes('F')
    
    if(!celsiusExisist && !fahrenheitExisist){
        throw `${temperature} não está definida como válida`
    } 
        let newTemperature = Number(temperature.toUpperCase().replace("F",""))
        let celToFah = (newTemperature-32) * 5/9
        let retorno = `${celToFah.toFixed(2)} graus Celsius`
    

    if(celsiusExisist){
        newTemperature = Number(temperature.toUpperCase().replace("C",""))
        celToFah = newTemperature*9/5+32
        retorno = `${celToFah.toFixed(2)} graus Fahrenheit`
    }
    return retorno
}
try{
    for(let i=0;i<100;i+=10)
    console.log(transform(i+"c"))
    
} catch (e){
    console.log(e)
}







/*if(celsiusExisist){
    Number(temperature)
    let f = temperature*9/5+32
    return `São ${f} graus Fahrenheit`
}
let c = (temperature-32) * 5/9
return `São ${c} graus Celsius`*/