<template>
  <v-container class="py-6">
    <div class="my-11">
      <p class="text-h6 black--text">
        List Peraturan
      </p>
      <v-row
        class="py-4"
        justify="space-between"
      >
        <v-col sm="6" md="6">
          <AdminPeraturanCreateDialog
            name="admin-peraturan-create-dialog"
          >
            <div
              slot="toggler"
              @click="$baseDialog(
                'open',
                'admin-peraturan-create-dialog'
              )"
            >
              <v-btn color="green">
                <v-icon left dark>
                  mdi-plus-circle
                </v-icon>
                Buat Peraturan
              </v-btn>
            </div>
          </AdminPeraturanCreateDialog>
        </v-col>
        <v-col sm="6" md="6">
          <v-row>
            <v-col sm="10"
              ><AdminPeraturanSearchInput />
            </v-col>
            <v-col sm="2">
              <AdminPeraturanFilterButton />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="py-5">
        <base-card>
          <AdminPeraturanTable />
        </base-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'AdminPeraturan',
  layout: 'admin/default'
}
</script>
