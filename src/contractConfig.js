import { ethers } from "ethers"
import DRF from '@/abis/DRF.json'
import eDRF from '@/abis/eDRF.json'
import DerifyStaking from '@/abis/DerifyStaking.json'

export const contractAbiMap = {
  DRF,
  eDRF,
  DerifyStaking,
}
export const contractAddressMap = {
  '0x38': {
    DRF: '0x89C1Af791d7B4cf046Dca8Fa10a41Dd2298A6a3F',
    eDRF: '0xE55945473935470Fafdc34ddE353c3D251DfadC1',
    DerifyStaking: '0x0129AbDCBFE2C3A8f923152230a0034dBf87dA90',
  },
  '0x61': {
    DRF: '0x1B4d21f22EF7F7aC0f13CEe6030e37569161DCE6',
    eDRF: '0xFe3D4E8100e75c0C84a4394Ca1af142cb647c970',
    DerifyStaking: '0x6c26904a7CDb806a9936C17d1962aBcAb751011c',
  }
}


export const chainInfoMap = {
  '0x38': {
    chainId: '0x38',
    chainName: 'Smart Chain',
    nativeCurrency: {
      "name": "Binance Chain Native Token",
      "symbol": "BNB",
      "decimals": 18
    },
    blockExplorerUrls: ['https://bscscan.com'],
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
  },
  '0x61': {
    chainId: '0x61',
    chainName: 'Smart Chain - Testnet',
    nativeCurrency: {
      "name": "Binance Chain Native Token",
      "symbol": "tBNB",
      "decimals": 18
    },
    blockExplorerUrls: ['https://testnet.bscscan.com'],
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
  },
}

export const getContract = (web3Provider, chainId, name, isWrite = false) => {
  const contractAddress = contractAddressMap[chainId][name]
  const contractAbi = contractAbiMap[name]
  const providerOrSinger = isWrite ? web3Provider.getSigner() : web3Provider
  const contract = new ethers.Contract(contractAddress, contractAbi, providerOrSinger)
  return contract
}