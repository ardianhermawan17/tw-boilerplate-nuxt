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
        v-slot:[`item.action`]="{
          item
        }"
      >
        <div
          class="d-flex justify-center align-center"
        >
          <AdminKeywordTableButton
            description="Peraturan"
            action-type="view"
            @click="detailItem(item)"
          ></AdminKeywordTableButton>

          <AdminPeraturanTableButton
            description="Peraturan"
            action-type="edit"
            @click="editItem(item)"
          ></AdminPeraturanTableButton>

          <AdminPeraturanTableButton
            description="Peraturan"
            action-type="delete"
            @click="deleteItem(item)"
          ></AdminPeraturanTableButton>
        </div>
      </template>
    </v-data-table>
    <AdminPeraturanEditFormDialog
      name="admin-peraturan-edit-form-dialog"
    />
    <AdminPeraturanDetailFormDialog
      name="admin-peraturan-detail-form-dialog"
    />
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations
} from 'vuex'
import headers from '~/config/table/admin/peraturan'
import tableMixin from '~/plugins/vue/mixins/table'
export default {
  name: 'AdminPeraturanTable',
  mixins: [tableMixin],
  data() {
    return {
      headers
    }
  },
  computed: {
    ...mapState('admin/peraturan', {
      items: 'items',
      loading: 'loading',
      detail: 'detailItem'
    }),
    ...mapGetters('admin/peraturan', {
      filter: 'filter'
    })
  },
  mounted() {
    this.fetchAPI()
  },
  methods: {
    ...mapMutations('admin/peraturan', [
      'SET_FILTER',
      'SET_DETAIL_ITEM'
    ]),
    fetchAPI() {
      this.$store.dispatch(
        'admin/peraturan/getPeraturan'
      )
    },
    detailItem(item) {      
      this.SET_DETAIL_ITEM(item)            
      this.$baseDialog(
        'open',
        'admin-peraturan-detail-form-dialog'
      )
    },
    async editItem(item) {
      await this.$store.dispatch('admin/kategori/getNonPaginationKategori')     
      console.log(item)
      // console.log(this.$store.state.admin.keyword.nonPaginationItems)
      this.SET_DETAIL_ITEM(item)      
      this.$baseDialog(
        'open',
        'admin-peraturan-edit-form-dialog'
      )
    },
    async deleteItem(item) {
      const res =
        await this.$store.dispatch(
          'admin/peraturan/deletePeraturan',
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
