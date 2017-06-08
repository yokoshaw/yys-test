<template>
  <div class="header">
    <div class="content-wrap">
      <span class="bg_1">
        <h1 class="name">斗图</h1>
      </span>
      <span class="img_01"></span>
      <span class="join">
          <div class="text">已有42359人参与</div>
      </span>
    </div>
  </div>
</template>

<script>
</script>

<style lang="sass" rel="stylesheet/sass">
  @import "../../common/sass/mixin.sass"

  .header
    overflow: hidden
    color: #fff
    .content-wrap
      .bg_1
        display: inline-block
        vertical-align: top
        width: 100%
        height: 34px
        @include bg-image('bg_1.png')
        background-size: 100% 34px
        .name
          line-height: 35px
          text-align: center
          font-size: 16px
          font-weight: bold
      .img_01
        display: block
        width: 100%
        height: 150px
        @include bg-image('01.png')
        background-size: 100% 175px
      .join
        display: block
        width: 100%
        height: 25px
        background-color: #ff4445
        .text
          display: block
          line-height: 25px
          margin-right: 21px
          text-align: right
          font-size: 12px
</style>

