// Creamos una función de reset para limpiar los campos

function reset(){
    document.getElementById('formulario1').reset()
}

// creamos las funciones:
function sumar(){
    // Nos recogerá el valor del número de cada input
    // Usamos parseInt para que tome el input como un número y no como texto para poder operar con el
    let primero = parseInt(document.getElementById('numero1').value)
    let segundo = parseInt(document.getElementById('numero2').value)
    // Queremos nos muestre el resultado en el h3
    document.getElementById('resultado').innerHTML = primero+ segundo

}

function restar(){
    let primero = parseInt(document.getElementById('numero1').value)
    let segundo = parseInt(document.getElementById('numero2').value)
    document.getElementById('resultado').innerHTML = primero-segundo

}

function multiplicar(){
    let primero = parseInt(document.getElementById('numero1').value)
    let segundo = parseInt(document.getElementById('numero2').value)
    document.getElementById('resultado').innerHTML = primero*segundo

}

function dividir(){
    let primero = parseInt(document.getElementById('numero1').value)
    let segundo = parseInt(document.getElementById('numero2').value)
    document.getElementById('resultado').innerHTML = primero/segundo

}