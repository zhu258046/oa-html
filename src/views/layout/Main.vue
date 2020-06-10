<!-- 主体内容区-->
<template>
  <div id="main-wrap">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "Main"
  }
</script>

<style scoped>
#main-wrap{
  background-color: #fff;
  margin: 30px 10px 0 30px;
  height: calc(100vh - 105px);
  overflow-x: auto;
  overflow-y: auto;
}
</style>
