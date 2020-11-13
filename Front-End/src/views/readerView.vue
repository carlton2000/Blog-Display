<template>
  <v-app>
    <fNavIn msg="Welcome to Your Vue.js App" />
    <v-main>
      <fblogpost></fblogpost>
    </v-main>
  </v-app>
</template>
<script>
// @ is an alias to /src
import fNavIn from "@/components/fNavIn.vue";
import fblogpost from "@/components/fblogposts.vue";

export default {
  name: "Home",
  components: {
    fNavIn,
    fblogpost
  }
};
</script>
