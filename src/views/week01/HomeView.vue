<template>
  <div id="app">

    <div class="section1 justify-content-evenly">

      <div class="py-3 w-100">
        <img src="@/assets/images/week01/deco_sec1_checks_left.png" alt="checks_left" class="checks_left me-3">
        <img src="@/assets/images/week01/title_sec1_normal.png" alt="title" class="title" >
        <img src="@/assets/images/week01/deco_sec1_checks_right.png" alt="checks_right" class="checks_right ms-3">
      </div>

      <div class="dashboard">
        <img src="@/assets/images/week01/dashboard_sec1_board.png" class="board" alt="board">
        <div class="dashboard-pin">
          <img src="@/assets/images/week01/dashboard_sec1_pin.png" class="rounded-circle pin" alt="pin">
        </div>
      </div>

      <div class="blank text-light zindex-sticky">

        <div class="float-start ps-5 text-start">
          <p class="fs-2" style="margin-bottom: 0;">HEXSCHOOL</p>
          <p class="fs-2">六角學院</p>
        </div>

        <div class="float-end pe-5 text-end">
          <p class="fs-2" style="margin-bottom: 0;">UI DESIGN</p>
          <p class="fs-2" style="margin-bottom: 0;">X</p>
          <p class="fs-2" style="margin-bottom: 0;">FRONT</p>
          <p class="fs-2">END</p>
        </div>

        <div class="p-5" style="margin-bottom: 16rem;">
        </div>

        <div class="float-start ps-5 text-start">
          <p class="fs-2" style="margin-bottom: 0;">BLOCK</p>
          <p class="fs-2">STUDIO</p>
          <p class="fs-2" style="margin-bottom: 0;">KDAN</p>
          <p class="fs-2">MOBILE</p>
          <p class="fs-2" style="margin-bottom: 0;">TITANSOFT</p>
        </div>

        <div class="float-end pe-5 text-end">
          <p class="fs-2" style="padding-top: 5rem;margin-bottom: 0;">ENTRY</p>
          <p class="fs-2" style="margin-bottom: 0;">10.13</p>
          <p class="fs-2" style="margin-bottom: 0;">/</p>
          <p class="fs-2">10.30</p>
        </div>
      </div>


      <img src="@/assets/images/week01/subtitle_sec1.png" class="subtitle my-4" alt="subtitle">

      <img src="@/assets/images/week01/deco_sec1_redwhite.png" class="my-4" alt="redwhite" width="100%">
    </div>

    <div class="section2">
      <img src="@/assets/images/week01/title_sec2_outline.png" alt="title_sec2_outline" class="title_sec2_outline my-5 pt-5">

      <img src="@/assets/images/week01/icon_sec2_left_gsap.png" alt="icon_sec2_left_gsap" class="icon_sec2_left_gsap">

      <img src="@/assets/images/week01/icon_sec2_right_gsap.png" alt="icon_sec2_right_gsap" class="icon_sec2_right_gsap">

      <img src="@/assets/images/week01/block_sec2_01_flyin.png" alt="block_sec2_01_flyin" class="block_sec2_01_flyin my-4 float-end">

      <img src="@/assets/images/week01/block_sec2_02_flyin.png" alt="block_sec2_02_flyin" class="block_sec2_02_flyin my-4 float-start">
    
      <img src="@/assets/images/week01/block_sec2_03_flyin.png" alt="block_sec2_03_flyin" class="block_sec2_03_flyin my-4 float-end">
    </div>

    <div class="section3">
    </div>
  </div>
</template>


<script>
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'HomeView',
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
.section1 {
  height: 100vh;
  overflow: hidden;
}

.section1 .title {
  width: 72%;
  animation-name: example;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
}

@keyframes example {
  0%   {content:url(@/assets/images/week01/title_sec1_normal.png)}
  100% {content:url(@/assets/images/week01/title_sec1_blink.png)}
}

.section1 .checks_left {
  width: 10%;
}

.section1 .checks_right {
  width: 10%;
}

.section1 .blank {
  height: 60%;
  font-family: 'ethnocentric', Helvetica, Arial;
}

.section1 .dashboard {
  position: absolute;
  width: 100%;
}

.section1 .board {
  width: 100%;
  max-width: 850px;
}

.section1 .dashboard-pin {
  position: absolute;
  bottom: 0rem;
  left: 49%;
}

.section1 .pin {
  transform: rotate(105deg) translateY(-125px);
}

.section2 {
  justify-content: center;
  align-items: center;
  height: 105vh;
  background: -webkit-linear-gradient(180deg, #1A0063 0%, #3126B0 34.67%, #FA7449 69.04%, rgba(255, 46, 0, 0) 100%);
  background: -o-linear-gradient(180deg, #1A0063 0%, #3126B0 34.67%, #FA7449 69.04%, rgba(255, 46, 0, 0) 100%);
  background: -moz-linear-gradient(180deg, #1A0063 0%, #3126B0 34.67%, #FA7449 69.04%, rgba(255, 46, 0, 0) 100%);
  background: linear-gradient(180deg, #1A0063 0%, #3126B0 34.67%, #FA7449 69.04%, rgba(255, 46, 0, 0) 100%);
  overflow: hidden;
}

.section2 .icon_sec2_left_gsap {
  display: flex;
  position: absolute;
  left: 10%;
  bottom: 0px;
  transform: translate(0, 50%);
}

.section2 .icon_sec2_right_gsap {
  display: flex;
  position: absolute;
  right: 10%;
  top: 0px;
  transform: translate(0, -40%);
}

.section2 .title_sec2_outline {
  width: 100%;
  max-width: 950px;
}

.section2 .block_sec2_01_flyin {
  transform: translate(17%, 0px);
  width: 100%;
  max-width: 1200px;
}

.section2 .block_sec2_02_flyin {
  transform: translate(-17%, 0px);
  width: 100%;
  max-width: 1200px;
}

.section2 .block_sec2_03_flyin {
  transform: translate(17%, 0px);
  width: 100%;
  max-width: 1200px;
}

.section3 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
}
</style>