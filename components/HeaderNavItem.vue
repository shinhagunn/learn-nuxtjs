<template>
  <div class="header-nav-item">
    <div class="header-nav-item-icon">
      <slot name="icon" />
    </div>
    <div class="header-nav-item-text">
      <div class="header-nav-item-text-title">
        <slot name="title"></slot>
      </div>
      <div class="header-nav-item-text-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class HeaderNavItem extends Vue {}
</script>

<style lang="less">
.header-nav-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  padding: 8px;
  width: 280px;
  line-height: normal;

  &-icon i{
    text-align: center;
    width: 24px;
    font-size: 24px;
    color: #5A4C9D;
  }

  &-text {
    margin-left: 12px;
    color: #fff;
    &-content {
      font-size: 12px;
      color: #919B90;
    }
  }

  &:hover {
    background-color: #373949;
    border-radius: 4px;
  }
}
</style>
