<template>
<div style="position:'relative'" class="my">
  <nav @touchstart="start" @touchmove="move" @touchend="end" ref="nav">
  <ul ref="lis">
    <li class="active" @touchend="isClick" ref="li">推荐</li>
    <li ref="li" @touchend="isClick">居家生活</li>
    <li ref="li" @touchend="isClick">服饰鞋包</li>
    <li ref="li" @touchend="isClick">美食酒水</li>
    <li ref="li" @touchend="isClick">个户清洁</li>
    <li ref="li" @touchend="isClick">个户清洁</li>
    <li ref="li" @touchend="isClick">个户清洁</li>
    <li ref="li" @touchend="isClick">个户清洁</li>
    <li ref="li" @touchend="isClick">个户清洁</li>
  </ul>
</nav>

</div>
</template>
<script>
export default { 
  name:'Navbar',
  data(){
    return {
      isMove:false,
      show: false,
      activeNames: ['1']
    }
  },
  methods:{
     showPopup() {
      this.show = true;
    },
    isChang(){
      this.isS=true
    },
    isClick(event){
      if(this.isMove){
        return
      }
      this.$refs.lis.querySelectorAll('li').forEach(item=>{
        item.classList.remove("active")
      })
      event.target.classList.add("active")
    },
    transformCss(node, param, value){
      //如果第一次设置元素
        if (node.transformData === undefined) {
            //给元素添加一个属性，用来保存元素的transform设置
            node.transformData = {};
        }

        if (arguments.length === 3) {
            //设置 transform 属性
            //把transform属性添加到 tansformData里面
            node.transformData[param] = value;
            //设置transform值的字符串
            var transformStr = '';
            //遍历 transformData
            for (var i in node.transformData) {
                switch (i) {
                    case 'translate':
                    case 'translateX':
                    case 'translateY':
                    case 'translateZ':
                        transformStr += i+'('+node.transformData[i]+'px) ';
                        break;
                    case 'scale':
                    case 'scaleX':
                    case 'scaleY':
                        transformStr += i+'('+node.transformData[i]+') ';
                        break;
                    case 'rotate':
                    case 'skew':
                    case 'skewX':
                    case 'skewY':
                        transformStr += i+'('+node.transformData[i]+'deg) ';
                        break;
                }
                //设置css样式
                node.style.transform = transformStr;
            }

        } else if (arguments.length === 2) {
            //获取transform属性值
            //根据参数从trnasformData获取
            var result = node.transformData[param];
            //如果transformData没有，取默认值
            if (result === undefined) {
                if (param === 'scale' || param === 'scaleX' || param === 'scaleY') {
                    result = 1;
                } else {
                    result = 0;
                }
            }
            //把结果返回
            return result;
        }
    },
    start(){
      this.isMove=false
      //获取触点对象
      var touch = event.changedTouches[0];
      // 获取触点的起始位置
      this.startX = touch.clientX;
      // 获取 navWrapper 的开始位置
      this.eleX = this.transformCss(this.$refs.lis, 'translateX');
      // 设置滑动距离，初始化
      this.dstX = 0;
      // 获取起始时间
      this.startTime = Date.now();
      //取消过渡
      this.$refs.lis.style.transition = 'none';
    },
    move(){
      this.isMove=true
      //获取触点对象
      var touch = event.changedTouches[0];
      // 获取触点的结束位置
      var endX = touch.clientX;
      // 计算手指滑动的距离
      this.dstX = endX - this.startX;
      // 根据滑动距离计算 navWrapper 的位置
      var translateX = this.eleX + this.dstX;
      // 判断如果超出临界值，开启橡皮筋效果
      if (translateX > 0) {
          //计算比例，随着translateX增大而减小；
          var scale = 1 - translateX / (this.$refs.nav.clientWidth * 1.9);
          //重新计算trnaslateX
          translateX *= scale;
      } else if (translateX < this.$refs.nav.clientWidth - this.$refs.lis.offsetWidth){
          //计算 navWrapper 距离视口右边的距离
          var rightX =  this.$refs.nav.clientWidth - (this.$refs.lis.offsetWidth + translateX);
          //计算比例，随着 rightX 增大而减小，开始无限接近于1
          this.scale = 1 - rightX / (this.$refs.nav.clientWidth * 1.9);
          //根据比例重新计算 rightX 的值
          rightX *= this.scale;
          // 根据rightX 倒着计算出新的translateX
          translateX = (this.$refs.nav.clientWidth - rightX) - this.$refs.lis.offsetWidth;
      }

      // 设置 navWrapper 的位置
      this.transformCss(this.$refs.lis, 'translateX', translateX);
    },
    end(){
      //计算结束时间
      var endTime = Date.now();
      //计算时间差，一个完整的动作所使用的的时间
      var dstTime = endTime - this.startTime;

      // 计算加速距离
      var speed = this.dstX / dstTime * 200;

      // 让 navWrapper 当前的位置+加速距离
      var translateX = this.transformCss(this.$refs.lis, 'translateX');
      translateX += speed;

      var bezier = ''; //定义过渡的 timing-function
      //判断临界值
      if (translateX > 0) {
          translateX = 0;
          bezier = ' cubic-bezier(0.08, 1.44, 0.6, 1.46)';
      } else if (translateX < this.$refs.nav.clientWidth - this.$refs.lis.offsetWidth) {
          translateX = this.$refs.nav.clientWidth - this.$refs.lis.offsetWidth;
          bezier = ' cubic-bezier(0.08, 1.44, 0.6, 1.46)';
      }

      //设置过渡
      this.$refs.lis.style.transition = 'transform .5s' + bezier;

      // 设置 navWrapper 的位置
      this.transformCss(this.$refs.lis, 'translateX', translateX);
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  nav 
    width 100%
    display block
    position relative
    overflow hidden
    height 0.3rem
    margin-top 0.15rem
    ul
      white-space nowrap
      position absolute
      li
        display inline-block 
        margin-left 0.2rem 
        padding 0.05rem 0.05rem
        &.active
          border-bottom 0.02rem solid red
          color red
</style>