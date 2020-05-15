<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="我的">
        <My />
      </van-tab>
      <van-tab title="发现">
        <sheet />
      </van-tab>
      <van-tab title="云村">内容 3</van-tab>
      <van-tab title="视频">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import sheet from "../../components/layout/Sheet.vue";
import My from "../../components/layout/My.vue";
export default {
  name: "Layout",
  data() {
    return {
      active: 1
    };
  },
  components: {
    sheet,
    My
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
</style>
