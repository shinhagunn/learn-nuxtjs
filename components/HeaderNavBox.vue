<template>
  <div class="header-nav-box">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class HeaderNavBox  extends Vue {}
</script>

<style lang="less">
.header-nav-box {
  display: flex;
  padding: 14px 20px;
  background-color: #282a36;
}
</style>
