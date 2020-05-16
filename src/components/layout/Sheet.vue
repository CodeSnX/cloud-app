<template>
  <div id="sheet">
    <van-swipe
      :autoplay="3000"
      class="swide"
    >
      <van-swipe-item
        v-for="(image, index) in images"
        :key="index"
      >
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>

    <div class="recom">
      <span>
        <router-link to="/sheet/:id">
          <van-button
            icon="calender-o"
            type="info"
            round
            color="red"
          />
          <p>每日推荐</p>
        </router-link>
      </span>
      <span>
        <router-link to="/">
          <van-button
            icon="calender-o"
            type="info"
            round
            color="red"
          />
          <p>歌单</p>
        </router-link>
      </span>
      <span>
        <router-link to="/lead">
          <van-button
            icon="calender-o"
            type="info"
            round
            color="red"
          />
          <p>排行榜</p>
        </router-link>
      </span>
      <span>
        <router-link to="/">
          <van-button
            icon="calender-o"
            type="info"
            round
            color="red"
          />
          <p>电台</p>
        </router-link>
      </span>
      <span>
        <router-link to="/">
          <van-button
            icon="calender-o"
            type="info"
            round
            color="red"
          />
          <p>直播</p>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "sheet",
  data() {
    return {
      images: []
    };
  },
  created() {
    this.getImg();
  },
  methods: {
    getImg() {
      this.axios({
        methods: "get",
        url: "/banner?type=2"
      }).then(res => {
        console.log(res);
        this.images = res.data.banners;
      });
    }
  },
  components: {}
};
</script>
<style scoped lang="scss">
#sheet {
  margin-top: 1rem;
}
.swide {
  width: 100%;
  height: 200px;
}
.recom {
  width: 100%;
  margin-top: 0.8rem;
  font-size: 0.5rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.recom span {
  margin-left: 1rem;
  width: 15%;
  display: inline-block;
}
.recom p {
  margin-left: 1rem;
}
</style>