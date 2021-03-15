<template>
  <div>
    <nuxt-link to="/">
      <button>back</button>
    </nuxt-link>
    <h1>User List</h1>
    <p>{{ users }}</p>
  </div>
</template>

<script>
export default {
  name: "index",
  computed: {
    users() {
      return this.$store.state.users;
    }
  }
};
</script>
