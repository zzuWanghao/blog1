<template>
  <div id="app">
<Header id="header"></Header>
    <main id="main">
    <router-view/>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
  import Header from './components/header.vue'
  import Footer from './components/footer.vue'
export default {
  components:{
    Header:Header,
    Footer

  }

}
</script>

<style lang="less">

@import "./assets/common.less";

#app {
  //text-align: center;
  display: grid;
  grid-template-columns: 12% 1fr 12%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header header header"
                       ".      main      ."
                       "footer footer footer";
  #header{
    grid-area: header;
    padding-left: 12%;
    padding-right: 12%;
  }
  #main{
    grid-area: main;
  }
  #footer{
    grid-area: footer;
    padding-left: 12%;
    padding-right: 12%;
  }

}
@media(max-width: 768px){
  #app{
    grid-template-columns: 10px 1fr 10px;


  }
  #app>#footer,#app>#header {
    padding-left: 10px;
    padding-right: 10px;

  }
}

</style>
