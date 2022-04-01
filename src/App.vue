<template>
  <div class="app">
    <app-header></app-header>
    <div class="layout">
      <router-view></router-view>
    </div>
    <app-footer v-show="!$route.meta || !$route.meta.hideFooter"></app-footer>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import AppHeader from "@/components/appHeader";
import AppFooter from "@/components/appFooter";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ lang: "lang" }),
  },
  methods: {
    handleLange(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch("app/setLang", lang);
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
.app {
  width: 100%;
  min-height: 100vh;
  position: relative;
  &-header {
    position: absolute;
    color: #535559;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  .layout {
    flex: 1 1;
  }
  .container {
    position: relative;
    width: 100%;
    margin: 0 auto;
    max-width: 1440px;
  }
}
</style>
