// Ejercicio 1 --------------------------------------------------------->

const numeros = [];

for (let i = 0; i < 10; i++){
    const numeroAzar = Math.floor(Math.random()* 100); 
    numeros.push(numeroAzar);
}

console.log(numeros);

// Ejercicio 2 --------------------------------------------------------->

const creaLista = prompt("Ingresa varias palabras o números separadas por comas:");

const palabras = creaLista.split(",");

console.log(palabras);

// Ejercicio 3 --------------------------------------------------------->

const arreglo = [10, 40, 30, 20, 15, 5];

const arregloOrdenado = arreglo.sort((a, b) => a - b);

console.log("Arreglo ordenado de menor a mayor:", arregloOrdenado);

const numeroMenor = Math.min(...arreglo);
const numeroMayor = Math.max(...arreglo);

console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);
