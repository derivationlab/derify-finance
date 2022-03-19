<!--
 * @Author: kim
 * @Date: 2021-04-30 21:49:11
 * @LastEditors: kim
 * @LastEditTime: 2021-05-07 19:05:22
 * @FilePath: /derify-finance/src/views/home/components/homeMechanism.vue
-->
<template>
  <div class="mechanism">
    <div class="container">
      <div class="mechanism-title">
        <p>Mechanism of Derify protocol</p>
      </div>
      <div class="mechanism-split">
        <span></span>
      </div>
      <div class="mechanism-main">
        <div class="mechanism-main-flex">
          <div class="mechanism-main-flex-left">
            <div class="icon">
              <img
                src="../../../assets/svg/mechanism-left.svg"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div class="mechanism-main-flex-right">
            <div class="mechanism-main-flex-right-item">
              <div class="title">Trader Protection</div>
              <div class="content">
                In Derify protocol, trading action is conducted via "computable
                contract", with simplified trading experience and actual trading
                price with no slippage. We also have multiple layers of
                protection for the money of our traders.
              </div>
            </div>
            <div class="mechanism-main-flex-right-item">
              <div class="title">hAMM</div>
              <div class="content">
                In Derify protocol, the market making is powered by "Hedged
                Automated Market Making" (hAMM) algorithm. The key objective of
                hAMM to restore the balance of system: long and short positions
                fully hedged. Arbitrageurs can contribute to this objective
                while earning risk-free profits. hAMM also have other unique
                features and advantages.
              </div>
              <div class="link">
                <a
                  href="https://docs.derify.finance/getting-started/hamm-mechanism"
                  target="_blank"
                  >LEARN MORE ></a
                >
              </div>
            </div>
            <div class="mechanism-main-flex-right-item">
              <div class="title">Position Mining</div>
              <div class="content">
                In Derify protocol, position is liquidity. All positions provide
                liquidity to opposite positions. Yield farmer can get
                considerable returns by holding positions (both long and short).
                We offer "2-way position" function for risk-free liquidity
                provision.
              </div>
              <div class="link">
                <a
                  href="https://docs.derify.finance/getting-started/position-mining"
                  target="_blank"
                  >LEARN MORE ></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
@media screen and(max-width: 1200px) {
  .mechanism {
    .mechanism-main {
      .mechanism-main-flex {
        grid-template-columns: repeat(8, 1fr);
      }
    }
  }
}
@media screen and(max-width: 768px) {
  .mechanism {
    .mechanism-main {
      .mechanism-main-flex {
        flex-direction: column;
        .mechanism-main-flex-left {
          display: none;
        }
      }
    }
  }
}
.mechanism {
  padding: 11rem 2rem;
  background: #120621;
  &-title {
    text-align: center;
    color: #fff;
    font-size: 4.5rem;
    font-weight: bold;
  }
  &-split {
    margin: 3rem 0 6rem;
    text-align: center;
    span {
      display: inline-block;
      width: 200px;
      height: 2px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(250, 226, 71, 0.7) 49.88%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
  &-main {
    &-flex {
      display: flex;
      &-left {
        flex: 1 1;
        padding: 2rem;
        display: flex;
        flex-direction: column;
      }
      &-right {
        flex: 1.5 1;
        padding: 1.5rem 0;
        &-item {
          padding: 2rem;
          .title {
            font-size: 3rem;
            color: #fff;
            font-weight: bold;
          }
          .content {
            text-align: left;
            font-size: 2rem;
            color: #96a7c7;
            margin: 2rem 0 1.6rem;
          }
          .link {
            a {
              font-size: 1.6rem;
              color: #e7446b;
            }
          }
        }
      }
    }
  }
}
</style>