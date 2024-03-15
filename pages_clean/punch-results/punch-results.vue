<template>
  <view class="container">
    <view class="punch">
      <view class="title">
        清理-广州市天河区体育西横街
      </view>
       <punchTreeItem :itemobj="itemobj" :isindex=false :ispunch=fasle></punchTreeItem>
    </view>
    <view class="info">
      <view class="info-time">
        打卡时间:2023-12-23 10:22:22
      </view>
      <view class="info-text">
        垃圾非常多，下雨很难清理
      </view>
      <view class="image-list">
        <image src="/static/image/clean_pages/clean-img.png" mode=""></image>
        <image src="/static/image/clean_pages/clean-img.png" mode=""></image>
        <image src="/static/image/clean_pages/clean-img.png" mode=""></image>
      </view>
    </view>
  </view>
</template>

<script>
  import punchTreeItem from "/components/punchTreeItem/punchTreeItem.vue"
  export default {
    data() {
      return {
        itemobj:{},
      }
    },
    onLoad(option) {
      console.log(option)
      this.itemobj = JSON.parse(option.itemobj)
    },
    components: {
      punchTreeItem
    },
    methods: {
      
    }
  }
</script>

<style scoped>
.container {
  padding: 32rpx 24rpx;
  background-color: #FAFAFA;
  min-height: 100vh;
}
.title {
  font-size: 32rpx;
  color: #000;
  margin-bottom: 24rpx;
  font-weight: 400;
}
.punch {
  padding: 32rpx 24rpx;
  background-color: #fff;
  border-radius: 20rpx;
}
.info {
  margin-top: 24rpx;
  padding: 32rpx 24rpx;
  background-color: #fff;
  border-radius: 20rpx;
}
.image-list {
  display: flex;
  align-items: center;
}
.image-list image {
  width: 200rpx;
  height: 200rpx;
  margin-right: 26rpx;
}
.image-list image:nth-child(3n+3){
  margin-right: 0;
}
.info-time {
  font-size: 32rpx;
  color: #000;
  margin-bottom: 24rpx;
  font-weight: 500;
}
.info-text {
  margin-bottom: 32rpx;
  color: #999999;
  font-size: 24rpx;
  font-weight: 400;
}
</style>
