<template>
  <div>
    <h1>User List</h1>
    <nuxt-link to="/">
      <button>back</button>
    </nuxt-link>
    <div class="container">
      <User :user="item" v-for="(item, index) in users" :key="index" />
    </div>
  </div>
</template>

<script>
import User from "@/components/User";
export default {
  name: "index",
  components: {
    User
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    }
  }
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>
