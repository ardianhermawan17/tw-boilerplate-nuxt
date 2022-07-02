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
                'admin-kategori-create-form-dialog'
              )">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container>
          <v-card-title
            class="black--text text-h5 text-center d-flex justify-center align-center"
            >Buat Kategori</v-card-title
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
                  v-model="
                    form.name
                  "
                  :error-messages="
                    errors
                  "
                  light
                  label="Nama Kategori"
                  placeholder="Enter kategori"
                  outlined
                  required
                ></v-text-field>
              </validation-provider>
              <validation-provider
                name="keyword"
              >
                <v-select
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
                  label="Keyword"
                  multiple
                  @focus="reset"
                ></v-select>
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
      }
    }
  },
  async fetch() {
    await this.$store.dispatch('admin/keyword/getNonPaginationKeyword')     
  },
  computed: {
    ...mapState('admin/keyword', {
      keywords: 'nonPaginationItems',
      loading: 'loading'
    })
  },
  methods: {
    async submit() {
      const res =
        await this.$store.dispatch(
          'admin/kategori/createKategori',
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
          'admin/kategori/getKategori'
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
        'admin-kategori-create-form-dialog'
      )
    },
    reset() {     
      this.form = {}         
        this.$refs.observer.reset()
      },
  }
}
</script>
