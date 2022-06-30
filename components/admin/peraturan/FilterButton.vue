<template>
  <AdminPeraturanFilterDialog
    name="admin-peraturan-filter-dialog"
  >
    <div
      slot="toggler"
      @click="
        $baseDialog(
          'open',
          'admin-peraturan-filter-dialog'
        )
      "
    >
      <base-card
        class-name="d-flex justify-center align-center"
      >
        <v-btn
          elevation="0"
          class="transparent"
        >
          <v-icon            
            color="light-blue darken-4"
          >
            mdi-tune
          </v-icon>
        </v-btn>
      </base-card>
    </div>
  </AdminPeraturanFilterDialog>
</template>

<script>
export default {
  name: 'AdminPeraturanFilterButton'
}
</script>
