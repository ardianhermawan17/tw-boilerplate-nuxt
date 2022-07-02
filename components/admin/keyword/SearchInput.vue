<template>
  <base-text-field
    v-model="search"
    :is-neumorphism="true"
    :outlined="true"
    append-icon="mdi-magnify"
    label="Keyword"
    placeholder="Cari Keyword...."
    @change="searchItem"
  />
</template>

<script>
import {
  mapMutations,
  mapGetters
} from 'vuex'
export default {
  name: 'AdminKeywordSearchInput',
  data() {
    return {
      search: null
    }
  },
  computed: {
    ...mapGetters('admin/keyword', {
      filter: 'filter'
    })
  },
  methods: {
    ...mapMutations('admin/keyword', {
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
        'admin/keyword/getKeyword'
      )
    }
  }
}
</script>
