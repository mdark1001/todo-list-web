<template>
  <div class="login">
    <div class="form-container">
      <img src="" alt="logo" class="logo">

      <h1 class="title">Start session</h1>
      <p class="subtitle">Enter your username and password for begin this aventure</p>
      <p class="alert alert-error" v-show="show">{{ message }} </p> 
      <form action="/" class="form">
        <label for="username" class="label">Username</label>
        <input type="text" id="username" v-model="username" placeholder="Jul1342" class="input ">

        <label for="new-password" class="label">Password</label>
        <input type="password" v-model="password" id="new-password" placeholder="*********"
               class="input input-password">
        <input type="submit" value="Login" @click="login" class="primary-button login-button">
        <hr class="separator"/>
        <p class="text-center">o
          <router-link :to="{name:'Register'}">Create an account</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
const url = 'http://127.0.0.1:8000/api/users/login/'


export default {
  name: "Login",
  data: function () {
    return {
      username: 'mdark',
      password: 'qwerty',
      show:false,
      message:''
    };
  },
  methods: {
    login: function (ev) {
      ev.preventDefault()
      /*Validar los datos*/
      axios.post(url,{
        'username':this.username,
        'password':this.password,
      }).then(response=>{
        console.log(response.data);
        console.log(this.$store)
        this.$store.commit('set_totken',response.data.access_token)
        this.$store.commit('set_user',response.data.user)
        //if(this.$store.get_token!=undefined){
        this.$router.push('/tasks')
        //}
      }).catch(err=>{
        console.log(err)
        this.message = err.response.data?.non_field_errors.join(",");
        this.show = true;
        setTimeout(()=> this.show = false,3000)
      })

    }
  }
}
</script>

<style scoped>

</style>
