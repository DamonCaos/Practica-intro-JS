/*Ejercicio 2 Arreglar bug
Nuestro cliente está intentando calcular el promedio de una lista de números pero nos dice
que no funciona. No nos da el error, solo este código que es el que tiene en producción.
Para este ejercicio tenemos que crear un archivo llamado bug.js con la solución.*/


const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

    // Uno de los errores esta en el bucle for, no puede ser i <= 0 ya que daria 
    for (let i = 0; i < numeros.length; i++) {
      sumaTotal += numeros[i]; // Sumar correctamente los elementos del array
    }

    const promedio = sumaTotal / numeros.length; 
    return promedio; 
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);
console.log("El promedio de la lista de números es:", promedioNumeros);