let texto = ""
let result = ""
let textoDos = ""
let resultDos = ""

function  encriptado() {
    result=texto.replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    /*result=texto.replace("a", "ai")*/
};
function encriptador() {
    //desencriptrado = encriptado

    texto = document.getElementById("textoUno").value
    console.log(document.getElementById("textoUno").value)
    encriptado()
    document.getElementById("textoDos").innerHTML = result
    return
}


function desencriptado() {
    resultDos = textoDos.replace(/ufat/g, "u")
    .replace(/ober/g, "o")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e")
    .replace(/ai/g, "a")
    /*.replace(/mes/g, "");*/
};


function desencriptador () {
    textoDos = document.getElementById("textoUno").value
    console.log(document.getElementById("textoUno").value)
    desencriptado()
    document.getElementById("textoDos").innerHTML = resultDos
    return

}

function copiartexto(){
    document.getElementById("textoDos").select()
    document.execCommand("copy");
    return

}