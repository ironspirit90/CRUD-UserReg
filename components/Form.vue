<template>
  <div class="form-group">
    <div>
      <h1>Register User</h1>
    </div>
    <div>
      <!-- <h6>First name</h6> -->
      <label for="InputFirstName">First name</label>
      <input
        id="InputFirstName"
        class="form-control"
        placeholder="Enter name"
        type="text"
        v-model="user.firstName"
      />
      <!-- <h6>Sure Name</h6> -->
      <label for="InputLastName">Last name</label>
      <input
        class="form-control"
        id="InputLastEmail"
        type="text"
        v-model="user.lastName"
      />
      <!-- <h6>Email</h6> -->
      <label for="InputEmail">Email</label>
      <input
        class="form-control"
        id="InputEmail"
        type="email"
        v-model="user.email"
      />
      <!-- <h6>Select Country</h6> -->
      <label for="InputCountry">Select country</label>
      <select v-model="user.country" class="form-control" id="InputCountry">
        <option
          :value="country.name"
          v-for="country in countries"
          :key="country.name"
        >
          {{ country.name }}
        </option>
      </select>
      <!-- <h6>Address</h6> -->
      <label for="InputAddress">Address</label>
      <input
        class="form-control"
        id="InputAddress"
        type="text"
        v-model="user.address"
      />
    </div>
    <div class="buttons">
      <h4 v-if="err" class="err">Check if all the field are correct</h4>
      <button @click="register" type="button" class="btn btn-primary btn-lg">
        Register
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
      // idCount: 0
    };
  },
  computed: {
    countries() {
      return this.$store.getters.getCountries;
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
        this.user.id = Math.random() * 1000;
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
