<template>
  <v-app dark id="app">
    <div class="box">
      <v-form ref="form" v-model="valid" lazy-validation>
        <h1 class="txt2">LOG IN</h1>

        <v-text-field
          v-model="login.email"
          type="email"
          :rules="emailRules"
          label="Enter Your E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="login.password"
          type="password"
          :rules="passwordRules"
          label="Enter Your Password"
          required
        ></v-text-field>

        <!-- <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox> -->

        <v-btn
          type="button"
          v-on:click="SubLogin"
          :disabled="!valid"
          color="success"
          class="mr-4"
          to="/Home" exact
        >
          Submit
        </v-btn>
      </v-form>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  // data: () => ({
  //   valid: true,
  //   email: '',
  //   emailRules: [
  //     v => !!v || 'E-mail is required',
  //     v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  //   ],
  //   password: '',
  //   passwordRules: [
  //     v => !!v || 'Password is required',
  //     v => (v && v.length <= 8) || 'Password must be less than 8 characters',
  //   ],
  //   select: null,
  //   checkbox: false,
  // })
  // ,

  methods: {
    SubLogin() {
      let URL = "https://guarded-bayou-13878.herokuapp.com/api/auth";
      let _data = this.login;
      console.log("login", this.login);
      fetch(URL, {
        method: "POST",
        body: JSON.stringify(_data),
        mode: "cors",
        headers: {
          "Content-type": "application/json",
          "Cache-Control": null,
          "X-Requested-With": null
          // "Access-Control-Allow-Origin": "*",
        }
      })
        .then(response => response.json())
        .then(json => {
          console.log("token->", json.token);
          window.localStorage.removeItem("token");
          window.localStorage.setItem("token", json.token);
        })
        .catch(err => console.log("err->", err));
    },

    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
<style scoped>
#app {
  background-color: #ffffff;
}
.box {
  align-items: center;
  padding: 80px;
}
.txt2 {
  text-align: center;
  color: #0c0c0b;
}
</style>
