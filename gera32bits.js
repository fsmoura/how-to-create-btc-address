const CryptoJS = require('cryptojs').Crypto
const randomBytes = CryptoJS.util.randomBytes(32)
const privateKey = CryptoJS.util.bytesToHex(randomBytes).toUpperCase()

console.log(privateKey)
