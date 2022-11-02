<template>
  <div id="app">
    <NavBar />
    <div class="week01">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/week01/NavBar.vue'

export default {
  name: 'Week01Layout',
  components: {
    NavBar
  }
}
</script>

<style scoped>
#app {
  background: black;
  background-image:
  linear-gradient(to top, rgba(255, 255, 255, 0.2) 1px, transparent 0),
  linear-gradient(to left, rgba(255, 255, 255, 0.2) 1px, transparent 0);
  background-size: 48px 48px;
  background-repeat: repeat;
}
</style>