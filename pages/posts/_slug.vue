<template>
  <div>
    <h1>Create a frontmatter Markdown powered Blog with Nuxt.JS</h1>
    <component :is="singlePostComponent" />
    
  </div>
</template>
<script>
export default {
  async asyncData({ params }) {
    try {
      console.info(params.slug);
      let post = await import(`~/content/${params.slug}.md`);
     console.log(post.html)
      return {
        title: post.attributes.title,
        singlePostComponent: post.vue.component,
        htmlP:post.html
       
      };
    } catch (err) {
      console.debug(err);
      return false;
    }
  }
};
</script>