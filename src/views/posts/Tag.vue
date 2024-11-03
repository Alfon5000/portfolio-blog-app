<template>
  <header
    class="masthead"
    style="background-image: url('assets/img/home-bg.jpg')"
  >
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="site-heading">
            <h1>Clean Blog</h1>
            <span class="subheading">Posts by Tag</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <div v-if="error">{{ error }}</div>
        <div v-if="postsWithTag.length > 0">
          <PostList :posts="postsWithTag" />
        </div>
        <div v-else>
          <Loading />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";
import Loading from "@/components/Loading";
import getPosts from "@/composables/getPosts";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Tag",
  components: { PostList, Loading },
  setup() {
    const { posts, error, load } = getPosts();
    const route = useRoute();

    load();

    const postsWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { postsWithTag, error };
  },
};
</script>
