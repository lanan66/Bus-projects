<template>
  <view class="container">
    <view class="notice-details">
      <view class="notice-details-head">
        <view class="notice-details-time">
          2023-12-23 12:22:22
        </view>
        <view class="notice-details-label">
          超时报警
        </view>
      </view>
      <view class="notice-tip">
        你有<text style="color: #E51D1C;">8</text>个项目保洁路线超时风险
      </view>
    </view>
    <view class="notice-list">
      <view class="notice-item">
        <view class="dashedborder"></view>
        <view class="notice-item-time">
          2023-12-22 13:31:21
        </view>
        <view class="notice-item-content">
          <view class="item">
            <view class="notice-info">
              <view class="notice-info-name">
                项目名称
              </view>
              <view class="notice-info-routename">
                路线名称
              </view>
              <view class="notice-info-cleaner">
                保洁人:张芬芳
              </view>
            </view>
          </view>
          <view class="item">
            <view class="notice-info">
              <view class="notice-info-name">
                项目名称
              </view>
              <view class="notice-info-routename">
                路线名称
              </view>
              <view class="notice-info-cleaner">
                保洁人:张芬芳
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="notice-item">
        <view class="dashedborder"></view>
        <view class="notice-item-time">
          2023-12-22 13:31:21
        </view>
        <view class="notice-item-content">
          <view class="item">
            <view class="notice-info">
              <view class="notice-info-name">
                项目名称
              </view>
              <view class="notice-info-routename">
                路线名称
              </view>
              <view class="notice-info-cleaner">
                保洁人:张芬芳
              </view>
            </view>
          </view>
          <view class="item">
            <view class="notice-info">
              <view class="notice-info-name">
                项目名称
              </view>
              <view class="notice-info-routename">
                路线名称
              </view>
              <view class="notice-info-cleaner">
                保洁人:张芬芳
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="notice-item">
        <view class="dashedborder"></view>
        <view class="notice-item-time">
          2023-12-22 13:31:21
        </view>
        <view class="notice-item-content">
          <view class="item">
            <view class="notice-info">
              <view class="notice-info-name">
                项目名称
              </view>
              <view class="notice-info-routename">
                路线名称
              </view>
              <view class="notice-info-cleaner">
                保洁人:张芬芳
              </view>
            </view>
          </view>
          <view class="item">
            <view class="notice-info">
              <view class="notice-info-name">
                项目名称
              </view>
              <view class="notice-info-routename">
                路线名称
              </view>
              <view class="notice-info-cleaner">
                保洁人:张芬芳
              </view>
            </view>
          </view>
        </view>
      </view>
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
  padding: 32rpx 24rpx;
  min-height: 100vh;
  background-color: #FAFAFA;
}
.notice-details {
  padding: 24rpx;
  background: #fff;
  border-radius: 20rpx;
  margin-bottom: 24rpx;
}
.notice-details-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.notice-details-time {
  color: #666666;
  font-size: 24rpx;
  font-weight: 400;
}
.notice-details-label {
  height: 40rpx;
  width: 128rpx;
  text-align: center;
  line-height: 40rpx;
  font-size: 20rpx;
  color: #029FE6;
  border: 2rpx solid #029FE6;
  background: rgba(2,159,230,0.06);
  border-radius: 4rpx;
}
.notice-tip {
  margin-top: 34rpx;
  font-weight: 400;
  font-size: 32rpx;
  color: rgba(0,0,0,0.9);
}
.notice-list {
  padding: 32rpx 24rpx;
  background-color: #fff;
  border-radius: 20rpx;
}
.notice-item {
  position: relative;
  padding: 50rpx 0 24rpx 28rpx;
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
  .notice-item-time {
    position: absolute;
    left: 28rpx;
    top: -10rpx;
    font-size: 28rpx;
    color: #000;
    font-weight: 500;
  }
  .notice-item-content {
    padding: 26rpx 24rpx;
    border-radius: 12rpx;
    background-color: #F8F8F8;
  }
  .notice-info {
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
    padding-bottom: 22rpx;
  }
  .item {
    margin-bottom: 24rpx;
    border-bottom: 2rpx solid #EBEBEB;
  }
  .item:last-child {
    border-bottom: 0;
    margin-bottom: 0;
  }
  .item:last-child .notice-info-cleaner {
    padding-bottom: 0;
  }
</style>
