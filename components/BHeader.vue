<template>
  <div class="header">
    <div class="header-left">
      <div class="header-left-logo">
        <img src="https://b.peatio.com/logos/b1.svg" alt="BigONE" />
      </div>
      <div class="header-left-nav">
        <nuxt-link to="/">
            Markets
        </nuxt-link>
      </div>
      <div class="header-left-nav">
        <DropDown>
          <template slot="value">
            Trade
          </template>
          <template slot="suffix">
            <i class="fas fa-chevron-down"></i>
          </template>
          <template slot="select"> 
            <HeaderNavBox>
              <HeaderNavList title="Spot">
                <HeaderNavItem>
                  <template slot="icon">
                    <i class="fab fa-spotify"></i>
                  </template>
                  <template slot="title">
                    Spot
                  </template>
                  <template slot="content">
                    Convenient & popular spot trading
                  </template>
                </HeaderNavItem>
                <HeaderNavItem>
                  <template slot="icon">
                    <i class="fas fa-water"></i>
                  </template>
                  <template slot="title">
                    Liquidity Mining
                  </template>
                  <template slot="content">
                    Earn income from fees by providing Dual-Assets liquidity to the market
                  </template>
                </HeaderNavItem>
                <HeaderNavItem>
                  <template slot="icon">
                    <i class="fas fa-retweet"></i>
                  </template>
                  <template slot="title">
                    Swapbox
                  </template>
                  <template slot="content">
                    One-Stop DEX Service Aggregated with Multi-chain
                  </template>
                </HeaderNavItem>
                <HeaderNavItem>
                  <template slot="icon">
                    <i class="fas fa-vial"></i>
                  </template>
                  <template slot="title">
                    Leveraged ETF
                  </template>
                  <template slot="content">
                    Leveraged ETF Trading that never triggers liquidation
                  </template>
                </HeaderNavItem>
              </HeaderNavList>
              <HeaderNavList title="Futures">
                <HeaderNavItem>
                  <template slot="icon">
                    <i class="fab fa-spotify"></i>
                  </template>
                  <template slot="title">
                    Spot
                  </template>
                  <template slot="content">
                    Convenient & popular spot trading
                  </template>
                </HeaderNavItem>
                <HeaderNavItem>
                  <template slot="icon">
                    <i class="fas fa-water"></i>
                  </template>
                  <template slot="title">
                    Liquidity Mining
                  </template>
                  <template slot="content">
                    Earn income from fees by providing Dual-Assets liquidity to the market
                  </template>
                </HeaderNavItem>
              </HeaderNavList>
            </HeaderNavBox>
          </template>
        </DropDown>
      </div>
      <div class="header-left-nav">
        <DropDown>
          <template slot="value">
            Futures
          </template>
          <template slot="suffix">
            <i class="fas fa-chevron-down"></i>
          </template>
          <template slot="select"> 
            <HeaderNavBox>
              <HeaderNavList>
                <HeaderNavItem>
                  <template slot="icon">
                    <i class="fas fa-file-contract"></i>
                  </template>
                  <template slot="title">
                    BigONE Perpetual Futures
                  </template>
                  <template slot="content">
                    Up to 100:1 leverage
                  </template>
                </HeaderNavItem>
                <HeaderNavItem>
                  <template slot="icon">
                    <i class="fas fa-star"></i>
                  </template>
                  <template slot="title">
                    Star Program
                  </template>
                  <template slot="content">
                    Invite your friends and earn crypto
                  </template>
                </HeaderNavItem>
                <HeaderNavItem>
                  <template slot="icon">
                    <i class="fab fa-kickstarter"></i>
                  </template>
                  <template slot="title">
                    Futures Trading Bonus
                  </template>
                  <template slot="content">
                    Participate and get trading bonus, profit with no cost
                  </template>
                </HeaderNavItem>
                <HeaderNavItem>
                  <template slot="icon">
                    <i class="fas fa-vial"></i>
                  </template>
                  <template slot="title">
                    Demo Trading
                  </template>
                  <template slot="content">
                    Trade perpetual futures with zero cost for newbies
                  </template>
                </HeaderNavItem>
              </HeaderNavList>
            </HeaderNavBox>
          </template>
        </DropDown>
      </div>
      <div class="header-left-nav">
        <DropDown>
          <template slot="value">
            Earn
          </template>
          <template slot="suffix">
            <i class="fas fa-chevron-down"></i>
          </template>
          <template slot="select"> 
            <HeaderNavBox>
              <HeaderNavList title="Spot">
                <HeaderNavItem>
                  <template slot="icon">
                    <i class="fab fa-spotify"></i>
                  </template>
                  <template slot="title">
                    Spot
                  </template>
                  <template slot="content">
                    Convenient & popular spot trading
                  </template>
                </HeaderNavItem>
                <HeaderNavItem>
                  <template slot="icon">
                    <i class="fas fa-water"></i>
                  </template>
                  <template slot="title">
                    Liquidity Mining
                  </template>
                  <template slot="content">
                    Earn income from fees by providing Dual-Assets liquidity to the market
                  </template>
                </HeaderNavItem>
                <HeaderNavItem>
                  <template slot="icon">
                    <i class="fas fa-retweet"></i>
                  </template>
                  <template slot="title">
                    Swapbox
                  </template>
                  <template slot="content">
                    One-Stop DEX Service Aggregated with Multi-chain
                  </template>
                </HeaderNavItem>
                <HeaderNavItem>
                  <template slot="icon">
                    <i class="fas fa-vial"></i>
                  </template>
                  <template slot="title">
                    Leveraged ETF
                  </template>
                  <template slot="content">
                    Leveraged ETF Trading that never triggers liquidation
                  </template>
                </HeaderNavItem>
              </HeaderNavList>
              <HeaderNavList title="Futures">
                <HeaderNavItem>
                  <template slot="icon">
                    <i class="fab fa-spotify"></i>
                  </template>
                  <template slot="title">
                    Spot
                  </template>
                  <template slot="content">
                    Convenient & popular spot trading
                  </template>
                </HeaderNavItem>
                <HeaderNavItem>
                  <template slot="icon">
                    <i class="fas fa-water"></i>
                  </template>
                  <template slot="title">
                    Liquidity Mining
                  </template>
                  <template slot="content">
                    Earn income from fees by providing Dual-Assets liquidity to the market
                  </template>
                </HeaderNavItem>
              </HeaderNavList>
            </HeaderNavBox>
          </template>
        </DropDown>
      </div>
      <div class="header-left-nav">
        <DropDown>
          <template slot="value">
            More
          </template>
          <template slot="suffix">
            <i class="fas fa-chevron-down"></i>
          </template>
          <template slot="select"> 
            <HeaderNavBox>
              <HeaderNavList>
                <HeaderNavItem>
                  <template slot="title">
                    Spot
                  </template>
                  <template slot="content">
                    Convenient & popular spot trading
                  </template>
                </HeaderNavItem>
                <HeaderNavItem>
                  <template slot="title">
                    Liquidity Mining
                  </template>
                  <template slot="content">
                    Earn income from fees by providing Dual-Assets liquidity to the market
                  </template>
                </HeaderNavItem>
                <HeaderNavItem>
                  <template slot="title">
                    Swapbox
                  </template>
                  <template slot="content">
                    One-Stop DEX Service Aggregated with Multi-chain
                  </template>
                </HeaderNavItem>
                <HeaderNavItem>
                  <template slot="title">
                    Leveraged ETF
                  </template>
                  <template slot="content">
                    Leveraged ETF Trading that never triggers liquidation
                  </template>
                </HeaderNavItem>
              </HeaderNavList>
            </HeaderNavBox>
          </template>
        </DropDown>
      </div>
    </div>
    <div class="header-right">
      <div class="header-right-login">
        <nuxt-link to="/login">Login</nuxt-link>
      </div>
      <div class="header-right-signup">
        <nuxt-link to="/register">Sign Up</nuxt-link>
      </div>
      <div class="header-right-line"></div>
      <div class="header-right-nav">
        <DropDown position="right">
          <template slot="value">
            English/USD
          </template>
          <template slot="suffix">
            <i class="fas fa-chevron-down"></i>
          </template>
          <template slot="select"> 
            <HeaderNavBox>
              <HeaderNavList title="Language" type="scroll" :data="languages" />
              <HeaderNavList title="Currency" type="scroll" :data="currencies" />
            </HeaderNavBox>
          </template>
        </DropDown> 
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class BHeader extends Vue {
  languages = ['English','English','English','English','English','English','English']
  currencies = ['USD','CNY','EUR','RUB','BRL','VND','HKD', 'EUR','RUB','BRL','VND','HKD']
}
</script>

<style lang="less">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  line-height: 56px;
  height: 56px;
  background-color: red;

  &-left {
    display: flex;
    align-items: center;

    &-logo {
      display: flex;
      align-items: center;
      padding-left: 20px;
      padding-right: 18px;

      img {
        height: 36px;
      }
    }
    
    &-nav {
      padding: 0 16px;
      font-size: 14px;
      color: #fff;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 14px;
      }
    }
  }

  &-right {
    display: flex;
    align-items: center;

    &-login, &-signup {
      a {
        cursor: pointer;
        text-decoration: none;
        font-size: 15px;
        background-color: transparent;
        border: none;
        color: #fff;
      }
    }

    &-login {
      margin-right: 16px;
    }

    &-signup {
      margin: 0 16px;
      a {
        padding: 6px 12px;
        border: 1px solid #fff;
        border-radius: 4px;
      }
    }

    &-line {
      &::after {
        content: "|";
        color: #aaa;
      }
    }

    &-nav {
      padding: 0 16px;
      font-size: 14px;
      color: #fff;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 14px;
      }
    }
  }

  .test {
    font-size: 8px;
  }
}
</style>
