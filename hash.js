
/// ------------------------------------------- Hash function
// const { createHash, timingSafeEqual } = require('crypto');

// function hash(input) {
//     return createHash('sha256').update(input).digest('hex');
// }

// let password = 'Hey-papa!';
// const hash1 = hash(password);
// console.log(hash1);

// password = 'Hey-papa!';
// const hash2 = hash(password);
// console.log(hash2);

// console.log(hash1 == hash2 ? 'good password' : 'password does not match');


/// ------------------------------------------- Ecnryption public-key

const { generateKeyPairSync } = require('crypto');
const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },

    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        // cipher : 'aes-256-cbc'
        // passphrase : 'top secret'
    },


});

console.log(publicKey);
console.log(privateKey);

module.exports = {
    privateKey, publicKey
}
