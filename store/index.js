export const state = () => ({
    users: [
    //   {
    //   user: {
    //     email: "bla",
    //     firstName: "bla",
    //     lastName: "bla",
    //     country: "bla",
    //     address: "bla"
    //   }
    // },
    // {
    //   user: {
    //     email: "la",
    //     firstName: "la",
    //     lastName: "la",
    //     country: "la",
    //     address: "la"
    //   }
    // },
  ],
    countries: [],
    selectedUser: [],
    // uniqueUsers: 0,
  })
  
  export const getters = {
    getCountries: state => state.countries,
    getUsers: state => state.users,
    getEditUser: state => state.selectedUser
    // getUniqueUsers: state => state.uniqueUsers,
  }
  
  export const mutations = {
    setCountries(state, data) {
        state.countries = data
    },
    setUser(state, data){
        state.users.push(data)
    },
    deleteUser(state, id){
  
        let filtered = state.users.filter(x => x.id !== id)
        console.log(filtered);
        state.users = filtered
    },
    // editUser(state, id, updatedUser){
    //   let selected = state.users.filter(user => user.id === id)
    //   updatedUser.id = selected.id;

    //   state.users[id].email = updatedUser.email
    //   state.users = [...state.users, ...updatedUser]
    // },
    editUser(state, id){
      let userSelected = state.users.filter(user => user.id === id)
      console.log(userSelected);
      state.selectedUser = userSelected
      }
    
    // increaseUniqueUsers(state) {
    //   state.uniqueUsers = state.uniqueUsers++; 
    // }
  }
  
  export const actions = {
    async getCountriesFromAPI({ commit }) {
      return this.$axios.$get(`https://restcountries.eu/rest/v2/all`)
      .then(res =>{
          commit('setCountries', res)
      })
    }
  }

