<template>
<div class="modal-backdrop" @click="$emit('close')">
  <div class="modal">
    <h3 v-if="title">{{title}}</h3>

    <slot />
  </div>
</div>
</template>

<script>
export default {
  name: "AppModal",
  emits: ['close'],
  props: {
    title: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>

</style>