<template>
  <v-container grid-list-md fluid>
    <v-layout wrap>
      <v-flex xs12 sm4 md3 v-for="pet in cats" :key="pet.breed">
        <pet-Card :pet="pet" @addToFavorites="addToFavorites"></pet-Card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import axios from 'axios'
import pet from '../components/Pet';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/images/search?'

export default {
  components: {
    petCard: pet,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState([
      'cats'
    ])
  },
   methods: {
    ...mapActions(['addToFavorites']),
  },
  created() {
    // eslint-disable-next-line
    this.cats.forEach(cat => {
      cat.img = '';
    });
    const linksArray = this.cats.map(
      cat =>`name=${cat.breed}&limit=1` ,
    );
    axios.all(linksArray.map(link => axios.get(link))).then(
      axios.spread((...res) => {
        this.cats.forEach((cat, index) => {
          cat.img = res[index].data[0].url;
        });
      }),
    );
  },
}
</script>
