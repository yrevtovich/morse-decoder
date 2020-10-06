const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const lettersArr = expr.match(/.{10}/g);
    
    const decodedLettersArr = lettersArr.map((item) => {
        switch (item) {
            case '**********': 
                return ' ';
            default: 
                return decodeLetter(item);  
        }
    });

    return decodedLettersArr.join('');
}

function decodeLetter(letter) {
    const letterCodeArr = letter.match(/.{2}/g);

    const letterMorseCodeArr = letterCodeArr.map((code) => {
        switch(code) {
            case '10': 
                return '.';  
            case '11': 
                return '-';
            default:
                return '';
        }
    });

    const letterMorseCode = letterMorseCodeArr.join('');

    return MORSE_TABLE[letterMorseCode];
}


module.exports = {
    decode
}