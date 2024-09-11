/*1 ejecricio: Crea un archivo ejercicio1.js que tenga un objeto llamado usuario con los siguientes
campos:
- Nombre (el tuyo o inventado)
- Apellidos (el tuyo o inventado)
- Una lista con los temas del bootcamp Node.js, Git y react con sus nombres y fechas
de inicio de cada módulo. Fecha en formato “YYYY-MM-DD”
- Si estás en búsqueda activa con un valor de verdadero o false
En este archivo queremos mostrar por pantalla la fecha de inicio del módulo de react del
objeto que hemos creado anteriormente.*/

const usuario = {
    nombre : 'Javier',
    apellidos: 'Rodriguez',
    busquedActiva: true,
    modulos: [{nombre: 'desarrollo backend con Node.js', fechaInicio: '2024-10-21'},
        {nombre: 'Fundamentos REACT', fechaInicio: '2024-12-16'},
        {nombre: 'Trabajo en equipo con GIT y metodologías ágiles', fechaInicio: '2025-02-05'}
    ]

};
const fechaInicioModuloReact = usuario.modulos[1].fechaInicio;
console.log(fechaInicioModuloReact);