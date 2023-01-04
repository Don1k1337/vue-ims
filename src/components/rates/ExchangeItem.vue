<template>
  <div class="card">
    <div class="card-title">
      <p>Amount value: <small>{{amount}}</small></p>
      <p>Convert from: <small>{{from}}</small></p>
      <p>Convert to: <small>{{to}}</small></p>
      <p v-if="result">Result: <small>{{result}}</small></p>
    </div>
    <button @click="convert">Convert</button>
  </div>
</template>

<script>

import fetchData, {resultedValue} from "../../fetch/exchangeRequest";
import {ref} from "vue";

export default {
  name: "ExchangeRate",
  setup() {
    // Mock data
    const to = 'RUB'
    const from = 'KGS'
    const amount = 1000
    const result = ref(null)
    const convert = async () => {
      await fetchData(to, from, amount);
      result.value = resultedValue[0].result
    };
    return {
      to,
      from,
      amount,
      convert,
      result
    }

  }

}
</script>

<style scoped>

</style>