<template>
  <div class="form-group">
    <div>
      <h1>Register User</h1>
    </div>
    <div>
      <label for="InputFirstName">First name</label>
      <input
        id="InputFirstName"
        class="form-control"
        placeholder="Enter name"
        type="text"
        v-model="user.firstName"
      />

      <label for="InputLastName">Last name</label>
      <input
        class="form-control"
        id="InputLastEmail"
        type="text"
        v-model="user.lastName"
      />

      <label for="InputEmail">Email</label>
      <input
        class="form-control"
        id="InputEmail"
        type="email"
        v-model="user.email"
      />

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
        id: 0,
        // avatar: ""
      },
      err: false
      // nameForAvatar: ""
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
        // fetch({store, data}){
        //   return store.dispach('getAvatarAPI')
        // }
        // this.$store.commit("setAvatarName", this.user.name);
        // this.$store.dispatch("getAvatarAPI");

        // console.log('uzdedama toki', this.$store.getters.getAvatar);

        // this.user.avatar = this.$store.getters.getAvatar;

        // console.log('userio avatar', this.user.avatar);

        this.user.id = Math.floor(Math.random() * 1000);
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
