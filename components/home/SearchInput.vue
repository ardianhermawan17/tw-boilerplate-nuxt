<template>
  <section
    class="d-flex flex-column py-6"
  >
    <p
      class="black--text font-weight-normal text-h6 text-center"
    >
      Cari aturan keuangan dibawah ini
    </p>
    <HomeSearchDialogInput
      name="home-search-input-dialog"
    >
      <div
        slot="toggler"
        @click.stop="
          $baseDialog(
            'open',
            'home-search-input-dialog'
          )
        "
      >
        <div
          class="d-flex flex-row justify-center align-center"
        >
          <v-responsive
            max-width="80%"
            class="px-4 py-4 d-flex flex-row justify-center align-center"
          >
            <base-text-field
              :is-neumorphism="true"
              :outlined="true"
              height="60px"
              append-icon="mdi-magnify"
              label="Aturan"
              placeholder="Cari Aturan...."
            />
          </v-responsive>
        </div>
      </div>
    </HomeSearchDialogInput>
  </section>
</template>

<script>
export default {
  name: 'HomeSearchInput'
}
</script>
