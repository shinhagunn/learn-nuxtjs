<template>
  <div class="auth-input-container">
    <BInput
      :class="['auth-input', { 'auth-input-showerror': error !== '', 'auth-input-focused': focused }]"
      :value="value"
      :type="htmlInputType"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="(value) => $emit('input', value)"
      @focus="focused = true"
      @blur="focused = false"
    >
      <template v-if="$slots['prefix']" slot="prefix">
        <slot name="prefix" />
      </template>
      <template v-if="type === 'password'" slot="suffix">
        <span v-if="!show_password" @click="show_password = !show_password">
          <i class="far fa-eye-slash"></i>
        </span>
        <span v-else @click="show_password = !show_password">
          <i class="far fa-eye"></i>
        </span>
      </template>
      <template v-else-if="$slots['suffix']" slot="suffix">
        <slot name="suffix" />
      </template>
    </BInput>
    <span class="auth-input-error">
      {{ error }}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class AuthInput extends Vue {
  @Prop() readonly value!: string
  @Prop() readonly type!: string
  @Prop() readonly placeholder!: string
  @Prop() readonly disabled!: boolean
  @Prop({ default: '' }) readonly error!: string

  show_password = false
  focused = false;

  get htmlInputType() {
    if (this.show_password) return 'text'

    return this.type
  }
}
</script>

<style lang="less">
.auth-input {
  position: relative;
  display: flex;
  height: 50px;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #eee;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background-color: #00af90;
    transform: scaleX(0);
    transform-origin: center;
    transition: all 0.15s ease;
  }

  &-focused::after {
    transform: scaleX(1);
  }

  &-showerror {
    border-bottom: 1px solid #df384e;

    .border {
      background-color: #df384e !important;
    }
  }

  &-container {
    position: relative;

    input {
      flex: 1;
      margin-right: 8px;
      width: 100px;
      font-size: 15px;
      border: none;

      &:focus {
        outline: none;
      }
    }
  }

  &-error {
    display: block;
    height: 18px;
    padding-top: 6px;
    text-align: center;
    font-size: 12px;
    color: #df384e;
  }
}
</style>
