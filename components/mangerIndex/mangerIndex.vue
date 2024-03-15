<template>
  <!-- 项目经理模块 -->
  <view class="container">
    <view class="bg-img">
      <image src="/static/image/index_pages/bg.png" mode=""></image>
    </view>
    <comHead :bgurl="'/static/image/index_pages/head-bg.png'" :title="'智慧物业管理平台'" :textsize=17></comHead>
    <view class="content">
      <!-- 现在的时间 -->
      <nowTime></nowTime>
      <!-- 通知 -->
      <view class="notice" @click="gotonoticedetails">
        <view class="notice-left">
          <image src="/static/image/index_pages/notice.png" mode=""></image>
          <view class="notice-left-text">
            通知
          </view>
        </view>
        <view class="notice-right">
          <view class="notice-right-text">
            您有新的通知
          </view>
          <image src="/static/image/index_pages/right-img.png" mode=""></image>
        </view>
      </view>
      <!-- 清洁项 -->
      <view class="clean">
        <view class="clean-item">
          <view class="item-head">
            <view class="item-title">清理-广州市天河区体育西横街</view>
            <!-- item-label2是未打卡样式 -->
            <view class="item-label">
              已打卡:1/5
            </view>
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
            <view class="item-info-right" @click="gotoinfo">
              <image src="/static/image/index_pages/right.png" mode=""></image>
              <view class="moredetails">详情</view>
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
      </view>
      <!-- 清洁项 -->
      <view class="clean">
        <view class="clean-item">
          <view class="item-head">
            <view class="item-title">清理-广州市天河区体育西横街</view>
            <!-- item-label2是未打卡样式 -->
            <view class="item-label2">
              已打卡:1/5
            </view>
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
            <view class="item-info-right" @click="gotoinfo">
              <image src="/static/image/index_pages/right.png" mode=""></image>
              <view class="moredetails">详情</view>
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
      </view>
    </view>
  </view>
</template>

<script>
  import comHead from "/components/comHead/comHead.vue";
  import nowTime from "/components/nowTime/nowTime.vue";
  export default {
    name:"mangerIndex",
    data() {
      return {
        
      };
    },
    methods: {
      gotonoticedetails() {
        uni.navigateTo({
          url:'/pages_manger/notice/notice'
        })
      },
      gotoinfo() {
        uni.navigateTo({
          url:'/pages_clean/clean-info/clean-info'
        })
      }
    }
  }
</script>

<style scoped>
.container {
    position: relative;
    min-height: 100vh;
    background-color: #FAFAFA;
  }

  .content {
    position: relative;
    padding: 24rpx;
  }
  .clean {
    margin-top: 32rpx;
  }
  
  .clean-item {
    padding: 24rpx;
    background-color: #fff;
    border-radius: 20rpx;
  }
  
  .item-head {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .item-title {
    font-size: 32rpx;
    font-weight: 500;
    color: #000;
  }
  .item-label {
    width: 144rpx;
    height: 40rpx;
    background: rgba(2,165,60,0.06);
    border-radius: 4rpx;
    font-size: 20rpx;
    color: #02A53C;
    font-weight: 400;
    text-align: center;
    line-height: 40rpx;
    border: 2rpx solid #02A53C;
  }
  .item-label2 {
    width: 144rpx;
    height: 40rpx;
    background: rgba(229,29,28,0.06);
    border-radius: 4rpx;
    font-size: 20rpx;
    color: #E51D1C;
    font-weight: 400;
    text-align: center;
    line-height: 40rpx;
    border: 2rpx solid #E51D1C;
  }
  .item-info {
    display: flex;
    justify-content: space-between;
    margin-top: 50rpx;
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
  .notice {
    margin-top: 24rpx;
    background: #FFFFFF;
    border-radius: 20rpx;
    padding: 24rpx;
    border: 2rpx solid #E51D1C;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .notice-left {
    display: flex;
    align-items: center;
  }
  .notice-left-text {
    font-weight: 400;
    font-size: 28rpx;
    color: rgba(0,0,0,0.9);
  }
  .notice-right {
    display: flex;
    align-items: center;
  }
  .notice-left image {
    width: 32rpx;
    height: 32rpx;
    margin-right: 12rpx
  }
  .notice-right-text {
    font-weight: 400;
    font-size: 24rpx;
    color: #E51D1C;
  }
  .notice-right image {
    width: 40rpx;
    height: 40rpx;
    margin-left: 8rpx;
  }
  .bg-img {
    position: absolute;
    left: 0;
    top: 0;
  }
</style>