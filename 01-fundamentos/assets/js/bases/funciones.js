
function saludar(nombre) {
   console.log(arguments)
   console.log('Hola ' + nombre);
   return 1;
}

const saludar2 = function(nombre) {   
   console.log('Hola ' + nombre);
}

const saludarFlecha = (nombre) => {
   console.log('Hola ' + nombre);
}

// saludar();
// saludarFlecha('sal Eduardo');
// saludarFlecha('sal Pedro');
// saludar('Hector');

function sumar(a, b) {
   return a + b;
}

const sumar2 = (a, b) => a + b;

console.log(sumar2(2, 2));

const getAleatorio = () => Math.random();

console.log(getAleatorio());