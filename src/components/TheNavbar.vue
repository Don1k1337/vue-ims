<template>
  <nav class="navbar">
    <h3>Online Bank</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Requests</router-link>
      </li>
      <li>
        <router-link to="/help">Helper</router-link>
      </li>
      <li>
        <router-link to="/info">Info</router-link>
      </li>
      <li>
        <a v-bind:href="logout" @click.prevent="logout" >Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {useRouter} from "vue-router";
import {useStore} from "vuex";

export default {
  name: "TheNavbar",
  setup() {
    const router = useRouter();
    const store = useStore();
    return {
      logout: () => {
        store.commit('auth/LOGOUT')
        router.push('/auth')
      }
    }
  }
}
</script>

<style scoped>

</style>