<template>
  <select v-model="status">
    <option>Choose status</option>
    <option v-for="option in options" :value="option.text">{{ option.text }}</option>
  </select>
</template>

<script>
export default {
  name: "RequestStatus",
  setup() {
    return {
      status: '',
      options: [
        {value: 'done', text: 'Done'},
        {value: 'cancelled', text: 'Cancelled'},
        {value: 'active', text: 'Active'},
        {value: 'pending', text: 'Pending'}
      ]
    }
  }
}
</script>