<template>
  <smooth-scrollbar>
    <slot></slot>
  </smooth-scrollbar>
</template>

<script>
export default {
  name: 'BaseScrollbar',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.base-scrollbar {
  margin-left: 30px;
  float: left;
  overflow: scroll;
}
.base-scrollbar::-webkit-scrollbar {
  width: 20px;
}

.base-scrollbar::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 20px;
  border: 2px solid #01579b;
}

.base-scrollbar::-webkit-scrollbar-thumb {
  background-color: #01579b;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}
</style>
