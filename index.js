const readlineSync = require('readline-sync');

const { createHash }  = require('node:crypto');

const hashType = 'sha512';
const encoding = 'utf8';

console.log(`Hash Type: ${hashType}`);
console.log(`Encoding: ${encoding}`);

const salt = readlineSync.question('salt: ');

while(true){
    const password = readlineSync.question('password: ', { hideEchoBack: true });
    if (password === '') break;
    const hash = createHash(hashType).update(salt + password, encoding).digest('hex');
    console.log(`hash: ${hash}`);
}