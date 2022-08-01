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
    let r = '';
    let letter;  
    let str = '';
    let space = ' ';
    let exprNew = expr.match(/.{1,10}/g);    
    for (let i = 0; i < exprNew.length; i++) {      
      let exprNewPart = exprNew[i].match(/.{1,2}/g);
      for (let k = 0; k < exprNewPart.length; k++) {      
        if (exprNewPart[k] === '10') {
          r = r + '.';
        } else if (exprNewPart[k] === '11') {
          r = r + '-';
        } else {       
          r = r;        
        };     
        continue;   
      };
      letter = MORSE_TABLE[r];
      if (letter) {
        str = str + letter;
      } else {
        str = str + space;
      };
      r = '';
    };
    return str;
  };

module.exports = {
    decode
}