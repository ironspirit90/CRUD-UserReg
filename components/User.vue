<template>
  <div>
    <h5>User ID: {{ user.id }}</h5>
    <p>{{ user.email }}</p>
    <p>{{ user.firstName }}</p>
    <p>{{ user.lastName }}</p>
    <p>{{ user.country }}</p>
    <p>{{ user.address }}</p>
    <button @click="editUser">Edit User</button>
    <button @click="deleteUser">Delete User</button>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    user: Object
    // indx: Number
  },
  computed: {
    // users() {
    //   return this.$store.state.users;
    // }
  },
  methods: {
    deleteUser() {
      console.log("delete");
      this.$store.commit("deleteUser", this.user.id);
    },
    editUser() {
      // this.$store.commit("editUser", this.user.id, updatedUser);
      this.$store.commit("editUser", this.user.id);
      return this.$router.push(`/users/edit/${this.user.id}`);
    }
  }
  // created() {
  //   console.log(this.$route.params);
  // }
};
</script>
