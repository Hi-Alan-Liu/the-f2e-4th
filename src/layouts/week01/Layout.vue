<template>
  <div id="app">
    <NavBar />
    <div class="week01">
        <h2>測試</h2>
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Week01Layout'
}
</script>