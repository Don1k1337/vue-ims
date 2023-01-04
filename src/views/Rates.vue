<template>
  <app-message />

<app-page back title="Rates">
<exchange-item>

</exchange-item>
</app-page>
</template>

<script>
import AppPage from "../components/ui/AppPage.vue";
import ExchangeItem from "../components/rates/ExchangeItem.vue";
import AppMessage from "../components/ui/AppMessage.vue";

export default {
  name: "Rates",
  components: {ExchangeItem, AppPage, AppMessage}
}
</script>

<style scoped>

</style>