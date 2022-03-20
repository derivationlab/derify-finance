<!--
 * @Author: kim
 * @Date: 2021-05-01 22:23:38
 * @LastEditors: kim
 * @LastEditTime: 2021-05-07 19:04:13
 * @FilePath: /derify-finance/src/views/home/components/homeCommunity.vue
-->
<template>
  <div class="community">
    <div class="community-bg"></div>
    <div class="container">
      <div class="community-title">
        <p>Get into the community</p>
      </div>
      <div class="community-split">
        <span></span>
      </div>
      <div class="community-main">
        <div class="community-main-grid">
          <div class="community-main-grid-item">
            <div class="item-main">
              <div class="icon">
                <img
                  src="../../../assets/svg/community-trader.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="content">
                <div class="title">Trader</div>
                <p>
                  As a trader, you benefit from our accurate price and great
                  depth. You can also help us to reduce risk exposure and get
                  risk-free yield from position mining, or making hedged
                  transactions.
                </p>
              </div>
            </div>
          </div>
          <div class="community-main-grid-item">
            <div class="item-main">
              <div class="icon">
                <img
                  src="../../../assets/svg/community-broker.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="content">
                <div class="title">Broker</div>
                <p>
                  As a broker, you promote Derify protocol and run your own
                  decentralized exchange. You will earn transaction fee rewards
                  and various bonus.
                </p>
              </div>
            </div>
          </div>
          <div class="community-main-grid-item">
            <div class="item-main">
              <div class="icon">
                <img
                  src="../../../assets/svg/community-developer.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="content">
                <div class="title">Developer</div>
                <p>
                  As a developer, you contribute to the open-source community.
                  You can also join the Bug Bounty program to increase the
                  security of Derify protocol and earn substantial rewards.
                </p>
              </div>
            </div>
          </div>
          <div class="community-main-grid-item">
            <div class="item-main">
              <div class="icon">
                <img
                  src="../../../assets/svg/community-investor.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="content">
                <div class="title">Investor</div>
                <p>
                  As an investor, welcome to the future of decentralized
                  derivative trading! DRF token is the fundamental asset of
                  Derify protocol that can be used for community voting and
                  governance.
                </p>
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
  .community {
    .community-main {
      .community-main-grid {
        grid-template-columns: repeat(6, 1fr);
      }
    }
  }
}
@media screen and(max-width: 768px) {
  .community {
    .community-main {
      .community-main-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
}
.community {
  position: relative;
  padding: 6rem 2rem;
  background: #140b32;
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
    &-grid {
      display: grid;
      grid-gap: 3rem;
      grid-template-columns: repeat(12, 1fr);
      &-item {
        text-align: center;
        grid-column-end: span 3;
        .item-main {
          padding: 3rem 2rem;
          text-align: center;
          transition: all 0.3s ease;
          &:hover {
            background: #271b51;
            box-shadow: 0px 10px 20px rgba(11, 6, 41, 0.5);
            border-radius: 16px;
          }
        }
        .content {
          .title {
            font-size: 3rem;
            color: #fff;
            margin: 3rem;
          }
          p {
            font-size: 2rem;
            color: #96a7c7;
          }
        }
      }
    }
  }
}
</style>