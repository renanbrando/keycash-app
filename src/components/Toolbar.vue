<template>
  <div>
    <v-navigation-drawer temporary v-model="drawer" app light>
      <v-list class="mt-5" dense two-line>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Keycash App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn href="https://github.com/renanbrando/keycash-app" target="_blank" flat>Git</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
    export default {
        name: "Toolbar",
        data(){
          return {
            drawer: false,
            items: [
                {
                      title: 'Home',
                      icon: 'home',
                      path: "/home"
                  },
                  {
                      title: 'Sobre',
                      icon: 'info',
                      path: "/about"
                  }
              ]
          }
        }
    }
</script>

<style scoped>

</style>
