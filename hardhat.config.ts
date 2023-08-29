import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ledger";
import "@nomiclabs/hardhat-solhint";
import '@openzeppelin/hardhat-upgrades';
import dotenv from "dotenv";

// Load .env file
dotenv.config();

// Check .env file variables 
if (!process.env.ALCHEMY_API_KEY) {
    throw new Error("Please set your ALCHEMY_API_KEY in a .env file");
}
if (!process.env.SEPOLIA_PRIVATE_KEY) {
    throw new Error("Please set your SEPOLIA_PRIVATE_KEY in a .env file");
}
if (!process.env.ETHERSCAN_API_KEY) {
    throw new Error("Please set your ETHERSCAN_API_KEY in a .env file");
}

// Hardhat Config
const config: HardhatUserConfig = {
    solidity: "0.8.21",
    networks: {
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
            accounts: [process.env.SEPOLIA_PRIVATE_KEY],
            gasPrice: "auto",
        },
        hardhat: {
            ledgerAccounts: [
            ],
        }
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
};


export default config;
