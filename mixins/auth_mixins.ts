import { Component, Vue } from 'nuxt-property-decorator'
@Component({})
export class AuthMixins extends Vue {
  isError = false

  email = ''
  password = ''
  confirm_password = ''
  verificationCode = ''
  introduceCode = ''
  checkbox = false

  email_error = ''
  password_error = ''
  verificationCode_error = ''
  checkbox_error = ''
  confirm_password_error = ''

  handleError() {
    if (this.email.length === 0) {
      this.email_error = 'Vui lòng nhập email'
    } else this.email_error = ''

    if (this.password.length === 0) {
      this.password_error = 'Vui lòng nhập mật khẩu'
    } else this.password_error = ''

    if (this.confirm_password.length === 0) {
      this.confirm_password_error = 'Vui lòng nhập mật khẩu xác nhận'
    } else if (this.password !== this.confirm_password) {
      this.confirm_password_error = 'Hai mật khẩu không giống nhau'
    } else this.confirm_password_error = ''

    if (this.verificationCode.length === 0) {
      this.verificationCode_error = 'Vui lòng nhập mã xác minh'
    } else this.verificationCode_error = ''

    if (!this.checkbox) {
      this.checkbox_error =
        'Vui lòng kiểm tra chính sách người dùng và thỏa thuận bảo mật'
    } else this.checkbox_error = ''
  }

  login() {
    this.handleError()
    if (this.email_error.length === 0 && this.password_error.length === 0) {
      this.isError = false
    } else {
      this.isError = true
    }
  }

  register() {
    this.handleError()
    if (
      this.email_error.length === 0 &&
      this.password_error.length === 0 &&
      this.confirm_password_error.length === 0 &&
      this.verificationCode_error.length === 0 &&
      this.checkbox_error.length === 0
    ) {
      this.isError = false
    } else {
      this.isError = true
    }
  }

  fogotPassword() {
    this.handleError()
    if (this.email_error.length === 0) {
      this.isError = false
    } else {
      this.isError = true
    }
  }
}
