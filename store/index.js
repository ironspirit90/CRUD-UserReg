export const state = () => ({
    users: [],
    countryStack: [],
})

export const getters = {
    getCountry: state => state.countryStack,
    
}

export const mutations = {
    setCountry(state, data) {
        state.countryStack = data
    }
}

export const actions = {
    async getCountryApi({commit}) {
        console.log("kur data blemba");

        return this.$axios.$get(`https://restcountries.eu/rest/v2/all`)
        .then(res =>{
            commit('setCountry', res)
            console.log("response from api");
            console.log(res);
        })
        
    }

    // async getCountryApi({commit}) {

    //     console.log("Where is data?!?");

    //     let countryStack = await this.$axios.$get(`https://restcountries.eu/rest/v2/all`)
    //     commit('setCountry', countryStack.data)
    //     console.log(countryStacky);
    // }
}

