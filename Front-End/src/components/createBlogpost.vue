<template>
  <div class="center">
    <br />
    <br />
    <v-card class="mx-auto" max-width="754">
      <v-snackbar v-model="snackbar" absolute top right color="success">
        <span>new blog post successfully added!</span>
        <v-icon dark>
          mdi-checkbox-marked-circle
        </v-icon>
      </v-snackbar>
      <v-form ref="form" @submit.prevent="submit">
        <h3 v-if="!edit">Create Blog</h3>
        <h3 v-if="edit">Update Blog</h3>
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="blog.title"
                :rules="rules.name"
                color="purple darken-2"
                label="Blog Title"
                required
              ></v-text-field>
              <v-text-field
                v-model="blog.hashtag"
                :rules="rules.name"
                color="blue darken-2"
                label="#TAG"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="blog.blog_content" color="teal">
                <template v-slot:label>
                  <div>Blog Content <small>(optional)</small></div>
                </template>
              </v-textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn text v-if="edit" v-on:click="UpdateBlog(blog._id)" type="">
            Update
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            v-if="!edit"
            v-on:click="handleAdd"
            text
            color="primary"
            type="submit"
          >
            Create Blog
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <br />
    <v-card v-for="blog in blogs" :key="blog" class="mx-auto" max-width="944">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="150px"
      ></v-img>

      <v-card-title>
        <h3>Title: {{ blog.title }}</h3>
      </v-card-title>
      <v-card-title>
        <h4>HashTags : {{ blog.hashtag }}</h4>
      </v-card-title>

      <v-card-subtitle>
        <h5>Content: {{ blog.blog_content }}</h5>
      </v-card-subtitle>

      <v-card-actions>
        <v-btn @click="toggleUpdate(blog)" color="green lighten-1" text>
          Update
        </v-btn>
        <v-btn v-on:click="DeleteBlog(blog._id)" color="red lighten-1" text>
          Delete
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">
              Today
            </div>

            <v-timeline align-top dense>
              <v-timeline-item
                v-for="message in messages"
                :key="message.time"
                :color="message.color"
                small
              >
                <div>
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      first: "",
      last: "",
      bio: "",
      favoriteAnimal: "",
      age: null,
      terms: false
    });

    return {
      form: Object.assign({}, defaultForm),
      blogs: [],
      blog: {},
      rules: {
        age: [val => val < 10 || `I don't believe you!`],
        animal: [val => (val || "").length > 0 || "This field is required"],
        name: [val => (val || "").length > 0 || "This field is required"]
      },
      animals: ["Dog", "Cat", "Rabbit", "Turtle", "Snake"],
      conditions: false,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
      snackbar: false,
      terms: false,
      defaultForm
    };
  },

  computed: {
    formIsValid() {
      return (
        this.form.first &&
        this.form.last &&
        this.form.favoriteAnimal &&
        this.form.terms
      );
    }
  },

  methods: {
    handleAdd() {
      let URL = "https://guarded-bayou-13878.herokuapp.com/api/blog";
      let _data = this.blog;
      // console.log("add", this.add)
      let token = window.localStorage.getItem("token");
      fetch(URL, {
        method: "POST",
        body: JSON.stringify(_data),
        headers: {
          "Content-type": "application/json",
          "x-auth-token": token
        }
      })
        .then(response => response.json())
        .then(json => {
          console.log("json->", json);
        })
        .catch(err => console.log("err->", err));
    },
    GetBlogs() {
      let URL = "https://guarded-bayou-13878.herokuapp.com/api/blog";
      // console.log("add", this.add)
      let token = window.localStorage.getItem("token");
      fetch(URL, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
          "x-auth-token": token
        }
      })
        .then(response => response.json())
        .then(json => {
          this.blogs = json;
        })
        .catch(err => console.log("err->", err));
    },
    DeleteBlog(_id) {
      // this.contacts.splice(key, 1)
      let URL = `https://guarded-bayou-13878.herokuapp.com/api/blog/${_id}`;
      let token = window.localStorage.getItem("token");

      fetch(URL, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "x-auth-token": token
        }
      })
        .then(response => response.json())
        .then(json => {
          console.log("json->", json);
          this.GetBlogs();
        })
        .catch(err => console.log("err->", err));
    },
    UpdateBlog(id) {
      let URL = `https://guarded-bayou-13878.herokuapp.com/api/blog/${id}`;
      let _data = this.blog;
      let token = window.localStorage.getItem("token");
      fetch(URL, {
        method: "PUT",
        body: JSON.stringify(_data),
        headers: {
          "Content-type": "application/json",
          "x-auth-token": token
        }
      })
        .then(response => response.json())
        .then(json => {
          console.log("json->", json);
          this.blog = {};
          this.edit = false;
          this.GetBlogs();
        })
        .catch(err => console.log("err->", err));
    },
    toggleUpdate(data) {
      this.edit = true;
      this.blog = data;
      console.log(JSON.stringify(this.blog));
    },

    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.snackbar = true;
      this.resetForm();
    }
  },
  created() {
    this.GetBlogs();
  },
  mounted() {
    this.GetBlogs();
  }
};
</script>

<style scoped>
.center {
  margin: auto;
  width: 60%;
}
</style>
