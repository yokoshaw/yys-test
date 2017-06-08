<template>
  <div class="week">
    <div class="content-wrap">
      <div class="avatar">
        <div class="img_04">
          <img src="./04.png" width="40" height="40">
        </div>
      </div>
      <div class="content">
        <div class="title">匿名用户</div>
        <div class="description">3天前</div>
        <div class="support">本以为要过几天发，后期君速度太给力，就今天发了吧，辛苦你们了~</div>
      </div>
    </div>
    <div class="hr"></div>
    <div class="comment-wrap">
      <div class="comment">
        <img src="./icon_pl_02.png" width="18" height="16">
        <div class="number">20</div>
      </div>
      <div class="height"></div>
      <div class="thumbs" @click="toggleThumbs">
        <span class="icon_pl_01" :class="{'active':thumbs}"></span>
        <span class="number" :class="{'active':thumbs}">{{thumbsGood}}</span>
      </div>
    </div>
    <split></split>
    <div class="content-wrap">
      <div class="avatar">
        <div class="img_04">
          <img src="./04.png" width="40" height="40">
        </div>
      </div>
      <div class="content">
        <div class="title">匿名用户</div>
        <div class="description">3天前</div>
        <div class="support">本以为要过几天发，后期君速度太给力，就今天发了吧，辛苦你们了~</div>
        <div class="img_05">
          <img src="./05.png" width="285" height="285">
        </div>
      </div>
    </div>
    <div class="hr"></div>
    <div class="comment-wrap">
      <div class="comment">
        <img src="./icon_pl_02.png" width="18" height="16">
        <div class="number">20</div>
      </div>
      <div class="height"></div>
      <div class="thumbs" @click="toggleThumbs">
        <span class="icon_pl_01" :class="{'active':thumbs}"></span>
        <span class="number" :class="{'active':thumbs}">{{thumbsGood}}</span>
      </div>
    </div>
    <split></split>
  </div>
</template>

<script type="text/ecmascript-6">
  import split from '../../components/split/split'

  export default {
    data() {
      return {
        thumbs: false
      }
    },
    computed: {
      thumbsGood() {
        return this.thumbs ? 101 : 100
      }
    },
    methods: {
      toggleThumbs() {
        this.thumbs = !this.thumbs
      }
    },
    components: {
      split
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass">
  @import "../../common/sass/mixin.sass"

  .week
    position: relative
    overflow: hidden
    .content-wrap
      position: relative
      font-size: 0
      .avatar
        display: inline-block
        width: 20%
        vertical-align: top
        .img_04
          margin: 14px 18px 0 18px
      .content
        display: inline-block
        width: 80%
        .title
          margin: 18px 0 8px 0
          font-size: 14px
          color: #999999
          padding-right: 20px
        .description
          margin-bottom: 16px
          font-size: 12px
          color: #999999
        .support
          font-size: 14px
          color: #333333
          padding-right: 20px
          padding-bottom: 14px
    .hr
      width: 90%
      height: 1px
      margin: 0 auto 0 auto
      background-color: #dedede
    .comment-wrap
      position: relative
      font-size: 0
      .comment
        display: inline-block
        vertical-align: top
        width: 49.5%
        height: 100%
        margin: 11.5px 0 11.5px 0
        text-align: center
        img
          vertical-align: top
          display: inline-block
        .number
          display: inline-block
          font-size: 14px
          color: #999999
          padding-left: 8px
          padding-top: 2px
      .height
        display: inline-block
        width: 1px
        height: 18px
        background-color: #dedede
      .thumbs
        display: inline-block
        width: 49.5%
        margin: 11.5px 0 11.5px 0
        text-align: center
        .icon_pl_01
          vertical-align: top
          display: inline-block
          width: 18px
          height: 17px
          background-size: 18px 17px
          background-image: url('./icon_pl_01.png')
          &.active
            width: 18px
            height: 17px
            background-size: 18px 17px
            background-image: url('./icon_pl_03.png')
        .number
          display: inline-block
          width: 22px
          font-size: 14px
          color: #999999
          padding-left: 8px
          padding-top: 2px
          &.active
            color: #ff4343
</style>
