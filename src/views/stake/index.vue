<template>
  <div class="stake">
    <div class="modal login-modal" v-show="!showModalSwitchNetwork && showModalLogin">
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
    </div>
    <div class="modal login-modal" v-show="showModalSwitchNetwork">
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
    </div>
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
            <input type="text" v-model="stakeAmount" @input="changeStakeAmount" />
            <span>DRF</span>
          </div>
          <div class="num" @click="stakeAmount = walletBalance">
            Max:
            <span>{{ walletBalance }}</span> DRF
            <span class="all">All</span>
          </div>
        </div>
        <div class="error">{{ stakeErrMsg }}</div>
        <div class="btns">
          <div
            class="btn-fill btn1 h4 btn2"
            @click="submitStake"
          >{{ needMoreAllowance ? 'Approve' : 'Stake' }}</div>
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
            <input type="text" v-model="unstakeAmount" @input="changeUnstakeAmount" />
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
          <div class="btn-fill btn1 h4 btn2" @click="submitUnstake">Unstake</div>
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
        <!-- <div class="btn connect-btn h4" v-show="!connected">Connect Wallet</div> -->
        <div class="data">
          <div class="item">
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
              <div class="btn-fill btn1 h4" @click="showModalStake = true">Stake</div>
              <div class="btn-bordered btn1 h4" @click="showModalUnstake = true">
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
              <div class="btn-fill btn1 h4" @click="withdrawAllEdrf">Claim All</div>
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

const formatDRF = function (val) {
  return ethers.utils.formatUnits(val, 8)
}
const parseDRF = function (val) {
  return ethers.utils.parseUnits(val.toString(), 8)
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
      stakeAmount: '0.00',
      allowance: 0,
      stakeErrMsg: '',
      isApproving: false,
      claimError: '',
      isSubmitClaim: false,
      showModalUnstake: false,
      isSubmitUnstake: false,
      unstakeAmount: '0.00',
      unstakeErrMsg: '',
      walletBalance: '',
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
    formatDRF,
    parseDRF,
  },
  computed: {
    needMoreAllowance() {
      if (!this.allowance) {
        return false
      }
      const stakeAmount = parseDRF(this.stakeAmount)
      return this.allowance.lt(stakeAmount)
    },
    myWalletAddress() {
      if (!this.accounts) {
        return ''
      }
      return this.accounts[0]
    },
    showModalLogin() {
      if (!this.accounts) {
        return true
      }
      return this.accounts.length === 0
    },
    showModalSwitchNetwork() {
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
    canClaim() {
      return this.edrfBalance.gt('0')
    }
  },
  mounted() {
    this.initWeb3()
  },
  methods: {
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
      await this.web3Provider.send('eth_requestAccounts', [])
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
        await this.loadData()
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
      // 判断大小用 BN 的 gt, lt  https://docs.ethers.io/v5/single-page/#/v5/api/utils/bignumber/-%23-BigNumber--BigNumber--methods--comparison-and-equivalence
      const stakeAmount = parseDRF(this.stakeAmount) // 转换成 BN，即  1.234 => 123400000
      if (this.walletBalance.lt(stakeAmount)) {
        this.stakeAmount = formatDRF(this.walletBalance) // 转换成 字符串 即 12340000 => 1.234
      }
      // TODO @fiuche
      if (event.data === ".") {
        if (this.stakeAmount.indexOf(".") !== this.stakeAmount.lastIndexOf(".")) {
          this.stakeAmount = this.stakeAmount.slice(0, this.stakeAmount.length - 1);
        }
      } else {
        this.stakeAmount = this.stakeAmount.replace(/[^(\d|.)]/g, "");
      }
    },
    changeUnstakeAmount(event) {
      if (parseFloat(this.unstakeAmount) > this.drf) {
        this.stakeAmount = this.drf;
      }
      if (event.data === ".") {
        if (this.stakeAmount.indexOf(".") !== this.stakeAmount.lastIndexOf(".")) {
          this.stakeAmount = this.stakeAmount.slice(0, this.stakeAmount.length - 1);
        }
      } else {
        this.stakeAmount = this.stakeAmount.replace(/[^(\d|.)]/g, "");
      }
    },
    getCurrentChainContract(name, isWrite = false) {
      return getContract(this.web3Provider, this.currentChainId, name, isWrite)
    },
    async updateAllowance() {
      this.allowance = await this.getCurrentChainContract('DRF').allowance(this.myWalletAddress, contractAddressMap[this.currentChainId]['DerifyStaking'])

      console.log(`====> this.allowance :`, formatDRF(this.allowance))
    },
    async loadData() {
      const { drfBalance, edrfBalance } = await this.getCurrentChainContract('DerifyStaking').getStakingInfo(this.myWalletAddress)
      await this.updateAllowance()

      this.walletBalance = await this.getCurrentChainContract('DRF').balanceOf(this.myWalletAddress)
      console.log(`====> { drfBalance, edrfBalance, allowance } :`, { drfBalance, edrfBalance, walletBalance: this.walletBalance })
      this.drfBalance = drfBalance
      this.edrfBalance = edrfBalance

      // this.drfBalance = 111.1111
      // this.edrfBalance = 222.2222
    },
    async submitStake() {
      const stakeAmount = parseDRF(this.stakeAmount)
      if (this.needMoreAllowance) {
        return this.submitApprove()
      }
      let errMsg = ''
      try {
        const tx = await this.getCurrentChainContract('DerifyStaking', true).stakingDrf(stakeAmount)
        await tx.wait()
      } catch (e) {
        console.log(`====> e :`, e)
        errMsg = e.data.message
      }
      this.stakeErrMsg = errMsg
    },
    async submitApprove() {
      if (this.isApproving) return
      let errMsg = ''
      try {
        const tx = await this.getCurrentChainContract('DRF', true).approve(contractAddressMap[this.currentChainId]['DerifyStaking'], parseDRF(this.stakeAmount).add(10))
        this.isApproving = true
        await tx.wait()
        await this.updateAllowance()
      } catch (e) {
        errMsg = e.message
      }
      this.isApproving = false
      this.stakeErrMsg = errMsg
    },
    async withdrawAllEdrf() {
      if (this.isSubmitClaim) return
      let errMsg = ''
      this.isSubmitClaim = true
      try {
        await this.getCurrentChainContract('DerifyStaking', true).withdrawAllEdrf()
      } catch (e) {
        console.log(`====> e :`, e)
        errMsg = e.message
      }
      this.isSubmitClaim = false
      this.claimError = errMsg
    },
    async submitUnstake() {
      if (this.isSubmitUnstake) return
      let errMsg = ''
      this.isSubmitUnstake = true
      try {
        await this.getCurrentChainContract('DerifyStaking', true).redeemDrf(parseDRF(this.unstakeAmount))
      } catch (e) {
        console.log(`====> e :`, e)
        errMsg = e.message
      }
      this.isSubmitUnstake = false
      this.unstakeErrMsg = errMsg
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
    line-height: 52px;
    text-align: center;
    display: inline-block;
    border-radius: 33px;
    cursor: pointer;
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
    background: #271b51;
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
      font-size: 1.5rem;
      height: 24px;
      line-height: 24px;
      margin-bottom: 8px;
    }

    .input-wrapper {
      height: 30px;
      display: flex;
      flex-direction: row;
      color: rgba(255, 255, 255, 0.5);
      font-size: 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      input {
        flex: 1;
        font-size: 2.37rem;
        background: none;
        border: none;
        outline: none;
        color: rgba(255, 255, 255, 0.5);
      }
      span {
        margin-left: 12px;
        line-height: 37px;
        font-size: 1.8rem;
      }
    }
    .num {
      color: rgba(255, 255, 255, 0.5);
      font-size: 12px;
      margin-top: 8px;
      .all {
        cursor: pointer;
        margin-left: 18px;
        text-decoration: underline;
        background: linear-gradient(90deg, #e7446b, #fae247 100%);
        color: transparent;
        -webkit-background-clip: text;
      }
    }
    .btns {
      margin-top: 12px;
      text-align: center;
    }
    .btn2 {
      height: 32px;
      line-height: 32px;
      width: 130px;
      color: #fff;
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
      font-size: 5.9rem;
      height: 8.8rem;
      line-height: 8.8rem;
    }
    .h4 {
      font-size: 2.27rem;
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
        font-size: 3.64rem;
        margin-top: 80px;
        margin-bottom: 40px;
      }
      .num1 {
        font-size: 4.54rem;
      }
      .num2 {
        font-size: 3.54rem;
      }
      .btn-group {
        margin-top: 60px;
        text-align: center;
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

@media screen and (max-width: 744px) {
  .stake {
    background: #0e0314;
    background-image: url(../../assets/stake_bg2.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center top;
    .content {
      .data {
        display: block;
        height: auto;
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
      .connect-btn {
        margin-top: 36px;
      }
      .h1,
      .h4-text {
        padding-left: 16px;
        padding-right: 16px;
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
