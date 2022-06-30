<template>
  <v-app>
    <v-app-bar fixed color="white" app>
      <v-toolbar-title
        class="light-blue--text text--darken-4"
        >SI AUTOFINTION</v-toolbar-title
      >
      <v-responsive width="80%">
        <v-tabs
          right
          active-class="text--black"
          class="px-8"
          color="light-blue darken-4"
          light
        >
          <v-tab
            v-for="link in links"
            :key="link.name"
            nuxt
            :to="link.link"
          >
          
            {{ link.name }}
          </v-tab>
        </v-tabs>
      </v-responsive>

      <v-btn
        depressed
        nuxt
        to="auth/login"
        class="px-6 yellow--text"
        color="light-blue darken-4"
        >Login</v-btn
      >
      <!-- TODO :: Kek ono link  -->
    </v-app-bar>
    <v-main class="grey lighten-3">
      <v-container
        fluid
        class="px-0 py-0 blue-grey lighten-5"
      >
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer dark padless>
      <v-card
        flat
        tile
        width="100%"
        class="light-blue darken-4 white--text text-center"
      >
        <v-container
          class="py-12"
          fluid
        >
          <v-row>
            <v-col lg="4" sm="12">
              <v-container
                class="d-flex flex-row"
              >
                <div>
                  <v-img
                    max-height="80"
                    max-width="80"
                    :src="
                      require('~/static/pens-logo-putih.png')
                    "
                  ></v-img>
                </div>
                <v-card-text
                  class="text-left"
                >
                  Mencari data peraturan
                  keuangan dengan cepat
                </v-card-text>
              </v-container>
            </v-col>

            <v-col lg="4" sm="12">
              <v-row>
                <v-card-text
                  class="text-h6"
                >
                  SI AUTOFINTION
                </v-card-text>
                <v-card-text>
                  Mencari data peraturan
                  keuangan dengan cepat
                </v-card-text>
              </v-row>
            </v-col>

            <v-col lg="4" sm="12">
              <v-row>
                <v-card-text
                  class="text-h6"
                >
                  Temukan Kami
                </v-card-text>
                <v-card-text>
                  <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 white--text"
                    icon
                  >
                    <v-icon size="24px">
                      {{ icon }}
                    </v-icon>
                  </v-btn>
                </v-card-text>
              </v-row>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>

        <v-flex class="yellow accent-2">
          <v-card-text>
            <strong
              class="light-blue--text text--darken-4 text-subtitle-1 font-weight-bold"
            >
              {{
                new Date().getFullYear()
              }}
              — Imanuddin Ardian
              Hermawan, All right
              reserved</strong
            >
          </v-card-text>
        </v-flex>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      miniVariant: false,
      title: 'Vuetify.js',
      links: [
        {'name': 'Beranda', 'link': '/'}, 
        {'name': 'Peraturan', 'link': '/peraturan'}
        ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram'
      ]
    }
  }
  // mounted() {
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start()
  //     setTimeout(() => this.$nuxt.$loading.finish(), 20000)
  //     // TODO :: hilangi loading mode debugging
  //   })
  // }
}
</script>
