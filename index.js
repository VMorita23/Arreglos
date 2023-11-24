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

