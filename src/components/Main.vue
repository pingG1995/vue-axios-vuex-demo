<template>
  <div class="Main">
    <h1>主页面</h1>
    <span>欢迎你:</span>
    <span v-if="user">
      <span>{{this.$store.getters.getName}}</span>
      <el-button size="small" type="warning" @click="logout">注销</el-button>
    </span>
    <el-button v-else size="small" type="primary" @click="login">登陆</el-button>
  </div>
</template>


<script>
import "element-ui/lib/theme-chalk/index.css";
export default {
  name: "Main",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    /**
     * to logout from page.
     */
    logout() {
      this.$store.dispatch('logout').then(()=>{
        console.log(this.$store.state);
        this.$router.push("/login");
      })
    },
    /**
     * to login the page.
     */
    login() {
      console.log('login');
      this.$router.push("/login");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li {
  border-bottom: 1px solid #999;
  padding: 10px 0;
}

.inl-block {
  display: inline-block;
}

.m-img {
}
.m-content {
  margin-left: 20px;
}
</style>