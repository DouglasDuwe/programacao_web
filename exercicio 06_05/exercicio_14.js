function verificarNumero(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(verificarNumero(8));
console.log(verificarNumero(7));