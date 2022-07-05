<template>
  <v-list-item
    nuxt
    :href="item.href"
    :rel="
      item.href ? 'nofollow' : undefined
    "
    :target="
      item.href ? '_blank' : undefined
    "
    :to="item.to"
    active-class=" yellow--text text--accent-2"
    link
    class="py-1"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-list-item-icon
      v-if="!item.icon && !item.text"
      class="text-caption text-uppercase justify-center ml-1 my-2 align-self-center"
    >
      {{ title }}
    </v-list-item-icon>

    <v-list-item-avatar
      v-if="item.avatar"
    >
      <v-img :src="item.avatar" />
    </v-list-item-avatar>

    <v-list-item-icon
      v-if="item.icon"
      class="my-2 align-self-center"
    >
      <v-icon v-text="item.icon" />
    </v-list-item-icon>

    <v-list-item-content
      v-if="
        item.title &&
        !item.text &&
        item.icon
      "
    >
      <v-list-item-title
        v-text="item.title"
      />
    </v-list-item-content>

    <v-list-item-content
      v-if="
        !item.icon &&
        item.text &&
        item.title">
      <v-tooltip right>      
        <template
          v-slot:activator="{ on,attrs}">          
          <v-row
            justify="space-between"
            v-bind="attrs"
            v-on="on"            
          >
            <v-col cols="4">
              <v-list-item-subtitle
                :class="
                  colorText(item.text)
                "
                v-text="item.text"
              />
            </v-col>
            <v-col cols="6">
              <v-list-item-title
                v-text="item.title"
              />
            </v-col>
          </v-row>
        </template>
        <span>{{ item.tooltip ? item.tooltip : item.title }}</span>
      </v-tooltip>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'DocumentationLayoutListItem',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    title() {
      const matches =
        this.item.title.match(/\b(\w)/g)

      return matches.join('')
    }
  },

  methods: {
    colorText(type) {
      switch (type.toUpperCase()) {
        case 'GET':
          return 'primary--text'
        case 'POST':
          return 'success--text'
        case 'PUT':
          return 'warning--text'
        case 'DELETE':
          return 'error--text'
        default:
          return 'success'
      }
    }
  }
}
</script>
