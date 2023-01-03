<template>
<app-page back title="Rates">
<exchange-item>

</exchange-item>
</app-page>
</template>

<script>
import AppPage from "../components/ui/AppPage.vue";
import ExchangeItem from "../components/rates/ExchangeItem.vue";

export default {
  name: "Rates",
  components: {ExchangeItem, AppPage}
}
</script>

<style scoped>

</style>