<template>
  <div>
    <h1>My blog posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <nuxt-link v-bind:to="getPermalink(post)">Blah</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script lang>
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
