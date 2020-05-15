<template>
  <div id="appheader">
    <div class="flex">
      <div class="icon">
        <van-icon name="wap-nav" />
      </div>
      <div class="wrap">
        <van-row>
          <van-col span="6">我的</van-col>
          <router-link to="/sheet">
            <van-col span="6">发现</van-col>
          </router-link>
          <van-col span="6">云村</van-col>
          <van-col span="6">视频</van-col>
        </van-row>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "appheader",
  data() {
    return {
      active: 1
    };
  }
};
</script>
<style scoped>
#appheader {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-around;
}
.icon {
  flex: 2;
}
.wrap {
}
.icon i {
  margin-top: 2rem;
  margin-left: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>