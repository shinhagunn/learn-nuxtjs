<template>
  <div class="b-input" >
    <div v-if="$slots['prefix']" class="b-input-prefix">
      <slot name="prefix" />
    </div>
    <input
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
    <div v-if="$slots['suffix']" class="b-input-suffix">
      <slot name="suffix" />
    </div>
    <!-- <span class="border"></span> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class BInput extends Vue {
  @Prop() readonly value!: string
  @Prop({ default: 'text' }) readonly type!: string
  @Prop() readonly placeholder!: string
  @Prop() readonly disabled!: boolean
}
</script>

<style lang="less">
.b-input {
  &:focus {
    outline: none;
  }

  &-prefix {
    margin-right: 18px;
    min-width: 70px;
    font-size: 15px;
  }

  &-suffix {
    font-size: 12px;
    color: #ccc;
  }
}
</style>
