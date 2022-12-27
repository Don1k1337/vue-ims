<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Type here" v-model="name">
    </div>
    <div class="form-control">
      <request-status v-model="status" />
    </div>
    <button v-if="isActive" @click="resetFilter" class="btn warning">Clear</button>
  </div>
</template>

<script>
import RequestStatus from "./RequestStatus.vue";
import { ref, watch, computed } from 'vue';
export default {
  name: "RequestFilter",
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup(_, {emit}) {
    const name = ref();
    const status = ref();

    watch([name, status], values => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1]
      })
    })

    const isActive = computed(() => name.value || status.value)

    return {
      name,
      status,
      isActive,
      resetFilter: () => {
        name.value = ''
        status.value = ''
      }
    }
  },
  components: { RequestStatus }
}
</script>
