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
                name
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
            >Edit Peraturan</v-card-title
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
                name="content"
                rules="required"
              >
                <v-text-field
                  v-model="
                    form.content
                  "
                  :error-messages="
                    errors
                  "
                  light
                  label="Nama Peraturan"
                  placeholder="Enter peraturan"
                  outlined
                  required
                ></v-text-field>
              </validation-provider>
              <validation-provider
                name="kategori_id"
              >
                <v-autocomplete
                  v-model="form.kategori_id"
                  light                  
                  :items="list_kategori"
                  item-text="name"
                  item-value="id"                 
                  clearable
                  outlined
                  dense
                  chips
                  small-chips
                  label="Kategori"                  
                  @focus="reset"
                ></v-autocomplete>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="harga_satuan"
                rules="required"
              >
                <v-text-field
                  v-model="
                    form.harga_satuan
                  "
                  :error-messages="
                    errors
                  "
                  light
                  label="Harga Satuan"                  
                  placeholder="Enter harga satuan"
                  outlined
                  required
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="satuan"
                rules="required"
              >
                <v-text-field
                  v-model="
                    form.satuan
                  "
                  :error-messages="
                    errors
                  "
                  light
                  label="Satuan"
                  placeholder="Enter satuan"
                  outlined
                  required
                ></v-text-field>
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
                  Edit
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
  name: 'AdminPeraturanCreateFormDialog',
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
        content: '',
        satuan: '',
        harga_satuan: '',
        kategori_id: null,        
      }
    }
  },
  async fetch() {
    const res = await this.$store.dispatch('admin/kategori/getNonPaginationKategori')    
    this.form.kategori_id = res.data.kategori.id
    console.log(this.detailItem)
    console.log(this.form)
  },
  computed: {
    ...mapState('admin/peraturan', {
      detailItem: 'detailItem'
    }),
    ...mapState('admin/kategori', {
      list_kategori: 'nonPaginationItems',
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
    ...mapMutations('admin/peraturan', {
      SET_DETAIL_ITEM: 'SET_DETAIL_ITEM'
    }),
    async submit() {
      const res =
        await this.$store.dispatch(
          'admin/peraturan/updatePeraturan',
          {
            peraturanId: this.form.id,
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
        'admin/peraturan/getPeraturan'
      )
      this.$baseDialog(
        'close',
        'admin-peraturan-edit-form-dialog'
      )
    },
    reset() {              
        this.$refs.observer.reset()
      },
  }
}
</script>
