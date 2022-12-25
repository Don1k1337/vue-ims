<template>
  <div class="card">
    <h1 class="card-title">
      {{title}}
      <slot name="header" />
    </h1>
    <slot />
  </div>
</template>

<script>
import RequestTable from "../requests/RequestTable.vue";

export default {
  name: 'AppPage',
  components: {RequestTable},
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props) {
    document.title = `${props.title} | Online Bank`
  }


}
</script>
