<template>
  <div>
    <!-- Query -->
    <template
      v-for="(query, i) in item.query"
    >
      <v-row
        v-if="item.query.length > 0"
        :key="`query-${i}`"
        dense
        class="ma-6"
      >
        <v-col cols="2">
          <h3
            class="black--text my-auto font-weight-medium"
          >
            {{ query.name }}
            <span v-show="query.isRequired"
              class="red--text text-caption"
              >* required</span
            >
          </h3>
          <h5
            class="black--text my-auto font-weight-medium"
          >
            {{ query.type }}
          </h5>
          <h5
            class="grey--text my-auto font-italic"
          >
            (Query)
          </h5>
        </v-col>
        <v-col cols="10">
          <h4
            class="black--text my-auto font-weight-medium"
          >
            {{ query.description }}
          </h4>
        </v-col>
      </v-row>
    </template>

    <!-- Path  -->
    <template
      v-for="(path, i) in item.path"
    >
      <v-row v-if="item.path.length > 0"
        :key="`path-${i}`" dense class="ma-6">
        <v-col cols="2">
          <h3
            class="black--text my-auto font-weight-medium"
          >
            {{path.name}}
            <span
            v-show="path.isRequired"
              class="red--text text-caption"
              >* required</span
            >
          </h3>
          <h5
            class="black--text my-auto font-weight-medium"
          >
            {{path.type}}
          </h5>
          <h5
            class="grey--text my-auto font-italic"
          >
            (Path)
          </h5>
        </v-col>
        <v-col cols="10">
          <h4
            class="black--text my-auto font-weight-medium"
          >
            {{path.description}}
          </h4>
        </v-col>
      </v-row>
    </template>

    <!-- Body  -->
    <v-row v-if="item.body" dense class="ma-6">
      <v-col cols="2">
        <h3
          class="black--text my-auto font-weight-medium"
        >
          Body
          <span
            class="red--text text-caption"
            >* required</span
          >
        </h3>
        <h5
          class="black--text my-auto font-weight-medium"
        >
          Object
        </h5>
        <h5
          class="grey--text my-auto font-italic"
        >
          (Body)
        </h5>   
      </v-col>
      <v-col cols="10">
        <h4
          class="black--text my-auto font-weight-medium"
        >
          Data object that need to the
          store
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
                   {{item.body.code}}
                </code>
                </pre>
        </v-responsive>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'DocumentationParameters',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
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
