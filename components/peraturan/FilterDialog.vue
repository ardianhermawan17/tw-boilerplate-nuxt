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
              $baseDialog(
                'close',
                'peraturan-filter-dialog'
              )
            "
          >
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
            label="Kategori"
            placeholder="Cari kategori...."
          />

          <!-- Title kategori  -->
          <div
            class="d-flex justify-space-between py-6"
          >
            <p class="black--text">
              Total kategori yang
              dipilih :
              {{
                chosenCategory.length
              }}
            </p>
            <base-button
              v-show="
                chosenCategory.length
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
              <v-layout column>
                <div
                  v-for="category in listCategory"
                  :key="category.id"
                  :class="
                    cardOrderClass(
                      category
                    )
                  "
                >
                  <div
                    @click="
                      onClickFilter(
                        category
                      )
                    "
                  >
                    <base-card
                      size="s"
                      :color="
                        cardColorChanged(
                          category.id
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
                                category.id
                              )
                            "
                            >Nama :
                          </v-card-title>
                          <v-card-text
                            :class="
                              textColorChanged(
                                category.id
                              )
                            "
                          >
                            {{
                              category.name
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
                                category.id
                              )
                            "
                            >Total
                            Peraturan :
                          </v-card-title>
                          <v-card-text
                            :class="
                              textColorChanged(
                                category.id
                              )
                            "
                          >
                            {{
                              category.totalPeraturan
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
                                    category.id
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
            </v-responsive>
          </v-card>
        </v-container>
      </v-card>
    </base-dialog>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'PeraturanFilterDialog',
  props: {
    name: {
      type: String,
      default: () =>
        'search-dialog-input'
    }
  },
  data() {
    return {
      chosenCategory: [
        {
          id: 1,
          name: 'Honorium Method',
          totalPeraturan: 90
        },
        {
          id: 2,
          name: 'Honorium Console',
          totalPeraturan: 10
        }
      ],
      listCategory: [
        {
          id: 1,
          name: 'Honorium Method',
          totalPeraturan: 90
        },
        {
          id: 2,
          name: 'Honorium Console',
          totalPeraturan: 10
        },
        {
          id: 3,
          name: 'Honorium Tempekalan',
          totalPeraturan: 70
        },
        {
          id: 4,
          name: 'Honorium',
          totalPeraturan: 70
        },
        {
          id: 5,
          name: 'Honorium',
          totalPeraturan: 70
        }
      ]
    }
  },
  methods: {
    onClickResetFilter() {
      this.chosenCategory.splice(
        0,
        this.chosenCategory.length
      )
    },
    onClickFilter(category) {
      const index = _.findIndex(
        this.chosenCategory,
        category
      )
      if (index !== -1) {
        this.chosenCategory.splice(
          index,
          1
        )
        // this.chosenCategory = Object.assign({}, this.chosenCategory.splice(index, 1))
      } else {
        this.chosenCategory.push(
          category
        )
      }
    },
    cardOrderClass(category) {
      const index = _.findIndex(
        this.chosenCategory,
        category
      )
      return index !== -1
        ? 'order-first'
        : ''
    },
    textTitleColorChanged(id) {
      const css =
        this.chosenCategory.find(
          (data) => data.id === id
        )
      return css !== undefined
        ? 'yellow--text text--accent-2 font-weight-medium'
        : 'light-blue--text text--darken-4 font-weight-medium'
    },
    textColorChanged(id) {
      const css =
        this.chosenCategory.find(
          (data) => data.id === id
        )
      return css !== undefined
        ? 'blue-grey--text text--lighten-5 text-subtitle-1'
        : 'text-subtitle-1'
    },
    cardColorChanged(id) {
      const css =
        this.chosenCategory.find(
          (data) => data.id === id
        )
      return css !== undefined
        ? 'light-blue darken-4'
        : ''
    },
    buttonColorChanged(id) {
      const css =
        this.chosenCategory.find(
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
