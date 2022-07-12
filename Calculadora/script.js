var setResultado = document.getElementById("resultado")
setResultado.style.color = "red"
setResultado.style.fontSize = "10vh"

function somar(){
    var first = document.getElementById("numero1").value
    var second = document.getElementById("numero2").value
    var num1 = parseInt(first)
    var num2 = parseInt(second)
    var soma = num1 + num2
    setResultado.textContent = soma
    esvaziar()
    NaNumber(first, second)
}

function subtrair(){
    var first = document.getElementById("numero1").value
    var second = document.getElementById("numero2").value
    var num1 = parseInt(first)
    var num2 = parseInt(second)
    var subtrair = num1 - num2
    setResultado.textContent = subtrair
    esvaziar()
    NaNumber(first, second)
}

function multiplicar(){
    var first = document.getElementById("numero1").value
    var second = document.getElementById("numero2").value
    var num1 = parseInt(first)
    var num2 = parseInt(second)
    var multiplicar = num1 * num2
    setResultado.textContent = multiplicar
    esvaziar()
    NaNumber(first, second)
}

function dividir(){
    var first = document.getElementById("numero1").value
    var second = document.getElementById("numero2").value
    var num1 = parseInt(first)
    var num2 = parseInt(second)
    var dividir = num1 / num2
    setResultado.textContent = dividir
    esvaziar()
    NaNumber(first, second)
}

function esvaziar(){
    var first = document.getElementById("numero1")
    var second = document.getElementById("numero2")
    first.value = ""
    second.value = ""
}

function limpar(){
    setResultado.textContent = ""
}

function NaNumber(first, second){
    if(first === "" && second === ""){
        setResultado.textContent = "Insira dois numeros!"
    }
}