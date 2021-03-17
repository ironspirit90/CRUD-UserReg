<template>
  <div>
    <div>
      <h1>Edit user</h1>
      <h1>ID: {{ userProp.id }}</h1>
      <h6>Current First name: {{ userProp.firstName }}</h6>
      <input placeholder="new" type="text" v-model="user.firstName" />
      <h6>Current Last Name: {{ userProp.lastName }}</h6>
      <input placeholder="new" type="text" v-model="user.lastName" />
      <h6>Current Email: {{ userProp.email }}</h6>
      <input placeholder="new" type="email" v-model="user.email" />
      <h6>Current Country: {{ userProp.country }}</h6>
      <select v-model="user.country">
        <option
          :value="country.name"
          v-for="country in countries"
          :key="country.name"
        >
          {{ country.name }}
        </option>
      </select>
      <h6>Current Address: {{ userProp.address }}</h6>
      <input placeholder="new" type="text" v-model="user.address" />
    </div>
    <div>
      <h4 v-if="err" class="err">Check if all the field are correct</h4>
      <button @click="editUser">Save</button>
      <nuxt-link to="/users">
        <button>User List</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    userProp: Object
  },
  data() {
    return {
      user: {
        email: "",
        firstName: "",
        lastName: "",
        country: "",
        address: "",
        id: 0
      },
      err: false
    };
  },
  mounted() {
    this.$store.dispatch("getCountriesFromAPI");
  },
  computed: {
    countries() {
      return this.$store.getters.getCountries;
    }
  },

  methods: {
    editUser() {
      let mailRegex = /^\S+@\S+\.\S+$/;
      let isEmailLegit = mailRegex.test(this.user.email);
      if (
        isEmailLegit &&
        this.user.email.length > 0 &&
        this.user.firstName.length > 0 &&
        this.user.lastName.length > 0 &&
        this.user.address.length > 0
      ) {
        this.user.id = this.userProp.id;
        console.log(this.user.id);
        this.$store.commit("deleteUser", this.user.id);
        this.$store.commit("setUser", this.user);
        this.$router.push("/users");
      } else {
        this.err = true;
        console.log(this.err);
      }
    }
  }
};
</script>
