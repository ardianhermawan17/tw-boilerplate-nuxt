<template>
  <v-navigation-drawer
    :value="drawer"
    app
    color="light-blue darken-4"
    mobile-breakpoint="960"
    temporary
    width="260"
    @input="
      (payload) =>
        UPDATE_DRAWER(payload)
    "
  >
    <template
      v-if="drawerImage"
      #img="props"
    >
      <v-img
        :key="image"
        v-bind="props"
      />
    </template>
    <div class="px-2">
      <AdminLayoutHeaderDrawer />

      <v-divider class="mx-3 mb-2" />

      <AdminLayoutList :items="items" />
    </div>
  </v-navigation-drawer>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'

export default {
  name: 'AdminNavigationDrawer',
  data() {
    return {
      navigationDrawer: this.drawer,
      drawerImage: false,
      mini: true,
      items: [
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          to: '/admin/dashboard'
        },
        {
          title: 'Peraturan',
          icon: 'mdi-gavel',
          to: '/admin/peraturan'
        },
        {
          title: 'Kategori',
          icon: 'mdi-clipboard-list',
          to: '/admin/kategori'
        },
        {
          title: 'Keyword',
          icon: 'mdi-file-key',
          to: '/admin/keyword'
        }
      ]
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
    })
  }
}
</script>
