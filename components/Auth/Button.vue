<template>
  <BButton
    class='auth-button'
    :loading="loading"
    :disabled="disabled"
    :type="type"
    @click="$emit('click', $event)"
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
}
</script>

<style lang="less">
.auth-button {
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
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
</style>
