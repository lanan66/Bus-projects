<template>
  <!-- 现在的时间 -->
  <view class="container">
    <view class="time-img">
      <image src="/static/image/index_pages/now.png" mode=""></image>
    </view>
    <view class="time">
      {{time}}
    </view>
  </view>
</template>

<script>
  export default {
    name: "nowTime",
    data() {
      return {
      time:''
      };
    },
    mounted() {
      var timer = setInterval(() => {
        this.getNowTime()
      },1000)
    },
    beforeDestroy() {
      clearInterval(timer)
    },
    methods: {
      //获取当前时间
      getNowTime() {
        var date = new Date();
        //年 getFullYear()：四位数字返回年份
        var year = date.getFullYear(); //getFullYear()代替getYear()
        //月 getMonth()：0 ~ 11
        var month = date.getMonth() + 1;
        //日 getDate()：(1 ~ 31)
        var day = date.getDate();
        //时 getHours()：(0 ~ 23)
        var hour = date.getHours();
        //分 getMinutes()： (0 ~ 59)
        var minute = date.getMinutes();
        //秒 getSeconds()：(0 ~ 59)
        var second = date.getSeconds();
        var time = year + '-' + this.addZero(month) + '-' + this.addZero(day) + ' ' + this.addZero(hour) + ":" +this.addZero(minute) + ':' + this.addZero(second);
            this.time = time
        },
        //小于10的拼接上0字符串
        addZero(s) {
            return s < 10 ? ('0' + s) : s;
        },
      }
    }
</script>

<style scoped>
  .container {
    width: 702rpx;
    height: 84rpx;
    border: 1rpx solid #fff;
    border-radius: 20rpx;
    display: flex;
    align-items: center;
    background-color: #DAFDE6;
  }

  .time-img {
    width: 64rpx;
    height: 112rpx;
  }

  .time-img image {
    width: 100%;
    height: 100%;
    margin-top: -10px;
    margin-left: 28rpx;
  }

  .time {
    margin-left: 56rpx;
    color: #02A53C;
    font-size: 30rpx;
    font-weight: 500;
  }
</style>
