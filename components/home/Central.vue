<template>
  <section
    class="d-flex flex-column py-6 my-10"
  >
    <p
      class="black--text font-weight-normal text-h6 text-center"
    >
      Ingin melihat peraturan secara
      lengkap ? klik dibawah ini
    </p>
    <div
      class="d-flex justify-center align-center mb-8"
    >
      <!-- <v-btn
        depressed
        class="px-6 white--text"
        color="light-blue darken-4"
        >Klik Disini</v-btn
      > -->
      <HomeSearchDialog />
      <!-- TODO :: Kek ono link  -->
    </div>
    <v-row justify="space-between">
      <v-col lg="5" sm="12">
        <base-card class="py-2">
          <v-card-title
            class="text-subtitle-1 d-flex justify-center align-center text-weight-medium"
          >
            Total Peraturan
          </v-card-title>
          <v-card-text
            class="light-blue--text text--darken-4 text-h2 d-flex justify-center align-center"
          >
            118
          </v-card-text>
        </base-card>
      </v-col>
      <v-col lg="5" sm="12">
        <base-card class="py-2">
          <v-card-title
            class="text-subtitle-1 d-flex justify-center align-center text-weight-medium"
          >
            Total Kategori Peraturan
          </v-card-title>
          <v-card-text
            class="light-blue--text text--darken-4 text-h2 d-flex justify-center align-center"
          >
            12
          </v-card-text>
        </base-card>
      </v-col>
    </v-row>
    <!-- CHART -->
    <div class="mt-12">
      <base-card
        color="light-blue darken-4"
      >
        <base-bar-chart />
      </base-card>
    </div>
  </section>
</template>
