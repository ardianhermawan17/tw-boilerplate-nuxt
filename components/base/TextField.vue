<template>
  <div
    class="neumorphism-shadow py-6 px-4"
  >
    <v-text-field
      :append-icon="appendIcon"
      :label="label"
      :placeholder="placeholder"
      :color="color"
      :class="className"
      dense
      light
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'BaseTextField',
  props: {
    label: {
      type: String,
      default: 'Your value',
      required: true
    },
    placeholder: {
      type: String,
      default: 'Value...',
      required: true
    },
    color: {
      type: String,
      default:
        'light-blue darken-4 light-blue--text text--lighten-4'
    },
    className: {
      type: String,
      default: ''
    },
    appendIcon: {
      type: String,
      default: undefined      
    }
  }
}
</script>

<style scoped>
.neumorphism-shadow {
  border: 4px solid #01579b;
  box-shadow: -6px -6px 12px #ffffff,
    6px 6px 12px
      rgba(111, 112, 113, 0.8);
  border-radius: 10px;
}
</style>
