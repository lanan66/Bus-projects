<template>
  <view class="container">
    <!-- 洁净记录 -->
    <view class="record">
      <view class="record-item">
        <view class="record-item-head">
          洁净记录(必填项)
        </view>
        <view class="tip">
          请按要求上传洁净图片
        </view>
        <view class="picker">
          <picturePicker></picturePicker>
        </view>
      </view>
      <view class="record-item">
        <view class="record-item-head">
          备注(选填项)
        </view>
        <view class="text-input">
          <textarea name="text" id="" cols="30" rows="10"></textarea>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import picturePicker from "/components/picturePicker/picturePicker.vue"
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    },
    components: {
      picturePicker
    },
  }
</script>

<style scoped>
.container {
  padding: 32rpx 24rpx;
  background-color: #FAFAFA;
  min-height: 100vh;
}
.record {
    padding: 32rpx 24rpx;
    background-color: #fff;
    border-radius: 20rpx;
  }
  .record-item {
    margin-bottom: 32rpx;
  }
  .record-item:last-child {
    margin-bottom: 0;
  }
  .record-item-head {
    position: relative;
    font-weight: 500;
    font-size: 32rpx;
    padding-left: 26rpx;
    color: rgba(0,0,0,0.9);
    margin-bottom: 24rpx;
  }
  .record-item-head::before {
    content: '';
    position: absolute;
    left: 0;
    top: 6rpx;
    width: 10rpx;
    height: 36rpx;
    background-color: #02A53C;
    border-radius: 16rpx;
  }
  .tip {
    font-weight: 400;
    font-size: 24rpx;
    color: #999999;
  }
  .text-input textarea {
    height: 82rpx;
    padding: 24rpx;
    font-size: 24rpx;
    color: rgba(0,0,0,0.9);
    background: #F8F8F8;
    border-radius: 12rpx;
    border: 2rpx solid #F8F8F8;
  }
  .picker {
    padding-bottom: 32rpx;
    border-bottom: 2rpx solid #F0F0F0;
  }
</style>
