/**
 * Dias de la semana abrimos a las 11,
 * pero si es sabado o domingo abrimos a las 9.
 */

// Entra a un sitio web para consultar si esta abierto hoy.....

const dia = 1; // 0 = domingo, 1 = lunes, 2 = martes, etc.

const horaActual = 10;


let horaApertura = 9;
let mensaje;

// if (dia === 0 || dia === 6) {
//     console.log('Es fin de semana!');
//     horaApertura = 9;
// } else {
//     console.log('Es dia de semana!');
//     horaApertura = 11;
// }

horaApertura = ( [0, 6].includes(dia) ) ? 9 : 11;


// if (horaActual >= horaApertura) {
//     mensaje = 'Abierto';
// } else {
//     mensaje = `Cerrado, abrimos a las  ${ horaApertura }`;
// }

mensaje = (horaActual >= horaApertura) ? 'Abierto' : `Cerrado, abrimos a las ${ horaApertura }`;

console.log({horaApertura, mensaje });