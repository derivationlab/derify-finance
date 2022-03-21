<template>
  <div class="banner">
    <div class="main">
      <div class="breakpoint">
        <div class="title">
          <h1>
            Derify protocol
            <span>official IDO is here!</span>
          </h1>
        </div>
        <div class="sub-title">
          <p>
            Official Listing (
            <a
              style="text-decoration: underline;color: inherit"
              href="https://apeswap.finance/"
              target="_blank"
            >ApeSwap</a> ,
            <a
              style="text-decoration: underline;color: inherit"
              href="https://pancakeswap.finance/"
              target="_blank"
            >PancakeSwap</a> ) on April 1, 2022 00:00UTC
          </p>
        </div>

        <div class="entrance-wrap">
          <div class="entrance-block">
            <h2 class="fc-32">Community Entrance</h2>
            <p style="opacity: 0">.</p>
            <!-- pool A-->
            <a href="https://app.bounce.finance/auction/fixed/377" target="_blank">
              <div class="pool-wrap">
                <div class="pool-row">
                  <div class="pool-left">
                    <h3>
                      Official Pool A
                      <span
                        class="lernmore-btn"
                        @click="(e) => {
                          e.preventDefault();
                          this.detailShow = true;
                        }"
                      >
                        <span class="btn-box">
                          <span class="text-color-linear">Details</span>
                        </span>
                      </span>
                    </h3>
                    <p>
                      powered by
                      <span class="fb">Bounce.finance</span>
                    </p>
                    <p>
                      <span class="fb fc-yellow fz-20">$0.6</span> BUSD per DRF,
                      <span class="fb">release at May 1</span>.
                    </p>
                  </div>
                  <div class="pool-right">
                    <p>
                      Start at
                      <span class="fb">{{ toUTCDate(official.start) }}</span> UTC
                    </p>
                    <p>
                      End at
                      <span class="fb">{{ toUTCDate(official.end) }}</span> UTC
                    </p>

                    <div style="margin-top: 2rem;">
                      <template v-if="officialStatus.showStatus">
                        <div class="status-btn">{{ officialStatus.statusText }}</div>
                      </template>
                      <template v-if="officialStatus.showWait">
                        <p>
                          <span class="time-wrap first">{{ officialStatus.time.days }}</span>Days
                          <span
                            class="time-wrap"
                          >{{ officialStatus.time.hours }}:{{ officialStatus.time.minutes }}:{{ officialStatus.time.seconds }}</span>later
                        </p>
                      </template>
                      <template v-if="officialStatus.showSale">
                        <span
                          class="text-color-linear"
                        >end in {{ officialStatus.time.hours }} h {{ officialStatus.time.minutes }} m {{ officialStatus.time.seconds }} s</span>
                        <div class="buy-btn" style="margin-left: 1rem;">BUY</div>
                      </template>

                      <template v-if="officialStatus.showClaim">
                        <div class="buy-btn" style="margin-left: 1rem;">Claim</div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <!-- pool B-->
            <a href="https://app.bounce.finance/auction/fixed/378" target="_blank">
              <div class="pool-wrap">
                <div class="pool-row">
                  <div class="pool-left">
                    <h3>
                      Official Pool B
                      <span
                        class="lernmore-btn"
                        @click="(e) => { this.detailShow = true; e.preventDefault(); }"
                      >
                        <span class="btn-box">
                          <span class="text-color-linear">Details</span>
                        </span>
                      </span>
                    </h3>
                    <p>
                      powered by
                      <span class="fb">Bounce.finance</span>
                    </p>
                    <p>
                      <span class="fb fc-yellow fz-20">$0.8</span> BUSD per DRF,
                      <span class="fb">no lockup</span>.
                    </p>
                  </div>
                  <div class="pool-right">
                    <p>
                      Start at
                      <span class="fb">{{ toUTCDate(official.start) }}</span> UTC
                    </p>
                    <p>
                      End at
                      <span class="fb">{{ toUTCDate(official.end) }}</span> UTC
                    </p>

                    <div style="margin-top: 2rem;">
                      <template v-if="officialStatus.showStatus">
                        <div class="status-btn">{{ officialStatus.statusText }}</div>
                      </template>
                      <template v-if="officialStatus.showWait">
                        <p>
                          <span class="time-wrap first">{{ officialStatus.time.days }}</span>Days
                          <span
                            class="time-wrap"
                          >{{ officialStatus.time.hours }}:{{ officialStatus.time.minutes }}:{{ officialStatus.time.seconds }}</span>later
                        </p>
                      </template>
                      <template v-if="officialStatus.showSale">
                        <span
                          class="text-color-linear"
                        >end in {{ officialStatus.time.hours }} h {{ officialStatus.time.minutes }} m {{ official.time.seconds }} s</span>
                        <div class="buy-btn" style="margin-left: 1rem;">BUY</div>
                      </template>

                      <template v-if="officialStatus.showClaim">
                        <div class="buy-btn" style="margin-left: 1rem;">Claim</div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <!-- dodo -->
            <a href="https://legacy.dodoex.io/cp/join?network=bsc-mainnet" target="_blank">
              <div class="pool-wrap">
                <div class="pool-row">
                  <div class="pool-left">
                    <div class="ido-aodo-logo">&nbsp;</div>
                    <p>
                      <span class="fb fc-yellow fz-20">$0.6</span> BUSD per DRF,
                      <span class="fb">release at May 1</span>.
                    </p>
                  </div>
                  <div class="pool-right">
                    <p>
                      Start at
                      <span class="fb">{{ toUTCDate(dodo.start) }}</span> UTC
                    </p>
                    <p>
                      End at
                      <span class="fb">{{ toUTCDate(dodo.end) }}</span> UTC
                    </p>

                    <div style="margin-top: 2rem;">
                      <template v-if="dodoStatus.showStatus">
                        <div class="status-btn">{{ dodoStatus.statusText }}</div>
                      </template>
                      <template v-if="dodoStatus.showWait">
                        <p>
                          <span class="time-wrap first">{{ dodoStatus.time.days }}</span>Days
                          <span
                            class="time-wrap"
                          >{{ dodoStatus.time.hours }}:{{ dodoStatus.time.minutes }}:{{ dodoStatus.time.seconds }}</span>later
                        </p>
                      </template>
                      <template v-if="dodoStatus.showSale">
                        <span
                          class="text-color-linear"
                        >end in {{ dodoStatus.time.hours }} h {{ dodoStatus.time.minutes }} m {{ dodoStatus.time.seconds }} s</span>
                        <div class="buy-btn" style="margin-left: 1rem;">BUY</div>
                      </template>

                      <template v-if="dodoStatus.showClaim">
                        <div class="buy-btn" style="margin-left: 1rem;">Claim</div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="entrance-block">
            <h2 class="fc-32">Special Entrance</h2>
            <p style="text-align: center">platform native token required</p>

            <!-- acy -->
            <a href="https://app.acy.finance/#/launchpad/project/17
" target="_blank">
              <div class="pool-wrap">
                <div class="pool-row">
                  <div class="pool-left">
                    <div class="ido-acy-logo">&nbsp;</div>
                    <p>
                      <span class="fb fc-yellow fz-20">$0.8</span> BUSD per DRF,
                      <span class="fb">no lockup</span>.
                    </p>
                  </div>
                  <div class="pool-right">
                    <p>
                      Start at
                      <span class="fb">{{ toUTCDate(acy.start) }}</span> UTC
                    </p>
                    <p>
                      End at
                      <span class="fb">{{ toUTCDate(acy.end) }}</span> UTC
                    </p>

                    <div style="margin-top: 2rem;">
                      <template v-if="acyStatus.showStatus">
                        <div class="status-btn">{{ acyStatus.statusText }}</div>
                      </template>
                      <template v-if="acyStatus.showWait">
                        <p>
                          <span class="time-wrap first">{{ acyStatus.time.days }}</span>Days
                          <span
                            class="time-wrap"
                          >{{ acyStatus.time.hours }}:{{ acyStatus.time.minutes }}:{{ acyStatus.time.seconds }}</span>later
                        </p>
                      </template>
                      <template v-if="acyStatus.showSale">
                        <span
                          class="text-color-linear"
                        >end in {{ acyStatus.time.hours }} h {{ acyStatus.time.minutes }} m {{ acyStatus.time.seconds }} s</span>
                        <div class="buy-btn" style="margin-left: 1rem;">BUY</div>
                      </template>

                      <template v-if="acyStatus.showClaim">
                        <div class="buy-btn" style="margin-left: 1rem;">Claim</div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <!-- erax -->
            <a
              href="https://www.erax.io/#/ido-detail/0x676fbeEEA559FD4D1F168e39EB4303C5eC6352c6"
              target="_blank"
            >
              <div class="pool-wrap">
                <div class="pool-row">
                  <div class="pool-left">
                    <div class="ido-erax-logo">&nbsp;</div>
                    <p>
                      <span class="fb fc-yellow fz-20">$0.8</span> BUSD per DRF,
                      <span class="fb">no lockup</span>.
                    </p>
                  </div>
                  <div class="pool-right">
                    <p>
                      Start at
                      <span class="fb">{{ toUTCDate(erax.start) }}</span> UTC
                    </p>
                    <p>
                      End at
                      <span class="fb">{{ toUTCDate(erax.end) }}</span> UTC
                    </p>

                    <div style="margin-top: 2rem;">
                      <template v-if="eraxStatus.showStatus">
                        <div class="status-btn">{{ eraxStatus.statusText }}</div>
                      </template>
                      <template v-if="eraxStatus.showWait">
                        <p>
                          <span class="time-wrap first">{{ eraxStatus.time.days }}</span>Days
                          <span
                            class="time-wrap"
                          >{{ eraxStatus.time.hours }}:{{ eraxStatus.time.minutes }}:{{ eraxStatus.time.seconds }}</span>later
                        </p>
                      </template>
                      <template v-if="eraxStatus.showSale">
                        <span
                          class="text-color-linear"
                        >end in {{ eraxStatus.time.hours }} h {{ eraxStatus.time.minutes }} m {{ eraxStatus.time.seconds }} s</span>
                        <div class="buy-btn" style="margin-left: 1rem;">BUY</div>
                      </template>

                      <template v-if="eraxStatus.showClaim">
                        <div class="buy-btn" style="margin-left: 1rem;">Claim</div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <!--ido-dao-logo -->
            <a href="https://www.daostarter.pro/" target="_blank">
              <div class="pool-wrap">
                <div class="pool-row">
                  <div class="pool-left">
                    <div class="ido-dao-logo">&nbsp;</div>
                    <p>
                      <span class="fb fc-yellow fz-20">$0.8</span> BUSD per DRF,
                      <span class="fb">no lockup</span>.
                    </p>
                  </div>
                  <div class="pool-right">
                    <p>
                      Start at
                      <span class="fb">{{ toUTCDate(dao.start) }}</span> UTC
                    </p>
                    <p>
                      End at
                      <span class="fb">{{ toUTCDate(dao.end) }}</span> UTC
                    </p>

                    <div style="margin-top: 2rem;">
                      <template v-if="daoStatus.showStatus">
                        <div class="status-btn">{{ daoStatus.statusText }}</div>
                      </template>
                      <template v-if="daoStatus.showWait">
                        <p>
                          <span class="time-wrap first">{{ daoStatus.time.days }}</span>Days
                          <span
                            class="time-wrap"
                          >{{ daoStatus.time.hours }}:{{ daoStatus.time.minutes }}:{{ daoStatus.time.seconds }}</span>later
                        </p>
                      </template>
                      <template v-if="daoStatus.showSale">
                        <span
                          class="text-color-linear"
                        >end in {{ daoStatus.time.hours }} h {{ daoStatus.time.minutes }} m {{ daoStatus.time.seconds }} s</span>
                        <div class="buy-btn" style="margin-left: 1rem;">BUY</div>
                      </template>

                      <template v-if="daoStatus.showClaim">
                        <div class="buy-btn" style="margin-left: 1rem;">Claim</div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="breakpoint">
        <div class="title">
          <h1>
            The Decentralized
            <span>Derivatives Trading</span>
          </h1>
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
    <home-detail v-if="detailShow" @close="() => {
      this.detailShow = false
    }"></home-detail>
  </div>
</template>
<script>

import HomeDetail from "./homeDetail";
const claimEndDate = new Date('2022-04-01 00:00:00UTC')
Date.prototype.format = function (fmt) {
  var o = {
    'M+': this.getUTCMonth() + 1, // month
    'd+': this.getUTCDate(), // day
    'h+': this.getUTCHours(), // hour
    'm+': this.getUTCMinutes(), // min
    's+': this.getUTCSeconds(), // sec
    'q+': Math.floor((this.getUTCMonth() + 3) / 3), // quarter
    S: this.getUTCMilliseconds(), // ms
    W: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][this.getDay()]
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  return fmt
}

function toFixedNum(num, digit = 2) {
  const numLen = (num + "").length;
  if (numLen >= digit) {
    return num + "";
  }

  return "0".repeat(digit - numLen) + num;
}


export default {
  components: { HomeDetail },
  data() {
    return {
      detailShow: false,
      now: new Date(),
      official: {
        start: Date.UTC(2022, 2, 28, 12),
        end: Date.UTC(2022, 2, 30, 12)
      },
      dodo: {
        start: Date.UTC(2022, 2, 31, 0),
        end: Date.UTC(2022, 3, 1, 0)
      },
      acy: {
        start: Date.UTC(2022, 2, 20, 0),
        end: Date.UTC(2022, 2, 21, 0)
      },
      erax: {
        start: Date.UTC(2022, 2, 26, 8),
        end: Date.UTC(2022, 2, 27, 8)
      },
      dao: {
        start: Date.UTC(2022, 2, 30, 8),
        end: Date.UTC(2022, 2, 31, 8)
      }
    };
  },
  methods: {
    toUTCDate(date) {
      const dateEnName = ['January', 'February', 'March', 'April', 'May', 'June'
        , 'July', 'August', 'September', 'October', 'November', 'December'];
      const calen = (new Date(date));
      const mon = dateEnName[calen.getMonth()];
      const monDay = calen.getDate();
      // console.log(`====> dateEnName, calen, mon, monDay :`, date, new Date(date), calen, mon, monDay)
      return `${mon} ${monDay} ${calen.format('hh:mm')}`;
    },
    getSaleStatus(cfg, type, now) {
      var start = new Date(cfg.start);
      var end = new Date(cfg.end);

      var sencMilSec = 1000;
      var minMilSec = 60 * 1000;
      var hourMilSec = 60 * 60 * 1000;
      var dayMilSec = 24 * 60 * 60 * 1000;

      if (now.getTime() < start.getTime()) {
        var timeGap = start.getTime() - now.getTime();
        return {
          status: 'wait', statusText: '', showStatus: false, showWait: true, time: {
            days: Math.floor(timeGap / dayMilSec)
            , hours: toFixedNum(Math.floor((timeGap % dayMilSec) / hourMilSec))
            , minutes: toFixedNum(Math.floor((timeGap % hourMilSec) / minMilSec))
            , seconds: toFixedNum(Math.floor((timeGap % minMilSec) / sencMilSec))
          }
        };
      }

      if (now.getTime() < end.getTime()) {
        var timeGap = end.getTime() - now.getTime();
        return {
          status: 'saling', statusText: '', showStatus: false, showWait: false, showSale: true, time:
          {
            days: Math.floor(timeGap / dayMilSec)
            , hours: toFixedNum(Math.floor((timeGap % dayMilSec) / hourMilSec))
            , minutes: toFixedNum(Math.floor((timeGap % hourMilSec) / minMilSec))
            , seconds: toFixedNum(Math.floor((timeGap % minMilSec) / sencMilSec))
          }
        };
      }

      if (now.getTime() < claimEndDate.getTime()) {
        return { status: 'finish', statusText: type === 'official' ? 'InitialPool Sold Out' : 'Finished', showStatus: true, showWait: false, showSale: false, showFinish: true };
      }

      return { status: 'claim', statusText: '', showStatus: false, showWait: false, showSale: false, showFinish: false, showClaim: true }
    }
  },
  computed: {
    officialStatus() {
      return this.getSaleStatus(this.official, 'official', this.now);
    },
    dodoStatus() {
      return this.getSaleStatus(this.dodo, 'dodo', this.now);
    },
    acyStatus() {
      return this.getSaleStatus(this.acy, 'acy', this.now);
    },
    eraxStatus() {
      return this.getSaleStatus(this.erax, 'erax', this.now);
    },
    daoStatus() {
      return this.getSaleStatus(this.dao, 'dao', this.now);
    },
  },
  mounted(callback, context) {
    const self = this;
    setInterval(() => {
      self.$nextTick(() => {
        self.now = new Date();
        self.$forceUpdate();
      })

    }, 1000)
  }
};
</script>
<style lang='scss' scoped>
.fc-20 {
  font-size: 2rem;
}
.fc-32 {
  font-size: 3.2rem;
}
.fc-24 {
  font-size: 2.4rem;
}
.fc-16 {
  font-size: 1.6rem;
}
.fc-yellow {
  color: #fae247;
}

.tar {
  text-align: right;
}

.time-wrap {
  background: #ffffff;
  border-radius: 15px;
  color: rgba(35, 23, 68, 1);
  font-size: 16px;
  padding: 5px 15px;
  text-align: center;
  margin: 0 5px;
  font-weight: bold;
  line-height: 20px;
}

.fb {
  font-weight: bold;
}
.fz-16 {
  font-size: 1.6rem;
}

.fz-20 {
  font-size: 2rem;
}

.lernmore-btn {
  background: linear-gradient(90deg, #e7446b, #fae247 100%);
  border-radius: 15px;
  cursor: pointer;
  display: inline-block;
  padding: 2px;
  height: 30px;
  margin-left: 12px;
  .btn-box {
    display: inline-block;
    background: rgba(39, 27, 81, 1);
    border-radius: 13px;
    height: 26px;
    padding: 2px 14px;
    display: flex;
    .text-color-linear {
      font-size: 16px;
      line-height: 20px;
      background: linear-gradient(90deg, #e7446b, #fae247 100%);
      color: transparent;
      background-clip: text;
      font-weight: bold;
    }
  }
}

.ido-aodo-logo {
  background: transparent url("../../../assets/svg/ido-aodo.svg") center center
    no-repeat;
  background-size: 100% 100%;
  width: 20rem;
  height: 4.8rem;
}

.ido-acy-logo {
  background: transparent url("../../../assets/svg/ido-acy.svg") -3rem center no-repeat;
  background-size: 100% 100%;
  width: 20rem;
  height: 4.8rem;
}

.ido-erax-logo {
  background: transparent url("../../../assets/svg/ido-erax.svg") center center
    no-repeat;
  background-size: 100% 100%;
  width: 20rem;
  height: 4.8rem;
}

.ido-dao-logo {
  background: transparent url("../../../assets/svg/ido-dao.svg") center center
    no-repeat;
  background-size: 100% 100%;
  width: 20rem;
  height: 4.8rem;
}

.status-btn {
  height: 3rem;
  line-height: 3rem;
  background: #12082b;
  border-radius: 1.5rem;
  font-size: 1.6rem;
  font-family: Noto Sans, Noto Sans-Bold, serif;
  font-weight: 700;
  text-align: center;
  color: #271b51;
  padding: 0 2rem;
  display: inline-block;
}

.buy-btn {
  padding: 0 3rem;
  height: 3rem;
  background: linear-gradient(90deg, #e7446b, #fae247 100%);
  border-radius: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  line-height: 3rem;
  display: inline-block;
  cursor: pointer;
}

.breakpoint {
  margin: 0 auto;
  width: 1440px;
  margin-bottom: 100px;
}

.banner {
  .main {
    width: 100%;
    text-align: center;

    .title {
      h1 {
        color: #fff;
        font-weight: 400;
        font-size: 6rem;
      }
    }
    .sub-title {
      margin: 4rem 0 124px;
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

    .entrance-wrap {
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      font-family: Noto Sans, Noto Sans-ExtraBold, sans-serif;
      color: #ffffff;
      text-align: CENTER;
      font-size: 1.4rem;
      a {
        text-decoration: none;
        color: inherit;
        display: block;
        height: 180px;
      }
      p {
        margin: 0;
        padding: 0;
      }
      h3 {
        font-size: 28px;
        line-height: 48px;
        display: flex;
        align-items: center;
      }
      .entrance-block {
        padding: 5rem 0 20px;
        width: 709px;
        background: rgba(39, 27, 81, 0.4);
        border-radius: 5rem;
        backdrop-filter: blur(40rem);

        .pool-wrap {
          background: rgba(39, 27, 81, 0.5);
          border-radius: 2.4rem;
          backdrop-filter: blur(4rem);
          margin: 20px;
          padding: 40px;
          font-size: 1.4rem;
          font-family: "Noto Sans";
          font-style: normal;
          display: block;
          width: 670px;
          height: 180px;
        }

        .pool-row {
          width: 100%;
          display: flex;
          justify-content: space-between;
          text-align: left;
          align-items: center;
          flex-direction: row;
          flex-wrap: nowrap;
        }

        .pool-right {
          font-size: 16px;
          text-align: right;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}

@media screen and (max-width: 1440px) {
  .title {
    span {
      display: block;
    }
  }
  .breakpoint {
    margin: 0 auto 100px;
    width: 744px;
    overflow: hidden;
  }
  .home .banner .main .entrance-wrap {
    flex-direction: column;
  }

  .home .banner .main .entrance-block {
    width: 710px;
    padding-bottom: 20px;
    margin-bottom: 17px;
  }

  .home .banner .main .pool-row {
    display: flex;
    margin: 2rem 0;
    text-align: left;
    flex-wrap: wrap;
    align-items: center;

    .pool-left,
    .pool-right {
      width: 100%;
    }
  }
}

@media screen and (max-width: 744px) {
  .breakpoint {
    margin: 0 auto 80px;
    width: 351px;
    overflow: hidden;
  }
  .home .banner .main .entrance-wrap {
    a {
      height: auto;
    }
    .entrance-block {
      width: 351px;
      .pool-wrap {
        width: 307px;
        height: auto;
        padding: 40px 20px;
        margin: 0 auto 12px;
        .pool-row {
          flex-direction: column;
          .pool-right {
            margin-top: 38px;
            text-align: left;
            .first {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
}
</style>
