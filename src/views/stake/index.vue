<template>
  <div class="stake">
    <!-- <div class="modal login-modal" v-show="!showModalSwitchNetwork && showModalLogin">
      <div class="modal-content">
        <div class="title">Connect your wallet</div>
        <div class="modal-input">
          <button class="flex connect-btn" v-if="isMetaMaskInstalled" @click="requestAccounts">
            <div>MetaMask</div>
            <div>
              <img src="../../assets/metamask.png" class="wallet-img" />
            </div>
          </button>
          <button class="flex connect-btn" v-else @click="startOnboarding">
            <div>Install MetaMask</div>
            <div>
              <img src="../../assets/metamask.png" class="wallet-img" />
            </div>
          </button>
          <div class="error" v-if="errMsg">
            <img src="../../assets/error.png" alt="error" />
            {{ errMsg }}
          </div>
        </div>
      </div>
    </div>-->
    <!-- <div class="modal login-modal" v-show="showModalSwitchNetwork">
      <div class="modal-content">
        <div class="title">Switch your network</div>
        <div class="modal-input">
          <button
            class="flex text-center connect-btn"
            @click="doSwitchNetwork"
          >{{ switchNetworkBtnText }}</button>
          <div class="error">
            <img src="../../assets/error.png" alt="error" /> Wrong network!
          </div>
        </div>
      </div>
    </div>-->
    <!-- modal -->
    <div class="modal" v-show="showModalStake">
      <div class="modal-content">
        <div class="title">
          Stake DRF
          <button class="close" @click="showModalStake = false">
            <img src="../../assets/close.png" alt="close" />
          </button>
        </div>
        <div class="modal-input">
          <div class="modal-input-title">Amount</div>
          <div class="input-wrapper">
            <input
              type="text"
              v-model="stakeAmount"
              @input="changeStakeAmount"
              @blur="tryClearStakeAmount"
            />
            <span>DRF</span>
          </div>
          <div class="num" @click="stakeAmount = formatUnits(walletBalance)">
            Max:
            <span>{{ walletBalance | formatUnits }}</span> DRF
            <span class="all">All</span>
          </div>
        </div>
        <div class="error">{{ stakeErrMsg }}</div>
        <div class="btns">
          <button
            :disabled="!canApprove"
            class="btn-fill btn1 h4 btn2"
            @click="submitApprove"
            v-if="needMoreAllowance"
          >Approve</button>
          <button
            class="btn-fill btn1 h4 btn2"
            :disabled="!canStake"
            @click="submitStake"
            v-else
          >Stake</button>
          <div class="btn-bordered btn1 h4 btn2" @click="showModalStake = false">
            <div class="btn-bordered-inner">
              <span class="btn-bordered-inner-text">cancel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" v-show="showModalUnstake">
      <div class="modal-content">
        <div class="title">
          Unstake DRF
          <button class="close" @click="showModalUnstake = false">
            <img src="../../assets/close.png" alt="close" />
          </button>
        </div>
        <div class="modal-input">
          <div class="modal-input-title">Amount</div>
          <div class="input-wrapper">
            <input
              type="text"
              v-model="unstakeAmount"
              @input="changeUnstakeAmount"
              @blur="tryClearUnstakeAmount"
            />
            <span>DRF</span>
          </div>
          <div class="num" @click="unstakeAmount = drfBalance">
            Max:
            <span>{{ drfBalance }}</span> DRF
            <span class="all">All</span>
          </div>
        </div>
        <div class="error">{{ unstakeErrMsg }}</div>
        <div class="btns">
          <button
            class="btn-fill btn1 h4 btn2"
            @click="submitUnstake"
            :disabled="!canUnstake"
          >Unstake</button>
          <div class="btn-bordered btn1 h4 btn2" @click="showModalUnstake = false">
            <div class="btn-bordered-inner">
              <span class="btn-bordered-inner-text">cancel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- page -->
    <div class="wrapper">
      <div class="content">
        <div class="h1">Stake DRF to mint eDRF !</div>
        <div class="h4 h4-text">
          Stake 1 DRF and get 1 eDRF per day (estimated). Burn eDRF to get
          broker privilege or vote in community.
        </div>
        <div class="login-wrap" v-show="requireLogin">
          <button
            class="login-btn"
            @click="requestAccounts"
            v-if="isMetaMaskInstalled"
          >Connect Wallet</button>
          <button class="login-btn" @click="startOnboarding" v-else>Install MetaMask</button>
          <div class="error">{{ errMsg }}</div>
        </div>
        <div class="data" v-show="!requireLogin">
          <div class="item item1">
            <div class="title">Staked</div>
            <div class="num" v-if="drfBalance === 'notInit'">
              <Loading />
            </div>
            <div class="num" v-else>
              <span class="num1">{{ drfBalance | theInteger }}</span>
              <span class="num2">{{ drfBalance | theDecimal }}</span>
            </div>
            <div class="h4">DRF</div>
            <div class="btn-group">
              <div class="btn-fill btn1 h4" @click="showModalStake = true, stakeErrMsg = ''">Stake</div>
              <div
                class="btn-bordered btn1 h4"
                @click="showModalUnstake = true, unstakeErrMsg = ''"
              >
                <div class="btn-bordered-inner">
                  <span class="btn-bordered-inner-text">unstake</span>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="title">Claimable</div>
            <div class="num" v-if="edrfBalance === 'notInit'">
              <Loading />
            </div>
            <div class="num" v-else>
              <span class="num1">{{ edrfBalance | theInteger }}</span>
              <span class="num2">{{ edrfBalance | theDecimal }}</span>
            </div>
            <div class="h4">eDRF</div>
            <div class="error" v-if="claimError">{{ claimError }}</div>
            <div class="btn-group">
              <button
                class="btn-fill btn1 h4"
                :disabled="!canClaim"
                @click="withdrawAllEdrf"
              >Claim All</button>
            </div>
          </div>
        </div>
        <div class="footer h4">© 2021 DERIVATION LAB</div>
      </div>
    </div>
  </div>
</template>
<script>
import * as ls from '../../utils/ls'
import { ethers } from "ethers"
import Loading from "@/components/Loading";

import MetaMaskOnboarding from '@metamask/onboarding'
import detectEthereumProvider from '@metamask/detect-provider'
import { getContract, chainInfoMap, contractAddressMap } from '@/contractConfig.js'
const onboarding = new MetaMaskOnboarding()

const formatUnits = function (val, precision = 18) {
  if (!val) { return '' }
  val = ethers.utils.formatUnits(val, precision)
  val = val.split('.')
  val = val[0] + '.' + val[1].substr(0, 4)
  return val
}
const parseUnits = function (val, precision = 18) {
  if (!val) {
    val = 0
  }
  return ethers.utils.parseUnits(val.toString(), precision)
}

export default {
  components: {
    Loading,
  },
  data() {
    return {
      count: "0",
      showModalStake: false,
      title: "Stake DRF",
      isMetaMaskInstalled: false,
      isOnboarding: false,
      provider: '',
      web3Provider: '',
      accounts: ls.getItem('web3.accounts', []),
      errMsg: '',
      currentChainId: '',
      // targetChainId: '0x38', // Smart Chain
      targetChainId: '0x61', // Smart Chain Testnet
      drfBalance: 'notInit',
      edrfBalance: 'notInit',
      stakeAmount: '',
      allowance: 0,
      stakeErrMsg: '',
      isApproving: false,
      isStaking: false,
      claimError: '',
      isSubmitClaim: false,
      showModalUnstake: false,
      isSubmitUnstake: false,
      unstakeAmount: '',
      unstakeErrMsg: '',
      walletBalance: '',
      walletEdrfBalance: '',
    };
  },
  filters: {
    dataFormat: function (msg) {
      return msg;
    },
    theInteger: function (val) {
      return val.toString().split('.')[0] + '.'
    },
    theDecimal: function (val) {
      return val.toString().split('.')[1] || '00'
    },
    formatUnits,
    parseUnits,
  },
  computed: {
    needMoreAllowance() {
      if (!this.allowance) {
        return false
      }
      const stakeAmount = parseUnits(this.stakeAmount)
      return this.allowance.lt(stakeAmount)
    },
    myWalletAddress() {
      if (!this.accounts) {
        return ''
      }
      return this.accounts[0]
    },
    requireLogin() {
      if (!this.accounts) {
        return true
      }
      return this.accounts.length === 0
    },
    requireSwitchNetwork() {
      if (!this.currentChainId) {
        return false
      }
      return this.currentChainId !== this.targetChainId
    },
    currentNetworkName() {
      return 'eth'
    },
    switchNetworkBtnText() {
      return `Click to switch`
      // return `Click to switch to ${chainInfoMap[this.targetChainId].chainName}`
    },
    canApprove() {
      if (this.isApproving) return false
      return parseUnits(this.stakeAmount).gt('0')
    },
    canStake() {
      if (this.isStaking) return false
      return parseUnits(this.stakeAmount).gt('0')
    },
    canUnstake() {
      if (this.isSubmitUnstake) return false
      return parseUnits(this.unstakeAmount).gt('0')
    },
    canClaim() {
      if (this.isSubmitClaim) return false
      if (this.edrfBalance === 'notInit') return false
      return parseUnits(this.edrfBalance).gt('0')
    }
  },
  mounted() {
    this.initWeb3()
    document.querySelector('.app-header').style.position = 'absolute'
  },
  methods: {
    formatUnits,
    parseUnits,
    async doSwitchNetwork() {
      const chainId = this.targetChainId
      try {
        await this.provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await this.provider.request({
              method: 'wallet_addEthereumChain',
              params: [chainInfoMap[chainId]],
            });
          } catch (addError) {
            console.log(`====> addError :`, addError)
            // handle "add" error
          }
        }
        // handle other "switch" errors
        console.log(`====> switchError :`, switchError)
      }
    },
    async requestAccounts() {
      try {
        const newAccounts = await this.provider.request({
          method: 'eth_requestAccounts',
        })
        ls.setItem('web3.accounts', newAccounts)
        this.accounts = newAccounts
      } catch (e) {
        switch (e.code) {
          case 4001: // user reject
          case -32002: // already pending
            this.errMsg = e.message
            break
          default:
            console.error('unknown error', e)
            this.errMsg = e.message
            break
        }
      }
    },
    async initWeb3() {
      this.provider = await detectEthereumProvider()
      if (!this.provider) {
        // no metamask install yet
        this.isMetaMaskInstalled = false
        return
      }
      this.web3Provider = new ethers.providers.Web3Provider(this.provider)
      // await this.web3Provider.send('eth_requestAccounts', [])
      this.isMetaMaskInstalled = true

      this.provider.on('chainChanged', chainId => {
        this.currentChainId = chainId
        window.location.reload()
      })
      this.currentChainId = await this.provider.request({ method: 'eth_chainId' });

      const handleNewAccount = async (newAccounts) => {
        ls.setItem('web3.accounts', newAccounts)
        this.accounts = newAccounts
        this.isOnboarding = false
        onboarding.stopOnboarding()
        if (this.currentChainId !== this.targetChainId) {
          await this.doSwitchNetwork()
        } else {
          await this.loadData()
        }
      }
      this.provider.on('accountsChanged', handleNewAccount)

      const newAccounts = await this.provider.request({ method: 'eth_accounts' })
      if (newAccounts.length > 0) {
        handleNewAccount(newAccounts)
        return
      }

      // has metamask, but do not have any account
      //  means: not login yet, show modal for user to click "connect to metamask"
    },
    startOnboarding() {
      if (this.isOnboarding) return
      this.isOnboarding = true
      onboarding.startOnboarding()
    },
    // the input only number, can not be negative
    changeStakeAmount(event) {
      if (event.data === ".") {
        if (this.stakeAmount.indexOf(".") !== this.stakeAmount.lastIndexOf(".")) {
          this.stakeAmount = this.stakeAmount.slice(0, this.stakeAmount.length - 1);
        }
      } else {
        this.stakeAmount = this.stakeAmount.replace(/[^(\d|.)]/g, "");
      }
      const stakeAmountArr = this.stakeAmount.split('.')
      if (stakeAmountArr[1] && stakeAmountArr[1].length > 4) {
        this.stakeAmount = stakeAmountArr[0] + '.' + stakeAmountArr[1].substr(0, 4)
      }
      // https://docs.ethers.io/v5/single-page/#/v5/api/utils/bignumber/-%23-BigNumber--BigNumber--methods--comparison-and-equivalence
      let stakeAmountBN = parseUnits(this.stakeAmount) // 转换成 BN，即  1.234 => 123400000
      if (this.walletBalance.lt(stakeAmountBN)) {
        this.stakeAmount = formatUnits(this.walletBalance) // 转换成 字符串 即 12340000 => 1.234
      }
    },
    tryClearStakeAmount() {
      if (parseUnits(this.stakeAmount).eq('0')) {
        this.stakeAmount = ''
      }
    },
    changeUnstakeAmount(event) {
      if (event.data === ".") {
        if (this.unstakeAmount.indexOf(".") !== this.unstakeAmount.lastIndexOf(".")) {
          this.unstakeAmount = this.unstakeAmount.slice(0, this.unstakeAmount.length - 1);
        }
      } else {
        this.unstakeAmount = this.unstakeAmount.replace(/[^(\d|.)]/g, "");
      }
      const unstakeAmountArr = this.unstakeAmount.split('.')
      if (unstakeAmountArr[1] && unstakeAmountArr[1].length > 4) {
        this.unstakeAmount = unstakeAmountArr[0] + '.' + unstakeAmountArr[1].substr(0, 4)
      }

      const unstakeAmount = parseUnits(this.unstakeAmount, 8)
      if (parseUnits(this.drfBalance, 8).lt(unstakeAmount)) {
        this.unstakeAmount = this.drfBalance
      }
    },
    tryClearUnstakeAmount() {
      if (parseUnits(this.unstakeAmount).eq('0')) {
        this.unstakeAmount = ''
      }
    },
    getCurrentChainContract(name, isWrite = false) {
      return getContract(this.web3Provider, this.currentChainId, name, isWrite)
    },
    async updateAllowance() {
      this.allowance = await this.getCurrentChainContract('DRF').allowance(this.myWalletAddress, contractAddressMap[this.currentChainId]['DerifyStaking'])
    },
    async loadData() {
      if (!this.myWalletAddress) {
        return
      }
      const { drfBalance, edrfBalance } = await this.getCurrentChainContract('DerifyStaking').getStakingInfo(this.myWalletAddress)
      await this.updateAllowance()

      this.walletBalance = await this.getCurrentChainContract('DRF').balanceOf(this.myWalletAddress)
      this.walletEdrfBalance = await this.getCurrentChainContract('eDRF').balanceOf(this.myWalletAddress)

      this.drfBalance = formatUnits(drfBalance, 8)
      this.edrfBalance = formatUnits(edrfBalance, 8)
    },
    async submitStake() {
      if (this.isStaking) return
      if (this.needMoreAllowance) {
        return this.submitApprove()
      }
      let errMsg = ''
      this.isStaking = true
      const stakeAmount = parseUnits(this.stakeAmount, 8)
      try {
        const tx = await this.getCurrentChainContract('DerifyStaking', true).stakingDrf(stakeAmount)
        await tx.wait()
      } catch (e) {
        console.log(`====> e :`, e)
        errMsg = e.message || e.data.message
      }
      this.isStaking = false
      this.stakeErrMsg = errMsg
      if (!errMsg) {
        this.stakeAmount = ''
        await this.loadData()
      }
    },
    async submitApprove() {
      if (this.isApproving) return
      let errMsg = ''
      try {
        const tx = await this.getCurrentChainContract('DRF', true).approve(contractAddressMap[this.currentChainId]['DerifyStaking'], parseUnits(this.stakeAmount))
        this.isApproving = true
        await tx.wait()
        await this.updateAllowance()
      } catch (e) {
        console.log(`====> e :`, e)
        errMsg = e.message || e.data.message
      }
      this.isApproving = false
      this.stakeErrMsg = errMsg
    },
    async withdrawAllEdrf() {
      this.claimError = ''
      if (this.isSubmitClaim) return
      let errMsg = ''
      this.isSubmitClaim = true
      try {
        await this.addEdrfToken()
        const tx = await this.getCurrentChainContract('DerifyStaking', true).withdrawAllEdrf()
        await tx.wait()
      } catch (e) {
        console.log(`====> e :`, e)
        errMsg = e.message || e.data.message
      }
      this.isSubmitClaim = false
      this.claimError = errMsg
      if (!errMsg) {
        await this.loadData()
      }
    },
    async addEdrfToken() {
      if (ls.getItem('hasRegEdrfToken', false)) return false
      if (this.walletEdrfBalance.gt(0)) return false

      const tokenAddress = contractAddressMap[this.targetChainId]['eDRF'];
      const tokenSymbol = 'eDRF';
      const tokenDecimals = 18;
      // const tokenImage = 'http://placekitten.com/200/300';

      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              // image: tokenImage, // A string url of the token logo
            },
          },
        });

        if (wasAdded) {
          ls.setItem('hasRegEdrfToken', true)
          console.log('Thanks for your interest!');
        } else {
          console.log('Your loss!');
        }
      } catch (error) {
        console.log(error);
      }
    },
    async submitUnstake() {
      if (this.isSubmitUnstake) return
      let errMsg = ''
      this.isSubmitUnstake = true
      try {
        const tx = await this.getCurrentChainContract('DerifyStaking', true).redeemDrf(parseUnits(this.unstakeAmount, 8))
        await tx.wait()
      } catch (e) {
        console.log(`====> e :`, e)
        errMsg = e.message
      }
      this.isSubmitUnstake = false
      this.unstakeErrMsg = errMsg
      if (!errMsg) {
        this.unstakeAmount = ''
        await this.loadData()
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.stake {
  font-family: "Noto Sans";
  width: 100%;
  min-height: 100vh;
  background: #0e0314;
  display: flex;
  background-image: url(../../assets/stake_bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center top;

  .btn1 {
    width: 175px;
    height: 52px;
    font-size: 20px;
    line-height: 52px;
    text-align: center;
    display: inline-block;
    border-radius: 33px;
    cursor: pointer;
    border: none;
    color: #fff;
    &:disabled {
      cursor: not-allowed;
      background: #888;
    }
  }
  .btn-fill {
    background: linear-gradient(90deg, #e7446b 0%, #fae247 100%);
  }
  .btn-bordered {
    margin-left: 40px;
    background: linear-gradient(90deg, #e7446b 0%, #fae247 100%);
    padding: 2px;
    display: inline-flex;
  }
  .btn-bordered-inner {
    background: #190e2e;
    backdrop-filter: blur(40px);
    flex: 1;
    border-radius: 33px;
  }
  .btn-bordered-inner-text {
    line-height: 20px;
    background: linear-gradient(90deg, #e7446b, #fae247 100%);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: bold;
  }

  .modal {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    .modal-content {
      width: 408px;
      height: 279px;
      background: #1f376f;
      backdrop-filter: blur(40px);
      /* Note: backdrop-filter has minimal browser support */
      border-radius: 24px;
      .error {
        color: #f00;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 12px;
          height: 12px;
          line-height: 20px;
          margin-right: 4px;
        }
      }
    }
    .title {
      height: 24px;
      line-height: 24px;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      position: relative;
      margin: 20px 36px;
      .close {
        position: absolute;
        right: 0;
        top: 0;
        border: none;
        width: 24px;
        height: 24px;
        display: flex;
        background: none;
        justify-content: center;
        align-items: center;
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
    .modal-input {
      width: 100%;
      height: 135px;
      padding: 0 36px;
    }

    .modal-input-title {
      color: rgba(255, 255, 255, 0.5);
      font-size: 12px;
      height: 24px;
      line-height: 24px;
      margin-bottom: 8px;
    }

    .input-wrapper {
      height: 30px;
      display: flex;
      flex-direction: row;
      color: rgba(255, 255, 255, 0.5);
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      input {
        flex: 1;
        font-size: 20px;
        background: none;
        border: none;
        outline: none;
        color: rgba(255, 255, 255, 0.5);
      }
      span {
        margin-left: 12px;
        line-height: 37px;
        font-size: 12px;
      }
    }
    .num {
      color: rgba(255, 255, 255, 0.5);
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      margin-top: 8px;
      position: relative;
      .all {
        cursor: pointer;
        margin-left: 18px;
        text-decoration: underline;
        background: linear-gradient(90deg, #e7446b, #fae247 100%);
        color: transparent;
        -webkit-background-clip: text;
        position: absolute;
        right: 0;
      }
    }
    .btns {
      margin-top: 12px;
      text-align: center;
      .btn-bordered-inner {
        background: #1f376f;
      }
    }
    .btn2 {
      height: 32px;
      line-height: 32px;
      width: 130px;
      color: #fff;
      font-size: 16px;
    }
  }
  .wrapper {
    flex: 1;
    position: relative;
    background: radial-gradient(
        29.53% 69.69% at 100% 0%,
        #0b2c57 0%,
        rgba(18, 6, 33, 0) 100%
      ),
      radial-gradient(
        62.66% 86.81% at 0% 45.42%,
        #3d0a5b 0%,
        rgba(18, 6, 33, 0) 100%
      );
  }
  .content {
    padding-top: 168px;
    color: #fff;
    text-align: center;
    .h1 {
      font-size: 52px;
      height: 78px;
      line-height: 78px;
      font-weight: bold;
    }
    > .h4 {
      font-size: 20px;
      height: 30px;
      line-height: 30px;
    }
    .btn {
      height: 52px;
      line-height: 52px;
      width: 238px;
      background: linear-gradient(90deg, #e7446b 0%, #fae247 100%);
      border-radius: 33px;
      color: #fff;
      text-align: center;
      margin-top: 60px;
      display: inline-block;
    }
    .data {
      position: relative;
      width: 100%;
      margin: 0 auto;
      max-width: 1440px;
      height: 452px;
      margin-top: 60px;
      display: flex;
      justify-content: space-between;
    }
    .item {
      width: 710px;
      height: 452px;
      background: rgba(39, 27, 81, 0.4);
      backdrop-filter: blur(40px);
      border-radius: 42px;
      .title {
        font-size: 32px;
        margin-top: 80px;
        margin-bottom: 40px;
        font-weight: 700;
      }
      .num1 {
        font-size: 60px;
        font-weight: 700;
      }
      .num2 {
        font-size: 40px;
        font-weight: 700;
      }
      .btn-group {
        margin-top: 60px;
        text-align: center;
      }
      > .h4 {
        font-size: 20px;
        height: 30px;
        line-height: 30px;
      }
      > .error {
        font-size: 16px;
        color: red;
        height: 20px;
        line-height: 20px;
        margin-bottom: -30px;
        margin-top: 10px;
      }
    }

    .footer {
      position: absolute;
      bottom: 32px;
      left: 0;
      width: 100%;
    }
  }

  .login-modal {
    .modal-content {
      height: auto;
      .modal-input {
        height: auto;
        padding-bottom: 46px;
      }
    }
  }
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.text-center {
    justify-content: center;
  }
}
.connect-btn {
  width: 100%;
  font-size: 16px;
  line-height: 30px;
  height: 40px;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 8px;
  margin: 12px 0 6px;
  padding: 5px 14px;
  opacity: 0.8;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
  .wallet-img {
    height: 20px;
  }
}

.login-wrap {
  .login-btn {
    display: inline-block;
    font-size: 20px;
    line-height: 20px;
    color: #fff;
    background: linear-gradient(90deg, #e7446b 0%, #fae247 100%);
    border-radius: 33px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    padding: 16px 48px;
    opacity: 0.8;
    margin-top: 60px;
  }
  .error {
    color: #f00;
    font-size: 20px;
    margin-top: 20px;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1440px) {
  .stake {
    .data {
      padding: 0 12px;
      > .item {
        flex: 1;
        width: auto;
      }
      > .item1 {
        margin-right: 16px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .stake {
    background: #0e0314;
    background-image: url(../../assets/stake_bg2.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center top;
    .content {
      padding-top: 120px;
      .data {
        display: block;
        height: auto;
        margin-top: 48px;
      }
      .item {
        width: auto;
        margin: 0 30px;
        margin-bottom: 17px;
        .title {
          padding-top: 80px;
          margin-top: 0;
        }
      }
      .connect-btn {
        margin-top: 48px;
      }
      .h1 {
        height: auto;
      }
      .h4-text {
        padding-left: 40px;
        padding-right: 40px;
        height: auto;
      }
      .footer {
        position: static;
        padding-top: 36px;
        padding-bottom: 36px;
      }
    }
  }
}

@media screen and (max-width: 420px) {
  .stake {
    background: #0e0314;
    background-image: url(../../assets/stake_bg1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center top;

    .modal .modal-content {
      width: calc(100% - 24px);
    }

    .content {
      padding-top: 116px;
      .connect-btn {
        margin-top: 36px;
      }
      .h1 {
        font-size: 40px;
        line-height: 60px;
      }
      .h1,
      .h4-text {
        padding-left: 16px;
        padding-right: 16px;
        height: auto;
      }
      .data {
        margin-top: 36px;
      }
      .item {
        margin: 0 12px;
        margin-bottom: 12px;
      }
      .btn-group .btn-fill {
        display: block;
        margin: 0 auto;
      }
      .btn-group .btn-bordered {
        display: flex;
        margin: 0 auto;
        margin-top: 12px;
      }
    }
  }
}
</style>
