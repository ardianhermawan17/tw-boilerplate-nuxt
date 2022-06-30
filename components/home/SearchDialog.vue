<template>
  <v-dialog v-model="dialog">
    <template
      v-slot:activator="{ on, attrs }"
    >
      <v-btn
        v-bind="attrs"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        class="px-6 white--text"
        color="light-blue darken-4"
        v-on="on"
        >Klik Disini</v-btn
      >
    </template>

    <v-card class="blue-grey lighten-5">
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
          @click="dialog = false"
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
          label="Aturan"
          placeholder="Cari Aturan...."
        />

        <p class="black--text py-6">
          Apakah yang dimaksud :
          {{ textSuggestion }}
        </p>

        <v-card
          elevation="0"
          class="mx-auto px-4 py-4 blue-grey lighten-5"
          light
        >
          <v-virtual-scroll
            :items="items"
            bench="0"
            item-height="200"
            height="400"
            max-height="500"
          >
            <template
              v-slot:default="{ item }"
            >
              <div :key="item">
                <base-card
                  size="s"
                  class-name="px-4"
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
                        Honorarium
                        Panitia
                        Pengadaan Barang
                        (Non Konstruksi)
                        - Nilai pagu
                        diatas Rp 1
                        miliar - 2,5
                        miliar
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
                        Orang
                      </v-card-text>
                    </v-col>
                    <v-col
                      sm="12"
                      lg="4"
                    >
                      <v-card-title
                        class="light-blue--text text--darken-4 font-weight-medium"
                        >Harga Satuan :
                      </v-card-title>
                      <v-card-text>
                        {{ '2000000' | formatPrice('Rp')}}
                      </v-card-text>
                    </v-col>
                  </v-row>
                </base-card>
              </div>

              <v-divider></v-divider>
            </template>
          </v-virtual-scroll>
        </v-card>
        
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'HomeSearchDialog',
  data() {
    return {
      textSuggestion: 'Perjalanan',
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  },
  computed: {
    items() {
      return Array.from(
        { length: this.length },
        (k, v) => v + 1
      )
    },
    length() {
      return 10
    }
  }
}
</script>
