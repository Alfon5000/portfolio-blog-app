<template>
  <div v-for="post in posts" :key="post.id">
    <div class="post-preview">
      <PostItem :post="post" />
    </div>
    <hr class="my-4" />
  </div>
</template>

<script>
import PostItem from "@/components/posts/PostItem";

export default {
  name: "PostList",
  components: { PostItem },
  props: ["posts"],
};
</script>
