<template>
  <Auth>
    <AuthForm title="Chào mừng đăng ký MEXC" @submit.prevent="onSubmit">
      <AuthInput
        v-model="email"
        type="email"
        placeholder="Email"
        :error="email_error"
      >
        <template slot="prefix">
          <span class="label">Email:</span>
        </template>
      </AuthInput>

      <AuthInput
        v-model="password"
        type="password"
        placeholder="Mật khẩu"
        :error="password_error"
      >
        <template slot="prefix">
          <span class="label">Mật khẩu:</span>
        </template>
      </AuthInput>

      <AuthInput
        v-model="confirm_password"
        type="password"
        placeholder="Mật khẩu"
        :error="confirm_password_error"
      >
        <template slot="prefix">
          <span class="label">Xác nhận mật khẩu:</span>
        </template>
      </AuthInput>

      <AuthInput
        v-model="verificationCode"
        type="text"
        placeholder="Mã xác minh"
        :error="verificationCode_error"
      >
        <template slot="prefix">
          <span class="label">Mã xác minh:</span>
        </template>
        <template slot="suffix">
          <BButton type="time" :set_timing="10" value="Nhận mã xác minh" />
        </template>
      </AuthInput>

      <AuthInput
        v-model="introduceCode"
        type="text"
        placeholder="Mã giới thiệu"
      >
        <template slot="prefix">
          <span class="label">Mã giới thiệu:</span>
        </template>
      </AuthInput>

      <AuthCheckBox @handleChecked="checkbox = !checkbox">
        <template slot="checkbox-text">
          Tôi đã đọc và đồng ý với
          <nuxt-link to=""
            >Thỏa thuận người dùng và Chính sách bảo mật.</nuxt-link
          >
        </template>
        <template slot="error">
          {{ checkbox_error }}
        </template>
      </AuthCheckBox>

      <AuthButton type="submit"> Đăng ký </AuthButton>

      <AuthLinks :number="1">
        Tài khoản đã tồn tại.<nuxt-link to="/login">Đăng nhập ngay</nuxt-link>
      </AuthLinks>
    </AuthForm>
  </Auth>
</template>

<script lang="ts">
import { Component, mixins as Mixins } from 'nuxt-property-decorator'
import { AuthMixins } from '~/mixins/auth_mixins'

@Component({})
export default class Register extends Mixins(AuthMixins) {

  onSubmit() {
    this.register();
    if (!this.isError) {
      this.$router.push('/login')
    }
  }
}
</script>
