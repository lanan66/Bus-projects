<template>
  <view class="container">
    <view class="password-con">
      <view class="password-item">
        <view class="text">
          旧密码
        </view>
        <view class="input">
          <input type="text" placeholder="请输入旧密码">
        </view>
      </view>
      <view class="password-item">
        <view class="text">
          旧密码
        </view>
        <view class="input">
          <input type="text" placeholder="请输入旧密码">
        </view>
      </view>
      <view class="password-item">
        <view class="text">
          旧密码
        </view>
        <view class="input">
          <input type="text" placeholder="请输入旧密码">
        </view>
      </view>
    </view>
    <view class="save-btn">
      保存
    </view>
    <view class="tip">
      新密码需由8-20位数字、大小字母及特殊符号组成； 符号必须包含其中一种： @、#、$、%、^、&、*、!。
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped>
.container {
  padding: 10rpx 12rpx;
  min-height: 100vh;
  background-color: #FAFAFA;
}
.password-con {
  border-radius: 20rpx;
  padding: 30rpx 24rpx;
  background-color: #fff;
}
.password-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20rpx;
  margin-bottom: 24rpx;
  border-bottom: 2rpx solid #F0F0F0;
}
.text {
  font-size: 28rpx;
  color: #1A1A1A;
}
.input input {
  text-align: end;
}
.password-item:last-child {
  border-bottom: 0;
}
.save-btn {
  border-radius: 92rpx;
  background: linear-gradient( 90deg, #29D064 0%, #02A53C 100%);
  height: 78rpx;
  width: 100%;
  line-height: 78rpx;
  text-align: center;
  font-size: 32rpx;
  color: #fff;
  font-weight: 400;
  margin-top: 48rpx;
}
.tip {
  position: relative;
  color: #A9A9A9;
  margin-top: 40rpx;
  font-size: 28rpx;
  font-weight: 400;
  line-height: 45rpx;
  text-indent: 1em;
}
.tip::before {
  position: absolute;
  content: '*';
  left: -20rpx;
  color: #F33A3A;
  top: 0;
}
</style>
