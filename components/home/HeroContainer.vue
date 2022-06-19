<template>
  <v-img
    max-height="280"
    :src="
      require('~/static/pens-gedung.png')
    "
  >
    <v-responsive
      class="d-flex justify-center align-center background-color-image"
      width="100%"
      height="100%"
    >
      <v-card
        elevation="0"
        class="transparent d-flex flex-column justify-center align-center"
      >
        <v-card-text
          class="text-center font-weight-black text-h6"
        >
          Sistem Informasi Pencarian
          Peraturan Keuangan
        </v-card-text>
        <v-card-text
          class="text-center font-weight-normal text-h5 yellow--text text--accent-2"
        >
          POLITEKNIK ELEKTRONIKA NEGERI
          SURABAYA
        </v-card-text>
      </v-card>
    </v-responsive>
  </v-img>
</template>

<style scoped>
.background-color-image {
  background: rgba(0, 63, 136, 0.6);
}
</style>
