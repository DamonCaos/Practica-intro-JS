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

/*3.2 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:*/
const input4 = 10;
// create your function here

const numbersToStrings = (input) => {
    const result = input.toString().split('').join('-');
    return result;
};

numbersToStrings(input4); // '1-0'
console.log(numbersToStrings(input4));
const secondInput = 1;
numbersToStrings(secondInput); // '1'
console.log(numbersToStrings(secondInput));
const thirdInput = 11234;
numbersToStrings(thirdInput); // '1-1-2-3-4'
console.log(numbersToStrings(thirdInput));

/*3.3 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:*/
const strings1 = 'string';
// create your function here

const reversedLenghtString = (strings) => {
    const longitud = strings.length;
    const reversedString = strings.split('').reverse().join('');
    return `${longitud} ${reversedString}`;
};

reversedLenghtString(strings1); // '6 gnirts'
console.log(reversedLenghtString(strings1));

const strings2 = 'variable';
reversedLenghtString(strings2); // '8 elbairav'
console.log(reversedLenghtString(strings2));

const strings3 = 'pointer';
reversedLenghtString(strings3); // '7 retniop'
console.log(reversedLenghtString(strings3));
