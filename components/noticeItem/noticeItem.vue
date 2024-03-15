<template>
  <view class="container">
    <view class="notice-head">
      <view class="notice-title">
        {{noticeitem.title}}
      </view>
      <view class="notice-kind-rectification" v-if="noticeitem.kind == 0">
        整改通知
      </view>
      <view class="notice-kind-inspection" v-if="noticeitem.kind == 1">
        临检通知
      </view>
      <view class="notice-kind-timeout" v-if="noticeitem.kind == 2">
        超时报警
      </view>
    </view>
    <view class="notice-info">
      <view class="notice-info-name">
        {{noticeitem.projectname}}
      </view>
      <view class="notice-info-routename">
        {{noticeitem.routename}}
      </view>
      <view class="notice-info-cleaner">
        保洁人:{{noticeitem.cleaner}}
      </view>
    </view>
    <view class="notice-bot">
      <view class="notice-time">
        {{noticeitem.time}}
      </view>
      <view class="details-btn" v-if="noticeitem.kind!=1" @click="gotopages(noticeitem.kind)">
        详情
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props:["noticeitem"],
    name:"noticeItem",
    data() {
      return {
        
      };
    },
    methods: {
      gotopages(kind) {
        // 0去整改通知页面
        if(kind == 0) {
          uni.navigateTo({
            url:'/pages_manger/rectification-details/rectification-details'
          })
        }
        // 2去超时通知页面
        if(kind == 2) {
          uni.navigateTo({
            url:'/pages_manger/notice-details/notice-details'
          })
        }
      }
    }
  }
</script>

<style scoped>
.container {
  padding: 32rpx 24rpx;
  background-color: #fff;
  border-radius: 20rpx;
}
.notice-kind-rectification,.notice-kind-inspection,.notice-kind-timeout {
  height: 40rpx;
  width: 128rpx;
  text-align: center;
  line-height: 40rpx;
  font-size: 20rpx;
  color: #F2D924;
  background: rgba(242,217,36,0.06);
  border-radius: 4rpx;
  border: 2rpx solid #F2D924;
}
.notice-kind-inspection {
  color: #E51D1C;
  background: rgba(229,29,28,0.06);
  border: 2rpx solid #E51D1C;
}
.notice-kind-timeout {
  color: #029FE6;
  border: 2rpx solid #029FE6;
  background: rgba(2,159,230,0.06);
}
.notice-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24rpx;
}
.notice-info {
  padding: 24rpx;
  background-color: #F8F8F8;
  border-radius: 12rpx;
}
.notice-info-name {
  font-size: 24rpx;
  font-weight: 500;
  color: rgba(0,0,0,0.9);
  margin-bottom: 16rpx;
}
.notice-info-routename {
  color: rgba(0,0,0,0.9);
  margin-bottom: 16rpx;
  font-size: 24rpx;
  font-weight: 400;
}
.notice-info-cleaner {
  color: rgba(0,0,0,0.9);
  font-size: 24rpx;
  font-weight: 400;
}
.notice-bot {
  margin-top: 32rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.notice-time {
  color: #666666;
  font-weight: 400;
  font-size: 24rpx;
}
.details-btn {
  width: 144rpx;
  height: 50rpx;
  background: linear-gradient( 90deg, #29D064 0%, #02A53C 100%);
  border-radius: 8rpx;
  text-align: center;
  line-height: 50rpx;
  font-weight: 400;
  font-size: 24rpx;
  color: #FFFFFF;
}
</style>