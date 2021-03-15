<template>
  <div>
    <div>
      <h1>Register User</h1>
    </div>
    <div>
      <h6>First name</h6>
      <input type="text" v-model="user.firstName" />
      <h6>Sure Name</h6>
      <input type="text" v-model="user.lastName" />
      <h6>Email</h6>
      <input type="email" v-model="user.email" />
      <h6>Select Country</h6>
      <select v-model="user.country">
        <option
          :value="country.name"
          v-for="country in countries"
          :key="country.name"
        >
          {{ country.name }}
        </option>
      </select>
      <h6>Address</h6>
      <input type="text" v-model="user.address" />
    </div>
    <div>
      <h4 v-if="err" class="err">Check if all the field are correct</h4>
      <button @click="register">Register</button>

      <nuxt-link to="/users">
        <button>User List</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      user: {
        email: "",
        firstName: "",
        lastName: "",
        country: "",
        address: ""
      },
      err: false
    };
  },
  computed: {
    countries() {
      return this.$store.state.countries;
    }
  },
  mounted() {
    this.$store.dispatch("getCountriesFromAPI");
  },
  methods: {
    register() {
      let mailRegex = /^\S+@\S+\.\S+$/;
      let isEmailLegit = mailRegex.test(this.user.email);
      if (
        isEmailLegit &&
        this.user.email.length > 0 &&
        this.user.firstName.length > 0 &&
        this.user.lastName.length > 0 &&
        this.user.address.length > 0
      ) {
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

<style scoped>
.err {
  color: red;
}
</style>
