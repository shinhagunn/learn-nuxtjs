<template>
  <button
    v-if="type === 'time'"
    :class="['b-button-time', { 'b-button-disabled': isDisabled }]"
    :disabled="isDisabled"
    @click="startDelay"
  >
    {{ isDelaying ? `Nhận lại mã ( ${remaining_time}s )` : value }}
  </button>
  <button
    v-else
    class="b-button"
    :loading="loading"
    :disabled="isDisabled"
    :type="type"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class BButton extends Vue {
  @Prop() readonly loading!: boolean
  @Prop({ default: false }) readonly disabled!: boolean
  @Prop() readonly type!: string
  @Prop() readonly set_timing!: number
  @Prop() readonly value!: string

  remaining_time = 0
  interval_time: any

  isDisabled = this.disabled;

  get isDelaying() {
    return this.remaining_time > 0
  }

  beforeDestroy() {
    clearInterval(this.interval_time)
  }

  startDelay() {
    try {
      // payload API
      this.isDisabled = true
      const random = Math.round(Math.random() * (999999 - 100000) + 100000)
      console.log(random)

      this.remaining_time = this.set_timing
      this.interval_time = setInterval(() => {
        this.remaining_time--
        if (this.remaining_time === 0) {
          clearInterval(this.interval_time)
          this.isDisabled = false
        }
      }, 1000)
    } catch (error) {
      return error
    }
  }
}
</script>

<style lang="less">
.b-button {
  &-time {
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    color: #16b979;
    border: none;
    background-color: #fff;
  }

  &-disabled {
    cursor: auto;
    color: #aaa;
  }
}
</style>
