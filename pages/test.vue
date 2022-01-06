<template>
  <div class="">
    <div class="main">
      <BHeader/>
    </div>
    <div class="content">
      <div class="container wide content-block">
        <div class="content-block-title">Coin List</div>
        <Table :data="tableData" :columns="columns">
          <template slot="coin_name" slot-scope="{ row }">
            <img :src="row['coin_img']" alt="">
            <span>{{ row['coin_acronyms'] }}</span>
            <span>{{ row['coin_name'] }}</span>
          </template>
        </Table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { Align } from "~/types"

@Component({})
export default class test extends Vue {
  tableData = [
    {
      coin_img: 'https://assets.peatio.com/assets/v1/color/normal/btc.png',
      coin_name: 'Bitcoin',
      coin_acronyms: 'BTC',
      last_price: 'last price',
      change: 'change',
      market: 'market'
    },
    {
      coin_img: 'https://assets.peatio.com/assets/v1/color/normal/btc.png',
      coin_name: 'Bitcoin',
      coin_acronyms: 'BTC',
      last_price: 'last price',
      change: 'change',
      market: 'market'
    },
    {
      coin_img: 'https://assets.peatio.com/assets/v1/color/normal/btc.png',
      coin_name: 'Bitcoin',
      coin_acronyms: 'BTC',
      last_price: 'last price',
      change: 'change',
      market: 'market'
    },
    {
      coin_img: 'https://assets.peatio.com/assets/v1/color/normal/btc.png',
      coin_name: 'Bitcoin',
      coin_acronyms: 'BTC',
      last_price: 'last price',
      change: 'change',
      market: 'market'
    }
  ]

  columns = [
    {
      key: 'coin_name',
      title: 'Coin Name',
      scopedSlots: true
    },
    {
      key: 'last_price',
      title: 'Last Price'
    },
    {
      key: 'change',
      title: '24h Change'
    },
    {
      key: 'market',
      title: 'Market',
      align: Align.Right
    }
  ]
}
</script>

<style lang="less">
.main {
  min-height: 580px;
  background: #25134f;
  background-image: url(https://b.peatio.com/home/n/hbg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.content {
  padding-bottom: 100px;
  &-block{
    &-title {
      font-size: 42px;
      margin-bottom: 50px;
    }
  }
  .container {
    &.wide {
      margin: 0 auto;
      width: 1200px;
    }
  }
}
</style>
