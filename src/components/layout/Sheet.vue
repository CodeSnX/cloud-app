<template>
  <div id="sheet">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <div class="recom">
      <router-link to="/sheet/:id">
        <van-button
          icon="calender-o"
          type="info"
          round
          color="red"
        />
        <p>每日推荐</p>
      </router-link>
    </div>
    <van-image
      round
      width="5rem"
      height="5rem"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
      @click="logout"
    />
  </div>
</template>

<script>
export default {
  name: "sheet",
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  methods: {
    logout() {
      alert("退出登录");
      this.axios({
        methods: "get",
        url: "/logout"
      }).then(res => {
        console.log(res);
        localStorage.removeItem("token");
        this.$router.push("/login");
      });
    }
  },
  components: {}
};
</script>
<style scoped>
#sheet {
  margin-top: 1rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.recom p {
  margin-left: 0.3rem;
  font-size: 0.5rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>