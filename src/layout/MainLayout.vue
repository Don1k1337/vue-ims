<template>
<the-navbar></the-navbar>
  <div class="container with-nav">
    <app-message />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import AppMessage from "../components/ui/AppMessage.vue";
export default {
  name: "MainLayout",
  components: {AppMessage, TheNavbar},
}
</script>

<style scoped>

</style>