/*Ejercicio 4 Transformaciones con map y filter
Nuestro cliente tiene un array de datos y nos ha pedido que saquemos la siguiente
información. El listado de los desarrolladores que tengan como habilidad “JavaScript” y el
listado de los proyectos en el que sus desarrolladores trabajan.
Estos son los datos:*/
const datos = [
{
id: 1,
nombre: 'Juan',
habilidades: ['JavaScript', 'HTML', 'CSS'],
proyectos: [
{ id: 1, nombre: 'Proyecto 1' },
{ id: 2, nombre: 'Proyecto 2' }
]
},
{
id: 2,
nombre: 'María',
habilidades: ['Python', 'SQL', 'Django'],
proyectos: [
{ id: 3, nombre: 'Proyecto 3' },
{ id: 4, nombre: 'Proyecto 4' }
]
},
{
id: 3,
nombre: 'Pedro',
habilidades: ['Java', 'Spring', 'Hibernate'],
proyectos: [
{ id: 5, nombre: 'Proyecto 5' },
{ id: 6, nombre: 'Proyecto 6' }
]
}
];
// Averiguar que trabajador tiene habilidades con JavaScript
const javaScritDevelopers = datos.filter(developer => developer.habilidades.includes('JavaScript')).map(developer => ({nombre: developer.nombre}));
console.log(`El desarollador que tiene habilidad con JavaScript es: ${javaScritDevelopers}`);
//Listado de proyectos
const proyectosJavaScript = datos
.filter(persona => persona.habilidades.includes('JavaScript'))
.map(persona => persona.proyectos.map(proyecto => proyecto.nombre))
.reduce((acc, proyectos) => acc.concat(proyectos), []);
console.log(`El desarrollador con habilidades en JavaScript es ${javaScritDevelopers} y trabaja en los proyectos ${proyectosJavaScript}`);