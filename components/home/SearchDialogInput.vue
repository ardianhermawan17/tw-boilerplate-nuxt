<template>
  <div class="flex">
    <slot name="toggler" />

    <base-dialog :name="name">
      <v-card
        class="blue-grey lighten-5"
      >
        <v-toolbar
          color="blue-grey lighten-5"
          elevation="0"
          class="px-4"
        >
          <v-spacer></v-spacer>

          <v-btn
            icon
            fab
            color
            class="red"
            x-small
            @click.stop="
              closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <!-- <v-divider></v-divider> -->
        <v-container>
          <!-- Search input -->

          <base-text-field
            :is-neumorphism="false"
            :outlined="true"
            append-icon="mdi-magnify"
            label="Aturan"
            placeholder="Cari Aturan...."            
            @change="onSearching"            
          />

          <v-responsive v-if="search === null" height="400">
          </v-responsive>
          <div v-else class="mt-8">
            <base-card
              size="s"
              class-name="my-6 mx-4"
            >
              <v-card-title
                v-if="!loading && list_peraturan.length === 0"
                class="light-blue--text text--darken-4 font-weight-bold d-flex justify-center"
                >Peraturan tidak ditemukan
              </v-card-title>  
              <v-skeleton-loader
                v-else-if="loading"                
                :loading="loading"
                elevation="0"
                light
                type="article"
              ></v-skeleton-loader>
            </base-card>
            <v-card
              v-if="!loading"
              elevation="0"
              class="mx-auto px-4 py-4 blue-grey lighten-5"
              light
            >
              <v-responsive
                max-height="400"
                class="overflow-y-auto"
              >
                <div
                  v-for="peraturan in list_peraturan"
                  :key="peraturan.id"
                >
                  <base-card
                    size="s"
                    class-name="px-4 my-6 mx-4"
                  >
                    <v-row>
                      <v-col
                        sm="12"
                        lg="4"
                      >
                        <v-card-title
                          class="light-blue--text text--darken-4 font-weight-medium"
                          >Nama :
                        </v-card-title>
                        <v-card-text>
                          {{ peraturan.content }}
                        </v-card-text>
                      </v-col>
                      <v-col
                        sm="12"
                        lg="4"
                      >
                        <v-card-title
                          class="light-blue--text text--darken-4 font-weight-medium"
                          >Satuan :
                        </v-card-title>
                        <v-card-text>
                          {{ peraturan.satuan }}
                        </v-card-text>
                      </v-col>
                      <v-col
                        sm="12"
                        lg="4"
                      >
                        <v-card-title
                          class="light-blue--text text--darken-4 font-weight-medium"
                          >Harga Satuan
                          :
                        </v-card-title>
                        <v-card-text>
                          {{
                            peraturan.harga_satuan
                              | formatPrice(
                                'Rp'
                              )
                          }}
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </base-card>
                </div>
              </v-responsive>
            </v-card>
          </div>
        </v-container>
      </v-card>
    </base-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'SearchDialogInput',

  props: {
    name: {
      type: String,
      default: () =>
        'search-dialog-input'
    }
  },

  data() {
    return {
      
    }
  },  
  computed: {
    ...mapState('autoSearch', {
      list_peraturan: 'items',
      search: 'search',
      loading: 'loading'
    })   
  },
  methods: {
    ...mapMutations('autoSearch', {
      SET_SEARCH: 'SET_SEARCH'
    }),
    async onSearching(query) {      
       let search = query

      // eslint-disable-next-line no-unused-expressions
      search === ''
        ? (search = 'honorium')
        : search

      this.SET_SEARCH(search)
      await this.$store.dispatch(
        'autoSearch/getFilterSearchPeraturan'
      )      
    },
    closeDialog() {
      this.SET_SEARCH(null)
      this.$baseDialog(
                'close',
                this.name
              )
    }
  },
}
</script>
