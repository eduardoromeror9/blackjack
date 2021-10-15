
const miModulo = (() => {
    'use strict'

    let deck              = [];
    const tipos           = ['C', 'D', 'H', 'S'];
    const especiales      = ['A', 'J', 'Q', 'K'];
    let puntosJugadores = [];


    // referencias del html

    const btnPedir             = document.querySelector('#btnPedir');
    const btnDetener           = document.querySelector('#btnDetener');
    const btnNuevo             = document.querySelector('#btnNuevo');

    const divCartasJugadores     = document.querySelectorAll('.divCartas');
    const puntosHTML           = document.querySelectorAll('small');


    // Funcion para iniciar el juego

    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();

        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    };


    // Crea una baraja de cartas
    const crearDeck = () => {
        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos ) {
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let especial of especiales) {
                deck.push(especial + tipo);
            }
        }
        return _.shuffle(deck);
    }

    // Pedir carta

    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'No hay cartas en la baraja';
        }
        return deck.pop();
    }

    // Valor de las cartas

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;
    }

    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }


    const determinarGanador = () => {

        const [puntosMinimos, puntosComputadora ] = puntosJugadores;

        setTimeout(() => {  
            if (puntosComputadora === puntosMinimos) {
                alert('Nadie gana!!!');
            } else if (puntosMinimos > 21) {
                alert('La computadora gana!!');
            } else  if (puntosComputadora > 21) {
                alert('El jugador gana!!');
            } else {
                alert('La computadora gana!!');
            }
        }, 1000);
    }


    // Turno de la computadora

    const turnoComputadora = (puntosMinimos) => {

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();

    }

    // Eventos

    // Boton Pedir

    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);

        if (puntosJugador > 21) {
            console.warn('Perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            console.warn('21, Ganaste!!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }

    });


    // Boton detener

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugadores[0]);
    });


    // Boton de juego Nuevo

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    };

}) ();




