<template>
 <div v-if="message" :class="['alert', message.type]">
   <p class="alert-title" v-if="title">{{title}}</p>
   <p>{{ message.value }}</p>
   <span class="alert-close" @close="close">&times;</span>
 </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "AppMessage",
  setup() {
    const store = useStore()
    const TITLE_MAP = {
      primary: 'Success!',
      danger: 'Error!',
      warning: 'Warning!'
    }
    const message = computed(() => store.state.message)
    const title = computed(() => message.value ? TITLE_MAP[message.value.type] : null)
    return {
      message,
      title,
      close: () => store.commit('clearMessage')

    }
  }

}
</script>

<style scoped>

</style>