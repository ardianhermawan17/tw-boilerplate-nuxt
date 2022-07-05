<template>
  <v-app id="inspire">
    <AdminLayoutNavigationDrawer />

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
      <v-menu
          light
          bottom
          left
          offset-y
          origin="top right"
          transition="scale-transition"
      >
        <template v-slot:activator="{ on: menu, attrs }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn
                  class="ml-2"
                  min-width="0"
                  text
                  v-bind="attrs"
                  v-on="{ ...tooltip, ...menu }"
              >
                <v-icon>mdi-account-circle</v-icon>
              </v-btn>
            </template>
            <span>{{ username ? username : "test" }}</span>
          </v-tooltip>
        </template>
        <v-list
            :tile="false"
            nav
        >
          <v-list-item                      
            @click="logout()"
          >
            <v-icon left>t
              mdi-logout-variant
            </v-icon>
            <v-list-item-title>
              Logout
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
  name: 'AdminPages',
  middleware: ['auth'],
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
      username: this.$auth.$state.user.data.name
    }
  },
  computed: {
    ...mapState('ui/admin', {
      drawer: 'drawer'
    })
  },
  methods: {
    ...mapMutations('ui/admin', {
      UPDATE_DRAWER: 'UPDATE_DRAWER'
    }),
    logout() {
            this.$auth.logout()            
        }
  }
}
</script>
