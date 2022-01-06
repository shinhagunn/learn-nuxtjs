<template>
  <div v-if="type === 'scroll'" class="header-nav-list">
    <span v-if="title != ''" class="header-nav-list-title">
      {{ title }}
    </span>
    <div class="header-nav-list-box">
      <div v-for="item in data" :key="item.id" class="header-nav-list-item">
        {{ item }}
      </div>
    </div>
  </div>
  <div v-else class="header-nav-list">
    <span v-if="title != ''" class="header-nav-list-title">
      {{ title }}
    </span>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"

@Component({})
export default class HeaderNavList extends Vue {
  @Prop({ default: '' }) readonly title!: string;
  @Prop() readonly type!: string; // scroll, show
  @Prop() readonly data!: any;
}
</script>

<style lang="less">
.header-nav-list {
  line-height: normal;
  
  &-title {
    display: inline-block;
    cursor: pointer;
    margin-bottom: 8px;
    font-size: 14px;
    color: #9b9b9b;
    transition: all 0.15s;

    &:hover {
      color: white;
    }
  }

  & ~ & {
    margin-left: 10px;
  }

  &-box {

    &::-webkit-scrollbar {
      width: 3px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #555;
    }
  }

  &-item {
    cursor: pointer;
    padding: 10px;
    min-width: 130px;

    &:hover {
      background-color: #373949;
    }
  }
}
</style>
