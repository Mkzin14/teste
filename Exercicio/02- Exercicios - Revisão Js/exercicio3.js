//Exercício 5: Funções

function calcularNumeros(num) {
    const dobro = num * 2;
    const triplo = num * 3;
    const quadrado = num * num;
    
    return {
        dobro: dobro,
        triplo: triplo,
        quadrado: quadrado
    };
}

let numero = 5;
let resultado = calcularNumeros(numero);
console.log(`O dobro de ${numero} é: ${resultado.dobro}`);
console.log(`O triplo de ${numero} é: ${resultado.triplo}`);
console.log(`O quadrado de ${numero} é: ${resultado.quadrado}`);
