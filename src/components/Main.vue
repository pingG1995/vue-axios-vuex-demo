<template>
    <div class="Main">
    <h1>主页面</h1>
    <div>
        <button @click="toLogin">登录</button>
    </div>
  </div>
</template>


<script>
import 'element-ui/lib/theme-chalk/index.css'
export default {
  name: 'Main',
  data () {
    return {
      msg: '详情',
      articles:[]
    }
  },
  methods:{
 /**
   * to login page.
     */
      toLogin(){
        this.$router.push({path: '/login'});    
      }


      
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li{
border-bottom: 1px solid #999;
padding: 10px 0;
}

.inl-block{
display: inline-block;
}

.m-img{
  
}
.m-content{
margin-left: 20px;
}
</style>