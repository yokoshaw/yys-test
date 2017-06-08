<template>
  <div class="pics">
    <div class="pic-wrap" ref="picWrapper">
      <ul class="pic-list" ref="picList">
        <li class="pic-item">
          <img src="./02.png" width="150" height="93">
        </li>
        <li class="pic-item">
          <img src="./03.png" width="150" height="93">
        </li>
        <li class="pic-item">
          <img src="./02.png" width="150" height="93">
        </li>
        <li class="pic-item">
          <img src="./03.png" width="150" height="93">
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    mounted() {
      this._initPics()
    },
    methods: {
      _initPics() {
        let picWidth = 150
        let margin = 12
        let width = (picWidth + margin) * 4 - margin
        this.$refs.picList.style.width = width + 'px'
        this.$nextTick(() => {
          if (!this.picScroll) {
            this.picScroll = new BScroll(this.$refs.picWrapper, {
              scrollX: true,
              eventPassthrough: 'vertical'
            })
          } else {
            this.picScroll.refresh()
          }
        })
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass">
  .pics
    display: block
    padding: 12px
    .pic-wrap
      width: 100%
      overflow: hidden
      white-space: nowrap
      .pic-list
        font-size: 0
        .pic-item
          display: inline-block
          margin-right: 12px
          width: 150px
          height: 93px
          &:last-child
            margin: 0
</style>
