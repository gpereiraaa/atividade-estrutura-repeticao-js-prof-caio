'use strict'

const botaoCalcular = document.getElementById('botao-calcular')

function tabuada(){
    const multiplicando = document.getElementById('valor-tabuada').value
    const bloco = document.getElementById('mostrar')

    bloco.textContent = ''

    let i = 0
    while(i <= 10){
        tabuada = multiplicando * i
        let resultado = `${multiplicando} x ${i} = ${tabuada}`
        i++
        const exibir = document.createElement('p')
        exibir.textContent = resultado
        bloco.appendChild(exibir)
    }
}


botaoCalcular.addEventListener('click', tabuada)
