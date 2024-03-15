<template>
  <view class="container">
    <!-- 自定义头部 -->
    <view class="nav-top" :style="{height:(navheight*2) + 'rpx'}">
      <view class="bg-img">
        <image :src="bgurl" mode="widthFix"></image>
        <view class="title" :style="{lineHeight:(navheight*2.8) + 'rpx',fontSize:textsize*2 +'rpx'}">{{title}}</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props:["bgurl","title","textsize"],
    name:"comHead",
    data() {
      return {
        navheight: 0,
        titleh:0,
        titleheight:0,
        statusBarHeight:0,
      };
    },
    methods: {
      // 获取系统的高度
      isBarHeight() {
        return new Promise((resolve, reject) => {
          var that = this
          var isTemp = {}
          uni.getSystemInfo({
            success(res) {
              let totalTopHeight = 68
              if (res.model.indexOf('iPhone X') !== -1) {
                totalTopHeight = 88
              } else if (res.model.indexOf('iPhone') !== -1) {
                totalTopHeight = 64
              }
              // 状态栏高度
              isTemp['statusBarHeight'] = res.statusBarHeight
              // 标题高度
              isTemp['titleBarHeight'] = totalTopHeight - res.statusBarHeight
              // 总高度
              isTemp['allHeight'] = totalTopHeight
              resolve(isTemp)
            },
            fail(e) {
              reject(e)
            }
          })
        })
      },
    },
    mounted() {
      this.isBarHeight().then(res => {
        this.navheight = res.allHeight
        this.titleh = res.titleBarHeight
        this.statusBarHeight = res.statusBarHeight
        this.titleheight = res.titleBarHeight +res.statusBarHeight
      })
    },
  }
</script>

<style scoped>
.bg-img image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.title {
  position: absolute;
  font-size: 34rpx;
  left: 50%;
  transform: translateX(-50%);
  color: #000;
  font-weight: 500;
}
</style>