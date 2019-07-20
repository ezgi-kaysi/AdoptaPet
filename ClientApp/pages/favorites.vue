<template>
  <div style="padding:5%;">
    
    <v-data-table
      :headers="headers"
      :items="favorites"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">
           <v-flex xs4 sm2 md1>
            <v-avatar size="80px">
              <img :src="props.item.img">
            </v-avatar>
          </v-flex>
        </td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.breed }}</td>
        <td class="text-xs-left">{{ props.item.age }}</td>
        <td class="text-xs-left">{{ props.item.location }}</td>
        <td class="text-xs-left">
          
          <v-btn icon class="mx-0" @click="removeFromFavorites(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
    
    </v-data-table>

    <div style="margin-top:10%;">  <v-btn to="/form">Adopt</v-btn> </div>
   
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
   data: () => ({
      dialog: false,
      headers: [      
        { text: '', value: 'img', sortable: false,  width: '200px',  align: 'left' },
        { text: 'Name', value: 'name', align: 'left' },
        { text: 'Breed', value: 'breed', align: 'left' },
        { text: 'Age', value: 'age',  align: 'left' },
        { text: 'Location', value: 'location',  align: 'left' },
        { text: 'Actions', value: 'name', sortable: false,  align: 'left' }
      ]
  }),
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
  },
  methods: {
    ...mapActions(['removeFromFavorites']),
  },
};
</script>
<style scoped>
 .v-avatar img{
   padding: 5%;
 }
</style>