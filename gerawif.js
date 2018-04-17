const CryptoJS = require('cryptojs').Crypto
const bs58 = require('bs58')

const versao = '80'

const chavePrivada = process.argv[2]
//const chavePrivada = CryptoJS.util.randomBytes(32)
//const chavePrivadaHex = CryptoJS.util.bytesToHex(chavePrivada)

const versaoEChavePrivada = versao + chavePrivada
const primeiroSHA = CryptoJS.SHA256(CryptoJS.util.hexToBytes(versaoEChavePrivada))
const segundoSHA = CryptoJS.SHA256(CryptoJS.util.hexToBytes(primeiroSHA))

const checksum = segundoSHA.substr(0,8);

const wif = versaoEChavePrivada+checksum
const wifFinal = bs58.encode(CryptoJS.util.hexToBytes(wif))

console.log(wifFinal)
