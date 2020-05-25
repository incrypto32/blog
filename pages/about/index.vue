<template>
  <div class="about-page">
    <h3>To Know More About Me Find Me here at these places 👇</h3>
    <div class="social">
      <a href=""> <i class="icon-github-circled"></i></a>

      <a href=""><i class="icon-instagram"></i></a>

      <a href=""><i class="icon-linkedin-squared"></i></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-page {  
  padding: 2rem;
//   border: 2px white solid;
  display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    text-align: center;
  }
  .social {
    margin:1rem;
    font-size: 2rem;
    a {
      text-decoration: none;
      color:inherit;
      padding: 0.5rem;
    }
  }
}
</style>
