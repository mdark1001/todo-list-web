<template>
  <div class="about">
    <h1>Welcome {{ user.username }}</h1>
  </div>
</template>
<script>
// @ is an alias to /src


export default {
  name: 'About',
  computed: {
     user:function () {
       return this.$store.state.user
     }
  }
}
</script>
