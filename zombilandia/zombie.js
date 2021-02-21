// VARIABLES / FUNCIONES para darle el movimiento. En nuestro 
let x=0, y=0       // Empezamos del punto cero
const zombie = document.getElementById('zombie'),
        up =() => zombie.style.transform = `translate(${x}%,${y -= 50}%)`
        down =() => zombie.style.transform = `translate(${x}%,${y += 50}%)`
        right =() => zombie.style.transform = `translate(${x += 50}%,${y}%)`
        left =() => zombie.style.transform = `translate(${x -= 50}%,${y}%)`

// mover zombie con los cursores
document.addEventListener ('keyup', evento => {
    switch (evento.key) {
        case 'ArrowUp':
            up()
            break
        case 'ArrowDown':
            down()
            break
        case 'ArrowRight':
            right()
            break
        case 'ArrowLeft':
            left()
            break
    }
})