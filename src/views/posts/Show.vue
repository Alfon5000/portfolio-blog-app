<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post">
    <header
      class="masthead"
      style="background-image: url('assets/img/post-bg.jpg')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="post-heading">
              <h1>{{ post.title }}</h1>
              <span class="post-meta" v-for="tag in post.tags" :key="tag">
                <router-link :to="{ name: 'Tag', params: { tag: tag } }">
                  #{{ tag }}&nbsp;
                </router-link>
              </span>
              <button class="btn btn-danger d-block mt-3" @click="handleDelete">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <p>{{ post.body }}</p>
          </div>
        </div>
      </div>
    </article>
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
import Loading from "@/components/Loading.vue";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useRouter } from "vue-router";

export default {
  props: ["id"],
  components: { Loading },
  setup(props) {
    const router = useRouter();
    const { post, error, load } = getPost(props.id);

    load();

    const handleDelete = async () => {
      await deleteDoc(doc(db, "posts", props.id));
      router.push({ name: "Home" });
    };

    return { post, error, load, handleDelete };
  },
};
</script>
