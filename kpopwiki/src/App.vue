<template>
  <v-app>
    <v-main class="appContainer">
      <v-app-bar color="white" elevate-on-scroll fixed elevation="2">
        <v-app-bar-nav-icon v-on:click="toggleSidebar"></v-app-bar-nav-icon>
        <div class="pl-1" v-if="desktop">Menu</div>
        <v-divider vertical class="ml-6 mr-2" v-if="desktop"/>
        <v-btn icon v-if="desktop"><v-icon>mdi-magnify</v-icon></v-btn>
        <v-spacer/>
        <v-speed-dial open-on-hover transition="slide-x-transition" direction="right">
          <template v-slot:activator>
            <button v-on:click="$router.push('/')">KpopWiki</button>
          </template>
          <button class="navButton">
            <router-link exact to="/about">About</router-link>
          </button>
          <v-divider/>
          <button class="navButton">
            <router-link exact to="/profiles">Profiles</router-link>
          </button>
        </v-speed-dial>
        <v-spacer/>
        <div v-if="desktop">Register / Log In</div>
        <v-btn icon v-if="!desktop"><v-icon>mdi-magnify</v-icon></v-btn>
      </v-app-bar>
      <Sidebar>
        <ul class='sidebar-panel-nav'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </Sidebar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'App',
  components: {
    Sidebar
  },
  data: () => ({
    desktop: true
  }),
  created () {
    this.desktop = window.screen.width > window.screen.height
  },
  methods: {
    toggleSidebar () {
      this.$store.commit('toggleNav')
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
  button{
    text-align: center;
    color: #8d74f2;
    font-size: 40px;
    font-weight: bold;
    font-family: 'Varela Round', sans-serif;
    border: none;
    outline: none;
    padding-left: 10px;
  }
  .appContainer{
    background-color: white;
  }
  .navButton{
    font-size: 24px;
    cursor: pointer;
    white-space: nowrap;
    text-align: center;
    padding-left: 75px;
  }
  .v-application a {
    color: #8d74f2;;
    text-decoration: none;
  }

</style>
