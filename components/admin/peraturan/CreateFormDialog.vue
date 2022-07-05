<template>
  <div class="flex">
    <slot name="toggler" />
    <base-dialog :name="name" @click:outside="reset">
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
                'admin-peraturan-create-form-dialog'
              )">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container>
          <v-card-title
            class="black--text text-h5 text-center d-flex justify-center align-center"
            >Buat Peraturan</v-card-title
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
                  type="number"
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
                  Buat
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
import { mapState } from 'vuex'
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
    await this.$store.dispatch('admin/kategori/getNonPaginationKategori')     
  },
  computed: {
    ...mapState('admin/kategori', {
      list_kategori: 'nonPaginationItems',
      loading: 'loading'
    })
  },
  methods: {
    async submit() {
      const res =
        await this.$store.dispatch(
          'admin/peraturan/createPeraturan',
          this.form
        )      
      if (res.code === 200) {
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
      } else if (res.code !== 200) {
        this.$baseSnackbar(
          'admin-snackbar',
          {
            title: 'Error',
            text: res.message,
            color: 'error',
            duration: 3000
          }
        )
      }
      this.$baseDialog(
        'close',
        'admin-peraturan-create-form-dialog'
      )
    },
    reset() {     
      this.form = {}         
        this.$refs.observer.reset()
      },
  }
}
</script>
