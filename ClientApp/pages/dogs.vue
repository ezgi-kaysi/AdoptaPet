<template>
<div>
    <div class="row">
        <div class="col-md-12" id="homepage-list-title-container">
            <h2 id="homepage-list-title" class="text-center">Meet some of our pets</h2>
        </div>
    </div>
    <v-container grid-list-md fluid>
        <v-layout wrap>
        <v-flex xs12 sm4 md3 v-for="pet in dogs" :key="pet.id">
            <pet-Card :pet="pet" species="dogs" @addToFavorites="addToFavorites"></pet-Card>
        </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import axios from 'axios'
import pet from '../components/Pet';

export default {
  components: {
    petCard: pet,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['dogs'])
  },
   methods: {
    ...mapActions(['addToFavorites']),
  },
  created() {
    // eslint-disable-next-line
    this.dogs.forEach(dog => {
      dog.img = '';
    });
    const linksArray = this.dogs.map(
      dog => `https://dog.ceo/api/breed/${dog.breed}/images/random`,
    );
    axios.all(linksArray.map(link => axios.get(link))).then(
      axios.spread((...res) => {
        this.dogs.forEach((dog, index) => {
          dog.img = res[index].data.message;
        });
      }),
    );
  },
}
</script>
