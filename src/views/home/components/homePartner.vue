<template>
  <div class="partner">
    <div class="partner-bg"></div>
    <div class="container">
      <div class="partner-title">
        <p>Our partners</p>
      </div>
      <div class="partner-split">
        <span></span>
      </div>
      <div class="partner-main">
        <div class="content">
          <img src="../../../assets/partner/bsc.svg" />
          <img src="../../../assets/partner/mw.svg" />
          <img src="../../../assets/partner/portico.svg" />
          <img src="../../../assets/partner/r8.svg" />
          <img src="../../../assets/partner/three.svg" />
          <img src="../../../assets/partner/mgc.svg" />
          <img src="../../../assets/partner/inkrypto.svg" />
          <img src="../../../assets/partner/daostarter.svg" />
          <img src="../../../assets/partner/chainstride.svg" />
          <img src="../../../assets/partner/leos.svg" />
          <img src="../../../assets/partner/deficalendar.svg" />
          <img src="../../../assets/partner/ernx.svg" />
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
@import "@/assets/media-queries.scss";
.partner {
  position: relative;
  padding: 12rem 2rem 2rem;
  background: #140b32;
  border-bottom: 1px solid #899dbe;
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
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      img {
        width: 285px;
        height: 95px;
        margin: 0 20px 95px;
      }
    }
    @include lt-md {
      .content {
        justify-content: space-around;
        img {
          margin: 0 0 60px;
        }
      }
    }
    @include lt-sm {
      .content {
        justify-content: space-around;
        img {
          width: 141px;
          height: 47px;
          margin: 0 0 20px;
        }
      }
    }
    .link {
      padding-top: 4rem;
      text-align: center;
    }
  }
}
</style>