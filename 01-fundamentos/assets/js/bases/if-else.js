let a = 5;

if (a >= 10) {
  console.log("A es mayor o igual a 10");
} else {
    console.log("A es menor a 10");
}

// console.log("Fin del programa");

const hoy = new Date();
let dia = hoy.getDay();

console.log({dia});

if (dia === 0) {
    console.log("Es domingo");
} else{
    console.log("No es domingo");
}

// dia = prompt("Ingrese el día de la semana");
dia = 4;

// const diasLetas = {
//     0: "Domingo",
//     1: "Lunes",
//     2: "Martes",
//     3: "Miercoles",
//     4: "Jueves",
//     5: "Viernes",
//     6: "Sabado",
// }

const diasLetas = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

console.log(diasLetas[dia] || "No es un dia de la semana");