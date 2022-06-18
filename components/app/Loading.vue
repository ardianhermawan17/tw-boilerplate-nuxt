<template>
  <v-app dark>
    <v-main>
    <div
      v-if="loading"
      class="loading-parent" 
      >
      <v-container 
            fluid>
              <v-progress-circular
                :size="70"
                :width="7"
                color="purple"
                indeterminate
            ></v-progress-circular>
      </v-container>
    </div>
    </v-main>
  </v-app>
</template>

// TODO :: belum selesai

<script>
export default {
   data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>


<style scoped>
.loading-parent{
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  position: fixed;
  width: 100%;
  height: 100%;
  background: white; 
  z-index: 99999;
}
.v-progress-circular {
  margin: 1rem;
}
</style>