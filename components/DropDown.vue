<template>
  <div class="dropdown" @mouseover="show = true" @mouseleave="show = false">
    <div class="dropdown-value">
      <slot name="value"/>
      <div class="dropdown-value-suffix">
        <slot name="suffix" />
      </div>
    </div>
    <transition name="drop-down">
      <div
        v-if="show"
        :class="['dropdown-select', `dropdown-select-${position}`]"
      >
        <slot name="select" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class DropDown extends Vue {
  @Prop({ default: 'left' }) readonly position!: string // left, center, right

  show = false
}
</script>

<style lang="less">
.dropdown {
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 8px;
    background-color: transparent;
  }

  &-value {
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    border-collapse: collapse;
    z-index: 1;
    
    &-suffix {
      margin-left: 4px;
      font-size: 10px;
      transition: all 0.2s;
    }
  }

  &:hover &-value-suffix {
    transform: rotate(180deg);
  }

  &-select {
    opacity: 1;
    position: absolute;
    top: 100%;
    margin: 8px 0;
    min-width: 150px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(43, 43, 43, 0.15);
    transition: all 0.15s;
    z-index: 999;

    &-left {
      left: 0;
    }

    &-right {
      right: 0;
    }

    &-center {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .drop-down {
    &-enter,
    &-leave-active {
      opacity: 0;
      transform: translateY(-5px);
    }
  }
}
</style>
