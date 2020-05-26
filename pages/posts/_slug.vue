<template>
  <div class="post-page">
    <div class="heading">
      <h1>{{ title }}</h1>
      <span class="date">{{ date }}</span>
      <p class="tags">
        <span v-for="tag in tags" :key="tag" class="tag">#{{ tag }}</span>
      </p>
    </div>

    <div class="content" v-html="singlePostComponent"></div>
  </div>
</template>
<script>
export default {
  async asyncData({ params }) {
    console.log('asyncDataCalled')
    try {
      console.info(params.slug)
      let post = await import(`~/content/posts/${params.slug}.md`)

      return {
        post: post,
        tags: post.attributes.tags,
        title: post.attributes.title,
        date: post.attributes.date,
        singlePostComponent: post.html
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
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
        background: rgb(174, 235, 184);
        border-radius: 3px;
      }
    }
  }

  .content {
    margin-top: 2rem;
    text-align: left;
  }
}
.wrapper.dark {
  .post-page {
    .heading {
      color: rgb(255, 119, 119);
    }
    .date {
      color: white;
    }
    .tag {
      color: black;
    }
  }
}
</style>
