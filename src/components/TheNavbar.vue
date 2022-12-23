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
        <router-link to="#">Info</router-link>
      </li>
      <li>
        <router-link to="/logout">Logout</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar"
}
</script>

<style scoped>

</style>