<!--
 * @Author: kim
 * @Date: 2021-04-30 20:17:35
 * @LastEditors: kim
 * @LastEditTime: 2021-05-07 19:16:09
 * @FilePath: /derify-finance/src/views/home/components/homeBanner.vue
-->
<template>
  <div class="banner">
    <div class="main">
      <div class="breakpoint">
        <div class="title">
          <h1>The Decentralized Derivatives Trading</h1>
          <h1>Protocol For Everything</h1>
        </div>
        <div class="sub-title">
          <p>
            trade with leverage and guaranteed liquidity for all users
            decentralized and applications
          </p>
        </div>
        <div class="btn">
          <a href="https://docs.derify.finance/whitepaper/introduction" target="_blank">WHITEPAPER</a>
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
@media screen and (max-width: 576px) {
  .home .banner .main .title h1 {
    font-size: 4rem;
  }
}

@media screen and (max-width: 376px) {
  .home .banner .main .title h1 {
    font-size: 2rem;
  }

  .home .banner .main .sub-title {
    font-size: 1.6rem;
  }

  .home .banner .main .btn a {
    height: 4.8rem;
    line-height: 4.8rem;
    font-size: 1.8rem;
  }
}

.banner {
  .main {
    width: 100%;
    padding: 0 1.5rem;
    overflow: hidden;
    text-align: center;

    .breakpoint {
      width: 100%;
      margin: 0 auto;
      max-width: 1440px;
    }

    .title {
      h1 {
        color: #fff;
        font-weight: 400;
        font-size: 6rem;
      }
    }

    .sub-title {
      margin: 4rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      color: rgba(255, 255, 255, 0.8);
    }

    .btn {
      a {
        display: inline-block;
        height: 6rem;
        line-height: 6rem;
        padding: 0 4rem;
        background: linear-gradient(93.34deg, #e7446b 1.18%, #fae247 100%);
        border-radius: 3rem;
        font-size: 2.2rem;
        color: #fff;
      }
    }
  }
}
</style>