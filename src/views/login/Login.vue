<template>
  <div class="log">
    <h3 class="header">网易云音乐</h3>
    <van-form
      class="login"
      ref="form"
    >
      <van-field
        v-model="tel"
        type="tel"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '手机号不能为空' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div>
        <span class="forget">
          <router-link to="">忘记密码</router-link>
        </span>
        <span class="registered">
          <router-link to="/regis">没有帐号，注册新用户</router-link>
        </span>
      </div>
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          @click="onSubmit"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      tel: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      this.axios({
        methods: "get",
        url: "/login/cellphone?phone=" + this.tel + "&password=" + this.password
      }).then(result => {
        console.log(result.data);
        if (result.data.code == 200) {
          let data = result.data;
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("account", JSON.stringify(data.account));
          this.$notify({ type: "success", message: "登录成功" });
          this.$router.push("/");
        } else if (result.data.code == 502) {
          this.$notify({ type: "warning", message: "密码错误" });
        } else {
          alert("登录失败");
        }
      });
    }
  },
  components: {},
  created() {},
  mounted() {},
  computed: {}
};
</script>

<style scoped lang="scss">
.header {
  font-size: 2rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: red;
  text-align: center;
  margin-top: 5rem;
}
.login {
  margin-top: 5rem;
}
.forget {
  color: rgb(93, 93, 187);
  margin-left: 1rem;
}
.registered {
  color: rgb(93, 93, 187);
  margin-left: 6rem;
}
</style>
