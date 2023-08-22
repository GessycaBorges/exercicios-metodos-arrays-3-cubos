//Lista de exercícios de Ordenação
//a) Ordenar em ordem crescente.
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
ordemCrescente = numeros.sort((a, b) => {
    return a - b;
});
console.log (numeros);

//b) Ordenar em ordem decrescente.
numeros.sort((a, b) => {
    return b - a;
});
console.log (numeros);

//c) Ordenar em ordem crescente (código Unicode).
numeros.sort();
console.log (numeros);

//d) Ordenar em ordem alfabética.
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
frutas.sort((a, b) => {
    return a.localeCompare(b);
});
console.log(frutas);

//e) Ordenar em ordem alfabética decrescente.
frutas.sort((a, b) => {
    return b.localeCompare(a);
});
console.log(frutas);

//f) Ordenar em ordem crescente, de acordo com a quantidade de caracters.
frutas.sort((primeiro, segundo) => {
    return (primeiro.length) - (segundo.length);
});
console.log(frutas);