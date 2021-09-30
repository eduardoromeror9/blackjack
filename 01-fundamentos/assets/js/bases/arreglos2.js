let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono Trigger']
console.log('Largo: ',juegos.length)

let primero = juegos[0]
let ultimo = juegos[juegos.length - 1]

console.log({primero,ultimo})

juegos.forEach((elemento, indice, arr) => {
   console.log({elemento, indice, arr})
})

let nuevaLongitud = juegos.push('Star Fox') // Coloca (PUSH) un string al final del arreglo
console.log(nuevaLongitud)

juegos.unshift('Super Contra') // Coloca (UNSHIFT) un string al inicio del arreglo
console.log(juegos)

let juegoBorrado = juegos.pop() // Elimina el ultimo elemento del arreglo
console.log(juegoBorrado)

let pos = 1;
console.log(juegos)
let juegosBorrados = juegos.slice(pos, 2) // Extrae un elemento del arreglo
console.log({juegosBorrados})