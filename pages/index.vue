<template>
  <div>
    
    <div class="about-section">
      <img src="/assets/images/me.png" />
      <div>
      <p>
        Hey there you have reached the personal blog of
        <span class="myname">Krishnanand V P</span>  a Cs
        Undergrad at
        <span class="college"
          ><a href="http://gectcr.ac.in">GEC Thrissur</a></span
        >, Zealous Tech Enthusiast, Reader and Music Lover.
       
      </p>
      </div>
    </div>
    <div class="posts">
      <div class="post" v-for="post in posts" :key="post.attributes.title">
        <nuxt-link v-bind:to="getPermalink(post)" class="post-title">{{
          post.attributes.title
        }}</nuxt-link>
        <p>{{ post.attributes.date }},
           <!-- <span class="read"> 2min Read</span> -->
           </p>

        <p class="tags">
          <span v-for="tag in post.attributes.tags" :key="tag" class="tag"
            >#{{ tag }}</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  async asyncData() {
    const resolve = require.context('~/content/', true, /\.md$/)

    const imports = resolve.keys().map(fileName => {
      const [, name] = fileName.match(/\/(.+)\.md$/)
      return resolve(fileName)
    })
    console.log(imports)

    return {
      posts: imports
    }
  },
  data() {
    return {
      prefix: 'posts'
    }
  },
  methods: {
    getPermalink(post) {
      return `${this.prefix}/${
        post.meta.resourcePath
          .split('\\')
          .pop()
          .split('/')
          .pop()
          .split('.')[0]
      }`
    }
  }
}
</script>

<style lang="scss" scoped>

.about-section {
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  letter-spacing: 1px;
  img {
    width: 30%;
    margin: 1rem;
  }
  .myname {
    color: rgb(81, 181, 194);
  }
  .college {
    a {
      text-decoration: none;
      color: rgb(243, 174, 231);
    }
  }
}
.posts {
  padding: 1rem;
  width: 100%;
  // border:2px solid brown;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .post {
    padding: 1rem;
    width: 100%;
    .post-title {
      font-size: 22px;
      text-decoration: none;
      font-weight: bold;
      color: rgb(236, 47, 47);
    }
    .read {
      color: rgb(5, 53, 116);
      padding: 1px;
    }
    .tags {
      padding: 10px 0px;
      .tag {
        margin: 0px 5px;
        padding: 1px;
        background: rgb(85, 202, 105);
        border-radius: 3px;
      }
    }
  }
}
.wrapper.dark{
  .post-title{
    color: rgb(250, 140, 90);
  }
  .myname {
    color: rgb(81, 181, 194);
  }
  .college {
    a {
      text-decoration: none;
      color: rgb(243, 174, 231);
    }
  }
}
@media (min-width: 600px) {
.about-section {
  flex-direction: row;
  text-align: left;
  font-size: 16px;
  img{
    padding: 0;
    margin: 0 10px 0 0;
    width: 150px;
  }
}
}
</style>
