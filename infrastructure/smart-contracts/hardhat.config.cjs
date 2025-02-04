require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
const dotenv = require("dotenv");

dotenv.config();

const config = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
        details: {
          yul: true
        }
      }
    }
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/W7dTZrmhSSU7LOtL67I41XGaf2TXeVGo",
        // blockNumber: 19015040,
      },
      chainId: 1,
      accounts: {
        mnemonic: process.env.MNEMONIC,
        count: 30,
      },
    },  
    xai: {
      url: "https://testnet.xai-chain.net/rpc",
      chainId: 47279324479,
      accounts: {
        mnemonic: process.env.MNEMONIC,
        count: 30,
      },
      gasPrice: 20000000000,
    },
    arbitrumOne: {
      url: "https://tame-alpha-violet.arbitrum-mainnet.quiknode.pro/d55a31b32f04c82b0e1bcb77f1fc6dcf53147f2a/",
      accounts: {
        mnemonic: process.env.MNEMONIC,
        count: 30,
      },
      chainId: 42161,
    },
    arbitrumGoerli: {
      url: "https://icy-thrilling-frog.arbitrum-goerli.quiknode.pro/4d27f3253823ff8ec0afbabc49cbe924bfc9acdb/",
      accounts: {
        mnemonic: process.env.MNEMONIC,
        count: 30,
      },
      chainId: 421613,
      gasPrice: 20000000000,
    },
    arbitrumSepolia: {
      url: "https://arb-sepolia.g.alchemy.com/v2/8aXl_Mw4FGFlgxQO8Jz7FVPh2cg5m2_B",
      accounts: {
        mnemonic: process.env.MNEMONIC,
        count: 30,
      },
      chainId: 421614,
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/0zXd3gviT-BxO1QiLjttH2DUV5ihyBPs",
      accounts: {
        mnemonic: process.env.MNEMONIC,
        count: 30
      },
      chainId: 11155111
    },
    ethereum: {
      url: "https://eth-mainnet.g.alchemy.com/v2/W7dTZrmhSSU7LOtL67I41XGaf2TXeVGo",
      accounts: {
        mnemonic: process.env.MNEMONIC,
        count: 30
      },
      chainId: 1
    }
  },
  etherscan: {
    apiKey: {
      arbitrumGoerli: process.env.ARBISCAN_API_KEY,
      arbitrumOne: process.env.ARBISCAN_API_KEY,
      arbitrumSepolia: process.env.ARBISCAN_API_KEY,
      sepolia: process.env.ETHERSCAN_API_KEY
    },
    customChains: [
      {
        network: "arbitrumSepolia",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io/"
        }
      }
    ]
  }
};

module.exports = config;
