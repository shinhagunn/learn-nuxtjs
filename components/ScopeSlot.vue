<template>
  <span>
    <slot>last name</slot>
  </span>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class ScopeSlot extends Vue {}
</script>
