<template>
  <div>
    <!-- FILTER BUTTON  -->
    <v-row class="my-6">
      <v-col sm="11">
        <p class="text-h6 black--text">
          Daftar Peraturan Keuangan
        </p>
      </v-col>
      <v-col sm="1">
        <PeraturanFilterDialog
          name="peraturan-filter-dialog"
        >
          <div
            slot="toggler"
            @click="openDialog">
            <base-card
              class-name="d-flex justify-center align-center py-1"
            >
              <v-btn
                elevation="0"
                class="transparent"
              >
                <v-icon
                  large
                  color="light-blue darken-4"
                >
                  mdi-tune
                </v-icon>
              </v-btn>
            </base-card>
          </div>
        </PeraturanFilterDialog>
      </v-col>
    </v-row>

    <!-- LIST PERATURAN -->

    <v-responsive
      v-if="search === null"
      height="400"
    >
    </v-responsive>
    <v-responsive
      v-else
      max-height="500"      
    >
      <h4 v-if="!loading" class="black--text text-weight-bold">Jumlah Peraturan : {{ list_peraturan.length }}</h4>
      <base-card
        size="s"
        class-name="my-6 mx-4"
      >
        <v-card-title
          v-if="
            !loading &&
            list_peraturan.length === 0
          "
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
                <v-col sm="12" lg="4">
                  <v-card-title
                    class="light-blue--text text--darken-4 font-weight-medium"
                    >Nama :
                  </v-card-title>
                  <v-card-text>
                    {{
                      peraturan.content
                    }}
                  </v-card-text>
                </v-col>
                <v-col sm="12" lg="4">
                  <v-card-title
                    class="light-blue--text text--darken-4 font-weight-medium"
                    >Satuan :
                  </v-card-title>
                  <v-card-text>
                    {{
                      peraturan.satuan
                    }}
                  </v-card-text>
                </v-col>
                <v-col sm="12" lg="4">
                  <v-card-title
                    class="light-blue--text text--darken-4 font-weight-medium"
                    >Harga Satuan :
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
    </v-responsive>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'PeraturanListData',
  async fetch() {
    this.SET_SEARCH('honorium')
    await this.$store.dispatch(
        'autoSearch/getFilterSearchPeraturan'
      ) 
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
    async openDialog() {
      await this.$store.dispatch(
        'autoSearch/getKeywords'
      ) 
      this.$baseDialog(
                'open',
                'peraturan-filter-dialog'
              )
    }
  }
}
</script>
