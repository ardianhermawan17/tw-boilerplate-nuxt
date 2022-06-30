<template>
  <div>
    <base-card class="px-6 py-12">
      <v-row>
        <v-col sm="10">
          <base-text-field
            :is-neumorphism="false"
            :outlined="true"
            label="Aturan"
            placeholder="Cari Aturan...."
          />
        </v-col>
        <v-col sm="2">
          <div
            class="d-flex flex-column justify-end align-end"
          >
            <v-btn
              depressed
              width="100%"
              class="px-6 white--text"
              color="light-blue darken-4"
              >Cari</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </base-card>
  </div>
</template>

<script></script>
