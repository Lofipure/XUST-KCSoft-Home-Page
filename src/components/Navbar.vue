<template>
  <v-app-bar class="header" id="header" elevation="0">创新学院软件创新班</v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  color: rgb(255, 255, 255) !important;
  background-color: rgba(255, 255, 255, 0) !important;
}

.header-bg {
  background: rgba(112, 112, 112, 0.5) !important;
  color: rgb(0, 0, 0) !important;
}
</style>