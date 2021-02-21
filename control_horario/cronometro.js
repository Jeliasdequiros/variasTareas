// Variable global para actualizar el reloj
let fecha = new Date()   // fecha actual y ponemos a cero horas,minutos,etc
fecha.setHours(0),
fecha.setMinutes(0),
fecha.setSeconds(0),
fecha.setMilliseconds(0)

//variables globales
let horaActual
let cronometro

// función para llamar a la función reloj y actualizar el reloj cada segundo, si no sólo se actualiza una vez al entrar en la página
let intervalo = setInterval(reloj, 1000)


// función que se va a ejecutar cuando se cargue la página
window.addEventListener('load', inicio, true) 

// función que tiene los elementos a los que les asociamos un evento cuando se carga la página, que son los 3 botones
function inicio(){
    document.getElementById('start').addEventListener('click', start, true),
    document.getElementById('stop').addEventListener('click', stop, true),
    document.getElementById('reset').addEventListener('click', reset, true)
    reloj()
}

//Creamos las funciones
// función reloj para actualizar el reloj
function reloj(){
    horaActual = new Date()
    document.getElementById('reloj').innerHTML = horaActual.getHours()+':'+horaActual.getMinutes()+':'+horaActual.getSeconds()

    
}

// Creamos las funciones de inicio y pausa y reset
// La función start ejecuta la función cronómetro cada segundo y actualiza los elementos del campo cronómetro en ese segundo
function start(){
    cronometro = setInterval(cronometroOn, 1000)
    document.getElementById('resultados').innerHTML += 'INICIO:' + horaActual.getHours()+':'+horaActual.getMinutes()+':'+horaActual.getSeconds()+'<br/>'
}

function stop(){
    clearInterval(cronometro)
    document.getElementById('resultados').innerHTML += 'PAUSA:' + horaActual.getHours()+':'+horaActual.getMinutes()+':'+horaActual.getSeconds()+'<br/>'
}

// Limpiamos los campos poniéndolos a cero. Aquí usamos la variable fecha que necesitamos para trabajar con el cronómetro
function reset(){
    fecha.setHours(0),
    fecha.setMinutes(0),
    fecha.setSeconds(0),
    fecha.setMilliseconds(0)
    document.getElementById('cronometro').innerHTML = fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds()
}

function cronometroOn(){
    let horas = fecha.getHours()
        minutos = fecha.getMinutes()
        segundos = fecha.getSeconds()
        milisegundos = fecha.getUTCMilliseconds()

    fecha.setMilliseconds(fecha.getMilliseconds()+1000)

    document.getElementById('cronometro').innerHTML = fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds()
}
    


