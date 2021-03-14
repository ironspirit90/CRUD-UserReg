<template>
  <div>
    <div>
      <h1>Register User</h1>
    </div>
    <div>
      <h6>Email</h6>
      <input type="email" v-model="user.email" />
      <h6>Name</h6>
      <input type="text" v-model="user.passwordOne" />
      <h6>SureName</h6>
      <input type="text" v-model="user.passworTwo" />
      <h6>Select Country</h6>
      <CountryDropDown
        :list="item"
        v-for="(item, index) in countrylist"
        :key="index"
      />
      <!-- <select name="Country" id="country">
        <option value="">
        
        </option>
      </select> -->
    </div>
    <div>
      <button>Register</button>
      <button>User List</button>
    </div>
  </div>
</template>

<script>
import CountryDropDown from "@/components/CountryDropDown";
export default {
  name: "Form",
  components: {
    CountryDropDown
  },
  props: {
    countrylist: Array
  },
  data() {
    return {
      user: {
        email: "",
        passwordOne: "",
        passwordTwo: "",
        country: ""
      },
      err: false
    };
  },
  methods: {
    register() {
      let mailRegex = /^\S+@\S+\.\S+$/;
      let isEmailLegit = mailRegex.test(this.user.email);
      if (isEmailLegit && this.user.email.length > 0) {
      } else {
        this.err = true;
        console.log(this.err);
      }
    }
  }
  //   computed: {
  //     countryApi() {
  //       return this.$store.getters.getCountry;
  //     }
  //   },
  //   fetch({ store }) {
  //     return store.dispatch("getCountryApi");
  //   }
};
</script>
