<template>
  <div class="breadcrumbs" v-if="back">
    <router-link to="/" class="text-white">Go home</router-link>
  </div>
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
    },
    back: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    document.title = `${props.title} | Online Bank`
  }


}
</script>
