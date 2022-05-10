const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({ input: fs.createReadStream('arquivo.txt')});

rl.on('line', (line) => {
    if(!line) return;
    let splittedByTwoPoints = line.split(':'); // transforma tudo em um array com vários indices separados por ':' 
    let removeFirstSentence = splittedByTwoPoints.slice(4) // remove a primeira parte até o nome da cidade
    let joinStr = removeFirstSentence.join(); // junta tudo em uma string novamente
    let splittedByComma = joinStr.split(','); // transforma tudo em um array separado por ','
    splittedByComma.splice(1, 3, ''); // remove os indices entre o nome da cidade e o { "type": "Polygon" 
    let joinStr2 = splittedByComma.join(); // junta tudo em uma string (ainda contendo as vírgulas e aspas)
    console.log(joinStr2)
    let splittedByBrace = joinStr2.split('{')
    splittedByBrace[0].toString().replace('",,', '#') // essa porra não está sendo removida pelo regex
    console.log(splittedByBrace)
    console.log(splittedByBrace.join())
    
    // console.log(splitByOpenBrace)
    // console.log(joinedStr)
    // console.log(splitByOpenBrace[0])
})