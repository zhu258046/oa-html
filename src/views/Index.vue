<template>
  <div id="app">
    <el-row>
      <el-col :span="3">
        <div>
          <layout-nav :bgcolor="nav_bgcolor"></layout-nav>
        </div>
      </el-col>
      <el-col :span="21">
        <div>
          <layout-header></layout-header>
          <layout-main></layout-main>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  // @ is an alias to /src
  import LayoutHeader from '../views/layout/Header'
  import LayoutNav from '../views/layout/Nav'
  import LayoutMain from '../views/layout/Main'
  import {NAV_BACKGROUND_COLOR} from '../assets/js/main'
  export default {
    name: 'Home',
    data() {
      return {
        nav_bgcolor: NAV_BACKGROUND_COLOR
      }
    },
    components: {
      LayoutHeader, LayoutNav, LayoutMain
    }
  }
</script>
