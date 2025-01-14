import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CreatePost from "../views/posts/Create.vue";
import ShowPost from "../views/posts/Show.vue";
import Tag from "../views/posts/Tag.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts/create",
    name: "CreatePost",
    component: CreatePost,
  },
  {
    path: "/posts/:id",
    name: "ShowPost",
    component: ShowPost,
    props: true,
  },
  {
    path: "/tags/:tag",
    name: "Tag",
    component: Tag,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
