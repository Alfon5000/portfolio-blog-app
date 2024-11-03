<template>
  <header
    class="masthead"
    style="background-image: url('assets/img/contact-bg.jpg')"
  >
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="page-heading">
            <h1>Create New Post</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main class="mb-4">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="my-5">
            <form @submit.prevent="handleSubmit">
              <div class="form-floating">
                <input
                  class="form-control"
                  id="title"
                  type="text"
                  placeholder="Enter post title..."
                  v-model="title"
                />
                <label for="title">Post Title</label>
              </div>
              <div class="form-floating">
                <textarea
                  class="form-control"
                  id="body"
                  placeholder="Enter post body..."
                  style="height: 12rem"
                  v-model="body"
                ></textarea>
                <label for="body">Post Body</label>
              </div>
              <div class="form-floating">
                <input
                  class="form-control"
                  id="tag"
                  type="text"
                  placeholder="Enter post tag..."
                  v-model="tag"
                  @keydown.enter.prevent="handleKeydown"
                />
                <label for="tag">Post Tags</label>
                <span v-for="tag in tags" :key="tag">#{{ tag }}&nbsp;</span>
              </div>
              <br />
              <button class="btn btn-primary text-uppercase" type="submit">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { db } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default {
  name: "CreatePost",
  setup() {
    const router = useRouter();

    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g, "");
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };

      await addDoc(collection(db, "posts"), post);

      router.push({ name: "Home" });
    };

    return { title, body, tag, tags, handleKeydown, handleSubmit };
  },
};
</script>
