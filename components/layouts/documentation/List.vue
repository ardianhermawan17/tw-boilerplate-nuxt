<template>
  <v-list
    expand
    nav    
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(item, i) in items">
      <DocumentationLayoutListItem        
        :key="`item-${i}`"
        :item="item"
      />
    </template>
  </v-list>
</template>

<script>
export default {
    name: 'DocumentationLayoutList',
     props: {
      items: {
        type: Array,
        default: () => ([]),
      },
    },
}
</script>