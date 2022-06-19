<template>
  <section
    class="d-flex flex-column py-6"
  >
    <p
      class="black--text font-weight-normal text-h6 text-center"
    >
      Cari aturan keuangan dibawah ini
    </p>
    <div
      class="d-flex flex-row justify-center align-center"
    >
      <v-responsive
        max-width="80%"
        class="px-4 py-4 d-flex flex-row justify-center align-center"
      >
        <base-text-field
          append-icon="mdi-magnify"
          label="Aturan"
          placeholder="Cari Aturan...."
        />
      </v-responsive>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeSearchInput'
}
</script>
