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
      <DocumentationLayoutHeaderDrawer />

      <v-divider class="mx-3 mb-2" />

      <v-list
        expand
        nav
        v-bind="$attrs"
        v-on="$listeners"
      >
        <template
          v-for="(item, i) in items"
        >
          <DocumentationLayoutListGroup
            v-if="item.children"
            :key="`item-${i}`"
            :item="item"
          />
          <DocumentationLayoutListItem
            v-else
            :key="`item-${i}-x`"
            :item="item"
          />
        </template>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'

export default {
  name: 'DocumentationNavigationDrawer',
  data() {
    return {
      navigationDrawer: this.drawer,
      drawerImage: false,
      mini: true,
      items: [
         {
          title: 'Auto Search',
          icon: 'mdi-clipboard-text-search',
          group: '/documentation/auto-search',
          children: [
            {
              title: 'Get Keyword',
              text: 'GET',
              to: 'get-keyword'
            },
            {
              title: 'Auto Search',
              tooltip: 'Get Peraturan Auto Search',
              text: 'GET',
              to: 'filter-search'
            },
            {
              title: 'Filter Search ',
              tooltip: 'Get Peraturan With Filtered Search',
              text: 'GET',
              to: 'filter-search-by-keyword'
            }
          ]
        },
        {
          title: 'Auth',
          icon: 'mdi-shield-key',
          group: '/documentation/auth',
          children: [
            {
              title: 'Login API',
              text: 'POST',
              to: 'login'
            },
            {
              title: 'Logout API',
              text: 'GET',
              to: 'logout'
            }
          ]
        },
        {
          title: 'Peraturan',
          icon: 'mdi-gavel',
          group:
            '/documentation/peraturan',
          children: [
            {
              title: 'Get All',
              text: 'GET',
              to: 'get'
            },
            {
              title: 'Create',
              text: 'POST',
              to: 'create'
            },
            {
              title: 'Update',
              text: 'PUT',
              to: 'update'
            },
            {
              title: 'Delete',
              text: 'DELETE',
              to: 'delete'
            }
          ]
        },
        {
          title: 'Kategori',
          icon: 'mdi-clipboard-list',
          group:
            '/documentation/kategori',
          children: [
            {
              title: 'Get All',
              text: 'GET',
              to: 'get'
            },
            {
              title: 'Create',
              text: 'POST',
              to: 'create'
            },
            {
              title: 'Update',
              text: 'PUT',
              to: 'update'
            },
            {
              title: 'Delete',
              text: 'DELETE',
              to: 'delete'
            }
          ]
        },
        {
          title: 'Keyword',
          icon: 'mdi-file-key',
          group:
            '/documentation/keyword',
          children: [
            {
              title: 'Get All',
              text: 'GET',
              to: 'get'
            },
            {
              title: 'Create',
              text: 'POST',
              to: 'create'
            },
            {
              title: 'Update',
              text: 'PUT',
              to: 'update'
            },
            {
              title: 'Delete',
              text: 'DELETE',
              to: 'delete'
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState('ui/documentation', {
      drawer: 'drawer'
    })
  },
  methods: {
    ...mapMutations(
      'ui/documentation',
      {
        UPDATE_DRAWER: 'UPDATE_DRAWER'
      }
    )
  }
}
</script>
