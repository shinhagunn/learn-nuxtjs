<template>
  <button
    class="b-button"
    :loading="loading"
    :disabled="disabled"
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
  @Prop() readonly disabled!: boolean
  @Prop() readonly type!: string
}
</script>
