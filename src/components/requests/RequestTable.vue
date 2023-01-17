<template>
  <div v-if="requestsChecker">
    <h4 class="text-center">No requests available</h4>
  </div>
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
      <td>{{ req.phone }}</td>
      <td>{{ currency(req.amount) }}</td>
      <td>
        <app-status :type="req.status"/>
      </td>

      <td>
        <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: req.id}}">
          <button class="btn" @click="navigate">Open</button>
        </router-link>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {currency} from "../../utils/currency";
import AppStatus from "../ui/AppStatus.vue";


export default {
  name: "RequestTable",
  props: ['requests'],
  setup() {
    return {currency}
  },
  computed: {
    requestsChecker() {
      return this.requests.length === 0;
    }
  },
  components: {AppStatus}
}
</script>