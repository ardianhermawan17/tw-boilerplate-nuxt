<template>
  <v-app id="inspire">
    <DocumentationLayoutNavigationDrawer />

    <v-app-bar app light>
      <v-app-bar-nav-icon
        @click="
          (payload) =>
            UPDATE_DRAWER(payload)
        "
      ></v-app-bar-nav-icon>

      <v-toolbar-title
        class="light-blue--text text--darken-4"
        >SI AUTOFINTION</v-toolbar-title
      >
      <v-spacer/>
    </v-app-bar>

    <v-main class="grey lighten-3">
     <base-snackbar name="admin-snackbar" />
      <v-container
        fluid
        class="px-0 py-0 blue-grey lighten-5"
      >
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'

export default {
  name: 'DocumentationPages',
  data() {
    return {
       accounts: [
        // {
        //   icons: 'mdi-account',
        //   words: 'My Profile',
        //   route_name: 'user.profile'          
        // },
        {
          icons: 'mdi-logout-variant',
          words: 'Sign Out',
          route_name: 'logout'
        }
      ],      
    }
  },
  computed: {
    ...mapState('ui/documentation', {
      drawer: 'drawer'
    })
  },
  methods: {
    ...mapMutations('ui/documentation', {
      UPDATE_DRAWER: 'UPDATE_DRAWER'
    })
  }
}
</script>
