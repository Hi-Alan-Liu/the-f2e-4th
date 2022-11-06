<template>
  <div class="solution">

    <div class="gradient_sec3_top"></div>

    <img src="@/assets/images/week01/flag_sec3_top.png" alt="flag_sec3_top" class="flag_sec3_top">

    <img src="@/assets/images/week01/flag_sec3_mid.png" alt="flag_sec3_mid" class="flag_sec3_mid">

    <img src="@/assets/images/week01/flag_sec3_bottom.png" alt="flag_sec3_bottom" class="flag_sec3_bottom">

    <div class="gradient_sec3_bottom"></div>

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
          trigger: ".solution",
          markers: true,
          scrub: true,
          pin: true,
        }
      })
      .to(".flag_sec3_mid", {rotation: 12, scale: 1.2})
      .to(".flag_sec3_top", {rotation: -6}, "<")
      .to(".flag_sec3_bottom", {rotation: -12, scale: 1.2}, "<")


    }
  }
}
</script>

<style scoped>
.solution {
  height: 100vh;
  overflow: hidden;
}

.gradient_sec3_top {
  position: absolute;
  width: 100%;
  height: 200px;
  z-index: 30;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
}

.gradient_sec3_bottom {
  position: absolute;
  width: 100%;
  height: 200px;
  z-index: 30;

  bottom: 0px;

  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  transform: rotate(-180deg);
}

.solution .flag_sec3_top {
  position: absolute;
  width: 110%;
  top: -30%;
  left: -5%;
}

.solution .flag_sec3_mid {
  position: absolute;
  width: 110%;
  z-index: 20;
  left: -5%;
}

.solution .flag_sec3_bottom{
  position: absolute;
  width: 110%;
  left: -5%;
  top: 40%;
}
</style>