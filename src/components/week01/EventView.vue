<template>
  <div class="event">

      <img ref="image1" src="@/assets/images/week01/textblock_sec5_fixed.png" alt="textblock_sec5_fixed" class="textblock_sec5_fixed m-5" width="50">

      <img ref="image2" src="@/assets/images/week01/timetable_sec5_arrows_scroll.png" alt="timetable_sec5_arrows_scroll" class="timetable_sec5_arrows_scroll m-5">

      <div class="deco_info" ref="image3">
        <img src="@/assets/images/week01/deco_top.png" alt="deco_top" class="deco_top m-5">

        <img src="@/assets/images/week01/deco.png" alt="deco" class="deco m-5">

        <img src="@/assets/images/week01/deco_bottom.png" alt="deco_bottom" class="deco_bottom m-5">
      </div>

  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  data() {
    return {
      imgLoaded: 0
    }
  },
  mounted: function() {
    setTimeout(() => {
      this.scrollAnimation();
    }, 1000)
    
  },
  methods: {
    scrollAnimation() {
      var max_width = (this.$refs.image1.offsetWidth + this.$refs.image2.offsetWidth + this.$refs.image3.offsetWidth) * 1.15;

      gsap.timeline({
        scrollTrigger: {
          trigger: ".event",
          markers: true,
          scrub: true,
          pin: true,
        }
      })
      .to(".textblock_sec5_fixed", { x : -max_width + innerWidth })
      .to(".timetable_sec5_arrows_scroll", { x : -max_width + innerWidth }, "<")
      .to(".deco_info", { x : -max_width + innerWidth }, "<")
    }
  }
}
</script>

<style scoped>
.event {
  height: 100vh;
  /*overflow: hidden;*/
  margin: auto;
	display: flex;
  align-items: center; 
}

.textblock_sec5_fixed {
  width: 50%;
}

.deco_info {
  flex-wrap: wrap;
}

.deco {
  height: 20%;
}


</style>