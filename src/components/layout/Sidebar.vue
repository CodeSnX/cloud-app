<template>
  <div>
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
  name: "Sidebar",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
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
  computed: {}
};
</script>

<style scoped lang="scss">
</style>
