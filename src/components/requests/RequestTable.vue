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
    <tr v-for="(req, idx) in requests" :key="req.id">
      <td>{{ idx + 1 }}</td>
      <td>{{ req.name }}</td>
      <td>{{ req.amount }}</td>
      <td>{{ req.phone }}</td>
      <td>{{ req.status }}</td>
      <!--
      Actions will be here soon
             <td>
                <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: req.id}}">
                  <button class="btn primary" @click="navigate">Open</button>
                </router-link>
              </td>
       -->
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