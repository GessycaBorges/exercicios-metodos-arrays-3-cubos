//Filtrar maior string
const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const maiorString = cidades.reduce((acumulador, valorAtual) => {
    let maior = acumulador;
    if (valorAtual.length > maior.length){
        maior = valorAtual;
    }
    return maior;
});

console.log (maiorString);