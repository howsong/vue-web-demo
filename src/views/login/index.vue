<!--
* @description 登录页面
* @fileName Login.vue
* @author howsong
* @date 2020/10/26 19:21:26
!-->
<template>
  <div class="login_wrapper page_wrapper">
    <el-form
      ref="loginForm"
      :model="formdata"
      :rules="rules"
      class="login_form"
      autocomplete="on"
      label-position="left"
    >
      <h3 class="login_title">Vue Demos</h3>

      <el-form-item prop="account">
        <el-input
          ref="username"
          v-model="formdata.account"
          placeholder="账号"
          type="text"
          autocomplete="on"
        >
          <i slot="prefix" class="el-icon-user-solid"></i>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          :key="passwordType"
          v-model="formdata.password"
          :type="isHidePassword ? 'password' : ''"
          placeholder="密码"
          autocomplete="on"
        >
          <i slot="prefix" class="el-icon-user-solid"></i>
          <i slot="suffix" class="el-icon-view" @click="changeHide(!isHidePassword)"></i>
        </el-input>
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleLogin"
        >登陆</el-button
      >
      <div class="else_login_wrapper">
        第三方登录方式：
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'
import { Form, FormItem, Button, Icon, Input } from 'element-ui'
import { namespace } from 'vuex-class'
import { ACTIONS } from '@/store/modules/user'
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Input)
const userModule = namespace('user')
@Component
export default class Login extends Vue {
  @Ref() loginForm!: Form
  @userModule.Action(ACTIONS.LOGIN) login!: Function
  private formdata = {
    account: 'admin',
    password: '111111'
  }
  private rules = {
    account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
  }
  private loading = false
  private capsTooltip = false
  private showDialog = false
  private isHidePassword = true
  private passwordType = 'password'
  private changeHide(v: boolean) {
    this.isHidePassword = v
  }
  private handleLogin() {
    this.loginForm.validate(valid => {
      if (valid) {
        this.login(this.formdata)
      }
    })
  }
}
</script>

<style scoped lang="scss">
.login_wrapper {
  background-color: #2d3a4b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('../../assets/images/login_bg.jpg');
}
.login_form {
  padding: 24px 24px 10px 24px;
  box-sizing: border-box;
  width: 500px;
  .login_title {
    margin-bottom: 20px;
    color: #fff;
  }
}
.else_login_wrapper {
  color: #fff;
  font-size: 12px;
}
</style>
