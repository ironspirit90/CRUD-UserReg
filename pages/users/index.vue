<template>
  <div>
    <h1>User List</h1>
    <nuxt-link to="/">
      <button>back</button>
    </nuxt-link>
    <User :user="item" v-for="(item, index) in users" :key="index" />
    <!-- <nuxt-link to="/">
      <button>back</button>
    </nuxt-link>
    <h1>User List</h1> -->

    <!-- <p>{{ users }}</p> -->
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
