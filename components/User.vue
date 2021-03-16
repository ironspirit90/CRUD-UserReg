<template>
  <div>
    <p>{{ user.email }}</p>
    <p>{{ user.firstName }}</p>
    <p>{{ user.lastName }}</p>
    <p>{{ user.country }}</p>
    <p>{{ user.address }}</p>
    <button @click="delete">Delete User</button>
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
  },
  methods: {
    delete() {
      return;
    }
  }
};
</script>
