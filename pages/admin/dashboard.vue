<template>
  <v-container class="py-6 my-4">
    <v-row class="my-6">
      <v-col sm="12" md="4">
        <AdminDashboardTotalDataCard
          title="Total Peraturan"
          :data="totalPeraturan"
        />
      </v-col>
      <v-col sm="12" md="4">
        <AdminDashboardTotalDataCard
          title="Total Kategori"
          :data="totalKategori"
        />
      </v-col>
      <v-col sm="12" md="4">
        <AdminDashboardTotalDataCard
          title="Total Keywords"
          :data="totalKeywords"
        />
      </v-col>
    </v-row>
    <!-- CHART -->
    <div class="my-12 px-6">
      <base-card
        color="light-blue darken-4"
      >
        <base-bar-chart />
      </base-card>
    </div>

    <div class="my-11">
      <AdminDashboardNewestUpdateData />
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'AdminDashboard',
  layout: 'admin/default',
  data() {
    return {
      totalPeraturan: 100,
      totalKategori: 12,
      totalKeywords: 2022
    }
  },
  mounted() {
    this.getKategori()
  },
  methods: {
    async getKategori() {
      // this.$baseSnackbar(
      //   'admin-snackbar',
      //   {
      //     title: 'Muantap',
      //     text: 'kokokokok',
      //     color: 'success',
      //     duration: 3000
      //   }
      // )
      const data =
        await this.$store.dispatch(
          'admin/kategori/getKategori'
        )

      // if (data.code === 200) {
      //   this.$baseSnackbar(
      //     'admin-snackbar',
      //     {
      //       title: 'Muantap',
      //       text: 'kokokokok',
      //       color: 'success',
      //       duration: 3000
      //     }
      //   )
      // }
      console.log(data)
    }
  }
}
</script>
