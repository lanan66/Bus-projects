<template>
  <uni-popup ref="privacyPopup" type="bottom" :is-mask-click="true">
    <view class="pop">
      <view class="title">用户隐私保护提示</view>
      <view class="content">
        <text>在你使用XXX服务之前，请仔细阅读</text>
        <text style="color: #1793ee;" @click="goToPrivacy">《XXX小程序隐私保护指引》</text>
        <text>。女如你同意该指引,请点击“同意”开始使用本小程序。</text>
      </view>
      <view class="btn">
        <view class="cancel" @click="confusePrivacy">取消</view>
        <view class="sure" @click="handleAgreePrivacyAuthorization">同意</view>
      </view>
    </view>
  </uni-popup>
</template>


<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      init(resolve) {
        this.$refs.privacyPopup.open()
        this.resolvePrivacyAuthorization = resolve
      },
      // 打开隐私协议
      goToPrivacy() {
        wx.openPrivacyContract({
          success: () => {
            console.log('打开成功');
          }, // 打开成功
          fail: () => {
            uni.showToast({
              title: '打开失败，稍后重试',
              icon: 'none'
            })
          } // 打开失败
        })
      },
      // 拒绝
      confusePrivacy() {
        this.$refs.privacyPopup.close()
        this.resolvePrivacyAuthorization({
          event: 'disagree'
        })
      },
      // 同意
      handleAgreePrivacyAuthorization() {
        // 告知平台用户已经同意，参数传同意按钮的id
        this.resolvePrivacyAuthorization({
          buttonId: 'agree-btn',
          event: 'agree'
        })
        this.$refs.privacyPopup.close()
      }
    }
  }
</script>

<style>
  .pop {
    position: absolute;
    bottom: 0;
    background-color: #fff;
    border-radius: 24rpx 24rpx 0 0;
    height: 512rpx;
    z-index: 99;
    width: calc(100% - 100rpx);
    padding: 30rpx 50rpx;
  }

  .btn {
    width: 460rpx;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cancel {
    width: 216rpx;
    height: 80rpx;
    border-radius: 8rpx;
    background-color: #F7F7F7;
    color: #02A53C;
    font-size: 34rpx;
    text-align: center;
    line-height: 80rpx;
  }

  .sure {
    width: 216rpx;
    height: 80rpx;
    border-radius: 8rpx;
    background-color: #02A53C;
    color: #fff;
    font-size: 34rpx;
    text-align: center;
    line-height: 80rpx;
  }

  .details {
    color: #02A53C;
  }

  .content {
    margin-top: 64rpx;
    margin-bottom: 90rpx;
    width: 100%;
    font-size: 28rpx;
    line-height: 40rpx;
  }
</style>
