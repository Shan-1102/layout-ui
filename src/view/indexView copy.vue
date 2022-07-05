<template>
  <div>
<el-container>
  <el-aside width="200px">
    
    <el-col :span="23" class="aside-content">
      <div style="height:100px">
      <logo></logo>
      </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <div class="main-content"></div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
  </div>
</template>

<script>
import logo from '@/components/headLogo.vue'
export default {
  name:"index",
 components: {logo },
  data () {
    return {
       isCollapse: true
    };
  },

  // components: {},

  computed: {},

  mounted: {
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
       handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },

  methods: {}
}

</script>
<style scoped>
.el-aside{
  overflow:hidden;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    
  }
  .el-header{
   
    position:absolute;
    height:60px;
    z-index:-1;
    top:0;
    right:0;
     /* width:98% */
     left:200px;
  }
  
  .el-footer{
    position:absolute;
    z-index:-1;
    bottom:0;
    right:0;
    height:60px;
    /* width:80%; */
    left:200px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /* height: 700px; */
    display:block;
    position:absolute;
    left:0;
    top:0;
    bottom:0
  }
  
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    display:block;
    position:absolute;
    top:60px;
    bottom:60px;
    z-index:-1;
    right:0;
    left:200px;
    height:90%;
   
  }

 .main-content{
   width:80px;
   height:80%;
   background-color:red;
 }
  body > .el-container {
     
    position:relative;
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.el-menu{
background:#2c3e50;
text-align: left;
position:absolute;
height:90%
}
</style>