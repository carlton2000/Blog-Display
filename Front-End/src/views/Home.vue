<template>
  <v-app>
    <NavIn msg="Welcome to Your Vue.js App" />
    <v-main>
      <blogpost></blogpost>
    </v-main>
  </v-app>
</template>
<script>
// @ is an alias to /src
import NavIn from "@/components/NavIn.vue";
import blogpost from "@/components/blogposts.vue";

export default {
  name: "Home",
  components: {
    NavIn,
    blogpost
  }
};
</script>
