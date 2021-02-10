require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit foot alley recipe situate unable hundred light army genius'; 
let testAccounts = [
"0xf2e65a1fe62c44deed96d5aaa356c523c921e12472281a862886615a457b3c79",
"0x29475b005735fd271c6480c822aa140016bc6dda2d1dea2d9f7f3ef0a42572c6",
"0xfa91a81d2484880ed97dbd1b879ce859c95ec003e11694a8fdc6ad1e8c599c45",
"0xa8d4ec457f1f2d9335f7adead11a0f87d04ca8b25f404680eb24f1dd22328fac",
"0x85e1fd6f9f6a989d533eb8411903e1bde1cd68c2107732f028ffb92182c843ba",
"0x8a6a5b10e5997d0c38d23b17575bb5c00945193db665cd13c7dff30d27209f95",
"0xf81f8cceaf94708ee91a00adec948127d3e4946ecc586fc55b007a504de76187",
"0xb7ea5d42d4ef048283ad3b5e1ba287a119fda6eb7f502d7b87b3f92f02a9cca2",
"0x36701b53c2fc0395614cc3f170f54bb2ba0a85483ccd9fc56786619b3d1fdd66",
"0xfb658f2147710ee6436efb9a3216aba66ae41e339d046046925869754ad9db6c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
