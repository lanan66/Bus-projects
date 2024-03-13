<template>
  <view class="content">
    <view class="add" @click="getposition">
      获取定位
    </view>
    当前的定位是:{{position}}
    <map name="map"></map>
    <view @click="lick">
      顶级
    </view>
  </view>
</template>

<script>
  import QQMapWX from "../../common/qqmap-wx-jssdk.js"
  export default {
    data() {
      return {
        title: 'Hello',
        position:''
      }
    },
    
    async onLoad() {
    	// const location = await this.getLocationInfo();
    	// this.position = location.address
    },
    methods: {
      lick() {
        wx.showModal({
          title: '提示',
          content: '这是一个模态弹窗',
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      },
      async getposition() {
        const location = await this.getLocationInfo()
        console.log("lo",location)
        this.position = location.formatted_addresses
        console.log("po",this.position)
      },
      async getLocationInfo() {
        console.log("11")
        return new Promise((resolve) => {
          //位置信息默认数据
          let location = {
            longitude: 0,
            latitude: 0,
            province: "",
            city: "",
            area: "",
            street: "",
            address: "",
            formatted_addresses:""
          };
          // 使用uni.getLocation获取经纬度
          uni.getLocation({
            type: "gcj02",
            isHighAccuracy: true,
            success(res) {
              location.longitude = res.longitude;
              location.latitude = res.latitude;
              // 腾讯地图Api
              const qqmapsdk = new QQMapWX({
                key: 'ONXBZ-6G2L3-7OT3O-ODZDC-K35HK-5KBF5' //这里填写自己申请的key
              });
              // 使用腾讯的逆地址解析
              qqmapsdk.reverseGeocoder({
                location,
                success(response) {
                  console.log("成功！",response.result)
                  let info = response.result;
                  console.log(info);
                  location.province = info.address_component.province;
                  location.city = info.address_component.city;
                  location.area = info.address_component.district;
                  location.street = info.address_component.street;
                  location.address = info.address;
                  location.formatted_addresses = info.formatted_addresses.standard_address
                  resolve(location);
                },
              });
            },
            fail(err) {
              console.log(err)
              resolve(location);
            },
          });
        });
      }
    }
  }
</script>

<style scoped>
  .add {
    width: 50px;
    height: 50px;
    background-color: aqua;
  }
</style>
