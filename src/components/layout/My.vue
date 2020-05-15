<template>
  <div>
    <van-cell-group class="header">
      <van-cell title="头像">
        <van-image
          width="35"
          height="35"
          :src="personal.avatarUrl"
        />
      </van-cell>
      <van-cell
        title="昵称"
        :value="personal.nickname"
      />
      <van-cell
        title="性别"
        :value="value"
      />
      <van-cell
        title="生日"
        :value="personal.birthday"
      />
      <van-cell
        title="地区"
        :value="personal.city"
      />
      <van-cell
        title="大学"
        value="南京工业职业技术学院"
      />
      <van-cell
        title="签名"
        :value="personal.signature"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "My",
  data() {
    return {
      show: false,
      account: JSON.parse(localStorage.getItem("account")),
      user: {},
      personal: {
        gender: 0,
        signature: "",
        city: 0,
        nickname: "",
        birthday: "",
        avatarUrl: "0"
      },
      value: "",
      columns: ["保密", "男", "女"]
    };
  },
  components: {},
  created() {
    this.getAccount();
  },
  mounted() {},
  methods: {
    showPopup() {
      this.show = true;
    },
    getAccount() {
      this.axios({
        method: "get",
        url: "http://localhost:3000/user/detail?uid=" + this.account.id
      }).then(res => {
        console.log(res.data);
        this.user = res.data.profile;
        this.personal.gender = this.user.gender;
        this.personal.signature = this.user.signature;
        this.personal.city = this.user.city;
        this.personal.nickname = this.user.nickname;
        this.personal.birthday = this.user.birthday;
        this.personal.avatarUrl = this.user.avatarUrl;
        this.gender();
      });
    },
    gender() {
      if (this.personal.gender == 0) {
        this.value = "保密";
      } else if (this.personal.gender == 1) {
        this.value = "男";
      } else this.value = "女";
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.header {
  margin-top: 1rem;
}
</style>
