
const regresaTrue = () => {
    console.log('Regresa true')
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false')
    return false;
}

console.warn('Not o la negacion')
console.log(true);
console.log(!true);
console.log(!false);
console.log(!regresaFalse());

console.warn('AND') // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false

console.log('-----------------------');
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // false

console.log('------------ && -----------');
regresaFalse() && regresaTrue(); // false

console.warn('OR')
console.log(true || false); // true
console.log(false || false); // false

console.warn('------------ proTip -----------');
const soyUndedined = undefined;
const soyNull = null;
const esFalso = false;

const a1 = false && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo' && esFalso;
const a3 = esFalso || 'Ya no es falso';
const a4 = esFalso || soyUndedined || soyNull || 'Ya no es falso de nuevo';
console.log({a1, a2, a3, a4});