<template>
  <base-card
    width="50%"
    class-name="mx-auto my-auto px-6 py-4 my-auto"
  >
    <div
      class="d-flex justify-end py-4"
    >
      <v-btn
        nuxt
        color="red"
        icon
        @click="$router.go(-1)"
        ><v-icon large dark>
          mdi-close-circle
        </v-icon></v-btn
      >
    </div>
    <v-card-title
      class="text-h5 text-center d-flex justify-center align-center"
      >Login Admin</v-card-title
    >
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
    >
      <form
        @submit.prevent="login"
        @keyup.enter="login"
      >
        <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="credentials.email"
            :error-messages="errors"
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
            :error-messages="errors"
            :append-icon="switchIcon"
            :type="passwordFieldType"
            label="Password"
            placeholder="Enter your password"
            outlined
            required
            @click:append="
              switchVisibility
            "
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
            <template v-if="loading">
              <v-progress-circular
                indeterminate
                color="white"
              ></v-progress-circular>
            </template>
            <template v-else>
              Masuk
            </template>
          </v-btn>
        </div>
      </form>
    </validation-observer>
  </base-card>
</template>

<script>
export default {
  name: 'Login',
  auth: 'guest',
  layout: 'authentication/default',
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      passwordFieldType: 'text',
      loading: false
    }
  },
  computed: {
    switchIcon() {
      return this.passwordFieldType ===
        'text'
        ? 'mdi-eye'
        : 'mdi-eye-off'
    }
  },
  methods: {
    login() {
      this.loading = true
      this.$auth
        .loginWith('local', {
          data: this.credentials
        })
        .then(() => {
          this.$baseSnackbar(
          'auth-snackbar',
          {
            title: 'Success',
            text: 'Login Successfully',
            color: 'success',
            duration: 3000
          }
        )
        })       
        .catch((error) => {
          this.$baseSnackbar(
          'auth-snackbar',
          {
            title: 'Error',
            text: error.response,
            color: 'error',
            duration: 3000
          }
        )
          // console.log(error.response)
        })
        
        this.loading = false
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType ===
        'password'
          ? 'text'
          : 'password'
    }
  }
}
</script>
