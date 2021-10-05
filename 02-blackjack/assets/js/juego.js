/**
 * 2C = Two of clubs (♣)
 * 2D = Two of diamonds (♦)
 * 2H = Two of hearts (♥)
 * 2S = Two of spades (♠)
 */

let deck =         [];
const tipos =      ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];


// Crea una baraja de cartas
const crearDeck = () => {
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

    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

// Tomar carta

const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en la baraja';
    }

    const carta = deck.pop();

    console.log(deck)
    console.log(carta)
    return carta;
}

// pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    // let puntos = 0;
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}

const valor = valorCarta( pedirCarta());
console.log({valor});