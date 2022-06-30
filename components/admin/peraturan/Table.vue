<template>
  <v-data-table
    light
    class="blue-grey lighten-5 rounded"
    :headers="headers"
    :items="items"
  ></v-data-table>
</template>

<script>
import { mapState } from 'vuex'
import headers from '~/config/table/admin/peraturan'
// import tableMixin from '~/plugins/vue/mixins/table'
export default {
  name: 'AdminPeraturanTable',
  // mixins: [tableMixin],
  data() {
    return {
      headers
    }
  },
  computed: {
    ...mapState('admin/peraturan', {
      items: 'items'
    })
  }
}
</script>
