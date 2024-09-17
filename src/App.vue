<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  
  <!-- <SignUp /> -->
  <HeaderComponent />
  <router-view />
</template>

<script>
// import  SignUp from './components/SignUp.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default{
  name:'App',
  components:{
    // SignUp
    HeaderComponent
  }
}



</script>



<style>
#app {
  all:initial;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0%;
  padding:0%;

}
body{
   margin:0%;
  padding:0%;
}
</style>
