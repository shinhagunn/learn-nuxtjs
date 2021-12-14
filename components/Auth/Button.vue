<template>
  <BButton
    :class="[
      'auth-button',
      {
        'auth-button-submit': type === 'submit',
        'auth-button-time': type === 'time',
      },
    ]"
    :loading="loading"
    :disabled="disabled"
    :type="type"
    @click="handleClick"
  >
    <slot />
  </BButton>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class AuthButton extends Vue {
  @Prop() readonly loading!: boolean
  @Prop() readonly disabled!: boolean
  @Prop() readonly type!: string

  time = 10
  countTime: any

  handleClick($event: any) {
    if (this.type === 'time') {
      $event.target.style.color = '#aaa'
      $event.target.style.cursor = 'auto'
      $event.target.setAttribute('disabled', true)

      const random = Math.round(Math.random() * (999999 - 100000) + 100000)
      console.log(random)
      $event.target.innerHTML = `Nhận lại mã ( ${this.time}s )`
      this.countTime = setInterval(() => {
        this.time--
        $event.target.innerHTML = `Nhận lại mã ( ${this.time}s )`
        if (this.time === -1) {
          clearInterval(this.countTime)
          $event.target.innerHTML = 'Nhận mã xác minh'
          this.time = 10
          $event.target.style.color = '#16b979'
          $event.target.style.cursor = 'pointer'
          $event.target.removeAttribute('disabled')
        }
      }, 1000)
    } else {
      this.$emit('click', $event)
    }
  }
}
</script>

<style lang="less">
.auth-button {
  margin-top: 10px;
  margin-bottom: 10px;

  &-submit {
    cursor: pointer;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 4px;
    font-size: 15px;
    color: #fff;
    background: #02c6a3;
    background-image: linear-gradient(262.56deg, #02c6a3, #00ab8c 98.48%);

    &:hover {
      background: #02c6a3;
      background-image: none;
    }
  }

  &-time {
    cursor: pointer;
    font-weight: bold;
    color: #16b979;
    background-color: #fff;
    border: none;
  }
}
</style>
