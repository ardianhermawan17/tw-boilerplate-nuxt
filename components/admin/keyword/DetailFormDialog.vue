<template>
  <div class="flex">
    <slot name="toggler" />
    <base-dialog :name="name">
      <v-card
        class="blue-grey lighten-5 pb-8"
      >
        <v-toolbar
          color="blue-grey lighten-5"
          elevation="0"
          class="px-4"
        >
          <v-spacer></v-spacer>

          <v-btn
            icon
            fab
            color
            class="red"
            x-small
            @click.stop="
              $baseDialog('close', name)
            "
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <!-- <v-divider></v-divider> -->
        <v-container>
          <v-card-title
            class="black--text text-h5 text-center d-flex justify-center align-center"
            >Detail
            Kategori</v-card-title
          >
          <v-list
            flat
            light
            color="transparent"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon large
                  >mdi-file-key</v-icon
                >
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle
                  class="text-big"
                  >Nama
                  :</v-list-item-subtitle
                >
                <v-list-item-title
                  class="text-big"
                  >{{
                    detailItem.name
                  }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon large
                  >mdi-clipboard-list</v-icon
                >
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle
                  class="text-big"
                  >Kategori
                  :</v-list-item-subtitle
                >
                <div
                  class="d-flex flex-wrap"
                >
                  <div
                    v-for="key in detailItem.kategori
                      ? detailItem.kategori
                      : []"
                    :key="key.id"
                    class="col-lg-4 col-md-6 col-12 mt-3 px-0"
                  >
                  <v-tooltip top color="light-blue darken-4">
                    <template v-slot:activator="{ on, attrs }">
                     <v-chip
                      outlined
                      color="light-blue darken-4"
                       v-bind="attrs"
                        v-on="on"
                    >
                      <v-list-item-title
                        v-text="key.name"
                      ></v-list-item-title>
                    </v-chip>            
                    </template>
                    <span>{{ key.name }}</span>
                  </v-tooltip>
                  </div>
                </div>
              </v-list-item-content>
            </v-list-item>

          </v-list>
        </v-container>
      </v-card>
    </base-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AdminKeywordDetailFormDialog',
  props: {
    name: {
      type: String,
      default: () =>
        'search-dialog-input'
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('admin/keyword', {
      detailItem: 'detailItem'
    })
  }
}
</script>
