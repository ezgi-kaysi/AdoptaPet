export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
  },
  addToFavorites (state, payload) {
    if (state.favorites.indexOf(payload) <= -1) {
      state.favorites.push(payload)
    }
  },
  removeFromFavorites (state, payload) {
    state.favorites.splice(state.favorites.indexOf(payload), 1)
  },
  clearFavorites (state) {
    state.favorites = []
  }
}
