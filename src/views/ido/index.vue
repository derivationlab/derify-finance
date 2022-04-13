<template>
  <div class="home">
    <home-banner></home-banner>
    <home-protocol></home-protocol>
    <home-mechanism></home-mechanism>
    <home-community></home-community>
    <home-governance></home-governance>
    <home-partner></home-partner>
  </div>
</template>
<script>
import HomeBanner from "./components/homeBanner";
import HomeProtocol from './components/homeProtocol';
import HomeMechanism from './components/homeMechanism';
import HomeCommunity from './components/homeCommunity'
import HomeGovernance from './components/homeGovernance'
import HomePartner from './components/homePartner'
export default {
  components: {
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
body{
  background-color: #0e0314;
}
.app-header{
  position: relative;
}
</style>
<style lang='scss' scoped>
</style>
