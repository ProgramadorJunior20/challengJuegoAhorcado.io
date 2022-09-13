let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'PAISES',
    'COLOMBIA',
    'BRASIL',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'REACT',
    'VUE',
    'ANGULAR',
];


export function getRandomWord() {

    const randomIndex = Math.floor( Math.random() * words.length );
    return words[randomIndex];

}