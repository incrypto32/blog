<template>
  <div class="main">
    <div>
    <div class="navbar">
      <nuxt-link to="/">Home</nuxt-link>|
      <nuxt-link to="/about">About</nuxt-link>
    </div>
    <nuxt />
    </div>
    <div class="footer">
      {{footer_content}}   
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return {
      footer_content :"© 2020, </> with ❤ by Krishnanand using Vue JS,Nuxt Js "
    }
  }
})
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-family: 'Playfair Display';
  background: rgb(255, 250, 242);
}
.main {
  min-height: 100vh;
  // border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
}
.footer {
   justify-self: flex-start;
   padding: 2rem;
  }
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  a {
    text-decoration: none;
    color: black;
    padding: 1rem;
    font-weight: 600;
  }
  .nuxt-link-active {
    color: green;
  }
}
.footer {
  text-align: center;
  letter-spacing: 1px;
}
@media (min-width: 600px) {
  body {
    display: flex;
    justify-content: center;
  }
  #__nuxt {
    width: 50%;
  }
}
</style>
