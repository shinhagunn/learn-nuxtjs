<template>
  <Auth>
    <AuthForm title="Đăng nhập MEXC" @submit.prevent="onSubmit" >
      <AuthInput v-model="email" type="email" placeholder="Email" :error="email_error">
        <template slot="prefix">
          <span class="label">Email:</span>
        </template>
      </AuthInput>
      <AuthInput v-model="password" type="password" placeholder="Password" :error="password_error">
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
import { Component, mixins as Mixins } from 'nuxt-property-decorator'
import { AuthMixins } from '~/mixins/auth_mixins'
import controllers from '@/controllers'

@Component({})
export default class Login extends Mixins(AuthMixins) {

  onSubmit() {
    this.login()
    if (!this.isError) {
      controllers.Login()
    }
  }
}
</script>
