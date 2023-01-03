<template>
<the-navbar />
<the-sidebar />
  <div class="container with-nav">
    <app-message />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import AppMessage from "../components/ui/AppMessage.vue";
import TheSidebar from "../components/TheSidebar.vue";
export default {
  name: "MainLayout",
  components: {AppMessage, TheNavbar, TheSidebar},
}
</script>

<style scoped>

</style>