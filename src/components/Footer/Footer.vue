<template>
  <div class="footer-nav">
    <a href="javascript:;" :class="{on:$route.path==='/'}" @click="$router.push('/')">
      <i class="iconfont icon-home" ></i>
      <span>首页</span>
    </a>
    <a href="javascript:;" :class="{on:$route.path==='/category'}" @click="$router.push('/category')">
      <i class="iconfont icon-classifi" ></i>
      <span>分类</span>
    </a>
    <a href="javascript:;" :class="{on:$route.path==='/zhidemai'}" @click="$router.push('/zhidemai')">
      <i class="iconfont icon-tupian" ></i>
      <span>值得买</span>
    </a>
    <a href="javascript:;" :class="{on:$route.path==='/shopcar'}" @click="$router.push('/shopcar')">
      <i class="iconfont icon-gouwuche" ></i>
      <span>购物车</span>
    </a>
    <a href="javascript:;" :class="{on:$route.path==='/owner'}" @click="$router.push('/owner')">
      <i class="iconfont icon-ren" ></i>
      <span>个人</span>
    </a>
  </div>
</template>
<script>
export default {
  name:'Footer',
  data(){
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.footer-nav
  height 0.37rem
  width 100%
  display flex
  justify-content space-around
  position fixed
  bottom 0.05rem
  a
    display flex
    flex-direction column
    align-items center
    flex 1
    text-align center
    i 
      font-size 0.26rem
    span 
      font-size 0.1rem
  .on
    color red
</style>