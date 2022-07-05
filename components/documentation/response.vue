<template>
  <div v-if="item.success">
    <v-row dense class="ma-6">
      <v-col cols="2">
        <h3
          class="black--text my-auto font-weight-medium"
        >
        {{ item.success.code}}
        <!-- {{ item.response.success.code}} -->
          <!-- {{ item.response.success.code ? 300 : 200 }} -->
        </h3>
      </v-col>
      <v-col cols="10">
        <h4
          class="black--text my-auto font-weight-medium"
        >
          {{ item.success.message}}
        </h4>
        <h5
          class="black--text my-auto font-weight-medium"
        >
          Example Value
          <span
            class="font-weight-normal"
            >| Model</span
          >
        </h5>

        <!-- Coding block -->
        <v-responsive
          max-height="600"
          class="overflow-y-auto"
        >
          <pre>
                <code class="code-style">
                    {{ item.success.data}}
                </code>
            </pre>
        </v-responsive>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'DocumentationResponse',
  props: {
    item: {
      type: Object,      
        default: () => ({})
    }
    },
//     mounted() {
//     console.log(this.data)
//   }
}
</script>

<style scoped>
.code-style {
  display: block !important;
  overflow-y: auto !important;
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
