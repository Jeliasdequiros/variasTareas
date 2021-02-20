// Creamos la función con el tipo de cambio y recogemos el valor introducido en el recuadro dólares

function Convertiradolares(){
    let tipodeCambio = 0.83
        cantidadAcambiar = document.getElementById('dolares').value

    // el resultado será la multiplicación de dólares * tipo de cambio
    resultado = cantidadAcambiar * tipodeCambio

    // Si el resultado es menor o igual a cero escribimos un mensaje al usuario. En caso contrario la función nos mostrará el resultado
    if(resultado <= 0){
        alert('Elija otra cantidad')
    }else {
        alert (cantidadAcambiar + 'dolares son ' + resultado + 'Euros')
    }
}







