<template>
  <div class="">
    <div class="login">
      <div class="form-container">
        <img src="" alt="logo" class="logo">

        <h1 class="title">Email has been sent</h1>
        <p class="subtitle">Please check your inbox for instructions for how to active your account</p>
        <img src="../assets/icons/email.svg" alt="icon email" class="logo email-logo">
        <router-link :to="{name:'Login'}" class="button primary-button ">Back to login</router-link>
        <p >
          Don't receive the email?  <router-link :to="{name:'Register Successful'}" >Resend</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterMessage"
}
</script>

<style scoped>
a.button {
  text-decoration: none;
}

.email-logo {
  display: block !important;
}


</style>
