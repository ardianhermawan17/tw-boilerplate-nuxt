<template>
  <div>
    <p class="text-h5 black--text">
      Data Terupdate :
    </p>
    <div class="px-6 my-12">
      <base-card
        size="s"
        class-name="px-4 my-6 mx-4"
      >
        <v-row>
          <v-col sm="12" lg="4">
            <v-card-title
              class="light-blue--text text--darken-4 font-weight-medium text-h5"
              >Kategori :
            </v-card-title>
            <v-card-text
              class="text-h6"
            >
              {{ newestData.kategori }}
            </v-card-text>
          </v-col>
          <v-col sm="12" lg="4">
            <v-card-title
              class="light-blue--text text--darken-4 font-weight-medium text-h5"
              >Satuan :
            </v-card-title>
            <v-card-text
              class="text-h6"
            >
              {{ newestData.satuan }}
            </v-card-text>
          </v-col>
          <v-col sm="12" lg="4">
            <v-card-title
              class="light-blue--text text--darken-4 font-weight-medium text-h5"
              >Harga Satuan :
            </v-card-title>
            <v-card-text
              class="text-h6"
            >
              {{
                newestData.hargaSatuan
                  | formatPrice('Rp')
              }}
            </v-card-text>
          </v-col>
          <v-col sm="12" lg="12">
            <v-card-title
              class="light-blue--text text--darken-4 font-weight-medium text-h5"
              >Aturan :
            </v-card-title>
            <v-card-text
              class="text-h6"
            >
              {{ newestData.aturan }}
            </v-card-text>
          </v-col>
        </v-row>
      </base-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboardNewestUpdateData',
  data() {
    return {
      newestData: {
        kategori:
          'Honorium pengaduan barang',
        satuan: 'orang',
        hargaSatuan: 100000,
        aturan:
          'Honorarium Panitia Pengadaan Barang (Non Konstruksi) - Nilai pagu diatas Rp 1 miliar - 2,5 miliar'
      }
    }
  }
}
</script>
