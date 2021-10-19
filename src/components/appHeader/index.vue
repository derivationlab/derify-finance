<!--
 * @Author: kim
 * @Date: 2021-04-30 20:09:42
 * @LastEditors: kim
 * @LastEditTime: 2021-05-14 20:20:50
 * @FilePath: /derify-finance/src/components/appHeader/index.vue
-->
<template>
  <div class="app-header">
    <div class="app-hader-main">
      <div class="container">
        <div class="nav">
          <a href="/" aria-colspan="logo">
            <img src="../../assets/svg/logo.svg" alt="" srcset="" />
          </a>
          <div class="nav-main">
            <div class="nav-main-menu">
              <div class="nav-main-menu-main">
                <div class="nav-main-item">
                  <a href="/">Home</a>
                </div>
                <div class="nav-main-item">
                  <a href="https://docs.derify.finance/" target="_blank"
                    >Learn</a
                  >
                  <div class="sub-nav-arrow">
                    <svg viewBox="0 0 1024 1024" fill="currentColor">
                      <path
                        d="M512 739.390625c-11.81250001 0-23.625-5.06249999-32.0625-13.5L133.15625 358.859375c-16.875-17.71875-16.03125-45.5625 1.68750001-62.4375s45.5625-16.03125 62.43749999 1.6875L512 630.546875 826.71875 298.109375c16.875-17.71875 44.71875-18.5625 62.43749999-1.6875 17.71875 16.875 18.5625 44.71875 1.68750001 62.4375l-346.78125 366.18749999c-8.4375 9.28125-20.25 14.34375-32.0625 14.34375001z m0 0"
                      ></path>
                    </svg>
                  </div>
                  <div class="sub-nav">
                    <a href="https://docs.derify.finance/" target="_blank"
                      >Docs</a
                    >
                    <a
                      href="https://docs.derify.finance/whitepaper/introduction"
                      target="_blank"
                      >Whitepaper</a
                    >
                  </div>
                </div>
                <div class="nav-main-item">
                  <a href="https://derify.medium.com/" target="_blank">Blog</a>
                </div>
                <div class="nav-main-item">
                  <a href="https://derify.medium.com/" target="_blank"
                    >Community</a
                  >
                  <div class="sub-nav-arrow">
                    <svg viewBox="0 0 1024 1024" fill="currentColor">
                      <path
                        d="M512 739.390625c-11.81250001 0-23.625-5.06249999-32.0625-13.5L133.15625 358.859375c-16.875-17.71875-16.03125-45.5625 1.68750001-62.4375s45.5625-16.03125 62.43749999 1.6875L512 630.546875 826.71875 298.109375c16.875-17.71875 44.71875-18.5625 62.43749999-1.6875 17.71875 16.875 18.5625 44.71875 1.68750001 62.4375l-346.78125 366.18749999c-8.4375 9.28125-20.25 14.34375-32.0625 14.34375001z m0 0"
                      ></path>
                    </svg>
                  </div>
                  <div class="sub-nav">
                    <a href="https://github.com/derivationlab" target="_blank"
                      >
                      <img src="../../assets/svg/nav-icons-github.svg" alt="" srcset="">
                      Github</a
                    >
                    <a href="https://twitter.com/DerifyProtocol" target="_black"
                      ><img src="../../assets/svg/nav-icons-twitter.svg" alt="" srcset="">Twitter</a
                    >
                    <a href="https://discord.gg/kSR6tz2pdm" target="_black"
                      ><img src="../../assets/svg/nav-discord-icon.svg" alt="" srcset="">Discord</a
                    >
                    <a href="https://derify.medium.com/" target="_black"
                      ><img src="../../assets/svg/nav-medium-icon.svg" alt="" srcset="">Medium</a
                    >
                    <a
                      href="https://t.me/DerifyProtocol_Official"
                      target="_black"
                      ><img src="../../assets/svg/nav-tele-icon.svg" alt="" srcset="">Tele</a
                    >
                    <a href="mailto:contact@derify.org" target="_black"
                      ><img src="../../assets/svg/nav-email-icon.svg" alt="" srcset="">Email</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="nav-main-btn">
              <a href="https://derify.exchange">
                <img src="../../assets/svg/exchange-btn.svg" alt="" srcset="" />
              </a>
            </div>
            <div class="nav-main-toggle">
              <div class="inner" :class="showMiniNav ? 'show' : ''">
                <div class="inner-icon" @click="showMiniNav = !showMiniNav">
                  <img src="../../assets/svg/nav-icon.svg" alt="" srcset="" />
                </div>
                <div class="inner-menu">
                  <div
                    class="inner-menu-mask"
                    @click="showMiniNav = false"
                  ></div>
                  <div class="inner-menu-main">
                    <router-link to="/">Home</router-link>
                    <a href="https://docs.derify.finance/" target="_blank"
                      >Learn</a
                    >
                    <a href="https://derify.medium.com/" target="_blank"
                      >Blog</a
                    >
                    <a href="https://derify.medium.com/" target="_blank"
                      >Community</a
                    >
                  </div>
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
    return {
      showMiniNav: false,
    };
  },
  methods: {
    handleExchange() {
      alert("coming soon...");
    },
  },
};
</script>
<style lang='scss' scoped>
.app-hader {
  &-main {
    text-align: center;
    width: 100%;
    padding: 0 1.5rem;
    .nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 2rem 0;
      .logo {
        flex-shrink: 0;
        text-align: left;
      }
      &-main {
        flex: 1 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        &-menu {
          &-main {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .nav-main-item {
              position: relative;
              font-size: 2rem;
              padding: 0 3rem;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              height: 6rem;
              line-height: 6rem;
              a {
                color: #96a7c7;
                &:hover {
                  color: #fff;
                }
              }
              &:hover {
                .sub-nav {
                  display: block;
                }
                .sub-nav-arrow {
                  transform: translateX(-180deg);
                }
              }
              .sub-nav-arrow {
                height: 100%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                margin-left: 0.6rem;
                transition: transform 0.24s cubic-bezier(0.4, 0, 0.2, 1);
                svg {
                  width: 1.8rem;
                  height: 1.8rem;
                }
              }
              .sub-nav {
                z-index: 1;
                animation: Menu-fade-up 0.24s cubic-bezier(0.4, 0, 0.2, 1);
                display: none;
                position: absolute;
                top: 6rem;
                left: 3rem;
                background-color: rgba(255, 255, 255, .1);
                min-width: 100%;
                border-radius: 2px;
                box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
                  0 3px 4px 0 rgba(0, 0, 0, 0.14),
                  0 1px 8px 0 rgba(0, 0, 0, 0.12);
                a {
                  display: block;
                  padding: 0 2rem;
                  height: 4.6rem;
                  line-height: 4.6rem;
                  text-align: left;
                  img{
                    margin-right: 1rem;
                  }
                  &:hover{
                    background-color: rgba(255, 255, 255, 0.05);
                  }
                }
              }
            }
          }
        }
        &-toggle {
          width: 100%;
          height: 100%;
          display: none;
          .inner {
            position: relative;
            &-icon {
              width: 40px;
              height: 40px;
              margin-left: auto;
              cursor: pointer;
              img {
                width: 100%;
                height: 100%;
                -webkit-tap-highlight-color: transparent;
                user-select: none;
              }
            }
            &.show {
              .inner-menu-main,
              .inner-menu-mask {
                display: block;
              }
            }
            &-menu {
              position: absolute;
              top: 0;
              right: 0;
              &-mask {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
              }
              &-main {
                position: relative;
                z-index: 1;
                animation: Menu-fade-up 0.24s cubic-bezier(0.4, 0, 0.2, 1);
                display: none;
                position: absolute;
                top: 6rem;
                right: 1rem;
                background-color: rgba(255, 255, 255, .1);
                border-radius: 2px;
                box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
                  0 3px 4px 0 rgba(0, 0, 0, 0.14),
                  0 1px 8px 0 rgba(0, 0, 0, 0.12);
                a {
                  display: block;
                  text-align: left;
                  cursor: pointer;
                  color: hsla(0, 0%, 100%, 0.6);
                  font-size: 1.8rem;
                  min-width: 140px;
                  padding: 1rem 2rem;
                  line-height: 1.5;
                  &.router-link-active{
                    color: #fff;
                  }
                }
              }
            }
          }
        }
        &-btn {
          padding-left: 2rem;
        }
      }
    }
  }
}
@keyframes Menu-fade-up {
  0% {
    opacity: 0.4;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and(max-width: 1200px) {
  .app-hader {
    &-main {
      .nav {
        &-main {
          &-menu {
            display: none;
          }
          &-btn {
            display: none;
          }
          &-toggle {
            display: block;
          }
        }
      }
    }
  }
}
</style>
