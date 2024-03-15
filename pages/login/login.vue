<template>
  <view class="container">
    <!-- 背景图片 -->
    <image src="../../static/image/login/bgimg.png" mode="widthFix" class="bg-img"></image>
    <!-- 自定义头部 -->
    <view class="nav-top" :style="{height:(navheight*2) + 'rpx'}"></view>
    <view class="content">
      <!-- logo和标题 -->
      <view class="title-head">
        <image src="../../static/image/login/login-head.png" mode="widthFix"></image>
      </view>
      <!-- 内容区域 -->
      <view class="tab">
        <image src="../../static/image/login/tab-left.png" mode="widthFix" class="tab-img" v-if="current==0"></image>
        <image src="../../static/image/login/tab-right.png" mode="widthFix" class="tab-img" v-if="current==1"></image>
        <view class="tabitems">
          <view class="tabitem" v-for="(item,index) in tabitems" :key="item.id" :class="current==index?'move':''"
            @click="changetab(index)"> {{item.text}}</view>
        </view>
        <!-- 切换的内容 -->
        <view class="tab-con">
          <!-- 验证码登录 -->
          <view class="tab-con-item" v-show="current==0">
            <!-- 输入手机号 -->
            <view class="input-item">
              <image src="../../static/image/login/phone-icon.png" mode="" class="icon"></image>
              <input type="text" placeholder="请输入手机号" @input="NumInput" @blur="checkphone(phonevalue)"
                v-model.number="phonevalue">
            </view>
            <!-- 输入验证码 -->
            <view class="input-item">
              <image src="../../static/image/login/captcha-icon.png" mode="" class="icon"></image>
              <input type="text" placeholder="请输入验证码" @input="CodeInput" v-model="codevalue" @blur="checkcode(codevalue)">
              <view class="getcode-btn">
                <view v-show="canget" @click="getcaptcha">获取验证码</view>
                <view v-show="!canget" class="getcode-move">已发送({{countdown}})s</view>
              </view>
            </view>
            <!-- 登录按钮 -->
            <view class="login-btn">登录</view>
          </view>
          <!-- 密码登录 -->
          <view class="tab-con-item" v-show="current==1">
            <!-- 输入账号 -->
            <view class="input-item">
              <image src="../../static/image/login/count.png" mode="" class="icon"></image>
              <input type="text" placeholder="请输入账号" @input="CountInput" @blur="checkcount(countvalue)" v-model="countvalue">
            </view>
            <!-- 输入密码 -->
            <view class="input-item">
              <image src="../../static/image/login/passward.png" mode="" class="icon"></image>
              <input :type="isshowpaaward == true?'text':'password'" placeholder="请输入密码" @blur="checkpassword(passwordvalue)" v-model="passwordvalue">
              <!-- 关闭眼睛和开 -->
              <view class="eye">
                <image src="/static/image/login/nocansee.png" mode="" class="eye-icon"
                  @click="isshowpaaward = !isshowpaaward" v-show="isshowpaaward == 0"></image>
                <image src="/static/image/login/cansee.png" mode="" class="eye-icon"
                  @click="isshowpaaward = !isshowpaaward" v-show="isshowpaaward == 1"></image>
              </view>
            </view>
            <view class="reset">重置密码</view>
            <!-- 登录按钮 -->
            <view class="login-btn">登录</view>
          </view>
          <!-- 底部 -->
          <view class="tab-bottom">
            <checkbox :value="check" /><text></text>
            <view>勾选将代表本人已阅读并同意</view>
            <view class="useragreement" @click="gotoagreement">《用户服务协议》</view>
          </view>
        </view>
      </view>

    </view>
    <!-- 隐私协议弹窗 -->
    <showPrivacyAgreement ref="showPrivacy" :visible.sync="privacyVisible"></showPrivacyAgreement>
    <!-- 错误提示弹窗 -->
    <showTip ref="showtip" :title="tiptitle"></showTip>
  </view>
</template>

<script>
  import showTip from "/components/showTip/showTip.vue";
  import showPrivacyAgreement from '/components/showPrivacyAgreement/showPrivacyAgreement.vue';
  export default {
    data() {
      return {
        navheight: 0,
        current: 0,
        countdown: 60,
        canget: true,
        isshowpaaward: 0,
        phonevalue: '',
        codevalue:'',
        countvalue:'',
        passwordvalue:'',
        privacyVisible: false,
        tiptitle: "错误",
        tabitems: [{
            id: 1,
            text: "验证码登陆"
          },
          {
            id: 2,
            text: "密码登录"
          }
        ],
      }
    },
    components: {
      showPrivacyAgreement,
      showTip
    },
    created() {
      this.isBarHeight().then(res => {
        this.navheight = res.allHeight
      })
    },
    onShow() {
      wx.getPrivacySetting({
        success: res => {
          console.log(res)
          // 本来是没有感叹号的
          if (!res.needAuthorization) {
            // 需要弹出隐私协议
            this.privacyVisible = true
            this.$refs.showPrivacy.init()
          }
        },
        fail: () => {}
      })
    },
    methods: {
      // 错误提示框
      error(title) {
        // 错误消息
        this.tiptitle = title
        this.$refs.showtip.open()
      },
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
      // 切换tab
      changetab(index) {
        this.current = index
      },
      // 点击获取验证码
      getcaptcha() {
        this.canget = false
        var Timer = setInterval(() => {
          this.countdown--;
          if (this.countdown <= 0) {
            clearInterval(Timer);
            this.canget = true;
            this.countdown = 60;
          }
        }, 1000);
      },
      // 去服务协议页面
      gotoagreement() {
        uni.navigateTo({
          url: '/pages_login/agreement/agreement'
        })
      },
      // 手机号输入框校验
      checkphone(str) {
        if (this.phonevalue == '') {
          this.error("请先输入手机号")
        }
        //正则表达式定义手机号正确格式
        let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
        if(this.phonevalue != '') {
          if (!reg.test(str)) {
            this.error("请输入正确的手机号")
          }
        }
      },
      // 限制输入框只能输入数字
      NumInput(e) {
        const o = e.target;
        const inputRule = /[^\d]/g //修改inputRule 的值
        this.$nextTick(function() {
          this.phonevalue = o.value.replace(inputRule, "");
        })
      },
      CountInput(e) {
        const o = e.target;
        const inputRule = /[^\d]/g //修改inputRule 的值
        this.$nextTick(function() {
          this.countvalue = o.value.replace(inputRule, "");
        })
      },
      CodeInput(e) {
        const o = e.target;
        const inputRule = /[^\d]/g //修改inputRule 的值
        this.$nextTick(function() {
          this.codevalue = o.value.replace(inputRule, "");
        })
      },
      // 校验验证码
      checkcode(str) {
        if (this.codevalue == '') {
          this.error("请先填写验证码")
        }
      },
      checkcount(str) {
        if(this.countvalue == '') {
          this.error("请先输入账号")
        }
        //正则表达式定义手机号正确格式
        let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
        if(this.countvalue != '') {
          if (!reg.test(str)) {
            this.error("请输入正确的账号")
          }
        }
      },
      checkpassword(str) {
        if(this.passwordvalue == '') {
          this.error("请先输入密码")
        }
        // let reg = /[^a-zA-Z]/g
        // if(this.passwordvalue != '') {
        //   if (!reg.test(str)) {
        //     console.log(11)
        //     this.error("请输入正确的密码")
        //   }
        // }
      },
    }
  }
</script>

<style scoped>
  .container {
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  .container image {
    width: 100%;
    height: 100%;
  }

  .bg-img {
    position: absolute;
    left: 0;
    top: 0;
  }

  .content {
    padding: 0 24rpx;
  }

  .content .title-head {
    width: 414rpx;
    height: 244rpx;
    margin: 0 auto;
    margin-top: 44rpx;
  }

  .content .title-head image {
    width: 100%;
    height: 100%;
  }

  .tab {
    position: relative;
    width: 702rpx;
    /* min-height: 1000rpx; */
    margin-top: 56rpx;
  }

  .tab-img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .tabitems {
    width: 100%;
    justify-content: space-around;
    position: relative;
    display: flex;
    align-items: center;
  }

  .tabitem {
    width: 50%;
    font-size: 28rpx;
    color: #666;
    text-align: center;
    position: relative;
    line-height: 120rpx;
  }

  .move {
    color: #000;
    font-size: 32rpx;
  }

  .move::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 90rpx;
    transform: translateX(-50%);
    width: 50rpx;
    height: 12rpx;
    background-color: #000;
    border-radius: 46rpx;
  }

  .tab-con {
    position: absolute;
    padding: 60rpx 50rpx;
  }

  .input-item {
    width: 540rpx;
    height: 92rpx;
    padding: 0 24rpx 0 32rpx;
    border-radius: 20rpx;
    background-color: #F7F9F8;
    display: flex;
    align-items: center;
    margin-bottom: 24rpx;
  }

  .input-item input {
    outline: none;
    font-size: 28rpx;
    border: 0;
    padding: 0 24rpx;
  }

  .input-item .icon {
    width: 40rpx;
    height: 40rpx;
  }

  .getcode-btn {
    width: 168rpx;
    height: 58rpx;
    font-size: 24rpx;
    text-align: center;
    line-height: 58rpx;
    color: #fff;
    border-radius: 8rpx;
    background-color: #02A53C;
  }

  .getcode-btn view {
    width: 100%;
    height: 100%;
  }

  .getcode-move {
    background-color: #DFF1E6;
    color: #999999;
    border-radius: 8rpx;
  }

  .login-btn {
    margin-top: 72rpx;
    width: 606rpx;
    height: 94rpx;
    background: linear-gradient(90deg, #29D064 0%, #02A53C 100%);
    border-radius: 158rpx;
    color: #fff;
    text-align: center;
    line-height: 94rpx;
    font-size: 26rpx;
  }

  .tab-bottom {
    color: #999;
    font-size: 20rpx;
    width: 480rpx;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 32rpx;
    display: flex;
    align-items: center;
  }

  .tab-bottom checkbox {
    zoom: 50%;
  }

  .useragreement {
    color: #02A53C;
  }

  .input-item .eye {
    display: flex;
    margin-left: 60px;
  }

  .input-item .eye-icon {
    width: 40rpx;
    height: 40rpx;
  }

  .reset {
    display: flex;
    justify-content: flex-end;
    font-size: 28rpx;
    margin-right: 20rpx;
    margin-top: 20rpx;
    color: #999;
    font-weight: 400;
  }
</style>
