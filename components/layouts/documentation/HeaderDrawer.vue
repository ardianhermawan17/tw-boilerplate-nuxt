<template>
  <v-list-item
    class="mb-0 justify-center pl-3"
  >
    <v-img
      max-height="80"
      max-width="80"
      class="ma-6"
      :src="
        require('~/static/pens-logo-putih.png')
      "
    />
  </v-list-item>
</template>

<script>
export default {
  name: 'DocumentationHeaderDrawer'
}
</script>
