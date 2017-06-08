<template>
  <div id="app">
    <v-header></v-header>
    <v-pics></v-pics>
    <split></split>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/week">周榜<div class="red"></div></router-link>
      </div>
      <div class="tab-item">
        <router-link to="/month">月榜<div class="red"></div></router-link>
      </div>
      <div class="tab-item">
        <router-link to="/total">总榜<div class="red"></div></router-link>
      </div>
    </div>
    <split></split>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from './components/header/header'
  import pics from './components/pics/pics'
  import split from './components/split/split'
  import footer from './components/footer/footer'

  export default {
      components: {
          'v-header': header,
          'v-pics': pics,
          'v-footer': footer,
          split
      }
  }
</script>

<style lang="sass" rel="stylesheet/sass">
  .tab
    display: flex
    margin-left: 4px
    width: 80%
    height: 44px
    line-height: 44px
    .tab-item
      width: 60px
      text-align: center
      & > a
        display: block
        font-size: 16px
        color: #333333
        &.active
          display: inline
          .red
            position: relative
            top: -10px
            left: 22px
            width: 16px
            border-top: 3px solid #ff4343
</style>
