<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <h1>Blog-Display</h1>
    </div>
    <v-spacer></v-spacer>
    <v-btn to="/create" exact>
      <span class="mr-2">Create Blog</span>
      <v-icon>mdi-post</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn to="/" exact>
      <span class="mr-3">Logout</span>
      <v-icon>mdi-door</v-icon>
    </v-btn> 
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
