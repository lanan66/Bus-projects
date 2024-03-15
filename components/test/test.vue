<template>
  <view class="pages">
    <!-- 这个canvas一定不可以将一出的部分隐藏掉，否则就会有一些部分加载不出来 -->
    <canvas
      id="mycanvas"
      :style="
        'width:' + canvasView.width + 'px;height:' + canvasView.height + 'px;'
      "
      canvas-id="Canvas"
    />
    <!-- <u-loading :show="isLoading"></u-loading> -->
    <u-loadmore status="loading" v-if="isLoading" />
    <view class="imgContainer">
      <view v-for="(item1, index1) in imgList" :key="index1" class="imgDayItem">
        <view class="imgTime"
          >拍摄时间：{{ item1[0].time }}({{ item1.length }}张)</view
        >
        <div class="imgGroup">
          <view
            class="itemImg"
            v-for="(item2, index2) in item1"
            @click="previewImage(item2, index2, index1)"
            :key="index2"
          >
            <image :src="item2.path" alt="" srcset="" />
            <view class="imgName">图片{{ index2 }}</view>
            <view
              class="removeImg"
              @click.stop.prevent="removeCurrentImg(item2)"
            >
              x
            </view>
          </view>
        </div>
      </view>
    </view>
    <!-- 定位的拍摄图片 -->
    <image
      src="/static/image/tabbarImg/my.png"
      class="cameraBtn"
      @click="TakeAPicture()"
      mode=""
    ></image>
    <!-- 测试用的删除本地文件 -->
    <button @click="deleteImg">删除本地所有图片</button>
  </view>
</template>

<script>

export default {
  data() {
    return {
      // canvas的一些信息
      canvasView: {
        // 当前要绘制的图片
        canvasImg: undefined,
        // 将要被绘制的图片的宽度
        width: undefined,
        // 将要被绘制的图片的高度
        height: undefined,
        // 将要被绘制到图像中的上下两个矩形的高度(px)
        contentHeight: 150,
        // 将要被绘制到图像中的顶部logo的高度(px)
        logoWidth: 400,
      },
      // 当前的经纬度信息
      positionInfo: {
        mapAddress: "", // 所在村位置
        address: "", // 拍摄地址
        longitude: "", //经度(坐标)
        latitude: "", //纬度(坐标)
        formatLongitude: "", //转变过后的经度(度分秒形式)
        formatLatitude: "", //转变过后的纬度(度分秒形式)
      },
      // 当前要被绘制的图片的信息
      fileUrl: undefined,
      // canvas对象
      context: undefined,
      // 图片列表
      imgList: [],
      // 是否是正在加载中
      isLoading: true,
      // 网络类型
      networkType: "",
      // 系统信息
      systemInfo: "",
    };
  },
  created() {
    this.getCurrentLocation();
    this.getNetworkType();
    this.getSystemInfo();
  },
  mounted() {
    uni.showLoading({
      title: "正在加载图片",
    });
    this.isLoading = true;
    this.context = uni.createCanvasContext("Canvas", this);
    this.getSavedFileList();
  },
  methods: {
    // 获取本地的图片列表
    getSavedFileList() {
      var that = this;
      uni.getFileSystemManager().getSavedFileList({
        success: function (res) {
          console.log("获取本地小程序下载的文件如下：", res);

          that.imgList = res.fileList.map((item) => {
            console.log("res.fileList", item);
            return {
              path: item.filePath,
              time: that.$u.timeFormat(
                item.createTime * 1000,
                "yyyy年mm月dd日"
              ),
            };
          });
          console.log("========222==", that.imgList);
          that.formatImgList(that.imgList);
          uni.hideLoading();
          that.isLoading = false;
        },
      });
    },
    // 通过微信小程序自带的方法获取到当前的经纬度，然后通过腾讯sdk获取详细位置
    getCurrentLocation() {
      let that = this; //在uniapp中药定义一下this才能使用
      uni.getLocation({
        type: "gcj02",
        altitude: true,
        geocode: true,
        isHighAccuracy: true,
        success: function (res) {
          console.log("微信小程序定位信息", res);
          that.positionInfo.longitude = res.longitude;
          that.positionInfo.latitude = res.latitude;
          that.positionInfo.formatLongitude = that.convertToDMS(
            res.latitude,
            res.longitude
          ).longitude;
          that.positionInfo.formatLatitude = that.convertToDMS(
            res.latitude,
            res.longitude
          ).latitude;
          that.loAcquire(
            that.positionInfo.longitude,
            that.positionInfo.latitude
          );
        },
      });
    },
    // 获取网络类型
    getNetworkType() {
      var that = this;
      uni.getNetworkType({
        success: function (res) {
          console.log(res);
          that.networkType = res.networkType;
        },
      });
    },
    // 获取系统信息
    getSystemInfo() {
      var that = this;
      uni.getSystemInfo({
        success: function (res) {
          // console.log(res.appName)
          that.systemInfo = res;
          console.log("当前使用的系统是：", res.platform);
        },
      });
    },
    // 获取当前地址
    loAcquire(longitude, latitude) {
      let that = this;
      // 腾讯地图Api
      const qqmapsdk = new QQMapWX({
        key: "5IPBZ-2OA3Q-7UR5Y-4XVMJ-IIEDQ-EDFRN", //这里填写自己申请的key
      });
      console.log({ longitude, latitude });
      qqmapsdk.reverseGeocoder({
        location: { longitude, latitude },
        success(response) {
          uni.hideLoading();
          that.isLoading = false;
          console.log("腾讯sdk获取的定位信息：", response);
          that.positionInfo.mapAddress =
            response.result.address_component.province +
            response.result.address_component.city +
            response.result.address_component.district +
            response.result.address_component.street;
          response.result.address_component.street_number;
          that.positionInfo.address =
            response.result.address_component.city +
            response.result.formatted_addresses.recommend;
        },
        fail() {
          that.isLoading = false;
          uni.showToast({
            icon: "none",
            title: "定位失败请检查网络状态",
            duration: 4000,
          });
        },
      });
    },
    // 添加水印
    setImageText(image) {
      var that = this;
      // 绘制前清空画布
      this.context.clearRect(
        0,
        0,
        this.canvasView.width,
        this.canvasView.height
      );
      // 将图片src放到cancas内，宽高必须为图片大小
      this.context.drawImage(
        this.canvasView.canvasImg,
        0,
        0,
        this.canvasView.width,
        this.canvasView.height,
        this.canvasView.width,
        this.canvasView.height
      );
      // 设置上下两个边框的透明度
      this.context.setGlobalAlpha(0.5);

      this.context.beginPath();
      // 1.绘制顶部的白色背景
      this.context.rect(
        0,
        0,
        this.canvasView.width,
        this.canvasView.contentHeight
      );
      this.context.setFillStyle("white");
      this.context.fill();

      // 2.绘制底部的白色背景
      this.context.rect(
        0,
        this.canvasView.height - this.canvasView.contentHeight,
        this.canvasView.width,
        this.canvasView.contentHeight
      );
      // this.context.setFillStyle("white");
      this.context.fill("white");
      // 设置文字的透明度
      this.context.setGlobalAlpha(1);
      // 3.绘制顶部的文字
      this.context.setFontSize(26);
      this.context.setTextAlign("left");
      this.context.setFillStyle("black");
      this.context.fillText("拍摄人:李帅豪", 50, 60);
      this.context.fillText(
        "拍摄时间:" + this.$u.timeFormat(new Date(), "yyyy-mm-dd hh:MM:ss"),
        50,
        110
      );

      // 4.绘制顶部的图片
      that.context.drawImage(
        "/static/image/lshlogo.png",
        that.canvasView.width - that.canvasView.logoWidth - 10,
        20,
        that.canvasView.logoWidth,
        that.canvasView.contentHeight - 40
      );
      // 5.绘制底部的文字
      // 5.1绘制定位以及网络状态
      this.context.setFontSize(33);
      this.context.setFillStyle("black");
      console.log('下面需要填写具体的位置信息');
      this.context.fillText(
        "定位:" + this.positionInfo.formatLongitude,
        50,
        this.canvasView.height - 100
      );
      this.context.fillText(
        this.positionInfo.formatLatitude,
        this.canvasView.width - 450,
        this.canvasView.height - 100
      );
      var systemimg = "";
      var networkimg = "";
      if (that.systemInfo.platform == "android") {
        systemimg = "anzhuo";
      } else if (that.systemInfo.platform == "ios") {
        systemimg = "ios";
      } else {
        systemimg = "anzhuo";
      }
      if (that.networkType == "unknown" || that.networkType == "none") {
        networkimg = "network1";
      } else if (that.networkType == "none") {
        networkimg = "flyMode";
      } else {
        networkimg = "network2";
      }
      console.log("systemimg,networkimg", systemimg, networkimg);
      that.context.drawImage(
        "/static/image/" + systemimg + ".png",
        this.canvasView.width - 150,
        this.canvasView.height - 140,
        50,
        50
      );
      that.context.drawImage(
        "/static/image/" + networkimg + ".png",
        this.canvasView.width - 90,
        this.canvasView.height - 140,
        50,
        50
      );
      // 5.3绘制拍摄地址
      this.context.setFontSize(33);
      this.context.setFillStyle("black");
      console.log('在这里填写拍摄的地址',this.positionInfo.address);
      this.context.fillText(
        "拍摄地址:北京市xxxxxxxxx" ,
        50,
        this.canvasView.height - 50,
        this.canvasView.width - 100
      );

      this.drawSave();
    },
    // 绘制图片并保存至相册
    drawSave() {
      var that = this;
      // 一定要加上一个定时器否则进入到页面第一次可能会无法正常拍照，后几次才正常
      setTimeout(() => {
        // 本次回画完重开开始绘画，并且在绘画完毕之后再保存图片，不然页面可能会出现白屏等情况
        this.context.draw(false, () => {
          console.log(
            "!!!!!!!!!1开始绘画",
            this.canvasView.width,
            this.canvasView.height
          );

          uni.canvasToTempFilePath(
            {
              canvasId: "Canvas",
              fileType: "png",
              width: this.canvasView.width,
              height: this.canvasView.height,
              destWidth: this.canvasView.width,
              destHeight: this.canvasView.height,
              success: async (path) => {
                console.log("path", path);

                let imageInfo = await that.getImageInfo({
                  imgSrc: path.tempFilePath,
                });
                console.log("==========", imageInfo);
                that.fileUrl = imageInfo.path;

                // console.log("这一步如果换成png那么就可以显示出真是的图片");
                // console.log(
                //   "lshlsh",
                //   `data:image/png;base64,${uni
                //     .getFileSystemManager()
                //     .readFileSync(imageInfo.path, "base64")}`
                // );
                var respath = uni
                  .getFileSystemManager()
                  .saveFileSync(imageInfo.path);
                console.log("拥挤存储的路径saveFileSync", respath);
                uni.saveImageToPhotosAlbum({
                  filePath: respath,
                  complete: (res) => {
                    console.log(res);
                  },
                });
                that.imgList = [];
                that.getSavedFileList();
              },
            },
            that
          );
        });
      }, 1000);
    },
    //检查相机权限
    TakeAPicture() {
      var that = this;
      uni.authorize({
        scope: "scope.camera",
        success() {
          console.log("scope.camera用户授权成功小程序");

          uni.getSetting({
            success(res) {
              console.log("authSetting", res);
              if (res.authSetting["scope.camera"] == true) {
                console.log("111当前用户已经个授权过了scope.camera");
                that.openCamera();
              } else {
                console.log("22当前用户没用授权过scope.camera");
                uni.openSetting({
                  success(res) {
                    console.log("openSetting", res);
                    if (res.authSetting["scope.camera"] == true) {
                      console.log("openSetting打开设置成功打开了摄像头权限");
                      that.openCamera();
                    } else {
                      uni.showToast({
                        title: "未获取到相机权限",
                      });
                    }
                  },
                });
              }
            },
          });
        },
        fail() {
          console.log("拒绝");
          uni.showToast({
            icon: "none",
            title: "您已拒绝相机权限，暂无法使用水印相机",
            duration: 4000,
          });
        },
      });
    },
    //获取图片信息
    async getImageInfo({ imgSrc }) {
      return new Promise((resolve, errs) => {
        uni.getImageInfo({
          src: imgSrc,
          success: function (image) {
            resolve(image);
          },
          fail(err) {
            errs(err);
          },
        });
      });
    },
    //打开相机
    async openCamera() {
      var that = this;
      // 一定要使用chooseMedia，如果使用chooseImage那么部分IOS手机就没法正常使用了
      uni.chooseMedia({
        count: 1,
        mediaType: ["image"],
        sourceType: ["camera"],
        camera: "back",
        success: async (res) => {
          uni.showLoading({
            title: "正在加载图片资源",
          });
          that.isLoading = true;
          console.log(res);
          let imgInfo = await that.getImageInfo({
            imgSrc: res.tempFiles[0].tempFilePath,
          });
          console.log("这一步可以获取到真正的base图片不过还没有转化");
          // console.log(
          //   `data:image/jpg;base64,${uni
          //     .getFileSystemManager()
          //     .readFileSync(res.tempFilePaths[0], "base64")}`
          // );
          console.log("==========imgInfo", imgInfo);
          that.canvasView.canvasImg = imgInfo.path;
          that.canvasView.width = imgInfo.width;
          that.canvasView.height = imgInfo.height;
          console.log(this.canvasView);
          console.log(
            "！！！！！！！！！！当前图片信息canvasView",
            that.canvasView
          );
          that.setImageText();
        },
        fail: function (res) {
          console.log("选择图片失败", res);
        },
      });
    },
    // 删除当前的图片(测试节点使用的)
    removeCurrentImg(item) {
      // 等会儿在处理这个问题，这个需要二维为数组中寻找并且删除元素
      var that = this;
      uni.getFileSystemManager().removeSavedFile({
        filePath: item.path,
        success(res) {
          console.log("单个删除成功", res);
          that.getSavedFileList();
        },
      });
    },
    // 删除所有的图片(测试节点使用的)
    deleteImg() {
      var that = this;
      this.imgList.forEach((item) => {
        item.forEach((item2, index2) => {
          uni.getFileSystemManager().removeSavedFile({
            filePath: item2.path,
            success(res) {
              console.log("全部删除成功", res);
              that.getSavedFileList();
            },
          });
        });
      });
    },
    // 预览图片
    // 第一个参数是当前项的图片信息，
    // 第二个参数为当前图片的索引
    // 第三个参数为当前图片所在时间组的索引
    previewImage(item, index2, index1) {
      console.log("图片预览", item, index2, index1);
      var that = this;
      // 预览图片
      uni.previewImage({
        current: index2,
        urls: that.imgList[index1].map((item) => item.path),
      });
    },
    // 将获取到的图片按照日期进行格式化
    formatImgList(arr) {
      // this.imgList = Object.values(
      //   arr.reduce((obj, item) => {
      //     obj[item.time] = obj[item.time] || [item];
      //     obj[item.time].push(item);
      //     return obj;
      //   }, {})
      // ).filter((item) => item.length > 1);
      this.imgList = arr.reduce((prev, item) => {
        const index = prev.findIndex((value) => {
          return value.length > 0 && value[0].time === item.time;
        });

        if (index !== -1) {
          prev[index].push(item);
        } else {
          prev.push([item]);
        }

        return prev;
      }, []);
      console.log("formatImgList", this.imgList);
    },
    // 将经纬度转化为度分秒
    convertToDMS(lat, lng) {
      let latDirection = lat >= 0 ? "N" : "S";
      let lngDirection = lng >= 0 ? "E" : "W";

      lat = Math.abs(lat);
      lng = Math.abs(lng);

      let latDegrees = Math.floor(lat);
      let latMinutes = Math.floor((lat - latDegrees) * 60);
      let latSeconds = ((lat - latDegrees - latMinutes / 60) * 3600).toFixed(4);

      let lngDegrees = Math.floor(lng);
      let lngMinutes = Math.floor((lng - lngDegrees) * 60);
      let lngSeconds = ((lng - lngDegrees - lngMinutes / 60) * 3600).toFixed(4);

      return {
        latitude: `${latDirection}:${latDegrees}°${latMinutes}'${latSeconds}"`,
        longitude: `${lngDirection}:${lngDegrees}°${lngMinutes}'${lngSeconds}"`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.pages {
  overflow: scroll;
}
.imgContainer {
  .imgDayItem {
    padding: 30rpx 30rpx 0;
    .imgTime {
      padding: 20rpx 0 20rpx 0;
      margin-bottom: 20rpx;
      background-color: rgb(249, 249, 249);
    }
    .imgGroup {
      // border: 2rpx solid red;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;

      .itemImg {
        width: 30%;
        border-radius: 25rpx;
        // border: 1rpx solid red;
        position: relative;
        margin-right: 35rpx;
        margin-bottom: 35rpx;
        &:nth-child(3n) {
          margin-right: 0rpx;
        }
        image {
          width: 100%;
          height: 200rpx;
          display: block;
        }
        .imgName {
          text-align: center;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
        }
        .removeImg {
          color: white;
          border-radius: 50%;
          background-color: red;
          width: 40rpx;
          height: 40rpx;
          line-height: 40rpx;
          text-align: center;
          position: absolute;
          top: -24rpx;
          right: -20rpx;
        }
      }
    }
  }
}

.cameraBtn {
  position: fixed;
  right: 40rpx;
  bottom: 50rpx;
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  z-index: 30;
}
#mycanvas {
  position: fixed;
  left: 9999rpx;
  // opacity: 0;
  // visibility: hidden;
  // opacity: 0;
}
</style>

