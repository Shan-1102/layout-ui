<!--  -->
<template>
  <div class="logo-box">

      <div class="demo-basic--circle" >
        <img class="logo-img" :src="squareUrl" >
      </div>
   <div class="grid-content bg-purple">
    vue admin plus
    </div>


  </div>
</template>

<script>
export default {
    name:"logo",
  data () {
    return {
         squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        // sizeList: ["large", "medium", "small"]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {

   
  }
}

</script>
<style  scoped>
/* *{
    margin:0  !important;
    padding:0 !important;
} */
 .bg-purple {
    background: hsl(212, 28%, 86%);
  }
   .grid-content {
    
    /* background:red; */
    height:50px;
    border-radius: 4px;
    min-height: 36px;
    /* line-height:36px; */
    display: inline-block;
    margin-left: 5px;
    overflow: hidden;
    font-size: 20px;
    line-height: 55px;
    color: #fff;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    vertical-align: middle;
    margin-top:8%;
  }
  .demo-basic--circle{
    width:50px;
    height:50px;
    /* position:absolute; */
    margin-top:8%;
    margin-left:2%
  }
  .demo-basic--circle>.logo-img{
    width:100%;
    height:100%
  }
.logo-box{
   display:flex;
   width:200px;
   height:80px;
   justify-content: flex-start;
   background:#2c3e50;
}

</style>