<template>
  <div id="sheet">
    <div class="title">全部歌单</div>
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
    return {};
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
  }
};
</script>
<style scoped>
.title {
  font-size: 1rem;
  border-left: 4px solid red;
  margin: 1rem;
}
/* 歌单 */
.wrap {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.list {
  width: 50%;
}
.img {
  position: relative;
}
.img img {
  width: 9rem;
  margin: 0.6rem;
}
/* 描述 */
.describe {
  font-size: 0.01rem;
  color: rgb(40, 46, 46);
  text-shadow: 0 5px 5px red;
}
/* 播放量 */
.count {
  font-size: 0.5rem;
  position: absolute;
  right: 20px;
  top: 10px;
  color: #ffffff;
}
</style>