<template>
  <!-- 保洁员模块详情 -->
  <view class="container">
    <view class="content">
      <view class="clean">
        <view class="clean-item">
          <view class="clean-item-head-info">
            <view class="item-head">
              <view class="head-img">
                <image src="../../static/image/index_pages/default.png" mode=""></image>
              </view>
              <view class="item-title">清理-广州市天河区体育西横街</view>
            </view>
            <view class="item-info">
              <view class="item-info-left">
                <view class="item-info-item">
                  <view class="item-info-item-title">供应商:</view>
                  <view class="item-info-item-value">某某供应商</view>
                </view>
                <view class="item-info-item">
                  <view class="item-info-item-title">地址:</view>
                  <view class="item-info-item-value">广州天河区体育西街道193号</view>
                </view>
              </view>
            </view>
            <view class="clean-task">
              该项目需要清扫街道楼梯、洗手间、一楼走廊、一楼茶水间、一楼会议室
            </view>
            <!-- 相关人员 -->
            <view class="associated-persons">
              <view class="associated-persons-item">
                <view class="associated-persons-item-title">负责人</view>
                <view class="associated-persons-item-name">王达信、陈刚</view>
              </view>
              <view class="associated-persons-item">
                <view class="associated-persons-item-title">清洁人</view>
                <view class="associated-persons-item-name">李峰峰、郭爱国</view>
              </view>
            </view>
            <!-- 打卡时间树 -->
            <view class="time-con-title">
              <view class="time-con-title-img">
                <image src="../../static/image/index_pages/time.png" mode=""></image>
              </view>
              <view class="allowed-timeout">
                可超时打卡:30分钟
              </view>
            </view>
          </view>
          <view class="timer">
            <view class="timer-head">
              保洁历史
            </view>
            <calendar></calendar>
          </view>
          <view class="tree">
            <punchTree :nodrop="nodrop"></punchTree>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import punchTree from "/components/punchTree/punchTree.vue";
  import calendar from "/components/calendar/calendar.vue";
  export default {
    data() {
      return {
        nodrop:'none',
      }
    },
    components: {
      punchTree,calendar
    },
    methods: {

    }
  }
</script>

<style scoped>
  .container {
    min-height: 100vh;
    background-color: #FAFAFA;
  }

  .content {
    padding: 24rpx;
  }

  .clean {
    margin-top: 24rpx;
  }

  .item-head {
    position: relative;
  }

  .head-img {
    position: absolute;
    top: -30px;
    left: 0;
    width: 122rpx;
    height: 122rpx;
  }

  .head-img image {
    width: 100%;
    height: 100%;
  }

  .item-title {
    font-size: 32rpx;
    font-weight: 500;
    color: #000;
    margin-left: 140rpx;
  }

  .item-info {
    display: flex;
    justify-content: space-between;
    margin-top: 50rpx;
  }
  .clean-item-head-info {
    padding: 24rpx;
    background-color: #fff;
    border-radius: 20rpx;
  }

  .item-info-item {
    display: flex;
    font-size: 24rpx;
    font-weight: 400;
    margin-bottom: 24rpx;
    align-items: center;
  }

  .item-info-item-title {
    margin-right: 15rpx;
  }

  .item-info-right {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item-info-right image {
    width: 56rpx;
    height: 56rpx;
  }

  .item-info-right .moredetails {
    font-size: 24rpx;
    font-weight: 400;
  }

  .clean-task {
    padding: 24rpx;
    color: #666666;
    font-size: 24rpx;
    background-color: #FAFAFA;
    border-radius: 20rpx;
    margin-top: 10rpx;
  }

  .associated-persons {
    padding: 32rpx 64rpx 36rpx 64rpx;
    display: flex;
    align-items: center;
    background-color: #FAFAFA;
    border-radius: 20rpx;
    margin-top: 24rpx;
    justify-content: space-between;
  }

  .associated-persons-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .associated-persons-item-title {
    font-size: 28rpx;
    color: #000;
    font-weight: 500;
  }

  .associated-persons-item-name {
    color: #999999;
    font-size: 24rpx;
    font-weight: 400;
    margin-top: 10rpx;
  }

  .time-con-title {
    display: flex;
    align-items: center;
    margin-top: 24rpx;
    margin-bottom: 8rpx;
  }

  .time-con-title-img {
    width: 36rpx;
    height: 36rpx;
  }

  .time-con-title-img image {
    width: 100%;
    height: 100%;
  }

  .allowed-timeout {
    font-size: 24rpx;
    color: #000;
    font-weight: 400;
    margin-left: 12rpx;
  } 
  .tree {
    padding: 24rpx;
    background-color: #fff;
    border-radius: 20rpx;
    margin-top: 10rpx;
  }
  .timer-head {
    position: relative;
    font-size: 32rpx;
    color: #191919;
    font-weight: 500;
    margin-left: 16rpx;
    padding: 32rpx 24rpx 22rpx 24rpx;
  }
  .timer-head::before {
    content: '';
    width: 10rpx;
    height: 36rpx;
    left:0;
    top:36rpx;
    background-color: #02A53C;
    border-radius: 16rpx;
    position: absolute;
  }
</style>
