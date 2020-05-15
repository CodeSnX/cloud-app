<template>
  <div class="song">
    <van-row
      type="flex"
      justify="space-between"
    >
      <van-col span="18">
        <div class="play">
          <span>每日歌单</span>
          <span>多选</span>
        </div>
      </van-col>
      <van-col span="6">
        <van-icon name="bar-chart-o" />
      </van-col>
    </van-row>

    <div
      class="list"
      v-for="(item,index) in song"
      :key="index"
    >
      <div class="id">{{index+1}}</div>

      <div
        class="dansong"
        @click="playaudio(item.id)"
      >
        <audio
          class="audio"
          :src="audio.url"
        ></audio>
        <div class="name">{{item.al.name}}</div>
        <div class="songer">{{item.ar[0].name}}</div>
      </div>
      <van-icon name="ellipsis" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      account: JSON.parse(localStorage.getItem("account")),
      details: [],
      song: [],
      audio: [],
      key: 0
    };
  },
  components: {},
  created() {
    this.axios({
      methods: "get",
      url: "/recommend/resource"
    }).then(res => {
      console.log(res);
      this.details = res.data.playlist;
      this.song = res.data.playlist.tracks;
    });
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
</style>
