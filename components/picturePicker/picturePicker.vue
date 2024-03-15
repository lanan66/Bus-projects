<template>
  <view class="picker-con">
    <view class="item">
      <view class="picker-choose" @click="chooseImage">
        <image src="/static/image/clean_pages/camera.png" mode=""></image>
      </view>
    </view>
    <view class="item" v-for="(item,index) in images" :key="index">
      <image :src="item[0]" mode=""></image>
      <view class="delate" @click="deleteimg(index)">
        <image src="/static/image/clean_pages/delete.png" mode=""></image>
      </view>
    </view>
    <!-- <test></test> -->
  </view>
</template>

<script>
  // import test from "/components/test/test.vue"
  export default {
    name: "picturePicker",
    data() {
      return {
        images: [] // 存储选择的图片路径
      };
    },
    components: {
      // test
    },
    methods: {
      chooseImage() {
        uni.chooseImage({
          count: 1, // 图片数量，这里设置为6
          sizeType: ['original', 'compressed'], // 指定选择的图片类型，可以选择原图和压缩图，这里设置为二者都有
          sourceType: ['album', 'camera'], // 指定选择图片的来源，这里设置为相册和相机
          success: (res) => {
            this.images.push(res.tempFilePaths);
            console.log(this.images)
          },
          fail: (err) => {
            console.log('选择图片失败', err);
          }
        });
      },
      deleteimg(index) {
        this.images.splice(index,1)
        console.log(this.images)
      },
    }
  }
</script>

<style scoped>
  .picker-con {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .picker-choose {
    width: 200rpx;
    height: 200rpx;
    border-radius: 16rpx;
  }

  .picker-choose image {
    width: 100%;
    height: 100%;
  }

  .image-list {
    display: flex;
    align-items: center;
  }

  .item {
    position: relative;
    width: 200rpx;
    height: 200rpx;
    margin-right: 26rpx;
    margin-top: 26rpx;
  }

  .item:nth-child(3n+3) {
    margin-right: 0;
  }

  .item image {
    width: 100%;
    height: 100%;
  }

  .delate {
    position: absolute;
    right: -16rpx;
    top: -16rpx;
    width: 32rpx;
    height: 32rpx;
  }

  .delate image {
    width: 100%;
    height: 100%;
  }
</style>
