<template>
  <div class="home">
    <home-banner></home-banner>
    <home-protocol></home-protocol>
    <home-mechanism></home-mechanism>
    <home-community></home-community>
    <home-governance></home-governance>
  </div>
</template>
<script>
import HomeBanner from "./components/homeBanner";
import HomeProtocol from './components/homeProtocol';
import HomeMechanism from './components/homeMechanism';
import HomeCommunity from './components/homeCommunity'
import HomeGovernance from './components/homeGovernance'
export default {
  components: {
    HomeBanner,
    HomeProtocol,
    HomeMechanism,
    HomeCommunity,
    HomeGovernance
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
body{
  background-color: #0e0314;
}
.app-header{
  position: relative;
}
</style>
<style lang='scss' scoped>
.home {
  .banner {
    width: 100%;
    padding: 40vh 0.8rem 20vh;
    background: #0e0314 url('../../assets/svg/ido-home.svg') no-repeat;
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
  }
  .protocol{
    background:#140B32 url('../../assets/svg/home-protocol.svg') no-repeat;
    background-size: 100% 100%;
  }
  .mechanism{
    background:#120621 url('../../assets/svg/home-mechanism.svg') center center no-repeat;
    background-size: 100% 100%;
  }
}
</style>
