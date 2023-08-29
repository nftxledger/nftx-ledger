import { ethers, upgrades } from "hardhat";

async function main() {
    const NFTx = await ethers.getContractFactory("NFTxLedger");
    const NFTx_deploy = await upgrades.upgradeProxy("0x558Afa61fD6BA0B25C2d3E33c424dA3F11cAFbC8", NFTx, { kind: 'uups' })
    await NFTx_deploy.waitForDeployment();

    console.log(`Contract deployed to ${await NFTx_deploy.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
