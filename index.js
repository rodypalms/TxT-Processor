const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({ input: fs.createReadStream('./inputFiles/arquivo.txt')});

rl.on('line', (line) => {
    if(!line) return;
    const lineSplit = line.split('"'); // transforma tudo em um array com vários indices separados por '"'
    const cityName = lineSplit[13]
    lineSplit.splice(0, 20)
    console.log(lineSplit)
    const finalString = lineSplit.join('').replace(/: /, '')

    console.log(cityName+ "# " +finalString)
    fs.createWriteStream('./outputFiles/output.txt', { flags: 'a'}).write(`${cityName}# ${finalString}\n`);
})

// rl.on('close', (line) => fs.createWriteStream('./outputFiles/output.txt', { flags: 'a'}).write(``))