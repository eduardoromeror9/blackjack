let personaje = {
   nombre: 'Tony Stark',
   codeName: 'IronMan',
   vivo: false,
   edad: 45,
   coords: {
      lat: 35.1212,
      lng: -80.1212
   },
   trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
   direccion: {
      zip: '12345',
      ubicacion: 'Malibu',
   },
   'ultima-pelicula': 'EndGame',
   poderes: ['Dinamita', 'Volar'],
};

console.log('Nombre:', personaje.nombre);
console.log('Edad:', personaje['edad']);
console.log('Coors:', personaje.coords);
console.log('Latitud:', personaje.coords.lat);
console.log('Trajes', personaje.trajes.length);
console.log('ultimoTraje', personaje.trajes.length - 1);


const x = 'vivo';
console.log('Vivo:', personaje[x]);
console.log('Ultima Pelicula:', personaje['ultima-pelicula']);


delete personaje.edad;
console.log( personaje );

personaje.casado =  true;


const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// personaje = true;

Object.freeze( personaje );

personaje.dinero = 10000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log( personaje );


const propiedades = Object.getOwnPropertyNames( personaje );
const valores     = Object.values( personaje );
console.log({ propiedades, valores });