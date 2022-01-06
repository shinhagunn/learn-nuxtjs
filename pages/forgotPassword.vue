<template>
  <Auth>
    <AuthForm v-if="!exist_email" title="Đặt lại mật khẩu đăng nhập" @submit.prevent="onSubmit" >
      <AuthInput v-model="email" type="email" placeholder="Email" :error="email_error">
        <template slot="prefix">
          <span class="label">Email:</span>
        </template>
      </AuthInput>
      <AuthButton type="submit">
        Xác nhận
      </AuthButton>

      Rút tiền sẽ bị tạm dừng trong vòng 24h sau khi đặt lại mật khẩu đăng nhâp.
    </AuthForm>

    <AuthForm v-else title="Đặt lại mật khẩu đăng nhập" @submit.prevent="onSubmit" >
      <AuthInput type="email" placeholder="Vui lòng nhập mã xác nhận E-mail">
        <template slot="suffix">
          <BButton type="time" :set_timing="10" value="Nhận mã xác nhận" />
        </template>
      </AuthInput>
      <AuthButton type="submit">
        Xác nhận
      </AuthButton>

      <AuthLinks :number="1">
        Mục bảo mật hiện tại không khả dụng? <nuxt-link to="/login">Liên hệ với dịch vụ chăm sóc khách hàng</nuxt-link>
      </AuthLinks>
    </AuthForm>
  </Auth>
</template>

<script lang="ts">
import { Component, mixins as Mixins } from 'nuxt-property-decorator'
import { AuthMixins } from '~/mixins/auth_mixins'

@Component({})
export default class Login extends Mixins(AuthMixins) {

  exist_email = false;

  onSubmit() {
    this.fogotPassword()
    if (!this.isError) {
      this.exist_email = true;
    }
  }
}
</script>