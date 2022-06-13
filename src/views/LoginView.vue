<template>
  <div class="form_container">
    <h2>欢迎来到求知论坛！</h2>
    <el-form :model="ruleForm" label-position="left" status-icon :rules="rules" ref="ruleForm" label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="true"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="true"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  data() {
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      } else {
        callback()
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback()
      }
    };
    return {
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {validator: checkUserName, trigger: 'blur'}
        ],
        password: [
          {validator: validatePass, trigger: 'blur'}
        ],
      }
    };
  },
  name: "login",
  components: Header,
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        const _this=this
        if (valid) {
          this.$axios.post('/api/userInfo/login',this.ruleForm).then(res=>{
            console.log(res.data)
            // const jwt = res.headers['authorization']
            const userInfo = res.data.token

            // // 把数据共享出去
            // _this.$store.commit("SET_TOKEN", jwt)
            _this.$store.commit("SET_USERINFO",userInfo)
            //
            // // 获取
            console.log('打印',_this.$store.getters.getUser)

            _this.$router.push("/")
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>
h2 {
  margin-bottom: 10%;
}

.form_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 400px;
  border-radius: 14px;
  transform: translate(-50%, -50%);
  background-color: bisque;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, .16);
}
</style>