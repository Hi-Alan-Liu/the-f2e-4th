<template>
  <div class="question">
    <img src="@/assets/images/week01/title_sec2_outline.png" alt="title_sec2_outline" class="title_sec2_outline my-5 pt-5">

    <img src="@/assets/images/week01/icon_sec2_left_gsap.png" alt="icon_sec2_left_gsap" class="icon_sec2_left_gsap">

    <img src="@/assets/images/week01/icon_sec2_right_gsap.png" alt="icon_sec2_right_gsap" class="icon_sec2_right_gsap">

    <img src="@/assets/images/week01/block_sec2_01_flyin.png" alt="block_sec2_01_flyin" class="block_sec2_01_flyin my-4 float-end">

    <img src="@/assets/images/week01/block_sec2_02_flyin.png" alt="block_sec2_02_flyin" class="block_sec2_02_flyin my-4 float-start">
  
    <img src="@/assets/images/week01/block_sec2_03_flyin.png" alt="block_sec2_03_flyin" class="block_sec2_03_flyin my-4 float-end">
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
          trigger: ".question",
          start: "center center",
          end: "bottom top",
          markers: false,
          scrub: true,
          pin: true,
        }
      })
      .from(".block_sec2_01_flyin", { x : -innerWidth * 1, opacity: 0 })
      .from(".block_sec2_02_flyin", { x : innerWidth * 1, opacity: 0 })
      .from(".block_sec2_03_flyin", { x : -innerWidth * 1, opacity: 0 })

      gsap.timeline({
        scrollTrigger: {
          trigger: ".question",
          markers: false,
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
.question {
  height: 105vh;
  background: -webkit-linear-gradient(180deg, #1A0063 0%, #3126B0 34.67%, #FA7449 69.04%, rgba(255, 46, 0, 0) 100%);
  background: -o-linear-gradient(180deg, #1A0063 0%, #3126B0 34.67%, #FA7449 69.04%, rgba(255, 46, 0, 0) 100%);
  background: -moz-linear-gradient(180deg, #1A0063 0%, #3126B0 34.67%, #FA7449 69.04%, rgba(255, 46, 0, 0) 100%);
  background: linear-gradient(180deg, #1A0063 0%, #3126B0 34.67%, #FA7449 69.04%, rgba(255, 46, 0, 0) 100%);
  overflow: hidden;
}

.question .icon_sec2_left_gsap {
  display: flex;
  position: absolute;
  left: 10%;
  bottom: 0px;
  transform: translate(0, 50%);
}

.question .icon_sec2_right_gsap {
  display: flex;
  position: absolute;
  right: 10%;
  top: 0px;
  transform: translate(0, -40%);
}

.question .title_sec2_outline {
  width: 100%;
  max-width: 950px;
}

.question .block_sec2_01_flyin {
  transform: translate(17%, 0px);
  width: 100%;
  max-width: 1200px;
}

.question .block_sec2_02_flyin {
  transform: translate(-17%, 0px);
  width: 100%;
  max-width: 1200px;
}

.question .block_sec2_03_flyin {
  transform: translate(17%, 0px);
  width: 100%;
  max-width: 1200px;
}
</style>