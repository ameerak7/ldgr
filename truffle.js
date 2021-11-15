const HDWalletProvider = require("@truffle/hdwallet-provider");

const fs = require("fs");
const mnemonic = fs.readFileSync("secrets/.mnemonic").toString().trim();
const infuraProjectId = fs.readFileSync("secrets/.infura").toString().trim();

if (!infuraProjectId) {
  throw new Error(
    'truffle-config.js needs the environment variable "INFURA_PROJECT_ID"'
  );
}

if (!mnemonic) {
  throw new Error("truffle-config.js needs the file .mnemonic");
}

if (mnemonic.split(" ").length != 12) {
  throw new Error(
    'The environment variable "MNEMONIC" must be 12 words (space delineated)'
  );
}

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: mnemonic,
          },
          providerOrUrl: `https://rinkeby.infura.io/v3/${infuraProjectId}`,
          chainId: 4,
        }),
      network_id: 4,
      gas: 5000000,
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.4.24",
      settings: {
        optimizer: {
          enabled: true,
          runs: 2000,
        },
      },
    },
  },
};
