<template>
  <base-text-field
    v-model="search"
    :is-neumorphism="true"
    :outlined="true"
    append-icon="mdi-magnify"
    label="Aturan"
    placeholder="Cari Aturan...."
    @change="searchItem"
  />
</template>

<script>
import {
  mapMutations,
  mapGetters
} from 'vuex'
export default {
  name: 'AdminPeraturanSearchInput',
  data() {
    return {
      search: null
    }
  },
  computed: {
    ...mapGetters('admin/kategori', {
      filter: 'filter'
    })
  },
  methods: {
    ...mapMutations('admin/kategori', {
      SET_FILTER: 'SET_FILTER'
    }),
    searchItem(query) {
      let search = query

      // eslint-disable-next-line no-unused-expressions
      search === ''
        ? (search = null)
        : search

      this.SET_FILTER({
        ...this.filter,
        search
      })
      this.$store.dispatch(
        'admin/kategori/getKategori'
      )
    }
  }
}
</script>
