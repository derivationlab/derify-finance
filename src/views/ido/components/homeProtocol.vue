<!--
 * @Author: kim
 * @Date: 2021-04-30 21:37:26
 * @LastEditors: kim
 * @LastEditTime: 2021-05-06 20:31:12
 * @FilePath: /derify-finance/src/views/home/components/homeProtocol.vue
-->
<template>
  <div class="protocol">
    <div class="container">
      <div class="protocol-title">
        <p>Derify protocol is the <span>NEXT Generation</span></p>
        <p>decentralized derivatives trading protocol</p>
      </div>
      <div class="protocol-split">
        <span></span>
      </div>
      <div class="protocol-main">
        <div class="protocol-main-grid">
          <div class="protocol-main-grid-item">
            <div class="item">
              <div class="item-main">
                <div class="item-main-icon">
                  <img
                    src="../../../assets/svg/protocol-icon-position.svg"
                    alt=""
                  />
                </div>
                <div class="item-main-content">
                  <p>2-Way Position</p>
                  <p>go long and short freely</p>
                  <p>up to 10x leverage</p>
                  <p>open 2-way position in the same time</p>
                </div>
              </div>
            </div>
          </div>
          <div class="protocol-main-grid-item">
            <div class="item">
              <div class="item-main">
                <div class="item-main-icon">
                  <img
                    src="../../../assets/svg/protocol-icon-slippage.svg"
                    alt=""
                  />
                </div>
                <div class="item-main-content">
                  <p>No Slippage</p>
                  <p>index not affected by liquidity</p>
                  <p>trade with actual price</p>
                  <p>synchronized with external markets</p>
                </div>
              </div>
            </div>
          </div>
          <div class="protocol-main-grid-item">
            <div class="item">
              <div class="item-main">
                <div class="item-main-icon">
                  <img
                    src="../../../assets/svg/protocol-icon-liquidity.svg"
                    alt=""
                  />
                </div>
                <div class="item-main-content">
                  <p>RISK-FREE Liquidity Staking</p>
                  <p>built-in cross margin trading</p>
                  <p>guaranteed ZERO impermanent loss</p>
                  <p>2-way positions will never be liquidated</p>
                </div>
              </div>
            </div>
          </div>
          <div class="protocol-main-grid-item">
            <div class="item">
              <div class="item-main">
                <div class="item-main-icon">
                  <img
                    src="../../../assets/svg/protocol-icon-performance.svg"
                    alt=""
                  />
                </div>
                <div class="item-main-content">
                  <p>High Performance And Low Gas Fee</p>
                  <p>based on xDai stable side-chain</p>
                  <p>gas fee as low as $0.0001</p>
                  <p>future upgrade to rollup solution</p>
                </div>
              </div>
            </div>
          </div>
          <div class="protocol-main-grid-item">
            <div class="item">
              <div class="item-main">
                <div class="item-main-icon">
                  <img
                    src="../../../assets/svg/protocol-icon-fully.svg"
                    alt=""
                  />
                </div>
                <div class="item-main-content">
                  <p>Fully Decentralized</p>
                  <p>completely anti-cencorship</p>
                  <p>index powered by ORACLEs</p>
                  <p>verifiable on-chain transactions</p>
                </div>
              </div>
            </div>
          </div>
          <div class="protocol-main-grid-item">
            <div class="item">
              <div class="item-main">
                <div class="item-main-icon">
                  <img
                    src="../../../assets/svg/protocol-icon-collaterals.svg"
                    alt=""
                  />
                </div>
                <div class="item-main-content">
                  <p>Any Index and Collaterals</p>
                  <p>free to create any index product</p>
                  <p>soff-chain assets supported</p>
                  <p>use any cryptocurrency as collaterals</p>
                </div>
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

.protocol {
  padding: 12rem 2rem;
  &-title {
    text-align: center;
    color: #fff;
    font-size: 4.5rem;
    p{
      margin: 0;
    }
    span{
      font-weight: bold;
    }
  }
  &-split{
    margin: 3rem 0 6rem;
    text-align: center;
    span{
      display: inline-block;
      width: 200px;
      height: 2px;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(250, 226, 71, 0.7) 49.88%, rgba(255, 255, 255, 0) 100%);
    }
  }
  &-main {
    &-grid {
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(12, 1fr);
      &-item {
        margin-top: 3rem;
        grid-column-end: span 4;
        transition: all .3s ease;
        &:hover {
          background: #271b51;
          box-shadow: 0px 10px 20px rgba(11, 6, 41, 0.5);
          border-radius: 16px;
        }
        .item {
          width: 100%;
          padding: 2rem;
          text-align: left;
          max-width: 480px;
          margin: 0 auto;
          cursor: pointer;
          color: #fff;
          &-main {
            display: flex;
            &-icon {
              margin-top: 1rem;
              margin-right: 3rem;
            }
            &-content {
              flex: 1;
              p{
                font-size: 16px;
                color: #96A7C7;
                margin: 0;
                &:first-child{
                font-size: 18px;
                color: #fff;
                margin-bottom: 2rem;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media screen and(max-width: 1200px) {
  .protocol{
    .protocol-main{
      .protocol-main-grid{
      grid-template-columns: repeat(8, 1fr);
      }
    }
  }
}
@media screen and(max-width: 768px) {
  .protocol{
    .protocol-main{
      .protocol-main-grid{
      grid-template-columns: repeat(4, 1fr);
      }
    }
  }
}
</style>