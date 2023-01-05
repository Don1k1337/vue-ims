<template>
  <app-loader v-if="loading" />
  <div v-if="!loading">
    <div class="form-control">
      <label for="amount">Amount:</label>
      <input type="number" min="1" id="amount" v-model.number="amount">
    </div>
    <div class="form-control">
      <label for="from">From:</label>
      <select id="from" v-model="from">
        <option disabled>Choose a currency</option>
        <option value="RUB">Russian Ruble</option>
        <option value="USD">USD</option>
        <option value="EUR">Euro</option>
        <option value="KGS">Kyrgyzstani Som</option>
      </select>
    </div>
    <div class="form-control">
      <label for="to">To:</label>
      <select id="to" v-model="to">
        <option disabled>Choose a currency</option>
        <option value="RUB">Russian Ruble</option>
        <option value="USD">USD</option>
        <option value="EUR">Euro</option>
        <option value="KGS">Kyrgyzstani Som</option>
      </select>
    </div>
    <p v-if="result">Result: <small>{{ result }}</small></p>
    <button class="btn primary" @click="convert">Convert</button>
  </div>
</template>

<script>
import fetchData, {resultedValue} from "../../fetch/exchangeRequest";
import {ref} from "vue";
import AppLoader from "../ui/AppLoader.vue";
export default {
  name: "ExchangeRate",
  setup() {
    const to = ref(null)
    const from = ref(null)
    const amount = ref(null)
    const result = ref(null)
    const loading = ref(false)
    const convert = async () => {
      loading.value = true
      await fetchData(to.value, from.value, amount.value);
      result.value = resultedValue[0].result
      loading.value = false
    };
    return {
      to,
      from,
      amount,
      convert,
      result,
      loading
    }
  },
  components: {AppLoader}
}
</script>