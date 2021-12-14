<template>
  <Auth>
    <AuthForm v-if="!exist_email" title="Đặt lại mật khẩu đăng nhập" @submit.prevent="onSubmit" >
      <AuthInput v-model="email" type="email" placeholder="Email" :error="e_email">
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
      <AuthInput type="email" placeholder="Vui lòng nhập mã xác nhận E-mail" :error="e_email">
        <template slot="suffix">
          <AuthButton type="time">Nhận mã xác minh</AuthButton>
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
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class Login extends Vue {
  email = '';
  e_email = '';

  exist_email = false;

  onSubmit() {
    let kt = true
    if (this.email === '') {
      this.e_email = 'Vui lòng nhập E-mail cần đặt lại mật khẩu'
      kt = false
    } else {
      this.e_email = ''
    }

    if(kt) {
      this.exist_email = true;
    }
  }
}
</script>
