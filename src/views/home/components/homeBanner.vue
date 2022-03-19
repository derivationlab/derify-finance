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
          <h1>Derify protocol official IDO is here!</h1>
        </div>
        <div class="sub-title">
          <p>
            Official Listing ( ApeSwap, PancakeSwap ) on April 1, 2022 00:00UTC
          </p>
        </div>

        <div class="entrance-wrap">
          <div class="entrance-block">
            <h2 class="fc-32">Free Entrance</h2>
            <p>
              <span class="fb fz-20">1</span> DRF = <span class="fb fz-20">$0.6</span> BUSD
            </p>
            <p>25% on TGE, followed by a 3-mouth linear</p>

            <div class="pool-wrap">
              <div class="pool-row">
                <div class="pool-left">
                  <p><span class="fc-24"  style="height: 4.8rem; line-height: 4.8rem;font-weight: bold">Official Pool</span></p>
                  <div class="lernmore-btn">&nbsp;</div>
                </div>

                <div class="pool-right">
                  <div class="tar">
                    <p>Start at <span class="fz-16 fb">{{ toUTCDate(official.start) }}</span> UTC</p>
                    <p>End at <span  class="fz-16 fb">{{ toUTCDate(official.end) }}</span> UTC</p>
                  </div>
                  <template v-if="officalStatus.showStatus">
                    <div class="status-btn">{{ officalStatus.statusText }}</div>
                  </template>

                </div>
              </div>

              <div class="pool-row">
                <div class="pool-left">
                  <p>Amount:</p>
                  <p><span class="fc-24"  style="font-weight: bold">500,000</span> DRF</p>
                  <p>(0.5% of total supply)</p>
                </div>

                <div class="pool-right">
                  <div class="tar">
                    <template v-if="dodoStatus.showStatus">
                      <div class="status-btn">{{ dodoStatus.statusText }}</div>
                    </template>
                    <template v-if="dodoStatus.showWait">
                      <p style="line-height: 2.4rem; height: 2.4rem;"><span>start in {{dodoStatus.time.hours}} h {{dodoStatus.time.minutes}} m {{dodoStatus.time.seconds}} s</span></p>
                    </template>

                    <template v-if="dodoStatus.showSale">
                      <div class="buy-btn" style="margin-bottom: 1rem;">Encore Pool</div>
                      <p style="line-height: 2.4rem; height: 2.4rem;"><span>end in {{dodoStatus.time.hours}} h {{dodoStatus.time.minutes}} m {{dodoStatus.time.seconds}} s</span></p>
                    </template>

                    <template v-if="dodoStatus.showClaim">
                      <div class="buy-btn" style="margin-left: 1rem;">Claim</div>
                    </template>

                  </div>
                </div>
              </div>

              <div class="pool-row" style="align-items: flex-end">
                <div class="pool-left">
                  <p>Personal Cap:</p>
                  <div><span class="fc-24">500</span> DRF max</div>
                </div>

                <div class="pool-right">powered by <span style="font-weight: bold;">Bounce.finance</span></div>
              </div>
            </div>

            <div class="pool-wrap" style="padding: 1rem;">
              <div class="pool-row">
                <div class="pool-left">
                  <div class="ido-aodo-logo">&nbsp;</div>
                </div>
                <div class="pool-right">
                  <p>Start at <span class="fb">{{ toUTCDate(dodo.start) }}</span> UTC</p>
                  <p>End at <span class="fb">{{ toUTCDate(dodo.end) }}</span> UTC</p>

                  <div style="margin-top: 2rem;">
                    <template v-if="dodoStatus.showStatus">
                      <div class="status-btn">{{ dodoStatus.statusText }}</div>
                    </template>
                    <template v-if="dodoStatus.showWait">
                      <p>
                        <span class="time-wrap">{{dodoStatus.time.days}}</span>Days<span class="time-wrap">{{dodoStatus.time.hours}}:{{dodoStatus.time.minutes}}:{{dodoStatus.time.seconds}}</span>later
                      </p>
                    </template>
                    <template v-if="dodoStatus.showSale">
                      <span>end in {{dodoStatus.time.hours}} h {{dodoStatus.time.minutes}} m {{dodoStatus.time.seconds}} s</span>
                      <div class="buy-btn" style="margin-left: 1rem;">BUY</div>
                    </template>

                    <template v-if="dodoStatus.showClaim">
                      <div class="buy-btn" style="margin-left: 1rem;">Claim</div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="entrance-block">
            <h2 class="fc-32">Community Entrance</h2>
            <p>
              <span class="fb fz-20">1</span> DRF = <span class="fb fz-20">$0.8</span> BUSD
            </p>
            <p>No Lockup after TGE</p>

            <div class="pool-wrap" style="padding: 1rem;">
              <div class="pool-row">
                <div class="pool-left">
                  <div class="ido-acy-logo">&nbsp;</div>
                  <p>Platform native token required</p>
                </div>
                <div class="pool-right">
                  <p>Start at <span class="fb">{{toUTCDate(acy.start)}}</span> UTC</p>
                  <p>End at <span class="fb">{{toUTCDate(acy.end)}}</span> UTC</p>

                  <div style="margin-top: 2rem;">
                    <template v-if="acyStatus.showStatus">
                      <div class="status-btn">{{ acyStatus.statusText }}</div>
                    </template>
                    <template v-if="acyStatus.showWait">
                      <p>
                        <span class="time-wrap">{{acyStatus.time.days}}</span>Days<span class="time-wrap">{{acyStatus.time.hours}}:{{acyStatus.time.minutes}}:{{acyStatus.time.seconds}}</span>later
                      </p>
                    </template>
                    <template v-if="acyStatus.showSale">
                      <span>end in {{acyStatus.time.hours}} h {{acyStatus.time.minutes}} m {{acyStatus.time.seconds}} s</span>
                      <div class="buy-btn" style="margin-left: 1rem;">BUY</div>
                    </template>

                    <template v-if="acyStatus.showClaim">
                      <div class="buy-btn" style="margin-left: 1rem;">Claim</div>
                    </template>
                  </div>
                </div>
              </div>
            </div>

            <div class="pool-wrap" style="padding: 1rem;">
              <div class="pool-row">
                <div class="pool-left">
                  <div class="ido-erax-logo">&nbsp;</div>
                  <p>Platform native token required</p>
                </div>
                <div class="pool-right">
                  <p>Start at <span class="fb">{{toUTCDate(erax.start)}}</span> UTC</p>
                  <p>End at <span class="fb">{{toUTCDate(erax.end)}}</span> UTC</p>

                  <div style="margin-top: 2rem;">
                    <template v-if="eraxStatus.showStatus">
                      <div class="status-btn">{{ eraxStatus.statusText }}</div>
                    </template>
                    <template v-if="eraxStatus.showWait">
                      <p>
                        <span class="time-wrap">{{eraxStatus.time.days}}</span>Days<span class="time-wrap">{{eraxStatus.time.hours}}:{{eraxStatus.time.minutes}}:{{eraxStatus.time.seconds}}</span>later
                      </p>
                    </template>
                    <template v-if="eraxStatus.showSale">
                      <span>end in {{eraxStatus.time.hours}} h {{eraxStatus.time.minutes}} m {{eraxStatus.time.seconds}} s</span>
                      <div class="buy-btn" style="margin-left: 1rem;">BUY</div>
                    </template>

                    <template v-if="eraxStatus.showClaim">
                      <div class="buy-btn" style="margin-left: 1rem;">Claim</div>
                    </template>
                  </div>
                </div>
              </div>
            </div>

            <div class="pool-wrap" style="padding: 1rem;">
              <div class="pool-row">
                <div class="pool-left">
                  <div class="ido-dao-logo">&nbsp;</div>
                  <p>Platform native token required</p>
                </div>
                <div class="pool-right">
                  <p>Start at <span class="fb">{{ toUTCDate(dao.start) }}</span> UTC</p>
                  <p>End at <span class="fb">{{toUTCDate(dao.end)}}</span> UTC</p>

                  <div style="margin-top: 2rem;">
                    <template v-if="daoStatus.showStatus">
                      <div class="status-btn">{{ daoStatus.statusText }}</div>
                    </template>
                    <template v-if="daoStatus.showWait">
                      <p>
                        <span class="time-wrap">{{daoStatus.time.days}}</span>Days<span class="time-wrap">{{daoStatus.time.hours}}:{{daoStatus.time.minutes}}:{{daoStatus.time.seconds}}</span>later
                      </p>
                    </template>
                    <template v-if="daoStatus.showSale">
                      <span>end in {{daoStatus.time.hours}} h {{daoStatus.time.minutes}} m {{daoStatus.time.seconds}} s</span>
                      <div class="buy-btn" style="margin-left: 1rem;">BUY</div>
                    </template>

                    <template v-if="daoStatus.showClaim">
                      <div class="buy-btn" style="margin-left: 1rem;">Claim</div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
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
          <a
              href="https://docs.derify.finance/whitepaper/introduction"
              target="_blank"
          >WHITEPAPER</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>

const claimEndDate = '2022-04-01 00:00:00UTC'
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


export default {
  data() {
    return {
      now: new Date(),
      official:{
        start: '2022-03-28 00:00:00:UTC',
        end: '2022-03-30 00:00:00:UTC'
      },
      dodo: {
        start: '2022-03-31 00:00:00:UTC',
        end: '2022-04-01 00:00:00:UTC'
      },
      acy: {
        start: '2022-03-20 00:00:00:UTC',
        end: '2022-03-21 00:00:00:UTC'
      },
      erax: {
        start: '2022-03-26 00:00:00:UTC',
        end: '2022-03-27 00:00:00:UTC'
      },
      dao: {
        start: '2022-03-30 00:00:00:UTC',
        end: '2022-03-31 00:00:00:UTC'
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

      return `${mon} ${monDay} ${calen.format('hh:mm')}`;
    },
    getSaleStatus(cfg,type,now){
      var start = new Date(cfg.start);
      var end = new Date(cfg.start);

      var sencMilSec = 1000;
      var minMilSec = 60 * 1000;
      var hourMilSec = 60 * 60 * 1000;
      var dayMilSec = 24 * 60 * 60 * 1000;



      if(now.getTime() < start.getTime()){
        var timeGap = start.getTime() - now.getTime();
        return {status: 'wait', statusText: '', showStatus: false, showWait: true, time: {days: Math.floor(timeGap/dayMilSec)
            , hours: Math.floor((timeGap%dayMilSec)/hourMilSec)
            , minutes: Math.floor((timeGap%hourMilSec)/minMilSec)
            , seconds: Math.floor((timeGap%minMilSec)/sencMilSec)
        }};
      }

      if(getTime() < end.getTime()){
        var timeGap = end.getTime() - now.getTime();
        return {status: 'saling', statusText: '', showStatus: false, showWait: false, showSale: true, time: {days: Math.floor(timeGap/dayMilSec)
            , hours: Math.floor((timeGap%dayMilSec)/hourMilSec)
            , minutes: Math.floor((timeGap%hourMilSec)/minMilSec)
            , seconds: Math.floor((timeGap%minMilSec)/sencMilSec)
        }};
      }

      if(now.getTime() < claimEndDate.getTime()){
        return {status: 'finish', statusText: type === 'official' ? 'InitialPool Sold Out' : 'Finished', showStatus: true, showWait: false, showSale: false, showFinish: true};
      }

      return {status: 'claim', statusText: '', showStatus: false, showWait: false, showSale: false, showFinish: false,showClaim: true}
    }
  },
  computed:{
    officalStatus(){
      return this.getSaleStatus(this.official, 'official',this.now);
    },
    dodoStatus(){
      return this.getSaleStatus(this.dodo, 'dodo',this.now);
    },
    acyStatus(){
      return this.getSaleStatus(this.acy, 'acy',this.now);
    },
    eraxStatus(){
      return this.getSaleStatus(this.erax, 'erax',this.now);
    },
    daoStatus(){
      return this.getSaleStatus(this.dao, 'dao',this.now);
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

.fc-20{
  font-size: 2rem;
}
.fc-32{
  font-size: 3.2rem;
}
.fc-24{
  font-size: 2.4rem;
}
.fc-16{
  font-size: 1.6rem;
}

.tar{
  text-align: right;
}

.time-wrap{
  background: #FFFFFF;
  border-radius: 1.5rem;
  padding: 0 1.5rem;
  color: rgba(35, 23, 68, 1);
  font-size: 1.6rem;
  text-align: center;
  margin: 0 1rem;
  font-weight: bold;
}

.fb{
  font-weight: bolder;
}
.fz-16{
  font-size: 1.6rem;
}

.fz-20{
  font-size: 2rem;
}

.lernmore-btn{
  background: transparent url('../../../assets/svg/ido-learnmore-btn.svg') center center no-repeat;
  background-size: 100% 100%;
}

.ido-aodo-logo{
  background: transparent url('../../../assets/svg/ido-aodo.svg') center center no-repeat;
  background-size: 100% 100%;
  width: 20rem;
  height: 4.8rem;
}

.ido-acy-logo{
  background: transparent url('../../../assets/svg/ido-acy.svg') -3rem center no-repeat;
  background-size: 100% 100%;
  width: 20rem;
  height: 4.8rem;
}

.ido-erax-logo{
  background: transparent url('../../../assets/svg/ido-erax.svg') center center no-repeat;
  background-size: 100% 100%;
  width: 20rem;
  height: 4.8rem;
}

.ido-dao-logo{
  background: transparent url('../../../assets/svg/ido-dao.svg') center center no-repeat;
  background-size: 100% 100%;
  width: 20rem;
  height: 4.8rem;
}

.status-btn{
  height: 3.0rem;
  line-height: 3.0rem;
  background: #12082b;
  border-radius: 1.5rem;
  font-size: 1.6rem;
  font-family: Noto Sans, Noto Sans-Bold,serif;
  font-weight: 700;
  text-align: center;
  color: #271b51;
  padding: 0 2rem;
  display: inline-block;
}

.buy-btn{
  padding:0 1.5rem;
  height: 3rem;
  background: linear-gradient(90deg,#e7446b, #fae247 100%);
  border-radius: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  line-height: 3rem;
  display: inline-block;
}

@media screen and (max-width: 576px) {
  .home .banner .main .title h1 {
    font-size: 4rem;
  }

  .home .banner .main .entrance-wrap{
    margin: auto;
    width: auto;
    flex-wrap:wrap;
  }

  .home .banner .main .entrance-block {
    width: auto;
  }
}
@media screen and (max-width: 376px) {
  .home .banner .main .title h1 {
    font-size: 2rem;
  }
  .home .banner .main .sub-title {
    font-size: 1.6rem;
  }
  .home .banner .main .btn a{
    height: 4.8rem;
    line-height: 4.8rem;
    font-size: 1.8rem;
  }

  .home .banner .main .entrance-wrap{
    margin: auto;
    width: auto;
    flex-wrap:wrap;
  }
  .home .banner .main .entrance-block {
    width: auto;
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

    .entrance-wrap{
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      flex-direction: row;
      font-family: Noto Sans, Noto Sans-ExtraBold,sans-serif;
      color: #ffffff;
      text-align: CENTER;
      font-size: 1.4rem;
      margin: 0 18rem;

      p{
        margin: 0;
        padding: 0;
      }
      h2{
        height: 4rem;
        line-height: 4rem;
      }
    }

    .pool-wrap{
      background: rgba(39,27,81,0.50);
      border-radius: 2.4rem;
      backdrop-filter: blur(4rem);
      margin: 2rem;
      padding: 2rem;
      font-size: 1.4rem;
      font-family: 'Noto Sans';
      font-style: normal;
    }

    .pool-row{
      display: flex;
      justify-content: space-between;
      margin: 2rem 0;
      text-align: left;
      align-items: center;
    }

    .pool-right{
      text-align: right;
    }

    .entrance-block{
      padding-top: 5rem;
      width: 48%;
      background: rgba(39,27,81,0.40);
      border-radius: 5rem;
      backdrop-filter: blur(40rem);
    }
  }
}
</style>
