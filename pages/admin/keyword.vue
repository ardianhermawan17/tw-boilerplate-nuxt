<template>
    <v-container class="py-6">
    <div class="my-11">
      <p class="text-h6 black--text">
        List Keyword
      </p>
      <v-row
        class="py-4"
        justify="space-between"
      >
        <v-col sm="6" md="6">
          <AdminKeywordCreateFormDialog
            name="admin-keyword-create-form-dialog"
          >
            <div
              slot="toggler"
              @click="$baseDialog(
                'open',
                'admin-keyword-create-form-dialog'
              )"
            >
              <v-btn color="green">
                <v-icon left dark>
                  mdi-plus-circle
                </v-icon>
                Buat Keyword
              </v-btn>
            </div>
          </AdminKeywordCreateFormDialog>
        </v-col>
        <v-col sm="6" md="6">
          <v-row>
            <v-col class="ml-auto" sm="10"
              ><AdminKeywordSearchInput />
            </v-col>            
          </v-row>
        </v-col>
      </v-row>
      <div class="py-5">
        <base-card>
          <AdminKeywordTable />
        </base-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
    name: 'AdminKeyword',
    layout: 'admin/default'
}
</script>