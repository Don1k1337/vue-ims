<template>
  <div>
    <app-loader v-if="loading"/>
    <app-page title="Request" v-else-if="request">
      {{request}}
    </app-page>
    <h3 v-else class="text-center text-white">
      Request with the ID = {{id}} not found
    </h3>
  </div>
</template>

<script>
import AppPage from "../components/ui/AppPage.vue";
import {useRoute} from "vue-router";
import {ref, onMounted} from 'vue';
import {useStore} from "vuex";
import AppStatus from "../components/ui/AppStatus.vue";
import AppLoader from "../components/ui/AppLoader.vue";

export default {
  setup() {
    const loading = ref(false)
    const route = useRoute()
    const store = useStore()
    const request = ref({})

    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('request/loadById', route.params.id)
      loading.value = false
    })

    return {
      loading,
      request,
      id: route.params.id
    }
  },
  components: {AppPage, AppStatus, AppLoader}
}
</script>
