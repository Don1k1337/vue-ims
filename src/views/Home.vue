<template>
  <app-page title="List of requests">
    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>
    <request-table :requests="[]"></request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Create request" @close="modal = false">
        <request-modal />
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import AppPage from '../components/ui/AppPage.vue'
import RequestTable from "../components/requests/RequestTable.vue";
import AppModal from "../components/ui/AppModal.vue";
import RequestModal from "../components/requests/RequestModal.vue";
import {ref} from "vue";

export default {
  name: 'Home',
  setup() {
    const modal = ref(false)
    return {
      modal
    }
  },
  components: {
    RequestTable,
    AppPage,
    AppModal,
    RequestModal
  }
}
</script>
