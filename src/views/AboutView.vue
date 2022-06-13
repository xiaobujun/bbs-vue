<template>
  <div>
    <Header></Header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
    <footer></footer>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "../components/Footer"

export default {

  name: 'about',
  components: {
    Header,
    Footer
  },
}
</script>
