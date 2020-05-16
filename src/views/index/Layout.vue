<template>
  <div>
    <van-nav-bar
      title="云音乐"
      left-arrow
    >
      <template #left>
        <van-icon
          name="bars"
          @click="showPopup"
          size="18"
        />
      </template>
      <template #right>
        <van-icon
          name="search"
          size="18"
        />
      </template>
    </van-nav-bar>
    <van-popup
      v-model="show"
      position="left"
      :style="{ height: '100%',width: '80%' }"
    >
      <Sidebar />
    </van-popup>

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
import Sidebar from "../../components/layout/Sidebar.vue";
export default {
  name: "Layout",
  data() {
    return {
      active: 1,
      show: false
    };
  },
  components: {
    sheet,
    My,
    Sidebar
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
  },
  mounted() {},
  methods: {
    showPopup() {
      this.show = true;
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
