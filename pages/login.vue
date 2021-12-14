<template>
  <Auth>
    <AuthForm title="Đăng nhập MEXC" @submit.prevent="onSubmit" >
      <AuthInput v-model="email" type="email" placeholder="Email" :error="e_email">
        <template slot="prefix">
          <span class="label">Email:</span>
        </template>
      </AuthInput>
      <AuthInput v-model="password" type="password" placeholder="Password" :error="e_password">
        <template slot="prefix">
          <span class="label">Mật khẩu:</span>
        </template>
      </AuthInput>
      <AuthButton type="submit">
        Đăng nhập
      </AuthButton>

      <AuthLinks>
        <nuxt-link to="/forgotPassword">Quên mật khẩu</nuxt-link>
        <nuxt-link to="/register">Đăng ký</nuxt-link>
      </AuthLinks>
    </AuthForm>
  </Auth>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class Login extends Vue {
  email = '';
  password = '';

  e_email = '';
  e_password = '';

  onSubmit() {
    let kt = true
    if (this.email === '') {
      this.e_email = 'Vui lòng nhập E-mail'
      kt = false
    } else {
      this.e_email = ''
    }

    if (this.password === '') {
      this.e_password = 'Vui lòng nhập mật khẩu'
      kt = false
    } else {
      this.e_password = ''
    }

    if(kt) {
      console.log('Đăng nhập thành công !');
    }
  }
}
</script>
