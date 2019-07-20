export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  },
  addToFavorites: ({ commit }, payload) => {
    commit('addToFavorites', payload)
  },
  removeFromFavorites ({ commit }, payload) {
    commit('removeFromFavorites', payload)
  },
  clearFavorites ({ commit }) {
    commit('clearFavorites')
  }
}
