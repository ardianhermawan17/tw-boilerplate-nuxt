<template>
  <div class="flex">
    <slot name="toggler" />
    <base-dialog :name="name">
      <v-card
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
        <v-container>
          <v-card-title
            class="black--text text-h5 text-center d-flex justify-center align-center"
            >Create
            Kategori</v-card-title
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
                name="email"
                rules="required|email"
              >
                <v-text-field                
                  v-model="
                    credentials.email
                  "
                  :error-messages="
                    errors
                  "
                  light
                  label="E-mail"
                  placeholder="Enter your email"
                  outlined
                  required
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="Password"
                rules="required"
              >
                <v-text-field
                  v-model="
                    credentials.password
                  "
                  :error-messages="
                    errors
                  "
                  append-icon="mdi-eye"
                  light
                  label="Password"
                  placeholder="Enter your password"
                  outlined
                  required
                ></v-text-field>
              </validation-provider>

              <div class="d-flex">
                <v-spacer></v-spacer>
                <v-btn
                  dark
                  class="mr-4"
                  color="light-blue darken-4 white--text"
                  type="submit"
                  :disabled="invalid"
                >
                  Login
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
export default {
  name: 'AdminKategoriAddDialog',
  props: {
    name: {
      type: String,
      default: () =>
        'search-dialog-input'
    }
  },
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      passwordFieldType: 'text'
    }
  }
}
</script>
