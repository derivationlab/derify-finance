<!--
 * @Author: kim
 * @Date: 2021-05-01 22:43:27
 * @LastEditors: kim
 * @LastEditTime: 2021-05-07 19:09:30
 * @FilePath: /derify-finance/src/views/home/components/homeGovernance.vue
-->
<template>
  <div class="governance">
    <div class="governance-bg"></div>
    <div class="container">
      <div class="governance-title">
        <p>Governance of Derify protocol</p>
      </div>
      <div class="governance-split">
        <span></span>
      </div>
      <div class="governance-main">
        <div class="content">
          <p>
            Derify Protocol is a fully decentralized autonomous organization
            (DAO).
          </p>
          <p>
            Community members make proposals and decisions to improve the protocol.
          </p>
          <p>
            Public voting is conducted by burning eDRF (generate by staking DRF).
          </p>
          <p>Passed proposals will be strictly implemented.</p>
        </div>
        <div class="link">
          <a href="https://docs.derify.finance/faq/governance" target="_blank"
            ><img src="../../../assets/svg/learn-more-btn.svg" alt="" srcset=""></a
          >
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
.governance {
  position: relative;
  padding: 12rem 2rem;
  background: #120621;
  &-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      45.37% 126.65% at 50% 50%,
      rgba(87, 74, 143, 0.5) 0%,
      rgba(29, 17, 74, 0) 100%
    );
    filter: blur(120px);
  }
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
    .content {
      text-align: center;
      p {
        margin: 1rem 0;
        font-size: 2.4rem;
        color: #96a7c7;
      }
    }
    .link {
      padding-top: 4rem;
      text-align: center;
    }
  }
}
</style>