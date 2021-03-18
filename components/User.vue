<template>
  <div class="card card-margin">
    <div class="card-body">
      <h5 class="card-title">User ID: {{ user.id }}</h5>
      <!-- <p>{{ user.email }}</p>
      <p>{{ user.firstName }}</p>
      <p>{{ user.lastName }}</p>
      <p>{{ user.country }}</p>
      <p>{{ user.address }}</p> -->
      <img class="card-img-top" :src="generatedAvatarUrl">
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ user.email }}</li>
      <li class="list-group-item">{{ user.firstName }}</li>
      <li class="list-group-item">{{ user.lastName }}</li>
      <li class="list-group-item">{{ user.country }}</li>
      <li class="list-group-item">{{ user.address }}</li>
    </ul>
{{avatar}}
    <button
      type="button"
      class="btn btn-primary btn-lg btn-block"
      @click="editUser"
    >
      Edit User
    </button>
    <button
      type="button"
      class="btn btn-secondary btn-lg btn-block"
      @click="deleteUser"
    >
      Delete User
    </button>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    user: Object
  },
  methods: {
    deleteUser() {
      console.log("delete");
      this.$store.commit("deleteUser", this.user.id);
    },
    editUser() {
      this.$store.commit("editUser", this.user.id);
      return this.$router.push(`/users/${this.user.firstName}/${this.user.id}`);
    }
  },
  mounted() {
    console.log("User Object/prop in User.vue", this.user);
  },
    computed: {
    avatar() {
      return this.$store.getters.getAvatar;
    },
    generatedAvatarUrl() {
      return `https://avatar.oxro.io/avatar.svg?name=${this.user.firstName}`;
    }
  },
};
</script>
<style scoped>
.card {
  width: 500px;
}
.card-margin {
  margin: 15px;
}
</style>
