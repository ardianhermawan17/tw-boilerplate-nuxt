<template>
  <div class="flex">
    <slot name="toggler" />
    <base-dialog :name="name">
      <v-card
       v-if="!loading"
        class="blue-grey lighten-5"
      >
        <v-toolbar
          color="blue-grey lighten-5"
          elevation="0"
          class="px-4"
        >
          <v-spacer></v-spacer>

          <v-btn
            icon
            fab
            color
            class="red"
            x-small
            @click.stop="
              $baseDialog(
                'close',
                'admin-kategori-edit-form-dialog'
              )
            "
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <!-- <v-divider></v-divider> -->
        <v-container>
          <v-card-title
            class="black--text text-h5 text-center d-flex justify-center align-center"
            >Edit Kategori</v-card-title
          >
          <validation-observer
            ref="observer"
            v-slot="{ invalid }"
          >
            <form
              @submit.prevent="submit"
            >
              <validation-provider
                v-slot="{ errors }"
                name="name"
                rules="required"
              >
                <v-text-field
                  v-model="form.name"
                  :error-messages="
                    errors
                  "
                  light
                  label="Kategori"
                  placeholder="Enter kategori"
                  outlined
                  required
                ></v-text-field>
              </validation-provider>

              <validation-provider
                name="keyword"
              >
                <v-autocomplete
                  v-model="form.keyword"
                  light                  
                  :items="keywords"
                  item-text="name"
                  item-value="id"                 
                  clearable
                  outlined
                  dense
                  chips
                  small-chips
                  label="Kategori"
                  multiple
                  @focus="reset"
                ></v-autocomplete>
              </validation-provider>

              <div class="d-flex">
                <v-spacer></v-spacer>
                <v-btn
                  light
                  class="mr-4"
                  color="light-blue darken-4 white--text"
                  type="submit"
                  :disabled="invalid"
                >
                  Simpan
                </v-btn>
              </div>
            </form>
          </validation-observer>
        </v-container>
      </v-card>
    </base-dialog>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'
export default {
  name: 'AdminKategoriCreateFormDialog',
  props: {
    name: {
      type: String,
      default: () =>
        'search-dialog-input'
    }
  },
  data() {
    return {
      form: {
        name: '',
        keyword: []
      },      
    }
  },
  async fetch() {
    const res = await this.$store.dispatch('admin/keyword/getNonPaginationKeyword')
    this.form.keyword = res.data    
  },
  computed: {
    ...mapState('admin/kategori', {
      detailItem: 'detailItem'
    }),
    ...mapState('admin/keyword', {
      keywords: 'nonPaginationItems',
      loading: 'loading'
    })
  },
  watch: {
    detailItem(value) {      
      this.form = Object.assign(
        {},
        this.detailItem
      )      
    }   
  },
  methods: {
    ...mapMutations('admin/kategori', {
      SET_DETAIL_ITEM: 'SET_DETAIL_ITEM'
    }),
    async submit() {
      const res =
        await this.$store.dispatch(
          'admin/kategori/updateKategori',
          {
            kategoriId: this.form.id,
            payload: Object.assign(
              {},
              this.form
            )
          }
        )
      this.$baseSnackbar(
        'admin-snackbar',
        {
          title: 'Success',
          text: res.message,
          color: 'success',
          duration: 3000
        }
      )
      await this.$store.dispatch(
        'admin/kategori/getKategori'
      )
      this.$baseDialog(
        'close',
        'admin-kategori-edit-form-dialog'
      )
    },
    reset() {              
        this.$refs.observer.reset()
      },
  }
}
</script>
