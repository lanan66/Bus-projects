<template>
  <view class="container">
    <view class="clean">
      <view class="clean-item">
        <view class="item-head">
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
    </view>
    <view class="tree">
      <punchTree></punchTree>
    </view>
    <!-- 说明 -->
    <view class="illustrate">
      <view class="illustrate-title">
        整改通区域说明整改通区域说明整改通区域说明
      </view>
      <view class="illustrate-bot">
        <view class="illustrate-time">
          <view class="notice-time">
            通知时间:2023-12-23 12:22:22
          </view>
          <view class="end-time">
            通知时间:2023-12-25 12:22:22
          </view>
        </view>
        <view class="btn">
          巡检详情
        </view>
      </view>
    </view>
    <!-- 整改记录 -->
    <view class="record">
      <view class="record-head">
        整改记录
      </view>
      <view class="record-content">
        <!-- 整改记录项 -->
        <view class="record-item">
          <view class="dashedborder"></view>
          <view class="record-item-time">
            2023-12-22 13:31:21
          </view>
          <view class="record-item-content">
            <view class="record-item-name">
              整改记录-张华
            </view>
            <view class="record-item-text">
              整改描述内容
            </view>
            <view class="record-item-images">
              <image src="../../static/image/clean_pages/clean-img.png" mode=""></image>
              <image src="../../static/image/clean_pages/clean-img.png" mode=""></image>
              <image src="../../static/image/clean_pages/clean-img.png" mode=""></image>
              <image src="../../static/image/clean_pages/clean-img.png" mode=""></image>
              <image src="../../static/image/clean_pages/clean-img.png" mode=""></image>
              <image src="../../static/image/clean_pages/clean-img.png" mode=""></image>
            </view>
          </view>
        </view>
        <view class="record-item">
          <view class="dashedborder"></view>
          <view class="record-item-time">
            2023-12-22 13:31:21
          </view>
          <view class="record-item-content">
            <view class="record-item-name">
              整改记录-张华
            </view>
            <view class="record-item-text">
              整改描述内容
            </view>
            <view class="record-item-images">
              <image src="../../static/image/clean_pages/clean-img.png" mode=""></image>
              <image src="../../static/image/clean_pages/clean-img.png" mode=""></image>
              <image src="../../static/image/clean_pages/clean-img.png" mode=""></image>
              <image src="../../static/image/clean_pages/clean-img.png" mode=""></image>
              <image src="../../static/image/clean_pages/clean-img.png" mode=""></image>
              <image src="../../static/image/clean_pages/clean-img.png" mode=""></image>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="rectification-results-btn" @click="gotoURRpage">
      上传整改结果
    </view>
  </view>
</template>

<script>
  import punchTree from "/components/punchTree/punchTree.vue";
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      gotoURRpage() {
        uni.navigateTo({
          url:'/pages_manger/upload-rectification-results/upload-rectification-results'
        })
      }
    },
    components: {
      punchTree
    }
  }
</script>

<style scoped>
.container {
  padding: 32rpx 24rpx;
  background-color: #FAFAFA;
}
.clean {
    margin-bottom: 24rpx;
  }

  .clean-item {
    padding: 24rpx;
    background-color: #fff;
    border-radius: 20rpx;
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
  .tree {
    padding: 32rpx 24rpx;
    background-color: #fff;
    border-radius: 20rpx;
    margin-bottom: 24rpx;
  }
  .illustrate {
    padding: 32rpx 24rpx;
    border-radius: 20rpx;
    background-color: #fff;
  }
  .illustrate-title {
    font-weight: 400;
    font-size: 32rpx;
    color: rgba(0,0,0,0.9);
  }
  .illustrate-bot {
    margin-top: 24rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn {
    width: 144rpx;
    height: 50rpx;
    background: linear-gradient( 90deg, #29D064 0%, #02A53C 100%);
    border-radius: 8rpx;
    color: #FFFFFF;
    font-size: 24rpx;
    font-weight: 400;
    text-align: center;
    line-height: 50rpx;
  }
  .notice-time {
    font-weight: 400;
    font-size: 24rpx;
    color: #666666;
  }
  .end-time {
    font-weight: 400;
    font-size: 24rpx;
    color: #E51D1C;
    margin-top: 12rpx;
  }
  .record {
    padding: 32rpx 24rpx;
    border-radius: 20rpx;
    background-color: #fff;
  }
  .record-head {
    position: relative;
    margin-left: 26rpx;
    margin-bottom: 24rpx;
  }
  .record-head::before {
    position: absolute;
    content: '';
    width: 10rpx;
    height: 36rpx;
    border-radius: 16rpx;
    left: -30rpx;
    top: 5rpx;
    background-color: #02A53C;
  }
  .record-item {
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
    .record-item-time {
      position: absolute;
      left: 28rpx;
      top: -10rpx;
      font-size: 28rpx;
      color: #000;
      font-weight: 500;
    }
    .record-item-content {
      padding: 26rpx 24rpx;
      border-radius: 12rpx;
      background-color: #F8F8F8;
    }
    .record-item-name {
      font-weight: 500;
      font-size: 32rpx;
      color: rgba(0,0,0,0.9);
    }
    .record-item-text {
      font-weight: 400;
      font-size: 24rpx;
      margin-top: 12rpx;
      margin-bottom: 12rpx;
      color: rgba(0,0,0,0.9);
    }
    .record-item-images {
      display: flex;
      align-items: center;
    }
    .record-item-images image {
      margin-right: 10rpx;
      width: 88rpx;
      height: 88rpx;
    }
    .record-item-images image:nth-child(6n+6) {
      margin-right: 0;
    }
    .rectification-results-btn {
      margin-top: 32rpx;
      width: 100%;
      height: 78rpx;
      background: linear-gradient( 90deg, #29D064 0%, #02A53C 100%);
      border-radius: 92rpx;
      text-align: center;
      line-height: 78rpx;
      color: #fff;
      font-size: 32rpx;
    }
</style>
