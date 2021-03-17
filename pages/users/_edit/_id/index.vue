<template>
  <div class="container">
    <FormEdit :userProp="getUser" />
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
    getUser() {
      return this.$store.getters.getEditUser;
    }
  }
};
</script>
