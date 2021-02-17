<template>
  <div>
    <br />
    <v-card class="mx-auto" max-width="944">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search Blog"
        single-line
        hide-details
      ></v-text-field>
    </v-card>
    <br />
    <v-card
      v-for="blog in filteredBlogs"
      :key="blog"
      class="mx-auto"
      max-width="944"
    >
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
        <h5>Content: {{ blog.blog_content | snippet }}</h5>
      </v-card-subtitle>

      <v-card-actions>
        <a href="/create"
          ><v-btn @click="toggleUpdate(blog)" color="green lighten-1" text>
            Update
          </v-btn></a
        >
        <v-btn v-on:click="DeleteBlog(blog._id)" color="red lighten-1" text>
          Delete
        </v-btn>
      </v-card-actions>
    
      <!-- <v-alert
        :value="alert"
        color="blue"
        dark
        border="top"
        icon="mdi-home"
        transition="scale-transition"
      >
       </v-alert> -->
        <Comments></Comments>
     
       <br />
    </v-card>
  </div>
</template>

<script>
import Comments from "../components/comments";
export default {
  data() {
    return {
      alert: true,
      blogs: [],
      blog: {},
      search: ""
    };
  },
  components: {
    Comments
  },

  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },

  methods: {
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
