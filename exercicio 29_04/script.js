function exercicio3() {
    let numero = Number(prompt("Digite um número:"));
    if (numero > 0) alert("Positivo");
    else if (numero < 0) alert("Negativo");
    else alert("Zero");
}

function exercicio5() {
    let nota = Number(prompt("Digite a nota:"));
    if (nota >= 7) alert("Aprovado");
    else if (nota >= 5) alert("Recuperação");
    else alert("Reprovado");
}

function exercicio6() {
    let nivel = Number(prompt("Digite um número de 1 a 3:"));
    switch (nivel) {
        case 1: alert("Iniciante"); break;
        case 2: alert("Intermediário"); break;
        case 3: alert("Avançado"); break;
        default: alert("Valor inválido");
    }
}

function exercicio7() {
    let idade = Number(prompt("Digite a idade:"));
    let resultado = (idade >= 18) ? "Maior de idade" : "Menor de idade";
    alert(resultado);
}