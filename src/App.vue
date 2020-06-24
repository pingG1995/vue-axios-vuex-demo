<template>
  <div id="app">
    <el-container>
        <!-- 头部区域 -->
        <el-header class="header" height="100px">
          <h2>Vue登录模块</h2>
          <h4>路 由 配 置 登 录 跳 转</h4>
        </el-header>
        <!-- 主区域 -->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
  </div>
</template>
<script>
import 'element-ui/lib/theme-chalk/index.css'
export default {
  
}
</script>
<style lang="less">
 .header{
    background-color: #409EFF;
    color: white;
  }
</style>
