<template>
  <view class="container">
    <view class="bg-img">
      <image src="/static/image/my_pages/groud-img.png" mode=""></image>
    </view>
    <comHead :title="'个人中心'" :textsize=16></comHead>
    <view class="content">
      <view class="info">
        <view class="avatar">
          <image src="../../static/image/my_pages/avatar.png" mode=""></image>
        </view>
        <view class="info-right">
          <view class="info-head">
            <view class="info-name">
              沐芊
            </view>
            <view class="post">
              岗位名称
            </view>
          </view>
          <view class="phonenumber">
            1231235615
          </view>
        </view>
      </view>
      <view class="function">
        <view class="function-title">
          常用功能
        </view>
        <view class="function-item" @click="gotocleanerM">
          <view class="function-item-left">
            <view class="function-item-icon">
              <image src="/static/image/my_pages/clean-img.png" mode=""></image>
            </view>
            <view class="function-item-text">
              保洁员管理
            </view>
          </view>
          <view class="function-item-right">
            <image src="/static/image/my_pages/to-right.png" mode=""></image>
          </view>
        </view>
        <view class="function-item" @click="gotomodifypassword">
          <view class="function-item-left">
            <view class="function-item-icon">
              <image src="/static/image/my_pages/password.png" mode=""></image>
            </view>
            <view class="function-item-text">
              修改密码
            </view>
          </view>
          <view class="function-item-right">
            <image src="/static/image/my_pages/to-right.png" mode=""></image>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import comHead from "/components/comHead/comHead.vue";
  export default {
    data() {
      return {
        
      }
    },
    components: {
      comHead
    },
    methods: {
      gotomodifypassword() {
        uni.navigateTo({
          url:'/pages_clean/modify-password/modify-password'
        })
      },
      gotocleanerM() {
        uni.navigateTo({
          url:'/pages_manger/cleaner-management/cleaner-management'
        })
      }
    },
  }
</script>

<style scoped>
 .container {
    min-height: 100vh;
    background-color: #FAFAFA;
  }
.bg-img {
  position: absolute;
  width: 100%;
  height: 960rpx;
  left: 0;
  top: 0;
}
.bg-img image {
  width: 100%;
  height: 100%;
}
.content {
  position: relative;
  padding: 16rpx 32rpx;
}
.avatar {
  width: 128rpx;
  height: 128rpx;
  border-radius: 50%;
}
.avatar image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.info {
  display: flex;
  align-items: center;
}
.info-right {
  margin-left: 32rpx;
}
.info-head {
  display: flex;
  align-items: center;
}
.info-name {
  font-size: 44rpx;
  font-weight: 400;
  color: rgba(0,0,0,0.9);
}
.post {
  width: 128rpx;
  height: 40rpx;
  background: rgba(2,165,60,0.06);
  border: 2rpx solid #02A53C;
  font-size: 20rpx;
  color: #02A53C;
  text-align: center;
  line-height: 40rpx;
  border-radius: 10rpx;
  margin-left: 12rpx;
}
.phonenumber {
   margin-top: 16rpx;
   font-weight: 400;
   font-size: 28rpx;
   color: rgba(0,0,0,0.9);
}
.function {
  padding: 32rpx;
  margin-top: 40rpx;
  background-color: #fff;
}
.function-title {
  font-size: 32rpx;
  border-bottom: 2rpx solid #F6F6F6;
  margin-bottom: 34rpx;
}
.function-item {
  padding-top: 32rpx;
  border-top: 2rpx solid #F0F0F0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32rpx;
}
.function-item:last-child {
  margin-bottom: 0;
}
.function-item-left {
  display: flex;
  align-items: center;
}
.function-item-right {
  width: 40rpx;
  height: 40rpx;
}
.function-item-icon {
  width: 48rpx;
  height: 48rpx;
  margin-right: 16rpx;
}
.function-item-icon image {
  width: 100%;
  height: 100%;
}
.function-item-right image {
  width: 100%;
  height: 100%;
}
</style>
