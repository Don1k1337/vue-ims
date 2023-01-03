<template>
  <div class="container">
    <app-message></app-message>
      <router-view />
  </div>
</template>

<script>
import AppMessage from "../components/ui/AppMessage.vue";
export default {
  name: "AuthLayout",
  components: {AppMessage}
}
</script>

<style scoped>

</style>