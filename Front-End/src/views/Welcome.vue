<template>
  <div>
    <v-app dark id="app">
      <Nav />
      <v-main>
        <br />
        <br />
        <br />
        <div class="text-center">
          <h1 class="txt4">Welcome to Bloggy</h1>
          <p class="txt5">Where real people write about real things, really.</p>
        </div>
        <br />
        <br />

        <v-row no-gutters>
          <v-col>
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="mx-auto" max-width="300">
                  <v-img
                    src="https://wallpapercave.com/wp/wp6688373.jpg"
                    height="170"
                  ></v-img>

                  <v-card-title>
                    <v-rating
                      :value="5"
                      dense
                      color="orange"
                      background-color="orange"
                      hover
                      class="mr-2"
                    ></v-rating>
                  </v-card-title>

                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="#036358">
                      <v-btn>Work</v-btn>
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </template>
            </v-hover>
          </v-col>
          <v-col order="12">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="mx-auto" max-width="300">
                  <v-img src="https://wallpapercave.com/wp/u9AVLry.jpg"></v-img>

                  <v-card-title>
                    <v-rating
                      :value="5"
                      dense
                      color="orange"
                      background-color="orange"
                      hover
                      class="mr-2"
                    ></v-rating>
                  </v-card-title>

                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="#036358">
                      <v-btn>Nature</v-btn>
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </template>
            </v-hover>
          </v-col>
          <v-col order="1">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="mx-auto" max-width="300">
                  <v-img src="https://wallpapercave.com/wp/Rfpbz9q.jpg"></v-img>

                  <v-card-title>
                    <v-rating
                      :value="5"
                      dense
                      color="orange"
                      background-color="orange"
                      hover
                      class="mr-2"
                    ></v-rating>
                  </v-card-title>

                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="#036358">
                      <v-btn>Sports</v-btn>
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
        <br />
        <div class="my-2 text-center">
          <a href="/signup"><v-btn color="primary" dark>Sign Up</v-btn></a>
        </div>
        <br />
        <div class="my-3 text-center">
          <a href="/signin"><v-btn color="primary" dark>Log In</v-btn></a>
        </div>
      </v-main>
    </v-app>
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default {
  name: "Home",
  components: {
    Nav
  }
};
</script>

<style scoped>
.txt4 {
  font-family: "Turret Road", cursive;
}
.txt5 {
  font-family: "Xanh Mono", monospace;
}
#app {
  background-color: #daedff;
}
</style>
