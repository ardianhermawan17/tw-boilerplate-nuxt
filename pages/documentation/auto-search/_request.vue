<template>
  <v-container>
    <base-card
      size="l"
      :color="colorCard(data.type)"
      class-name="my-6 mx-4"
    >
      <section class="py-4">
        <div class="d-flex mx-6">
          <v-btn
            class="mr-6"
            :color="
              colorButton(data.type)
            "
            depressed
            >{{ data.type }}</v-btn
          >
          <p
            class="black--text font-weight-bold my-auto"
          >
            {{ data.groupRoute }}
          </p>
        </div>
      </section>

      <section class="py-4">
        <v-divider class="ma-6" />
        <div
          class="d-flex justify-space-between white pa-6"
        >
          <h3
            class="black--text my-auto font-weight-bold"
          >
            {{
              data.isLogin
                ? 'LOGIN REQUIRED'
                : 'LOGIN NOT REQUIRED'
            }}
          </h3>
          <!-- <v-btn color="black" outlined
            >Try it out</v-btn
          > -->
        </div>
      </section>

      <section class="py-4">
        <v-divider class="ma-6" />
        <div class="py-2 mx-6">
          <p>
            {{data.description}}
          </p>
        </div>
        <div
          class="d-flex justify-space-between white pa-6"
        >
          <h3
            class="black--text my-auto font-weight-bold"
          >
            Parameters
          </h3>
          <!-- <v-btn color="black" outlined
            >Try it out</v-btn
          > -->
        </div>
        <v-row dense class="ma-6">
          <v-col cols="2">
            <h3
              class="black--text my-auto font-weight-medium"
            >
              name
            </h3>
          </v-col>
          <v-col cols="10">
            <h3
              class="black--text my-auto font-weight-medium"
            >
              description
            </h3>
          </v-col>
        </v-row>
        <v-divider class="my-6 mx-6" />
        <!-- Looping Parameters -->
        <DocumentationParameters
          :item="data.parameters"
        />
      </section>
      <section class="py-4">
        <!-- Response -->
        <div
          class="d-flex justify-space-between white pa-6"
        >
          <h3
            class="black--text my-auto font-weight-bold"
          >
            Response
          </h3>
          <!-- <v-btn color="black" outlined
            >Try it out</v-btn
          > -->
        </div>
        <v-row dense class="ma-6">
          <v-col cols="2">
            <h3
              class="black--text my-auto font-weight-medium"
            >
              Code
            </h3>
          </v-col>
          <v-col cols="10">
            <h3
              class="black--text my-auto font-weight-medium"
            >
              Description
            </h3>
          </v-col>
        </v-row>
        <v-divider class="my-6 mx-6" />

        <!-- Looping response -->
        <DocumentationResponse 
        v-if="data.response"
        :item="data.response"/>
      </section>
    </base-card>
  </v-container>
</template>

<script>
import _ from 'lodash'
import data from '~/config/documentation/auto-search'

export default {
  name: 'DocumentationRequest',
  layout: 'documentation/default',
  data() {
    return {
      items: data,
      data: {}
    }
  },
  mounted() {
    //  data.type.toLowerCase() === this.$route.params.request.toLowerCase()
    // const res = this.items.find(data => data.type.toLowerCase() === this.$route.params.request)
    // console.log(res)
    // console.log(this.$route.params.request)
    // this.renderedParameters()
    this.data = _.cloneDeep(
      this.renderedData()
      )    
  },
  methods: {
    renderedData() {
      const res = this.items.find(
        (data) =>
          data.route.toLowerCase() ===
          this.$route.params.request
      )
      //   console.log(res)
      //   console.log(
      //     this.$route.params.request
      //   )
      return res
    },
    colorButton(type) {
      switch (type) {
        case 'GET':
          return 'primary'
        case 'POST':
          return 'success'
        case 'PUT':
          return 'warning'
        case 'DELETE':
          return 'error'
        default:
          return 'success'
      }
      },
      colorCard(type) {
        switch (type) {
        case 'GET':
          return 'blue lighten-5'
        case 'POST':
          return 'green lighten-4'
        case 'PUT':
          return 'yellow lighten-3'
        case 'DELETE':
          return 'red lighten-5'
        default:
          return 'green lighten-4'
      }
    }
  }
}
</script>

<style scoped>
.code-style {
  display: block !important;
  overflow-x: auto !important;
  padding: 0.5em !important;
  background: rgb(
    51,
    51,
    51
  ) !important;
  color: white !important;
}
</style>
