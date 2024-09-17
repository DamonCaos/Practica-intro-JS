/*3.1 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:*/
const input1 = [
'Downloads',
'Videos',
'capture',
'mp4',
];


// create your function here

const concatString = (input) => {
    const terminacion = input[input.length - 1];
    const concatResult = input.slice(0, -1).join('/'); 
    return `${concatResult}.${terminacion}`;
};

concatString(input1); // 'Downloads/Videos/capture.mp4'
console.log(concatString(input1));

const input2 = [
'CodinGame',
'python',
'py',
];


concatString(input2); // 'CodinGame/python.py'
console.log(concatString(input2));


const input3 = [
'programming',
'languages',
'easy',
'beginner',
'useful',
'pythonstuff',
'py',
]
concatString(input3);
console.log(concatString(input3));
// 'programming/languages/easy/beginner/useful/pythonstuff.py'

