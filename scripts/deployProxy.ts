import { ethers, upgrades } from "hardhat";

async function main() {
  const NFTx = await ethers.getContractFactory("NFTxLedger");
  const nftxDeploy = await upgrades.deployProxy(NFTx, { kind: "uups" });
  await nftxDeploy.waitForDeployment();

  console.log(`Contract deployed to ${await nftxDeploy.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
