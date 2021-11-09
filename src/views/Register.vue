<template>
  <div class="login">
    <div class="form-container">
      <img src="" alt="logo" class="logo">

      <h1 class="title">Register</h1>
      <p class="subtitle">Enter your information</p>

      <form action="/" class="form">
        <label for="name" class="label">Name</label>
        <input type="text" id="name" v-model="name" placeholder="Michael" class="input ">
        <label for="username" class="label">Username</label>
        <input type="text" id="username" v-model="username" placeholder="Jul1342" class="input ">
        <label for="email" class="label">Email</label>
        <input type="text" id="email" v-model="email" placeholder="michael@example.com" class="input ">
        <label for="new-password" class="label">Password</label>
        <input type="password" v-model="password" id="new-password" placeholder="*********"
               class="input input-password">
        <label for="password_confirmation" class="label">Confirm Password</label>
        <input type="password" v-model="password_confirmation" id="password_confirmation" placeholder="*********"
               class="input input-password">
        <input type="submit" value="Register" @click="register" class="primary-button login-button">
        <hr class="separator"/>
        <p class="text-center">o <router-link :to="{name:'Login'}">Start session</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data:function(){
    return {
      username: "",
      password: "",
      password_confirmation:"",
      name: "",
      email: "",
    }
  },
  methods: {
    register:function(ev){
      ev.preventDefault();
      this.$router.push('/register-message')
    }
  }
}
</script>

<style scoped>

</style>
