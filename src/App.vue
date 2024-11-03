<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
