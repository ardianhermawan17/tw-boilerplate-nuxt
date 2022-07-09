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
            @click.stop="onCloseDialog">
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
            label="Keyword"
            placeholder="Cari Keyword...."
            @change="onSearching"
          />

          <!-- Title kategori  -->
          <div
            class="d-flex justify-space-between py-6"
          >
            <p class="black--text">
              Total keyword yang dipilih
              :
              {{ chosenKeyword.length }}
            </p>
            <base-button
              v-show="
                chosenKeyword.length
              "
              size="s"
            >
              <v-btn
                outlined
                color="red"
                rounded
                @click="
                  onClickResetFilter
                "
              >
                Reset Filter
                <v-icon
                  >mdi-close</v-icon
                >
              </v-btn>
            </base-button>
          </div>

          <v-card
            elevation="0"
            class="mx-auto px-4 py-4 blue-grey lighten-5"
            light
          >
            <v-responsive
              max-height="400"
              class="overflow-y-auto"
            >
            <base-card
            v-if="!loading && keywords.length === 0"
              size="s"
              class-name="my-6 mx-4"
            >
              <v-card-title                
                class="light-blue--text text--darken-4 font-weight-bold d-flex justify-center"
                >Peraturan tidak ditemukan
              </v-card-title>  
            </base-card>
              <v-layout v-if="!loading" column>
                <div
                  v-for="keyword in keywords"
                  :key="keyword.id"
                  :class="
                    cardOrderClass(
                      keyword
                    )
                  "
                >
                  <div
                    @click="
                      onClickFilter(
                        keyword
                      )
                    "
                  >
                    <base-card
                      size="s"
                      :color="
                        cardColorChanged(
                          keyword.id
                        )
                      "
                      class-name="px-4 my-6 mx-4"
                    >
                      <v-row>
                        <v-col
                          sm="12"
                          lg="6"
                        >
                          <v-card-title
                            :class="
                              textTitleColorChanged(
                                keyword.id
                              )
                            "
                            >Nama :
                          </v-card-title>
                          <v-card-text
                            :class="
                              textColorChanged(
                                keyword.id
                              )
                            "
                          >
                            {{
                              keyword.name
                            }}
                          </v-card-text>
                        </v-col>
                        <v-col
                          sm="12"
                          lg="4"
                        >
                          <v-card-title
                            :class="
                              textTitleColorChanged(
                                keyword.id
                              )
                            "
                            >Total
                            Peraturan :
                          </v-card-title>
                          <v-card-text
                            :class="
                              textColorChanged(
                                keyword.id
                              )
                            "
                          >
                            {{
                              keyword.total_peraturan
                            }}
                          </v-card-text>
                        </v-col>
                        <v-col
                          sm="12"
                          lg="2"
                        >
                          <div
                            class="pa-4 d-flex justify-center align-center"
                          >
                            <v-btn
                              elevation="0"
                              rounded
                              fab
                              :class="[
                                'px-2 py-2 ' +
                                  buttonColorChanged(
                                    keyword.id
                                  )
                              ]"
                            ></v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </base-card>
                  </div>
                </div>
              </v-layout>
               <v-skeleton-loader
                v-else
                :loading="loading"
                elevation="0"
                light
                type="article"
              ></v-skeleton-loader>
            </base-card>
            </v-responsive>
          </v-card>
        </v-container>
      </v-card>
    </base-dialog>
  </div>
</template>

<script>
import _ from 'lodash'
import {
  mapState,
  mapMutations
} from 'vuex'

export default {
  name: 'PeraturanAutoSearchFilterDialog',
  props: {
    name: {
      type: String,
      default: () =>
        'peraturan-dialog-input'
    }
  },
  data() {
    return {
      chosenKeyword: [],      
    }
  }, 
  computed: {
    ...mapState('autoSearch', {
      keywords: 'keywords',
      loading: 'loading_keyword',
      keyword_ids: 'keyword_ids',
    })
  },
  watch: {
    keyword_ids(value){
      this.fetchAPI()   
    }
  },
  methods: {
    ...mapMutations('autoSearch', {
      SET_KEYWORDS: 'SET_KEYWORDS',
      SET_SEARCH_KEYWORD: 'SET_SEARCH_KEYWORD',
      SET_KEYWORD_IDS: 'SET_KEYWORD_IDS'
    }),
    async fetchAPI() {
      if (this.keyword_ids.length > 0) {
        await this.$store.dispatch(
        'autoSearch/getFilterSearchByKeywordPeraturan'
      )   
      }
      else {
         await this.$store.dispatch(
         'autoSearch/getFilterSearchPeraturan'
        )   
      
      }
    },
    onCloseDialog() {      
      this.$baseDialog(
                'close',
                'peraturan-filter-dialog'
              )
     },
    async onSearching(query) {      
      let search = query

      // eslint-disable-next-line no-unused-expressions
      search === ''
        ? (search = null)
        : search

      this.SET_SEARCH_KEYWORD(search)
      await this.$store.dispatch(
        'autoSearch/getKeywords'
      )      
    },
    onClickResetFilter() {
      this.chosenKeyword.splice(
        0,
        this.chosenKeyword.length
      )
      this.SET_KEYWORD_IDS([])
    },
    onClickFilter(keyword) {
      const index = _.findIndex(
        this.chosenKeyword,
        keyword
      )
      if (index !== -1) {
        this.chosenKeyword.splice(
          index,
          1
        )
        // this.chosenKeyword = Object.assign({}, this.chosenKeyword.splice(index, 1))
      } else {
        this.chosenKeyword.push(keyword)        
      }      

      const filter = this.chosenKeyword.map(value => {
            return value.id
      })
      this.SET_KEYWORD_IDS(filter)      
    },
    cardOrderClass(keyword) {
      const index = _.findIndex(
        this.chosenKeyword,
        keyword
      )
      return index !== -1
        ? 'order-first'
        : ''
    },
    textTitleColorChanged(id) {
      const css =
        this.chosenKeyword.find(
          (data) => data.id === id
        )
      return css !== undefined
        ? 'yellow--text text--accent-2 font-weight-medium'
        : 'light-blue--text text--darken-4 font-weight-medium'
    },
    textColorChanged(id) {
      const css =
        this.chosenKeyword.find(
          (data) => data.id === id
        )
      return css !== undefined
        ? 'blue-grey--text text--lighten-5 text-subtitle-1'
        : 'text-subtitle-1'
    },
    cardColorChanged(id) {
      const css =
        this.chosenKeyword.find(
          (data) => data.id === id
        )
      return css !== undefined
        ? 'light-blue darken-4'
        : ''
    },
    buttonColorChanged(id) {
      const css =
        this.chosenKeyword.find(
          (data) => data.id === id
        )
      return css !== undefined
        ? 'button-rounded-active'
        : 'button-rounded-inactive'
    }
  }
}
</script>

<style scoped>
.button-rounded-active {
  /* Light Blue darken-4 */

  background: var(
    --base-light-blue-darken-4
  ) !important;
  /* Yellow */

  border: 0.75rem solid
    var(--base-yellow-accent-2) !important;
}
.button-rounded-inactive {
  /* Light Blue darken-4 */

  background: transparent !important;
  /* Yellow */

  border: 0.75rem solid
    var(--base-light-blue-darken-4) !important;
}
</style>
