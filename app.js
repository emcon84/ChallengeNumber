const prompt = require('prompt-sync')();

function arrayBits(n) {
    const binary = n.toString(2);
    console.log('Binario ->', binary)
    const bits = Array.from(binary);

    const result = [bits.filter(bit => bit === '1').length];

    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === '1') {
            result.push(i);
        }
    }

    return result;
}

// Solicitar entrada del usuario
const numero = parseInt(prompt('Ingrese un número entero: '));
const arregloBits = arrayBits(numero);
console.log('Arreglo de bits:', arregloBits);