<template>
  <div>
    <base-card class="px-6 py-12">
      <v-row>
        <v-col sm="10">
          <base-text-field
            :is-neumorphism="false"
            :outlined="true"
            label="Aturan"
            placeholder="Cari Aturan...."
            @change="onSearching"
          />
        </v-col>
        <v-col sm="2">
          <div
            class="d-flex flex-column justify-end align-end"
          >
            <v-btn
              depressed
              width="100%"
              class="px-6 white--text"
              color="light-blue darken-4"
              @click="onButtonClick"
              >Cari</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </base-card>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'
export default {
  name: 'PeraturanSearchInput',
  computed: {
    ...mapState('autoSearch', {
      search: 'search',
      keyword_ids: 'keyword_ids'
    })
  },
  methods: {
    ...mapMutations('autoSearch', {
      SET_SEARCH: 'SET_SEARCH'
    }),
    onSearching(query) {
      let search = query

      // eslint-disable-next-line no-unused-expressions
      search === ''
        ? (search = '')
        : search

      this.SET_SEARCH(search)
    },

    async onButtonClick() {
      let res = null
      if (this.keyword_ids.length > 0) {

      this.SET_SEARCH(this.search === '' || this.search === null ? ' ' : this.search)
        res =
          await this.$store.dispatch(
            'autoSearch/getFilterSearchByKeywordPeraturan'
          )
        console.log('one')
      } else {
        res =
          await this.$store.dispatch(
            'autoSearch/getFilterSearchPeraturan'
          )
        console.log('two')
      }
      console.log(res)
    }
  }
}
</script>
