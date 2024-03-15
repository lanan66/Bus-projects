<template>
  <view class="container">
    <!-- 头部导航栏 -->
    <view class="scroll-con">
      <scroll-view class="scroll-box" scroll-x="true" @scroll="scroll">
        <view class="scroll-item" :class="current == index? 'move':''" v-for="(item,index) in chooseitems" :key="item.id"
          @click="onchange(index)">
          {{item.text}}
        </view>
      </scroll-view>
      <view class="mask"></view>
    </view>
    <view class="content">
      <view class="content-item" v-show="current == 0">
          <view class="item" v-for="(item,index) in noticeList" :key="item.id">
            <noticeItem :noticeitem="item"></noticeItem>
          </view>
      </view>
 <!--     <view class="content-item" v-show="current == 1">
        1
      </view> -->
    </view>
  </view>
</template>

<script>
  import noticeItem from "/components/noticeItem/noticeItem.vue";
  export default {
    data() {
      return {
        current: 0,
        chooseitems: [{
            id: 1,
            text: '全部'
          },
          {
            id: 2,
            text: '整改'
          },
          {
            id: 3,
            text: '临检'
          },
          {
            id: 4,
            text: '超时'
          }
        ],
        noticeList:[
          {
            id:1,
            title:"整改通知标题",
            projectname:"项目名称",
            routename:"路线名称",
            cleaner:"张芬芳",
            time:"2023-12-23 12:22:22",
            kind:0
          },
          {
            id:2,
            title:"整改通知标题",
            projectname:"项目名称",
            routename:"路线名称",
            cleaner:"张芬芳",
            time:"2023-12-23 12:22:22",
            kind:1
          },
          {
            id:3,
            title:"整改通知标题",
            projectname:"项目名称",
            routename:"路线名称",
            cleaner:"张芬芳",
            time:"2023-12-23 12:22:22",
            kind:2
          }
        ],
      }
    },
    methods: {
      onchange(index) {
        this.current = index
      },
    },
    components: {
      noticeItem
    }
  }
</script>

<style scoped>
.container {
  padding: 32rpx 24rpx;
  min-height: 100vh;
  background-color: #FAFAFA;
}
.move {
    background: url("../../static/image/index_pages/item-bg.png") no-repeat;
    background-position: center;
    background-size: contain;
  }
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
  .item {
    margin-bottom: 24rpx;
  }
</style>
