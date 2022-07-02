/* eslint-disable vue/v-slot-style */
<template>
  <div>
    <v-data-table
      light
      class="blue-grey lighten-5 rounded"
      item-key="id"
      :headers="headers"
      :items="items.data"
      :loading="loading"
      :page="filter.page"
      :items-per-page="
        parseInt(filter.per_page)
      "
      :server-items-length="
        filter.total
      "
      :footer-props="{
        'items-per-page-options': [
          5, 10, 20, 100
        ]
      }"
      @update:page="onPaginateClick"
      @update:items-per-page="updateItemsPerPage">
      <template
        v-slot:[`item.action`]="{item}">
        <div
          class="d-flex justify-center align-center"
        >
          <AdminKeywordTableButton
            description="Keyword"
            action-type="view"
            @click="detailItem(item)"
          ></AdminKeywordTableButton>

          <AdminKeywordTableButton
            description="Keyword"
            action-type="edit"
            @click="editItem(item)"
          ></AdminKeywordTableButton>

          <AdminKeywordTableButton
            description="Keyword"
            action-type="delete"
            @click="deleteItem(item)"
          ></AdminKeywordTableButton>
        </div>
      </template>
    </v-data-table>
    <AdminKeywordEditFormDialog
      name="admin-keyword-edit-form-dialog"
    />
    <AdminKeywordDetailFormDialog
      name="admin-keyword-detail-form-dialog"
    />
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations
} from 'vuex'
import headers from '~/config/table/admin/keyword'
import tableMixin from '~/plugins/vue/mixins/table'
export default {
  name: 'AdminKategoriTable',
  mixins: [tableMixin],
  data() {
    return {
      headers
    }
  },
  computed: {
    ...mapState('admin/keyword', {
      items: 'items',
      loading: 'loading',
      detail: 'detailItem'
    }),
    ...mapGetters('admin/keyword', {
      filter: 'filter'
    })
  },
  mounted() {
    this.fetchAPI()
  },
  methods: {
    ...mapMutations('admin/keyword', [
      'SET_FILTER',
      'SET_DETAIL_ITEM'
    ]),
    fetchAPI() {
      this.$store.dispatch(
        'admin/keyword/getKeyword'
      )
    },
    detailItem(item) {
      this.SET_DETAIL_ITEM(item)
      this.$baseDialog(
        'open',
        'admin-keyword-detail-form-dialog'
      )
    },
    editItem(item) {
      this.SET_DETAIL_ITEM(item)
      this.$baseDialog(
        'open',
        'admin-keyword-edit-form-dialog'
      )
    },
    async deleteItem(item) {
      const res =
        await this.$store.dispatch(
          'admin/keyword/deleteKeyword',
          item.id
        )
      if (res.code === 200)
        this.$baseSnackbar(
          'admin-snackbar',
          {
            title: 'Success',
            text: res.message,
            color: 'success',
            duration: 3000
          }
        )
      else if (res.code !== 200)
        this.$baseSnackbar(
          'admin-snackbar',
          {
            title: 'Delete',
            text: res.message,
            color: 'error',
            duration: 3000
          }
        )      
    }
  }
}
</script>
