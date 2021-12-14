<template>
  <Auth>
    <AuthForm title="Chào mừng đăng ký MEXC" @submit.prevent="onSubmit">
      <AuthInput v-model="email" type="email" placeholder="Email" :error="e_email">
        <template slot="prefix">
          <span class="label">Email:</span>
        </template>
      </AuthInput>

      <AuthInput v-model="password" type="password" placeholder="Mật khẩu" :error="e_password">
        <template slot="prefix">
          <span class="label">Mật khẩu:</span>
        </template>
      </AuthInput>

      <AuthInput v-model="re_password" type="password" placeholder="Mật khẩu" :error="e_re_password">
        <template slot="prefix">
          <span class="label">Xác nhận mật khẩu:</span>
        </template>
      </AuthInput>

      <AuthInput
        v-model="verificationCode"
        type="text"
        placeholder="Mã xác minh"
        :error="e_verificationCode"
      >
        <template slot="prefix">
          <span class="label">Mã xác minh:</span>
        </template>
        <template slot="suffix">
          <AuthButton type="time">Nhận mã xác minh</AuthButton>
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

      <AuthCheckBox @handleChecked="checked = !checked"> 
        <template slot="checkbox-text">
          Tôi đã đọc và đồng ý với
          <nuxt-link to="">Thỏa thuận người dùng và Chính sách bảo mật.</nuxt-link>
        </template>
        <template slot="error">
          {{ e_checked }}
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
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Register extends Vue {
  email = ''
  password = ''
  re_password = ''
  verificationCode = ''
  introduceCode = ''
  checked = false;

  e_email = ''
  e_password = ''
  e_re_password = ''
  e_verificationCode = ''
  e_checked = ''

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

    if (this.re_password === '') {
      this.e_re_password = 'Vui lòng nhập mật khẩu xác nhận'
      kt = false
    } else if (this.password !== this.re_password) {
      this.e_re_password = 'Hai mật khẩu không giống nhau'
      kt = false
    } else {
      this.e_re_password = ''
    }

    if (this.verificationCode === '') {
      this.e_verificationCode = 'Vui lòng nhập mã xác minh'
      kt = false
    } else {
      this.e_verificationCode = ''
    }

    if (!this.checked) {
      this.e_checked = 'Vui lòng kiểm tra chính sách người dùng và thỏa thuận bảo mật'
      kt = false
    } else {
      this.e_checked = ''
    }

    if (kt) {
      this.$router.push('/login')
    }
  }
}
</script>
