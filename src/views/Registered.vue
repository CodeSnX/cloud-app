<template>
  <div>
    <h3 class="header">网易云音乐注册</h3>
    <van-form>
      <van-field
        v-model="username"
        required
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        required
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="phone"
        required
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
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
  name: "Registered",
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      sms: ""
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    onSubmit() {
      this.axios({
        methods: "get",
        url: "/captcha/verify?phone=" + this.phone + "&captcha=" + this.sms
      }).then(res => {
        console.log(res);
        this.axios({
          methods: "get",
          url:
            "/register/cellphone?phone=" +
            this.phone +
            "&password=" +
            this.password +
            "&captcha=" +
            this.sms +
            "&nickname=" +
            this.username
        }).then(result => {
          console.log(result);
          this.$notify({ type: "success", message: "注册成功" });
          this.$router.push("/login");
        });
      });
    },
    refresh() {
      this.axios({
        methods: "get",
        url: "/captcha/sent?phone=" + this.phone,
        xhrFields: { withCredentials: true }
      });
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.header {
  margin-left: 0.5rem;
}
</style>
