<template>
  <div>
    <nav>
      <div class="nav_container">
        <a class="bbs_name">
          <strong>求知论坛📕</strong>
        </a>
        <div class="ul_container">
          <ul>
            <li>
              <el-input
                  placeholder="请输入内容"
                  v-model="search">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </li>
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/category">分类</router-link>
            </li>

            <li v-if="!hasLogin">
              <router-link to="/login">登录|</router-link>
              <router-link to="/register">注册</router-link>
            </li>
            <li v-if="hasLogin">
              <el-popover
                  placement="bottom"
                  width="200"
                  trigger="hover"
                  popper-class="person_info">
                <div style="
                  display: flex;
                  flex-direction: column;
                  height: 250px">
                  <!--用户名-->
                  <div class="a" style="
                    border-bottom:solid 1px rgba(178,190,206,.8);
                    padding-bottom: 10px;
                    text-align: center;
                    font-size: 18px;
                    font-weight: bold;
                       ">
                    <span>{{ userName }}</span>
                  </div>
                  <!--个人中心-->
                  <div style="display: flex;flex-direction: row;align-items: center;margin: 8px 8px;">
                    <i>
                      <el-image style="filter: invert(70%) sepia(11%) saturate(338%) hue-rotate(198deg) brightness(89%) contrast(81%);
                                width: 23px;
                                height: 23px;"
                                :src="require('../assets/icons/user.png')"/>
                    </i>
                    <router-link style="color: rgb(96,98,127)" to="/about">
                      <span style="margin-left: 10px;font-weight: bold;font-size: 15px">个人中心</span>
                    </router-link>
                  </div>
                  <!--我的发布-->
                  <div style="display: flex;flex-direction: row;align-items: center;margin: 8px 8px;">
                    <i>
                      <el-image style="filter: invert(70%) sepia(11%) saturate(338%) hue-rotate(198deg) brightness(89%) contrast(81%);
                                width: 23px;
                                height: 23px;"
                                :src="require('../assets/icons/paper-plane.png')"/>
                    </i>
                    <span style="margin-left: 10px;font-weight: bold;font-size: 15px">我的发布</span>
                  </div>
                  <!--浏览历史-->
                  <div style="display: flex;flex-direction: row;align-items: center;margin: 8px 8px;">
                    <i>
                      <el-image style="filter: invert(70%) sepia(11%) saturate(338%) hue-rotate(198deg) brightness(89%) contrast(81%);
                                width: 23px;
                                height: 23px;"
                                :src="require('../assets/icons/clock.png')"/>
                    </i>
                    <span style="margin-left: 10px;font-weight: bold;font-size: 15px">浏览历史</span>
                  </div>
                  <div style="
                    text-align: center;
                    font-size: 18px;
                    font-weight: bold;
                       ">
                    <button
                        style="background-color: rgb(72, 117, 193);
                        border: 0;
                        border-radius: 24px;
                        color: azure;
                        font-weight: bold;
                        width: 80px;
                        height: 30px;
                        margin-top: 20px;
                        ">退出
                    </button>
                  </div>
                </div>
                <el-avatar slot="reference" :src=avatarSrc></el-avatar>
              </el-popover>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      search: "",
      hasLogin: false,
      avatarSrc: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      userName: "小布菌",
      menuList: [{
        icon: "",
        tip: "个人中心"
      }, {
        icon: "",
        tip: "浏览历史"
      }
      ]
    }
  },
  methods:{
    created() {
      console.log('创建')
      if(this.$store.getters.getUser) {
        this.user.username = this.$store.getters.getUser.username
        this.user.avatar = this.$store.getters.getUser.avatar
        console.log('登录状态更新',this.$store.getters.getUser.username)
        this.hasLogin = true
      }

    }
  }
}
</script>
<style lang="less">

nav {
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  color: azure;
  padding: 20px 0 0;

  .nav_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    width: 70%;
    padding-right: 15px;
    padding-left: 15px;
    margin: 0 auto;
    border-radius: 24px;
    font-size: 0.875rem;
    background-color: rgb(72, 117, 193);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

    .bbs_name {
      margin-left: 12%;
      font-weight: bold;
      font-size: 20px;
      letter-spacing: 8px;
      flex-shrink: 0;
      color: azure;
    }

    .ul_container {
      margin-left: 25%;
      flex-shrink: 0;

      ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        list-style: none;

        li {
          margin: 0 20px;
          flex-shrink: 0;


          .el-popover__reference-wrapper {
            display: block;
            transform: scale(1.1);
            transition: all 0.6s;

          }

          .el-popover__reference-wrapper:hover {
            transform: scale(1.4);
          }

          .el-input__inner {
            height: 30px;
            border-radius: 24px;
          }

          .el-input__icon {
            line-height: 30px;
          }

        }
      }
    }
  }
}
</style>