<template>
  <base-card shadow-size="l" class="py-2" color="light-blue darken-4">
    <v-card-title class="d-flex justify-center yellow--text text--accent-2 text-h5">
      {{ title }}
    </v-card-title>
    <v-card-text class="text-center white--text text-h6">
      {{ data }}
    </v-card-text>
  </base-card>
</template>

<script>
export default {
  name: 'AdminDashboardTotalDataCard',
  props: {
    title: {
      type: String,
      required: true
    },
    data: {
      type: [String, Number],
      required: true
    }
  }
}
</script>
