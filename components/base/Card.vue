<template>
  <div class="neumorphism-shadow">
    <v-card
      light
      outlined
      :color="color"
      :class="className"
      :width="width"
    >
      <slot></slot>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    title: {
      type: String,
      default: 'Your value',
      required: true
    },
    color: {
      type: String,
      default: 'blue-grey lighten-5'
    },
    className: {
      type: String,
      default: ''
    },
    width: {
      type: String || Number,
      default: undefined
    }
  }
}
</script>

<style scoped>
.neumorphism-shadow {
  box-shadow: -6px -6px 12px #ffffff,
    6px 6px 12px
      rgba(111, 112, 113, 0.8);
  border-radius: 10px;
}
</style>
