<template>
  <div>
    <FormEdit :userProp="selectedUser[0]" />
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
  }
};
</script>
