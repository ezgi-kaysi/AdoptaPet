<template>
  <v-card color="white npm devlighten-2" >
    <v-img :src="pet.img" height="150px" @click.native="gotoPet(pet)">
    </v-img>
    <v-card-title class="caption" @click.native="gotoPet(pet)">
      <div id="caption-pet-info">
        <h3 class="green"><span class="icon dog"></span> {{pet.name}}</h3>
        <p>{{pet.breed}} </p>
        <p>{{pet.gender}} - {{pet.location}}</p>
       
      </div>
    </v-card-title>
    <v-card-actions>
       <v-btn flat color="pink" @click="$emit('addToFavorites', pet)" value="favorites">           
          <v-icon>favorite</v-icon>
          <span>ADD TO FAVORITE</span>
        </v-btn>
         
      </v-card-actions>
  </v-card>
</template>

<script>
import router from './../router'

export default {
  props: {
    pet: Object,
    species: String,
  },
  methods:{
    gotoPet(pet){
      this.$router.push({ name: 'petDetail', params: { species: this.species, id: this.pet.id }})
    }
  }
};
</script>

<style scoped>
p {
  margin: 0;
}

.breed {
  text-transform: capitalize;
}
</style>
