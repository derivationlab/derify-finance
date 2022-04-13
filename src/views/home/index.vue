<template>
  <div class="home">
    <home-stake></home-stake>
    <home-banner></home-banner>
    <home-protocol></home-protocol>
    <home-mechanism></home-mechanism>
    <home-community></home-community>
    <home-governance></home-governance>
    <home-partner></home-partner>
  </div>
</template>
<script>
import HomeStake from "./components/homeStake";
import HomeBanner from "./components/homeBanner";
import HomeProtocol from './components/homeProtocol';
import HomeMechanism from './components/homeMechanism';
import HomeCommunity from './components/homeCommunity'
import HomeGovernance from './components/homeGovernance'
import HomePartner from './components/homePartner'
export default {
  components: {
    HomeStake,
    HomeBanner,
    HomeProtocol,
    HomeMechanism,
    HomeCommunity,
    HomeGovernance,
    HomePartner
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
body {
  background-color: #0e0314;
}

.app-header {
  position: relative;
}
</style>
<style lang='scss' scoped>
.home {
  .banner {
    width: 100%;
    padding: 20vh 0.8rem 20vh;
    background: #0e0314 url("../../assets/home.png") no-repeat;
    background-size: 80% auto;
    background-position: center;
    position: relative;
    overflow: hidden;
  }

  .protocol {
    background: #140b32 url("../../assets/svg/home-protocol.svg") no-repeat;
    background-size: 100% 100%;
  }

  .mechanism {
    background: #120621 url("../../assets/svg/home-mechanism.svg") center center no-repeat;
    background-size: 100% 100%;
  }
}
</style>
