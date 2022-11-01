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