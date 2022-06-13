<template>
  <div>
    <!--导航栏-->
    <Header></Header>
    <!--内容主体区-->
    <main>
      <div class="main_container">
        <!--轮播图开始-->
        <div class="banner_container">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!--轮播图结束-->

        <!--文章列表-->
        <article>
          <div class="article_divider">
            <h2 class="title">广场</h2>
          </div>
          <div class="article_container">
            <!--单个文章开始-->
            <el-card shadow="always" class="box-card" v-for="article in articleCard">
              <!--图片-->
              <div class="left_content">
                <img src="../assets/头像.jpeg" fit="fit"/>
              </div>
              <!--文章摘要-->
              <div class="right_content">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <p class="article_info">
                  <span>{{ article.author }}</span>
                  <span>{{ article.view }}</span>
                  <span>{{ article.like }}</span>
                  <span>{{ article.comments }}</span>
                  <span>{{ article.category }}</span>
                  <span>{{ article.date }}</span>
                </p>
              </div>
            </el-card>
            <!--单个文章结束-->

            <!--分页开始-->
            <el-pagination class="mpage"
                           background
                           layout="prev, pager, next"
                           :current-page="currentPage"
                           :page-size="pageSize"
                           :total="total"
                           @current-change=page>
            </el-pagination>
            <!--分页结束-->
          </div>
        </article>
        <!--侧边栏-->
        <aside>
          <div class="aside_divider">
            <h2 class="title">官方公告</h2>
          </div>
          <div class="aside_container">
            <!--官方公告-->
            <div></div>
          </div>
        </aside>
      </div>
    </main>
    <!--页脚-->
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header";
import Footer from "../components/Footer"

export default {

  name: 'Index',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      // 轮播图
      banner: [],
      // 文章列表
      articleCard: [
        {
          articleImage: '../assets/logo.png',
          title: '这只是一个测试',
          description: "大家好，这只是一个测试文章",
          author: "小布菌",
          view: 999,
          like: 999,
          comments: 666,
          category: "前端",
          date:"2022-06-11 13:58"
        },
        {
          articleImage: "../assets/头像.jpeg",
          title: '这只是一个测试',
          description: "大家好，这只是一个测试文章",
          author: "小布菌",
          view: 999,
          like: 999,
          comments: 666,
          category: "前端"
        },
        {
          articleImage: "../assets/头像.jpeg",
          title: '这只是一个测试',
          description: "大家好，这只是一个测试文章",
          author: "小布菌",
          view: 999,
          like: 999,
          comments: 666,
          category: "前端"
        }
      ],
      blogs: {},
      currentPage: 1,
      total: 0,
      pageSize: 5
    }
  },
  methods: {
    page(currentPage) {
      const _this = this
      _this.$axios.get("/topic/browseThePost" + currentPage).then(res => {
        console.log(res)
        _this.blogs = res.data.data.records
        _this.currentPage = res.data.data.current
        _this.total = res.data.data.total
        _this.pageSize = res.data.data.size
      })
    }
  },
  created() {
    this.page(1)
  }
}
</script>
<style lang="less">
.main_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  margin: 2% auto;
  // 轮播图
  .banner_container {
    width: 100%;
    margin: 0 auto;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  // 小标题
  .title {
    width: 120px;
    background-color: rgb(72, 117, 193);
    margin-bottom: 5px;
    padding: 0;
    text-align: center;
    border-radius: 18px;
  }

  // 文章列
  article {
    width: 70%;
    flex-shrink: 0;

    .article_divider {
      // border-bottom: solid 1px rgba(178, 190, 206, .8);
    }

    .article_container {
      .el-card {
        display: flex;
        height: 180px;
        margin-top: 10px;
        background-color: rgb(191, 212, 248);
        border: 0;
        border-radius: 12px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
        color: azure;

        .el-card__body {
          display: flex;
          width: 100%;
          flex-direction: row;
          align-items: center;
          .left_content {
            width: 160px;
            height: 160px;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.8);
            img {
              width: 160px;
              height: 160px;
              border-radius: 12px;

            }
          }

          .right_content {
            height: 160px;
            width: 70%;
            margin-left: 2%;

            h2 {
              margin: 0;
            }
            h2:hover{
              color: rgb(255, 171, 111);
            }
            p:nth-child(2){
              text-align: left;
            }
            p:nth-child(2):hover{
              color: rgb(255, 171, 111);
            }
            p:nth-child(3){
              text-align: left;
              margin-top: 10%;
            }
            span{
              margin-right: 15px;
              position: relative;
              padding-left: 20px;
              line-height: 20px;
              font-weight: bold;
            }

            .article_info span:nth-child(n):before{
              position: absolute;
              left: 0;
              top: 0;
              content: "";
              width: 20px;
              height: 25px;
              line-height: 25px;

            }
            // 作者
            span:nth-child(1){
              background: url("../assets/icons/author.png") no-repeat;
              background-size: 18px;
            }
            // 阅读量
            span:nth-child(2){
              background: url("../assets/icons/view.png") no-repeat;
              background-size: 18px;
            }
            // 点赞数
            span:nth-child(3){
              background: url("../assets/icons/like.png") no-repeat;
              background-size: 18px;
            }
            // 评论数
            span:nth-child(4){
              background: url("../assets/icons/comment.png") no-repeat;
              background-size: 18px;
            }
            // 分类
            span:nth-child(5){
              background: url("../assets/icons/category.png") no-repeat;
              background-size: 18px;
            }
            // 日期
            span:nth-child(6){
              background: url("../assets/icons/datetime.png") no-repeat;
              background-size: 18px;
            }
          }
        }
      }

      .mpage {
        margin-top: 5px;
      }
    }
  }

  // 侧栏
  aside {
    width: 25%;
    margin-left: 5%;
    flex-shrink: 0;

    .aside_divider {
      text-align: left;
      // border-bottom: solid 1px rgba(178, 190, 206, .8);
    }

    .aside_container {
      display: block;
      height: 590px;
      margin-top: 10px;
      border-radius: 12px;
      background-color: rgb(191, 212, 248);
    }
  }
}

</style>
