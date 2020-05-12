<template>
  <div class="log">
    <h3 class="header">网易云音乐</h3>
    <van-form
      class="login"
      ref="form"
    >
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button
            size="small"
            type="primary"
            @click="refresh"
          >发送验证码</van-button>
        </template>
      </van-field>
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
      username: "",
      password: "",
      sms: ""
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then(result => {
        console.log("form valid: ", result);
        this.axios({
          method: "post",
          url: "http://localhost:8023/sysAdmin/login",
          data: {
            name: this.username,
            password: this.password,
            verifyCode: this.sms
          }
        }).then(res => {
          if (res.data.code === 1) {
            //存token
            localStorage.setItem("token", res.data.data.token);
            this.$router.push("/sheet");
          } else {
            //登录失败
            alert(res.data.msg);
            //清空验证码文本框
            this.verifyCode = "";
          }
        });
      });
    },
    refresh() {
      this.axios({
        method: "get",
        url: "http://localhost:8023/captcha",
        // 2、将请求数据转换为form-data格式
        params: {
          name: this.username
        },
        // 3、设置请求头Content-Type
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        responseType: "blob"
      }).then(res => {
        this.sms = res.data.verifyCode;
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
.log {
}
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
</style>
