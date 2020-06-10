<template>
  <el-row>
    <el-col :span="4">
      <el-menu
          router
          @open="handleOpen" @close="handleClose"
          class="el-menu-vertical-demo">
        <template v-for="route in routes">
          <el-submenu :key="route.id" v-if="!route.hidden" :index="route.path">
            <template slot="title">
              <i :class="route.meta.icon"></i>
              <span>{{route.meta.title}}</span>
            </template>
            <el-menu-item v-for="child in route.children" :key="child.id" :index="child.path">
              <i :class="child.meta.icon"></i>
              <span>{{child.meta.title}}</span>
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <router-view></router-view>
    </el-col>
  </el-row>

</template>

<script>
  export default {
    name: "MenuBar",
    data() {
      return {
        routes: this.$router.options.routes
      }
    },
    created() {
      console.log(this.routes);
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      // Generate four random hex digits.
      S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      },
      // Generate a pseudo-GUID by concatenating random hexadecimal.
      guid() {
        return `${this.S4()}${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}${this.S4()}${this.S4()}`
      }
  }
  }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 500px;
  }
</style>
