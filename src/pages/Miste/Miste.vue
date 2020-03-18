<template>
<div>
  <header class="head">
    <a class="logo" href="javascript:;"></a>
    <input type="text" placeholder="搜索商品，共24264款好物">
    <button>登录</button>
  </header>
  <Navbar/>
  <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item><img src="https://yanxuan.nosdn.127.net/3fa2995d5c384d08ae45664562115254.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0"></van-swipe-item>
    <van-swipe-item><img src="https://yanxuan.nosdn.127.net/eb985096ffa4cee38e180e7e20bc9531.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0"></van-swipe-item>
    <van-swipe-item><img src="https://yanxuan.nosdn.127.net/2e3f2aae75fb01153a00e87a84349d36.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0"></van-swipe-item>
    <van-swipe-item><img src="https://yanxuan.nosdn.127.net/0ee534b41d8e428476b5fe06b479bb39.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0"></van-swipe-item>
  </van-swipe> -->
</div>
</template>
<script>
import Navbar from '../../components/Navbar/Navbar'
export default {
  name:'Miste',
  components:{
    Navbar
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
div
  width 100%
  box-sizing border-box
  font-size 0.15rem
  .head
    display flex
    width 100%
    align-items center
    margin-top 0.05rem
    .logo
      background-image url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp)
      height 0.2rem
      width 0.7rem
      background-size cover
      margin-left 0.15rem
      margin-right 0.1rem
    input
      background-color RGB(237,237,237)
      box-sizing border-box
      width 2.1rem
      height 0.3rem
      border-radius 0.05rem
      padding-left 0.4rem
      outline none
      background-image url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp)
      background-repeat no-repeat
      background-size 0.15rem 0.15rem
      background-position 0.2rem center
      &::placeholder 
        font-size 0.05rem
    button
      margin-left 0.15rem
      background white
      color red
      border-color red
      border-width 1px
      outline none
      border-radius 0.05rem
</style>