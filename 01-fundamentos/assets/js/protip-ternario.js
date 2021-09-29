const elMayor = (a,b) => (a > b) ? a : b;
const tieneMembresia = (miembro) => (miembro) ? 'Sí es miembro' : 'No es miembro';


console.log(elMayor(20,15));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'Juan',
    'Pedro',
    'Luis', 
    amigo ? 'Thor' : 'Loki'
];

console.log(amigosArr);