<template>
  <div>
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
            @click="
              $baseDialog(
                'open',
                'peraturan-filter-dialog'
              )
            "
          >
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

    <v-responsive
      max-height="400"
      class="overflow-y-auto"
    >
      <div v-for="n in 12" :key="n">
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
                Honorarium Panitia
                Pengadaan Barang (Non
                Konstruksi) - Nilai pagu
                diatas Rp 1 miliar - 2,5
                miliar
              </v-card-text>
            </v-col>
            <v-col sm="12" lg="4">
              <v-card-title
                class="light-blue--text text--darken-4 font-weight-medium"
                >Satuan :
              </v-card-title>
              <v-card-text>
                Orang
              </v-card-text>
            </v-col>
            <v-col sm="12" lg="4">
              <v-card-title
                class="light-blue--text text--darken-4 font-weight-medium"
                >Harga Satuan :
              </v-card-title>
              <v-card-text>
                {{
                  '2000000'
                    | formatPrice('Rp')
                }}
              </v-card-text>
            </v-col>
          </v-row>
        </base-card>
      </div>
    </v-responsive>
  </div>
</template>

<script>
export default {
  name: 'PeraturanListData'
}
</script>
