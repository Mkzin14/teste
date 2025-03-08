//Exercício 3: Estruturas de Controle

function verificarIdade(idade) {

    if (idade < 18) {
        console.log("A pessoa é menor de idade.");
    }
    
    else if (idade >= 18 && idade < 65) {
        console.log("A pessoa é maior de idade.");
    }
    
    else if (idade >= 65) {
        console.log("A pessoa é idosa.");
    }
}

let idade = 70;
verificarIdade(idade);
