<template>
  <header :class="{login:isLogin,'no-login':!isLogin}">
<template v-if="!isLogin">

  <h1>LET'S SHARE</h1>
  <P>精品博客汇聚</P>
  <div class="buttons">
    <router-link to="/login"><el-button>立即登录</el-button></router-link>
    <router-link to="/register"><el-button>注册账号</el-button></router-link>
  </div>
</template>
  <template v-if="isLogin">

    <h1>
     <router-link to="/">LET'S SHARE</router-link>
    </h1>
   <router-link to="/create"> <i class="edit el-icon-plus"></i> </router-link>

    <div class="user">
    <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
    <ul>
      <li><router-link to="/mine">我的</router-link></li>
      <li><a href="#" @click="onLogout">注销</a></li>
    </ul>
    </div>
  </template>

  </header>
</template>

<script>
import auth from "../api/auth";
window.auth = auth

import {mapGetters ,mapActions} from 'vuex'
export default {
  data(){
    return{
      //isLogin:true
    }
  },
  computed: {
    ...mapGetters([
      'isLogin',
      'user'
    ])
  },
  created() {
    this.checkLogin()
  },
  methods:{

    ...mapActions([
        'checkLogin',
        'logout'
    ]),
    onLogout(){
      this.logout()
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/base.less";

header.no-login{
  text-align: center;
  justify-items: center;
  padding:0 12% 30px 12%;
  background:@bgColor;
  h1{
    color: #fff;
    font-size: 40px;
    margin: 60px 0 0 0;
    text-transform: uppercase;

  }

  p{

    margin: 15px 0 0 0;
    color: #fff;
  }

  button{
    margin: 30px 5px 0;
  }
}


header.login{

  align-items: center;
  background:@bgColor;
  display: flex;
  h1{

    font-size: 40px;
    margin: 10px 0 ;
    text-transform: uppercase;
    flex: 1;

    a{
      color: #fff;
    }
  }

  .edit{

    color: #fff;
    font-size: 35px;
  }
  p{
    margin: 15px 0 0 0;
    color: #fff;
  }

  button{
    margin: 30px 5px 0;
  }
  .avatar{
    width:40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }


  .user {
    position: relative;

    ul {
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border: 1px solid #eaeaea;
      margin:0;
      padding: 0;
      background-color: #fff;

      a {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        display: block;
        padding: 5px 10px;

        &:hover {
          background-color: #eaeaea;
        }
      }

    }

    &:hover ul {
      display: block;
    }
  }
}



</style>












