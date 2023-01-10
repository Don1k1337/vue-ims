<template>
  <app-message />
<app-loader v-if="loading"/>
<app-page back v-else title="Rates">
<exchange-item>

</exchange-item>
</app-page>
</template>

<script>
import AppPage from "../components/ui/AppPage.vue";
import ExchangeItem from "../components/rates/ExchangeItem.vue";
import AppMessage from "../components/ui/AppMessage.vue";
import AppLoader from "../components/ui/AppLoader.vue";

export default {
  name: "Rates",
  props: ['loading'],
  components: {AppLoader, ExchangeItem, AppPage, AppMessage}
}
</script>

<style scoped>

</style>