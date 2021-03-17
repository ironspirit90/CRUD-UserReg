<template>
  <div>
    <!-- <nuxt-link to="/users">
      <button>black</button>
    </nuxt-link> -->

    <FormEdit :userProp="selectedUser[0]" />
    <!-- <p>{{ user }}</p> -->
  </div>
</template>
<script>
import FormEdit from "@/components/FormEdit";
export default {
  name: "index",
  components: {
    FormEdit
  },
  computed: {
    selectedUser() {
      return this.$store.getters.getEditUser;
    }
    // getCurrentUser() {
    //   return this.$state.getters.getUsers.filter(
    //     user => user.id == kazkoksTaiIDKuriTuGausi
    //   );
    // }
  }
  // created() {
  //   console.log(this.user);
  // }
};
</script>
