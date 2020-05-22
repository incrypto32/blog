<template>
<div>
  <div class="navbar">
      <nuxt-link to="/">Home</nuxt-link>|
      <nuxt-link to="/about">About</nuxt-link>
    </div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap");
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  font-family: "Playfair Display";
}
.__nuxt{
  width: 100%;
  .__layout{
    width:100%;
  }
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
</style>


