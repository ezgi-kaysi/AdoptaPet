<template>
  <v-app>
    <main>
      <div class="app-container">
        <header class="app-header green">
          <h1>ADOPT A PET</h1>
          <v-toolbar>
            <v-toolbar-items>
              <v-btn to="/" flat>Home</v-btn>
              <v-btn to="/dogs" flat>Dogs</v-btn>
              <v-btn to="/cats" flat>Cats</v-btn>
            </v-toolbar-items>            
            <v-spacer></v-spacer>
           <router-link to="/favorites">
              <v-badge color="pink " overlap right v-model="favorites.length">
                <span slot="badge">{{favorites.length}}</span>
                <v-icon large>loyalty</v-icon>
              </v-badge>
            </router-link>
          </v-toolbar>
        </header>
        <router-view></router-view>
        <footer class="app-footer green">
          <p>2019 - Adopt a Pet</p>
        </footer>
      </div>
    </main>
  </v-app>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: true
    }
  },
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
  },
}
</script>

<style>
</style>
