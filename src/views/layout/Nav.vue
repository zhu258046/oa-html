<!-- 菜单栏-->
<template>
  <div id="nav-wrap" :style="{backgroundColor: bgcolor}">
    <el-menu
        router
        unique-opened
        :background-color="bgcolor"
        text-color="#fff"
        class="el-menu-vertical-demo"
        :collapse="isCollapse">
      <template v-for="(route, index) in routes">
        <el-submenu :key="route.id" v-if="!route.hidden" :index="route.path">
          <template slot="title">
            <i :class="route.meta.icon"></i>
            <span>{{route.meta.title}}</span>
          </template>
          <template v-for="child in route.children" >
            <el-menu-item v-if="!child.hidden" :key="child.id" :index="child.path">
              <span>{{child.meta.title}}</span>
              <i :class="child.meta.icon"></i>
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "Nav",
    props: ['bgcolor'],
    data() {
      return {
        routes: this.$router.options.routes,
        isCollapse: false,
        customWidth: document.documentElement.clientWidth
      }
    },
    watch: {
      customWidth(newVal, oldVal) {
        if (newVal < 840) {
          this.isCollapse = true
        } else {
          this.isCollapse = false
        }
      }
    },
    created() {
      window.addEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize(event) {
        this.customWidth = document.documentElement.clientWidth
      }
    }
  }
</script>

<style scoped>
  .el-menu-vertical-demo {
    /*width: 200px;*/
    border: none;
  }

  #nav-wrap {
    /*  background-color: #1E90FF;*/
    height: 100vh;
  }
</style>
