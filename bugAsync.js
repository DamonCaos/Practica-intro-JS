/*Ejercicio 5 Arreglar bug de asincronía
Tenemos otro error que nuestro cliente nos pide arreglar. El cliente está pidiendo un usuario
y nos dice que está usando el id correcto el 1. Pero que siempre le da undefined. Nos ha
pasado el código que tenemos que revisar y arreglar. Para este problema crear un archivo
llamado bugAsync.js con la solución.*/
// Este programa simula una llamada asincrónica para obtener un usuario
/*function obtenerUsuario(id) {
let usuario;
setTimeout(() => {
if (id === 1) {
usuario = { id: 1, nombre: 'John Doe' };
}
}, 2000);
return usuario;
}*/

//mi solucion con promesas y async/await

function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (id === 1) {
            resolve ({ id: 1, nombre: 'John Doe'});
        }else {
            reject('User Not found');
        }    
        }, 1000);
    })
    };

const usuario = obtenerUsuario(1);
console.log(usuario);


async function main() {
    try {
    const usuario = await obtenerUsuario(1);
    console.log(usuario); 
    } catch (error) {
    console.error(error); 
    }
}
main();