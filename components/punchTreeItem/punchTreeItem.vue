<template>
  <view>
    <view class="time-item">
      <view class="dashedborder"></view>
      <view class="time-item-time">
        {{itemobj.time}}
      </view>
      <view class="time-item-info">
        <view class="time-item-info-head">
          <view class="time-item-name">{{itemobj.title}}</view>
          <view class="time-item-status" :class="moveclass(itemobj.status)" v-if="!ispunch">
            <text class="dot" :class="movedot(itemobj.status)">·</text>
            <text v-show="itemobj.status == 3">超时未打卡</text>
            <text v-show="itemobj.status == 2">超时打卡</text>
            <text v-show="itemobj.status == 1">已打卡</text>
            <text v-show="itemobj.status == 0">未打卡</text>
          </view>
        </view>
        <view class="time-item-content">
          {{itemobj.info}}
        </view>
        <view class="time-item-bot" v-if="isindex">
          <view class="checked" @click="gotopunchResults(itemobj)">
            查看打卡结果
          </view>
          <view class="clock-btn" v-if="itemobj.status == 0" @click="gotopunch(itemobj)">
            打卡
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"punchTreeItem",
    props:["itemobj","isindex","isinfo","ispunch"],
    data() {
      return {
        
      };
    },
    methods: {
      moveclass(status) {
        switch (status) {
          case 3:
            return "timeoutno-status";
            break;
          case 2:
            return "timeout-status";
            break;
          case 1:
            return "clocked-status";
            break;
          default:
            return "no-status";
        }
      },
      movedot(status) {
        switch (status) {
          case 3:
            return "timeoutno-dot";
            break;
          case 2:
            return "timeout-dot";
            break;
          case 1:
            return "clocked-dot";
            break;
          default:
            return "no-dot";
        }
      },
      gotopunchResults(itemobj) {
        const params = encodeURIComponent(JSON.stringify(itemobj));
        uni.navigateTo({
          url:`/pages_clean/punch-results/punch-results?itemobj=${JSON.stringify(itemobj)}`
        })
      },
      gotopunch(itemobj) {
        const params = encodeURIComponent(JSON.stringify(itemobj));
        uni.navigateTo({
          url:`/pages_clean/punch/punch?itemobj=${JSON.stringify(itemobj)}`
        })
      }
    }
  }
</script>

<style scoped>
.time-item {
    position: relative;
    padding: 50rpx 0 24rpx 28rpx;
  }

  .time-item-info {
    padding: 28rpx 24rpx;
    border-radius: 12rpx;
    background-color: #F8F8F8;
  }

  .dashedborder {
    position: absolute;
    left: 0;
    top: 0;
    width: 1rpx;
    height: 100%;
    background-image: linear-gradient(to bottom,
        #DBDADE 0%,
        #DBDADE 0%, 50%,
        transparent 50%);
    background-size: 1px 15px;
    background-repeat: repeat-y;
  }

  .dashedborder::before {
    width: 12rpx;
    height: 12rpx;
    background-color: #999999;
    border-radius: 50%;
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
  }

  .time-item-time {
    position: absolute;
    left: 28rpx;
    top: -10rpx;
    font-size: 28rpx;
    color: #000;
    font-weight: 500;
  }

  .time-item-info-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .time-item-status {
    padding: 8rpx 24rpx;
    background-color: #E9F3ED;
    border-radius: 4rpx;
    font-size: 20rpx;
    display: flex;
    align-items: center;
    border-radius: 4rpx;
    border: 1rpx solid #02A53C;
  }

  .dot {
    width: 8rpx;
    height: 8rpx;
    border-radius: 50%;
    margin-right: 8rpx;
  }

  .timeoutno-dot {
    background-color: #E51D1C !important;
  }

  .timeout-dot {
    background-color: #F2D924 !important;
  }

  .clocked-dot {
    background-color: #02A53C !important;
  }

  .no-dot {
    background-color: #029FE6 !important;
  }

  .timeoutno-status {
    color: #E51D1C !important;
    background-color: #F7EBEB !important;
    border-color: #E51D1C !important;
  }

  .timeout-status {
    color: #F2D924 !important;
    background-color: #F8F6EB !important;
    border-color: #F2D924 !important;
  }

  .clocked-status {
    color: #02A53C !important;
    background-color: #E9F3ED !important;
    border-color: #02A53C !important;
  }

  .no-status {
    color: #029FE6 !important;
    background-color: #E9F3F7 !important;
    border-color: #029FE6 !important;
  }

  .time-item-name {
    font-size: 24rpx;
    font-weight: 500;
  }

  .time-item-content {
    color: #999999;
    font-size: 24rpx;
    font-weight: 400;
    margin-top: 12rpx;
    margin-bottom: 12rpx;
  }

  .time-item-bot {
    display: flex;
    justify-content: space-between;
  }

  .checked {
    margin-top: 16rpx;
    font-size: 24rpx;
    font-weight: 400;
    color: #02A53C;
    border-bottom: 1rpx solid #02A53C;
  }

  .clock-btn {
    padding: 8rpx 48rpx;
    border-radius: 8rpx;
    text-align: center;
    color: #fff;
    font-size: 24rpx;
    background: linear-gradient(90deg, #29D064 0%, #02A53C 100%);
  }

</style>