export const state = () => ({
    users: [],
    countries: [],
    selectedUser: {},
    avatarUrl: ""
  })
  
  export const getters = {
    getCountries: state => state.countries,
    getUsers: state => state.users,
    getEditUser: state => state.selectedUser

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
        state.users = filtered
    },
    
    editUser(state, id){
      let userSelected = state.users.find(user => user.id === id)
      state.selectedUser = userSelected
    },

    setAvatar(state, data){
      state.avatarUrl = data
    }
    
  }
  
  export const actions = {
    async getCountriesFromAPI({ commit }) {
      return this.$axios.$get(`https://restcountries.eu/rest/v2/all`)
      .then(res =>{
          commit('setCountries', res)
      })
    },
    async getAvatarAPI({ commit }, data) {
      return this.$axios.$get(`https://avatars.dicebear.com/api/human/${data.user.firstName}.svg`)
      .then(res =>{
        console.log(res);
          commit('setAvatar', res)
      })
    },
  }
