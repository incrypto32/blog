<template>
  <div class="wrapper" v-bind:class="{ dark: darkMode }">
    <div class="main">
      <div>
        <div class="navbar">
          <nuxt-link to="/">Home</nuxt-link>|
          <nuxt-link to="/about">About</nuxt-link>
        </div>
        <div class="toggle-button">
          <label class="switch-wrap">
            <input type="checkbox" v-model="darkMode" />
            <div class="switch"></div>
          </label>
        </div>
        <nuxt />
      </div>
      <div class="footer">
        {{ footer_content }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      darkMode: true,
      footer_content: '© 2020, </> with ❤️ by Krishnanand using Nuxt Js '
    }
  }
}
</script>
<style lang="scss">

$darkColors: (
  'background': #121212
);
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
.wrapper {
  width: 100%;
  // background: #121212;
}
.footer {
  justify-self: flex-start;
  padding: 2rem;
}
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
    padding: 1rem;
    font-weight: 600;
  }
  .nuxt-linkexact-active {
    color: green;
  }
}
.footer {
  text-align: center;
  letter-spacing: 1px;
}

.wrapper.dark {
  background: #0d030f;
  color: white;
  .navbar {
    a {
      color: white;
    }
    .nuxt-link-exact-active {
      color: #3eaf7c;
    }
  }
}

@media (min-width: 600px) {
  .wrapper {
    display: flex;
    justify-content: center;
    .main {
      width: 50%;
    }
  }
}

// Dark Mode Switch

$width: 30px;
$padding: 2px;
$height: $width / 2 + $padding;
.toggle-button {
  display: flex;
  justify-content: center;
}
.switch-wrap {
  display: block;
  cursor: pointer;
  background: #15273b;

  padding: $padding;
  width: $width;
  height: $height;
  border-radius: $height / 2;
  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
}
.switch {
  height: 100%;
  display: grid;
  grid-template-columns: 0fr 1fr 1fr;
  transition: 0.2s;
  //ICYMI, pseudo elements are treated as grid items
  &::after {
    content: '';
    border-radius: 50%;
    background: #ccc;
    grid-column: 2;
    transition: background 0.2s;
  }
}
input:checked {
  + .switch {
    grid-template-columns: 1fr 1fr 0fr;
    &::after {
      background-color: #52cf71;
    }
  }
}

code {
  color:white;
  margin: 1rem;
  border-radius: .5rem;
  background:rgb(17, 16, 16);
  padding:1rem;
  display: block;
}
</style>
