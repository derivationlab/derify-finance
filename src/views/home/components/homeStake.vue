<template>
  <div class="home-stake">
    <div class="wrapper">
      <div class="h1">Stake DRF to mint eDRF !</div>
      <div class="h4">
        Stake 1 DRF and get 1 eDRF per day (estimated). Burn eDRF to get broker
        privilege or vote in community.
      </div>
      <div class="btn h4" @click="goStake">GO & STAKE</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goStake() {
      this.$router.push("/stake");
    },
  },
};
</script>
<style lang="scss" scoped>
.home-stake {
  height: 268px;
  background: linear-gradient(90deg, #1b0067 0%, #590067 100%);
  color: #fff;
  .wrapper {
    position: relative;
    width: 100%;
    margin: 0 auto;
    max-width: 1440px;
    height: 100%;
    .h1 {
      padding-top: 80px;
      font-size: 5.9rem;
      padding-left: 10px;
    }
    .h4 {
      font-size: 2.27rem;
      padding-left: 10px;
    }
  }
  .btn {
    width: 182px;
    height: 52px;
    background: linear-gradient(90deg, #e7446b 0%, #fae247 100%);
    border-radius: 33px;
    text-align: center;
    line-height: 52px;
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 80px;
  }
}

$magin-m: 48px;
@media screen and (max-width: 744px) {
  .home-stake {
    height: auto;
    padding-bottom: $magin-m;
    padding-left: 37px;
    padding-right: 37px;
    .wrapper {
      .h1 {
        padding-top: $magin-m;
      }
      .btn {
        position: static;
        margin-top: $magin-m;
      }
    }
  }
}

$magin-s: 36px;
@media screen and (max-width: 420px) {
  .home-stake {
    padding-bottom: $magin-s;
    padding-left: 24px;
    padding-right: 24px;
    .wrapper {
      .h1 {
        padding-top: $magin-s;
      }
      .btn {
        margin-top: $magin-s;
      }
    }
  }
}
</style>
