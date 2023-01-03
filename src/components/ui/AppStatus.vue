<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script>
import {ref, watch} from 'vue';

export default {
  name: "AppStatus",
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['active', 'cancelled', 'done', 'pending'].includes(value)
      }
    }
  },
  setup(props) {
    const classesMap = {
      active: 'primary',
      cancelled: 'danger',
      done: 'primary',
      pending: 'warning'
    }
    const textMap = {
      active: 'Active',
      cancelled: 'Canceled',
      done: 'Done',
      pending: 'Pending'
    }
    watch(props, newVal => {
      className.value = classesMap[newVal.type]
      text.value = textMap[newVal.type]
    })
    const className = ref(classesMap[props.type])
    const text = ref(textMap[props.type])

    return {className, text}
  }
}
</script>

<style scoped>

</style>