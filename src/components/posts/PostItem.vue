<template>
  <router-link :to="{ name: 'ShowPost', params: { id: post.id } }">
    <h2 class="post-title">
      {{ post.title }}
    </h2>
    <h3 class="post-subtitle">
      {{ snippet }}
    </h3>
  </router-link>
  <span class="post-meta" v-for="tag in post.tags" :key="tag">
    <router-link :to="{ name: 'Tag', params: { tag: tag } }">
      #{{ tag }}&nbsp;
    </router-link>
  </span>
</template>

<script>
import { computed } from "vue";

export default {
  name: "PostItem",
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 50) + "...";
    });

    return { snippet };
  },
};
</script>
