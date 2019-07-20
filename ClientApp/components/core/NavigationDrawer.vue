<template>
  <v-navigation-drawer
    v-model="toggle"
    fixed dark app>
    <v-toolbar flat dark class="toolbar">
      <router-link :to="{ name: 'home' }">
        <img src="images/paws.ico" width="36px"></img>
      </router-link>
      <router-link :to="{ name: 'home' }" class="text">
         Adopt a Pet
      </router-link>
    </v-toolbar>
    <v-list>
      <v-list-tile @click="changeRoute('home', 1)">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 1}, 'item-title' ]" >Home</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('dogs', 2)">
        <v-list-tile-action>
          <v-icon>pets</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 2}, 'item-title' ]">Dogs</v-list-tile-title>
      </v-list-tile>
     
      <v-list-tile @click="changeRoute('petAccessories', 3)">
        <v-list-tile-action>
          <v-icon>shopping_cart</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 3}, 'item-title' ]">Pet Accesories</v-list-tile-title>
      </v-list-tile>
    </v-list>
    
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
        type: Boolean,
        required: false,
        default: true
    }
  },

  data() {
    return {
      selectedIndex: 1,
      
    }
  },

  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    }
  }
}
</script>

<style>
  .toolbar {
    font-weight: bold;
    font-size: 18px;
  }

  .toolbar .text {
    padding-left: 15px;
    color: white;
    text-decoration:none;
  }

  .item-title {
    font-size: 17px;
    font-weight: 500;
  }
  .item-sub-title {
    font-size: 15px;
    font-weight: 500;
  }

  .active {
    font-weight: bold;
  }
</style>
