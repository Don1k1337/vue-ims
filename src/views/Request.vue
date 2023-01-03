<template>
  <div>
    <app-loader v-if="loading"/>
    <app-page back title="Request" v-else-if="request">
      <p><strong>Client name</strong>: {{ request.name }}</p>
      <p><strong>Phone</strong>: {{ request.phone }}</p>
      <p><strong>Amount</strong>: {{ currency(request.amount) }}</p>
      <p><strong>Status</strong>: <app-status :type="request.status"></app-status></p>
      <div class="form-control">
        <label for="status">Status</label>
        <select id="status" v-model="status">
          <option value="done">Done</option>
          <option value="cancelled">Canceled</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <button class="btn danger" @click="remove">Delete</button>
      <button class="btn" @click="update" v-if="hasChanges">Update</button>
    </app-page>
    <h3 v-else class="text-center text-white">
      Request with the ID = {{id}} not found
    </h3>
  </div>
</template>

<script>
import AppPage from "../components/ui/AppPage.vue";
import {useRoute, useRouter} from "vue-router";
import {ref, onMounted, computed} from 'vue';
import {useStore} from "vuex";
import AppStatus from "../components/ui/AppStatus.vue";
import AppLoader from "../components/ui/AppLoader.vue";
import {currency} from "../utils/currency";

export default {
  setup() {
    const loading = ref(true)
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const status = ref()
    const request = ref({})

    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('request/loadById', route.params.id)
      status.value = request.value?.status
      loading.value = false
    })

    const hasChanges = computed(() => request.value.status !== status.value)

    const remove = async () => {
      await store.dispatch('request/remove', route.params.id)
      await router.push('/')
    }
    const update = async () => {
      const data = {...request.value, status: status.value, id: route.params.id}
      await store.dispatch('request/update', data)
      request.value.status = status.value
    }
    return {
      loading,
      request,
      id: route.params.id,
      currency,
      remove,
      update,
      status,
      hasChanges
    }
  },
  components: {AppPage, AppStatus, AppLoader}
}
</script>
