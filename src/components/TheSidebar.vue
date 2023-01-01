<template>
  <div class="sidebar" v-if="sidebar">
    <span class="sidebar-close" @click="close">&times;</span>
    <div class="sidebar-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, laboriosam?</p>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "TheSidebar",
  setup() {
    const store = useStore()
    const sidebar = computed(() => store.state.sidebar)
    return {
      sidebar,
      close: () => store.commit('closeSidebar')
    }
  }
}
</script>
