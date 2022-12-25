<template>
  <h4 v-if="requests.length === 0" class="text-center">No requests available</h4>
  <table v-else class="table">
    <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Amount</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "RequestTable",
  props: ['requests']
}
</script>

<style scoped>

</style>