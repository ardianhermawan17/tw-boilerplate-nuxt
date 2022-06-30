<template>
    <v-container class="py-6">
    <div class="my-11">
      <p class="text-h6 black--text">
        List Kategori
      </p>
      <v-row
        class="py-4"
        justify="space-between"
      >
        <v-col sm="6" md="6">
          <AdminKategoriCreateDialog
            name="admin-kategori-create-dialog"
          >
            <div
              slot="toggler"
              @click="$baseDialog(
                'open',
                'admin-kategori-create-dialog'
              )"
            >
              <v-btn color="green">
                <v-icon left dark>
                  mdi-plus-circle
                </v-icon>
                Buat Kategori
              </v-btn>
            </div>
          </AdminKategoriCreateDialog>
        </v-col>
        <v-col sm="6" md="6">
          <v-row>
            <v-col class="ml-auto" sm="10"
              ><AdminKategoriSearchInput />
            </v-col>            
          </v-row>
        </v-col>
      </v-row>
      <div class="py-5">
        <base-card>
          <AdminKategoriTable />
        </base-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
    name: 'AdminKategori',
    layout: 'admin/default'
}
</script>