<template>
  <div class="stake">
    <!-- modal -->
    <div class="modal" v-show="showModal">
      <div class="modal-content">
        <div class="title" v-text="title">title</div>
        <div class="modal-input">
          <div class="modal-input-title">Amount</div>
          <div class="input-wrapper">
            <input type="text" v-model="count" @input="change" />
            <span>DRF</span>
          </div>
          <div class="num">
            Max: <span v-text="drf">0</span> DRF
            <span class="all">All</span>
          </div>
        </div>
        <div class="btns">
          <div class="btn1 h4 btn-fill btn2" @click="confirm">Stake</div>
          <div class="btn1 h4 btn-bordered btn2" @click="cancel">
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
        <div class="btn h4 connect-btn" v-show="!connected">Connect Wallet</div>
        <div class="data" v-show="connected">
          <div class="item">
            <div class="title">Staked</div>
            <div class="num">
              <span class="num1">11.</span>
              <span class="num2">11</span>
            </div>
            <div class="h4">DRF</div>
            <div class="btn-group">
              <div class="btn1 h4 btn-fill" @click="stake">Stake</div>
              <div class="btn1 h4 btn-bordered" @click="unstake">
                <div class="btn-bordered-inner">
                  <span class="btn-bordered-inner-text">unstake</span>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="title">Claimable</div>
            <div class="num">
              <span class="num1">11.</span>
              <span class="num2">11</span>
            </div>
            <div class="h4">eDRF</div>
            <div class="btn-group">
              <div class="btn1 h4 btn-fill" @click="claim">Claim All</div>
            </div>
          </div>
        </div>
        <div class="footer h4">© 2021 DERIVATION LAB</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: "0",
      drf: "10.007777",
      value0: "10.007777",
      value1: "12.007777",
      connected: true,
      showModal: false,
      title: "Stake DRF",
    };
  },
  filters: {
    dataFormat: (msg) => {
      return msg;
    },
  },
  methods: {
    // the input only number, can not be negative
    change(event) {
      if (parseFloat(this.count) > this.drf) {
        this.count = this.drf;
      }
      if (event.data === ".") {
        if (this.count.indexOf(".") !== this.count.lastIndexOf(".")) {
          this.count = this.count.slice(0, this.count.length - 1);
        }
      } else {
        this.count = this.count.replace(/[^(\d|.)]/g, "");
      }
    },
    stake() {
      this.drf = this.value0;
      this.title = "Stake DRF";
      this.showModal = true;
    },
    unstake() {
      this.drf = this.value1;
      this.title = "Unstake DRF";
      this.showModal = true;
    },
    claim() {
      this.showModal = true;
    },
    confirm() {
      this.showModal = false;
    },
    cancel() {
      this.showModal = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.stake {
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
    }
    .title {
      height: 64px;
      line-height: 64px;
      color: #fff;
      font-size: 1.9rem;
      text-align: center;
    }
    .modal-input {
      width: 100%;
      height: 135px;
      padding: 20px 36px 0 36px;
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
      font-size: 1.5rem;
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
