import { ethers } from 'hardhat'

async function main() {
  /**
   * A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
   * so nftContract here is a factory for instances of our GameItem contract.
   *
   * */
  const nftContract = await ethers.getContractFactory('GameItem')

  // here we deploy the contract to the blockchain
  const nft = await nftContract.deploy()

  // we wait until the contract is deployed on the blockchain
  await nft.deployed()

  // we log the address of the contract to the console
  console.log('Contract deployed to:', nft.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
