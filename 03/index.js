//Filtrar maior número
const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNumero = numeros.reduce((acumulador, valorAtual) => {
    let maior = acumulador;
    if (valorAtual > maior){
        maior = valorAtual;
    }
    return maior;
});

console.log (maiorNumero);