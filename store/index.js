export const state = () => ({
    users: [],
    countries: [],
    selectedUser: null,
  })
  
  export const getters = {
    getCountries: state => state.countries,
    getUsers: state => state.users
  }
  
  export const mutations = {
    setCountries(state, data) {
        state.countries = data
    },
    setUser(state, data){
        state.users.push(data)
    },
    setSelectedUser(state, id){

        let filtered = state.users.filter(x => x.id === id)

        state.selectedUser = filtered[0]
    },
  }
  
  export const actions = {
    async getCountriesFromAPI({ commit }) {
      return this.$axios.$get(`https://restcountries.eu/rest/v2/all`)
      .then(res =>{
          commit('setCountries', res)
      })
    }
  }

