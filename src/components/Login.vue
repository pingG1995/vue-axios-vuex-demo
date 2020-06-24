<template>
  <div class="Login">
    <el-form ref="form" :rules="rules" :model="user" label-width="80px">
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item label-width="70px">
            <span>
              <font color="#B3D8FF" size="5">注册登录页面</font>
            </span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item label="账户：" prop="name">
            <el-input size="small" v-model="user.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item label="密码：" prop="code">
            <el-input size="small" v-model="user.code"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item>
            <el-button type="primary" @click="submit">登录</el-button>
            <el-button @click="register">注册</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <font color="pink" size="3">
          1.账户admin，密码123，登录
          <br />2.点击注册返回主页
        </font>
      </el-row>
    </el-form>
  </div>
</template>


<script>
export default {
  name: "Login",
  data() {
    return {
      user: {},
      rules: {
        name: [{ required: true, message: "姓名不能为空！", trigger: "blur" }],
        code: [{ required: true, message: "密码不能为空！", trigger: "blur" }]
      }
    };
  },
  methods: {
    /**
     * to initial page
     */
    submit: function() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.user.name == "admin" && this.user.code == "123") {
            //验证成功
            this.$notify({
              title: "提示",
              message: "登录成功！欢迎你：" + this.user.name
            });
            //跳转回原始页面
            this.$router.push({ path: "/" });
          } else {
            this.$message({
              type: "error",
              message: "用户或者密码名出错！",
              showClose: true
            });
          }
        }
        else{
             return false;
        }
      });
    },
    register: function() {
      this.$router.push({ path: "/" });
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