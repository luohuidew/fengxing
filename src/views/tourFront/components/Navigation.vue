<template>
  <div class="navigation" @mouseover="showNavigat" @mouseout="hideNavigat" :class="{move}">
    <div class="left">
      <img src="../../../assets/img/phonebule.png" alt="">
      <span>联系方式</span>
    </div>
    <div class="right">
      <ul>
        <li><img src="../../../assets/img/ipone.png" alt=""> <span>010-88888888</span></li>
        <li><img src="../../../assets/img/shouji.png" alt=""> <span>010-88888888</span></li>
      </ul>
      <ul>
        <li><img src="../../../assets/img/weixin.png" alt=""> <span>010-88888888</span></li>
        <li><img src="../../../assets/img/weixin.png" alt=""> <span>010-88888888</span></li>
      </ul>
      <ul>
        <li><img src="../../../assets/img/QQ.png" alt=""> <span>010-88888888</span></li>
        <li><img src="../../../assets/img/QQ.png" alt=""> <span>010-88888888</span></li>
      </ul>
      <ul>
        <li><img src="../../../assets/img/Email.png" alt=""> <span>010-88888888</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      move: false
    }
  },
  methods: {
    showNavigat() {
      this.move = true
    },
    hideNavigat() {
      this.move = false
    }
  }
}
</script>

<style scoped>
  .navigation {position: fixed;width: 245px;height: 286px;right: -202px;top:50%;transform:translateY(-60%);transition: all 0.5s;z-index: 90}
  .navigation.move{right: 0px;}
  .navigation .right {
    padding-top: 10px;
    width: 200px;
    height: 286px;
    float: right;
    box-sizing: border-box;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 1px 3px #666;
  }
  .navigation .right ul{
    box-sizing: border-box;
    line-height: 20px;
    margin-left: 20px;
    padding: 0px;
    box-shadow: 3px 1px 1px   #ccc;
    margin-top: 7px;
    padding-bottom: 8px;
  }
  .navigation .right ul li {
    display: flex;
    box-sizing: border-box;
    padding: 5px 0px;
    align-items: center;
    justify-content: flex-start;
  }
  .navigation .right ul:last-child{
    box-shadow: none;
  }
  .navigation .right ul li img {
    display: block;
    height: 13px;
    margin-right: 12px;
  }
  .navigation .left{
    height: 172px;width: 45px;
    position: absolute;top:50%;margin-top: -86px;
    background-color: #fff;
    box-shadow: -1px 0px 1px #666;

    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  .navigation .left img {
    display: block;
    margin: 10px auto;
  }
  .navigation .left span {
    display: block;
    margin: 10px auto;
    width: 20px;
    text-align: center;
    line-height: 26px;
  }
</style>
