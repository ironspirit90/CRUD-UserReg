<template>
  <div>
    <h1>User List</h1>
    <p>{{ user.email }}</p>
    <p>{{ user.firstName }}</p>
    <p>{{ user.lastName }}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    user: Object
  },
  computed: {
    // users() {
    //   return this.$store.state.users;
    // }
  }
};
</script>
