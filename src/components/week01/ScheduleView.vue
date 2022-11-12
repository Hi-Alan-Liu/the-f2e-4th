<template>
  <div class="schedule">

    <div class="gradient_sec4_top"></div>

    <img src="@/assets/images/week01/week1_sec4_circle.png" alt="week1_sec4_circle" class="week1_sec4_circle">

    <img src="@/assets/images/week01/week2_sec4_circle.png" alt="week2_sec4_circle" class="week2_sec4_circle">

    <img src="@/assets/images/week01/week3_sec4_circle.png" alt="week3_sec4_circle" class="week3_sec4_circle">

    <img src="@/assets/images/week01/car_sec4_fixed.png" alt="car_sec4_fixed" class="car_sec4_fixed">

    <img src="@/assets/images/week01/bg_sec4_track_rotate.png" alt="bg_sec4_track_rotate" class="bg_sec4_track_rotate">

    <div class="gradient_sec4_bottom"></div>
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
          trigger: ".schedule",
          markers: true,
          scrub: true,
          pin: true,
        }
      })
      .to('.week1_sec4_circle', {x: -innerWidth * 0.33, y: -innerHeight * 0.8, duration:1})
      .to('.week1_sec4_circle', {x: innerWidth * 0.05, y: -innerHeight * 1.75, duration:1, delay: 2})
      .to('.week2_sec4_circle', {x: -innerWidth * 0.33, y: -innerHeight * 0.8, duration:1}, "<")
      .to('.week2_sec4_circle', {x: innerWidth * 0.05, y: -innerHeight * 1.75, duration:1, delay: 2})
      .to('.week3_sec4_circle', {x: -innerWidth * 0.33, y: -innerHeight * 0.8, duration:1}, "<")
      .to('.week3_sec4_circle', {x: innerWidth * 0.05, y: -innerHeight * 1.75, duration:1, delay: 2})

      gsap.timeline({
        scrollTrigger: {
          trigger: ".bg_sec4_track_rotate",
          markers: true,
          scrub: true,
          pin: true,
        }
      })
      .to(".bg_sec4_track_rotate", {rotation: 360})

    }
  }

}
</script>

<style scoped>
.schedule {
  height: 100vh;
  overflow: hidden;
}

.gradient_sec4_top {
  position: absolute;
  width: 100%;
  height: 200px;
  z-index: 30;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 89.06%, rgba(0, 0, 0, 0) 100%);
}

.gradient_sec4_bottom {
  position: absolute;
  width: 100%;
  height: 200px;
  z-index: 30;
  bottom: 0px;
  background: linear-gradient(180deg, #000000 11.46%, rgba(0, 0, 0, 0.03) 81.77%, rgba(0, 0, 0, 0) 100%);
  transform: rotate(-180deg);
}

.schedule .week1_sec4_circle {
  position: absolute;
  width: 40%; 
  top: 100vh;
  left: 50vw;
}

.schedule .week2_sec4_circle {
  position: absolute;
  width: 40%; 
  top: 100vh;
  left: 50vw;
}

.schedule .week3_sec4_circle {
  position: absolute;
  width: 40%; 
  top: 100vh;
  left: 50vw;
}

.schedule .car_sec4_fixed {
  position: absolute;
  top: 40%;
  left: 60%;
  width: 100%;
  min-width: 40px;
  max-width: 5%;
  z-index: 20;
}

.schedule .bg_sec4_track_rotate {
  top: -55%;
  left: 50%;
}
</style>