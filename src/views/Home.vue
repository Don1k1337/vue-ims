<template>
  <app-loader v-if="loading"/>
  <app-page v-else title="List of requests">
    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>
    <request-table :requests="requests"></request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Create request" @close="modal = false">
        <request-modal @created="modal = false"/>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import AppPage from '../components/ui/AppPage.vue'
import RequestTable from "../components/requests/RequestTable.vue";
import AppModal from "../components/ui/AppModal.vue";
import RequestModal from "../components/requests/RequestModal.vue";
import {ref, computed, onMounted} from "vue";
import {useStore} from "vuex";
import AppLoader from "../components/ui/AppLoader.vue";

export default {
  name: 'Home',
  setup() {
    const modal = ref(false)
    const store = useStore()
    const loading = ref(false)

    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })
    const requests = computed(() => store.getters['request/requests'])
    return {
      modal,
      requests,
      loading
    }
  },
  components: {
    AppLoader,
    RequestTable,
    AppPage,
    AppModal,
    RequestModal
  }
}
</script>
