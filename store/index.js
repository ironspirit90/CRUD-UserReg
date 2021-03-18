export const state = () => ({
    users: [],
    countries: [],
    selectedUser: {},
    // avatarName: "",
    avatar: ""
  })
  
  export const getters = {
    getCountries: state => state.countries,
    getUsers: state => state.users,
    getEditUser: state => state.selectedUser,
    getAvatar: state => state.avatar

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

    // setAvatarName(state, data){
    //   state.avatarName = data
    // },

    // setAvatar(state, data){
    //   let number = Math.floor( Math.random() * 14 )
    //   state.avatar = data[number].avatars[0].url
    // }
    
  }
  
  export const actions = {
    async getCountriesFromAPI({ commit }) {
      return this.$axios.$get(`https://restcountries.eu/rest/v2/all`)
      .then(res =>{
          commit('setCountries', res)
      })
    },
    // async getAvatarAPI({ commit }) {
    //   return this.$axios.$get(`https://avatars.dicebear.com/api/human/${state.avatarName}.svg`)
    //   .then(res =>{
    //     console.log('responseeeee', res);
    //       commit('setAvatar', res)
    //   })
    // },
    // async getAvatarAPI({ commit }) {
    //   return this.$axios.$get(`https://tinyfac.es/api/users`)
    //   .then(res =>{
    //     console.log('responseeeee', res);
    //       commit('setAvatar', res)
    //   })
    // },
  }
