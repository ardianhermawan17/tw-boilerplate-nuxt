<template>
  <v-app>
    <v-main class="grey lighten-3">
    <base-snackbar name="auth-snackbar" />
      <v-container
        fluid
        class="px-0 py-0 blue-grey lighten-5 min-height-100 d-flex justify-center align-center"
      >
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutsAuth'
}
</script>

<style scoped>
.min-height-100 {
  min-height: 100%;
  height: 100%;
}
</style>
