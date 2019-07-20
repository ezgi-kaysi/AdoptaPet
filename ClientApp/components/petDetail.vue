<template>
  <!-- <div style="padding:4%;">
       <v-flex xs12>
            <v-card color="blue-grey" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                   <v-card-media
                      :src="pet.img"
                      height="250px"
                      contain
                    ></v-card-media>
                  </v-flex>
                  <v-flex xs5>
                    <div>
                      <div class="headline">{{pet.name}}</div>
                      <div>{{pet.breed}} </div>
                      <div>{{pet.age}} </div>
                      <div>{{pet.gender}} </div>
                      <div>{{pet.breed}} </div>
                      <div>{{pet.color}} </div>
                      <div>{{pet.location}} </div>
                      <div>{{pet.notes}} </div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
 
   
  </div> -->

  <div class="row" id="pet-profile-page">
            <div class="col-sm-4 sidebar">
                <div class="row" id="pet-picture">
                    <div class="col-xs-12">
                        <img :src="pet.img" class="img-responsive center-block">
                         
                    </div>
                   <div class="col-xs-12" style="margin-top:10%;">
                       <v-btn large color="green" to="/form" value="favorites">           
                        <v-icon>favorite</v-icon>
                        <span style="color:white;" >ADOPT ME</span>
                        </v-btn>
                    </div>
               </div>
            </div>
            <div class="col-sm-8">
                <div class="row">
                        <div class="col-sm-11" id="pet-info">
                                <h3 class="green"><span class="icon dog"></span> {{pet.name}}</h3>
                                  <p class="category"><b>Name:</b> {{pet.name}}</p>
                                  <p class="category"><b>Type:</b> {{this.$route.params.species}}</p>
                                  <p class="category"><b>Breed:</b> {{pet.breed}} </p>
                                  <p class="category"><b>Sex:</b> {{pet.gender}} </p>
                                  <p class="category"><b>Colour:</b> {{pet.color}} </p>
                                  <p class="category"><b>Age:</b> {{pet.age}}</p>                                  
                                  <p class="category"><b>Location:</b> {{pet.location}}</p>
                         </div>
                        <div class="col-sm-11 green-bkg" id="pet-id">
                            <h3><b>Animal ID:</b> {{pet.id}}</h3>
                        </div>
                   
                </div>
            </div>
           
        </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      pet: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted() {
    const animal = this[this.$route.params.species][this.$route.params.id-1]
    this.pet = animal
  }
}
</script>
<style scoped>
    
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: 2% !important; 
}

.v-btn .v-btn__content .v-icon{
    color:#fff;
}

</style>