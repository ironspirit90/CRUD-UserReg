<template>
  <div class="form-group">
    <div>
      <h1>Edit user</h1>
      <h1>ID: {{ userProp.id }}</h1>
    </div>
    <div>
      <label for="InputFirstName"
        >Current First name: {{ userProp.firstName }}</label
      >
      <input
        id="InputFirstName"
        class="form-control"
        placeholder="new"
        type="text"
        v-model="user.firstName"
      />

      <label for="InputLastName"
        >Current Last Name: {{ userProp.lastName }}</label
      >
      <input
        class="form-control"
        id="InputLastEmail"
        placeholder="new"
        type="text"
        v-model="user.lastName"
      />

      <label for="InputEmail">Current Email: {{ userProp.email }}</label>
      <input
        class="form-control"
        id="InputEmail"
        placeholder="new"
        type="email"
        v-model="user.email"
      />

      <label for="InputCountry">Current Country: {{ userProp.country }}</label>
      <select v-model="user.country" class="form-control" id="InputCountry">
        <option
          :value="country.name"
          v-for="country in countries"
          :key="country.name"
        >
          {{ country.name }}
        </option>
      </select>

      <label for="InputAddress">Current Address: {{ userProp.address }}</label>
      <input
        class="form-control"
        id="InputAddress"
        placeholder="new"
        type="text"
        v-model="user.address"
      />
    </div>
    <div class="buttons">
      <h4 v-if="err" class="err">Check if all the field are correct</h4>
      <button @click="editUser" type="button" class="btn btn-primary btn-lg">
        Save
      </button>
      <nuxt-link to="/users">
        <button type="button" class="btn btn-secondary btn-lg">
          User List
        </button>
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
    },
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

<style scoped>
.err {
  color: red;
}

.select-box {
  width: 45%;
  height: 30px;
}
.buttons {
  padding-top: 20px;
  padding-bottom: 10px;
}
</style>
