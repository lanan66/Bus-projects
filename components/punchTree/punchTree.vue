<template>
  <view class="container">
    <!-- 头部导航栏 -->
    <view class="scroll-con">
      <scroll-view class="scroll-box" scroll-x="true" @scroll="scroll">
        <view class="scroll-item" :class="current == index? 'move':''" v-for="(item,index) in routeList" :key="item.id"
          @click="onchange(index)">
          {{item.text}}
        </view>
      </scroll-view>
      <view class="mask"></view>
    </view>
    <!-- 内容区域 -->
    <view class="content">
      <view class="content-item" v-show="current == 0" :style="{height:scH +'px',overflow:isoverflow}">
        <punchTreeItem :itemobj="item" :isindex=true :ispunch=fasle v-for="(item,index) in timeList" :key="item.id"></punchTreeItem>
      </view>
      <!-- 收起 -->
      <view class="collapse" @click="close" v-if="isshow == true" :style="{display: nodrop}">
        <view class="collapse-img">
          <image src="../../static/image/index_pages/drop.png" mode="" v-show="isshow == true"></image>
        </view>
        <view class="collapse-text">
          收起
        </view>
      </view>
      <!-- 展开-->
      <view class="collapse" @click="open" v-if="isshow == false">
        <view class="collapse-img">
          <image src="../../static/image/index_pages/drop.png" mode="" style="transform: rotate(180deg);"></image>
        </view>
        <view class="collapse-text">
          展开
        </view>
      </view>
      <!-- <view class="content-item" v-show="current == 1">
        1
      </view> -->
    </view>
  </view>
</template>

<script>
  import punchTreeItem from "/components/punchTreeItem/punchTreeItem.vue"
  export default {
    name: "punchTree",
    props: {
      nodrop: {
        type: String,
        default: 'display'
      }
    },
    data() {
      return {
        routeList: [{
            id: 1,
            text: '路线1'
          },
          {
            id: 2,
            text: '路线2'
          },
          {
            id: 3,
            text: '路线3'
          },
          {
            id: 4,
            text: '路线4'
          },
          {
            id: 5,
            text: '路线5'
          },
          {
            id: 6,
            text: '路线6'
          }
        ],
        current: 0,
        allheight: 33,
        rotate: 0,
        scH: '',
        isshow: true,
        isoverflow: 'display',
        timeList: [{
            id: 1,
            time: '08:00前',
            title: '一楼楼梯',
            info: '厕所格清洁，垃圾桶清倒，洗手台清洁',
            status: 3
          },
          {
            id: 2,
            time: '09:00前',
            title: '一楼洗手间',
            info: '厕所格清洁，垃圾桶清倒，洗手台清洁',
            status: 2
          },
          {
            id: 3,
            time: '10:00前',
            title: '一楼走廊',
            info: '走廊清扫、扶手清洁',
            status: 1
          },
          {
            id: 4,
            time: '11:00前',
            title: '一楼走廊',
            info: '走廊清扫、扶手清洁',
            status: 0
          }
        ]
      };
    },
    mounted() {
      this.getHeight()
    },
    components: {
      punchTreeItem
    },
    methods: {
      close() {
        this.scH = 0
        this.isshow = false
        this.isoverflow = 'hidden'
      },
      open() {
        console.log(11)
        this.scH = this.allheight
        this.isshow = true
        this.isoverflow = 'display'
      },
      onchange(index) {
        this.current = index
      },
      moveclass(status) {
        switch (status) {
          case 3:
            return "timeoutno-status";
            break;
          case 2:
            return "timeout-status";
            break;
          case 1:
            return "clocked-status";
            break;
          default:
            return "no-status";
        }
      },
      movedot(status) {
        switch (status) {
          case 3:
            return "timeoutno-dot";
            break;
          case 2:
            return "timeout-dot";
            break;
          case 1:
            return "clocked-dot";
            break;
          default:
            return "no-dot";
        }
      },
      getHeight() {
        let _this = this;
        uni.getSystemInfo({
          success: function(res) { // res - 各种参数
            console.log(res);
            let item = uni.createSelectorQuery().in(_this).select(".content-item");
            item.boundingClientRect(function(data) {
              _this.allheight = data.height
              console.log("---", data.height)
            }).exec()
          }
        });
      }
    }
  }
</script>

<style scoped>
  .scroll-box {
    white-space: nowrap;
    width: 100%;
  }

  .scroll-item {
    position: relative;
    display: inline-block;
    background-color: #F4F4F4;
    height: 58rpx;
    text-align: center;
    width: 128rpx;
    border-radius: 8rpx;
    font-size: 24rpx;
    line-height: 58rpx;
    font-weight: 400;
    color: #000;
    margin-right: 16rpx;
  }

  .scroll-con {
    margin-bottom: 32rpx;
    position: relative;
  }

  .mask {
    position: absolute;
    right: 0;
    top: 0;
    width: 100rpx;
    height: 58rpx;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
  }

  .move {
    background: url("../../static/image/index_pages/item-bg.png") no-repeat;
    background-position: center;
    background-size: contain;
  }

  .content-item {
    transition: all 0.3s;
  }

  .time-item {
    position: relative;
    padding: 50rpx 0 50rpx 28rpx;
  }

  .time-item-info {
    padding: 28rpx 24rpx;
    border-radius: 12rpx;
    background-color: #F8F8F8;
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

  .time-item-time {
    position: absolute;
    left: 28rpx;
    top: -10rpx;
    font-size: 28rpx;
    color: #000;
    font-weight: 500;
  }

  .time-item-info-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .time-item-status {
    padding: 8rpx 24rpx;
    background-color: #E9F3ED;
    border-radius: 4rpx;
    font-size: 20rpx;
    display: flex;
    align-items: center;
    border-radius: 4rpx;
    border: 1rpx solid #02A53C;
  }

  .dot {
    width: 8rpx;
    height: 8rpx;
    border-radius: 50%;
    margin-right: 8rpx;
  }

  .timeoutno-dot {
    background-color: #E51D1C !important;
  }

  .timeout-dot {
    background-color: #F2D924 !important;
  }

  .clocked-dot {
    background-color: #02A53C !important;
  }

  .no-dot {
    background-color: #029FE6 !important;
  }

  .timeoutno-status {
    color: #E51D1C !important;
    background-color: #F7EBEB !important;
    border-color: #E51D1C !important;
  }

  .timeout-status {
    color: #F2D924 !important;
    background-color: #F8F6EB !important;
    border-color: #F2D924 !important;
  }

  .clocked-status {
    color: #02A53C !important;
    background-color: #E9F3ED !important;
    border-color: #02A53C !important;
  }

  .no-status {
    color: #029FE6 !important;
    background-color: #E9F3F7 !important;
    border-color: #029FE6 !important;
  }

  .time-item-name {
    font-size: 24rpx;
    font-weight: 500;
  }

  .time-item-content {
    color: #999999;
    font-size: 24rpx;
    font-weight: 400;
    margin-top: 12rpx;
    margin-bottom: 12rpx;
  }

  .time-item-bot {
    display: flex;
    justify-content: space-between;
  }

  .checked {
    margin-top: 16rpx;
    font-size: 24rpx;
    font-weight: 400;
    color: #02A53C;
    border-bottom: 1rpx solid #02A53C;
  }

  .clock-btn {
    padding: 8rpx 48rpx;
    border-radius: 8rpx;
    text-align: center;
    color: #fff;
    font-size: 24rpx;
    background: linear-gradient(90deg, #29D064 0%, #02A53C 100%);
  }

  .collapse {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, #29D064 0%, #02A53C 100%);
    border-radius: 20rpx;
    margin-top: 32rpx;
    height: 66rpx;
  }

  .collapse-img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28rpx;
    height: 28rpx;
    margin-right: 4rpx;
  }

  .collapse-img image {
    width: 100%;
    height: 100%;
  }

  .collapse-text {
    font-size: 24rpx;
    color: #fff;
    line-height: 66rpx;
  }
</style>
