<template>
  <div class="b-table">
    <div class="b-table-head">
      <span
        v-for="col in columns"
        :key="col.key"
        :class="[col.key, `text-${col.align || 'left'}`]"
      >
        {{ col.title }}
      </span>
    </div>

    <div class="b-table-content">
      <span
        v-for="(row, index) in data"
        :key="index"
        class="b-table-row"
      >
        <span
          v-for="col in columns"
          :key="col.key"
          :class="[col.key, 'item', `text-${col.align || 'left'}`]"
        >
          <template v-if="!col.scopedSlot">{{ row[col.key] }}</template>
          <slot :name="col.key" :col="col" :row="row"></slot>
        </span>
      </span>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Column } from '~/types'
@Component({})
export default class Table extends Vue {
  @Prop() readonly data!: any[]
  @Prop() readonly columns!: Column[]

  getValueByKey(key: string, item: any) {
    let value
    if (key.includes('.')) {
      const keys = key.split('.')
      let inv: any = null
      for (let index = 0; index < keys.length; index++) {
        const key = keys[index]
        if (index === 0) {
          inv = item[key]
        } else {
          inv = inv[key]
        }
      }
      value = inv
    } else {
      value = item[key]
    }
    return value
  }
}
</script>

<style lang="less">
.b-table {
  background-color: #fff;
  &-head,
  &-row {
    position: relative;
    display: flex;
    align-items: center;
    > a,
    > span {
      flex: 1;
      padding: 16px;
    }
  }
  &-head {
    font-size: 14px;
    color: #212529;
  }
  &-row {
    height: 68px;
    text-decoration: none;
    color: #212529;
  }

  &-row:hover {
    background-color: #f7f4f4;
    border-top: 1px solid rgba(43, 43, 43, 0.1);
    border-bottom: 1px solid rgba(43, 43, 43, 0.1);
    box-shadow: 0 0 5px 0 rgba(43, 43, 43, 0.1);
  }

  &-content {
    position: relative;
    min-height: 250px;
  }

  .text {
    &-right {
      text-align: right;
    } 

    &-left {
      text-align: left;
    }

    &-center {
      text-align: center;
    }
  }
}
.scroll-height{
  .b-table-content {
    height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
