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
      <td>{{ currency(req.amount) }}</td>
      <td>{{ req.phone }}</td>
      <td>
        <app-status :type="req.status" />
      </td>
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
import {currency} from "../../utils/currency";
import AppStatus from "../ui/AppStatus.vue";

export default {
  name: "RequestTable",
  props: ['requests'],
  setup() {
    return {currency}
  },
  components: {AppStatus}
}
</script>
