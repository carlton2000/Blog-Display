<template>
  <v-app dark id="app">
    <div class="card">
    <div class="box">
      <v-form ref="form" v-model="valid" lazy-validation>
        <h1 class="txt2">SIGN UP</h1>
        <v-text-field
          v-model="register.name"
          :rules="nameRules"
          label="Enter Your Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="register.email"
          :rules="emailRules"
          label="Enter Your E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="register.password"
          :rules="passwordRules"
          label="Enter Your Password"
          required
        ></v-text-field>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <v-btn
          v-on:click="SubRegister"
          :disabled="!valid"
          color="success"
          class="mr-4"
          to="/Home" exact
        >
          Validate
        </v-btn>
      </v-form>
    </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      register: {
        name: "",
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
  //   name: '',
  //   nameRules: [
  //     v => !!v || 'Name is required',
  //     v => (v && v.length <= 30) || 'Name must be less than 30 characters',
  //   ],
  //   password: '',
  //   passwordRules: [
  //     v => !!v || 'Password is required',
  //     v => (v && v.length <= 8) || 'Password must be less than 8 characters',
  //   ],
  //   select: null,
  //   checkbox: false,
  // }),

  methods: {
    SubRegister() {
      let URL = "https://guarded-bayou-13878.herokuapp.com/api/users";
      let _data = this.register;
      console.log("register", this.register);
      fetch(URL, {
        method: "POST",
        body: JSON.stringify(_data),
        headers: {
          "Content-type": "application/json"
          // "Access-Control-Allow-Origin": "*"
        }
      })
        .then(response => response.json())
        .then(json => {
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
#app{
  background: grey;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
.box {
  align-items: center;
  padding: 80px;
}
.txt2 {
  text-align: center;
  color: #000000;
}
</style>
