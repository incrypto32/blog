<template>
  <div class="post-page">
    <div class="heading">
      <h1>{{ title }}</h1>
      <span class="date">{{ date }}</span>
      <p class="tags">
        <span v-for="tag in post.attributes.tags" :key="tag" class="tag"
          >#{{ tag }}</span
        >
      </p>
    </div>

    <div class="content"><component :is="singlePostComponent" /></div>
  </div>
</template>
<script>
export default {
  async asyncData({ params }) {
    try {
      console.info(params.slug)
      let post = await import(`~/content/${params.slug}.md`)
      console.log(post.html)
      return {
        post:post,
        title: post.attributes.title,
        date: post.attributes.date,
        singlePostComponent: post.vue.component,
        htmlP: post.html
      }
    } catch (err) {
      console.debug(err)
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.post-page {
  // border: 20px black solid;
  padding: 1rem;
  text-align: center;
  .heading {
    text-align: center;
    color: rgb(2, 97, 89);
    padding: 1rem;
   
    .date {
      color: black;
    }
    .tags {
      padding: 10px 0px;
      text-align: content;
      .tag {
        margin: 0px 5px;
        padding: 1px;
        background: rgb(85, 202, 105);
        border-radius: 3px;
      }
    }
  }

  .content {
    margin-top: 2rem;
    text-align: left;
  }
}
</style>
