const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: 'localhost',
      port: 9545,
      network_id: '*',
      gas: 8000000,
      gasPrice: 1000000000, // web3.eth.gasPrice
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org/`),
      network_id: 56,
      confirmations: 0,
      timeoutBlocks: 200,
      skipDryRun: true,
      // from: '0x7c76C544F04b8bdC5527c937fa9a39d3B2CE98fB',
      gas: 4465030,
      gasPrice: 10000000000,
    },
    coverage: {
      host: 'localhost',
      port: 8555,
      network_id: '*',
      gas: 8000000,
      gasPrice: 1000000000, // web3.eth.gasPrice
    }
  },
  compilers: {
    solc: {
      version: '0.5.17',
      settings: {
        optimizer: {
          enabled: false,
          runs: 200,
        }
      }
    },
  },
  mocha: { // https://github.com/cgewecke/eth-gas-reporter
    reporter: 'eth-gas-reporter',
    reporterOptions : {
      currency: 'USD',
      gasPrice: 10,
      onlyCalledMethods: true,
      showTimeSpent: true,
      excludeContracts: ['Migrations']
    }
  }
};
