<template>
  <div id="app">

    <Section01View />
    <Section02View />

    <div class="section3">
    </div>
  </div>
</template>


<script>
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Section01View from '../../components/week01/Section01View.vue';
import Section02View from '../../components/week01/Section02View.vue';

export default {
  name: 'HomeView',
  components: {
    Section01View,
    Section02View
  },
  mounted: function() {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".section1",
          start: "center center",
          end: "bottom top",
          markers: true,
          scrub: true,
          pin: true,
        }
      })
      .from(".dashboard-pin", { rotation : -210 })

      gsap.timeline({
        scrollTrigger: {
          trigger: ".section2",
          start: "center center",
          end: "bottom top",
          markers: true,
          scrub: true,
          pin: true,
        }
      })
      .from(".block_sec2_01_flyin", { x : -innerWidth * 1, opacity: 0 })
      .from(".block_sec2_02_flyin", { x : innerWidth * 1, opacity: 0 })
      .from(".block_sec2_03_flyin", { x : -innerWidth * 1, opacity: 0 })

      gsap.timeline({
        scrollTrigger: {
          trigger: ".section2",
          markers: true,
          scrub: true,
          pin: true,
        }
      })
      .from(".icon_sec2_left_gsap", { y : -innerWidth * 1, duration: 1 })
      .from(".icon_sec2_right_gsap", { y : innerWidth * 1, duration: 1 }, "<")

    }
  }
}

</script>

<style scoped>

.section3 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
}
</style>