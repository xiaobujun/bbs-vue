<template>
  <div class="footer">
    <p>Copyright©小布菌 2022</p>
    <p>
        <span>
            "备案号："
            <a href="loading.html">湘ICP备2021003892号-1</a>
        </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="less">
.footer{
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  border-radius: 24px;
  background-color: rgb(146, 180, 236);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>