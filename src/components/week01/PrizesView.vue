<template>
  <div class="prizes">
    <img src="@/assets/images/week01/block_sec6_yellow.png" alt="block_sec6_yellow" class="block_sec6_yellow m-5">
    <img src="@/assets/images/week01/block_sec6_red.png" alt="block_sec6_red" class="block_sec6_red m-5">
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  mounted: function() {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {

      gsap.timeline({
        scrollTrigger: {
          trigger: ".prizes",
          scrub: true,
          pin: true,
        }
      })
      .from(".block_sec6_yellow", { x : innerWidth * 1 })
      .from(".block_sec6_red", { x : -innerWidth * 1 })
    }
  }
}
</script>

<style scoped>
.prizes {
  height: 100vh;
  overflow: hidden;
}
</style>