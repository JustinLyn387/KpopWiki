<template>
  <v-container class="mainContainer">
    <v-row class="pb-0">
      <v-col style="max-width: 94%">
        <v-btn v-scroll-to="{ element: '#C', offset: -120 }">A</v-btn>
      </v-col>
      <v-col class="pb-0 mr-2" style="max-width: 3%">
        <v-speed-dial open-on-hover transition="slide-x-transition" direction="left">
          <template v-slot:activator><a><font-awesome-icon :icon="['fas', 'filter']"/></a></template>
          <v-btn class="navButton">A</v-btn>
          <v-btn class="navButton">B</v-btn>
        </v-speed-dial>
      </v-col>
      <v-col style="max-width: 3%" class="mr-6 mb-0">
        <a v-if="gridView" v-on:click="alterView"><font-awesome-icon :icon="['fas', 'list']"/></a>
        <a v-else v-on:click="alterView"><font-awesome-icon :icon="['fas', 'th-large']"/></a>
      </v-col>
    </v-row>
    <v-row v-if="gridView">
      <v-col cols="12" sm=9 class="profileBoard pt-0">
        <v-container fluid>
          <v-row>
            <v-col v-for="n in 50" :key="n" class="d-flex child-flex"  v-bind:cols="orientation">
              <v-card class="d-flex" v-on:click="selectGroup(n)">
                <v-hover v-slot:default="{ hover }">
                  <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`" class="grey lighten-2"
                         :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" aspect-ratio="1">
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate :rotate="-90" :size="50" :width="5" color="#8d74f2"/>
                      </v-row>
                    </template>
                    <v-skeleton-loader/>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="black">
                        <p style="font-size: 32px">Group {{ n }}</p>
                      </v-overlay>
                    </v-fade-transition>
                  </v-img>
                </v-hover>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <v-row v-else v-for="alpha in listOfGroups" :key="alpha.alpha" v-bind:id="alpha.alpha" class="mb-12 mt-6 ml-5">
      <h1>{{ alpha.alpha }}</h1>
      <ul v-bind:style="columnCount">
        <li v-for="group in alpha.groups" :key="group">{{ group }}</li>
      </ul>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'Profiles',
  data: () => ({
    hover: false,
    orientation: 2,
    columnCount: 'column-count: 4',
    gridView: true,
    kpopGroups: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ],
    listOfGroups: [
      { alpha: 'A', groups: ['Apples', 'Apples', 'Apples', 'Apples', 'Apples', 'Apples', 'Apples', 'Apples', 'Apples', 'Apples', 'Apples'] },
      { alpha: 'B', groups: ['Banana', 'Banana', 'Banana', 'Banana', 'Banana', 'Banana', 'Banana', 'Banana', 'Banana', 'Banana'] },
      { alpha: 'C', groups: ['Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry'] },
      { alpha: 'D', groups: ['Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry'] },
      { alpha: 'E', groups: ['Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry'] },
      { alpha: 'F', groups: ['Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry'] }
    ]
  }),
  created () {
    if (window.screen.width > window.screen.height) {
      this.orientation = 2
      this.columnCount = 'column-count: 4'
    } else {
      this.orientation = 6
      this.columnCount = 'column-count: 1'
    }
  },
  methods: {
    selectGroup (group) {
      alert(group)
    },
    alterView () {
      this.gridView = !this.gridView
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
  .mainContainer{
    padding-top: 100px;
  }
  .profileBoard{
    min-width: 100%;
  }
  h1{
    font-family: 'Varela Round', sans-serif;
    font-size: 45px;
    color: #8d74f2;
  }
  a{
    color: #8d74f2;;
    font-size: 24px;
    font-weight: bold;
  }
  ul{
    font-size: 22px;
    color: black;
  }
  li{
    margin: 10px 75px 10px 75px;
  }

</style>
