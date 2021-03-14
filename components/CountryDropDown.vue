<template>
  <div>
    <p>{{ list.name }}</p>
  </div>
</template>
<script>
export default {
  name: "CountryDropDown",
  props: {
    list: Object
  }
};
</script>
