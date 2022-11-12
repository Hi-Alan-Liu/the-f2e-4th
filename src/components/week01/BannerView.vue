<template>
  <div class="banner justify-content-evenly">

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
          trigger: ".banner",
          start: "center center",
          end: "bottom top",
          markers: true,
          scrub: true,
          pin: true,
        }
      })
      .from(".dashboard-pin", { rotation : -210 })
    }
  }
}
</script>

<style scoped>
.banner {
  height: 100vh;
  overflow: hidden;
}

.banner .title {
  width: 72%;
  animation-name: example;
  animation-duration: 0.1s;
  animation-iteration-count: infinite;
}

@keyframes example {
  0%   {content:url(@/assets/images/week01/title_sec1_normal.png)}
  100% {content:url(@/assets/images/week01/title_sec1_blink.png)}
}

.banner .checks_left {
  width: 10%;
}

.banner .checks_right {
  width: 10%;
}

.banner .blank {
  height: 60%;
  font-family: 'ethnocentric', Helvetica, Arial;
}

.banner .dashboard {
  position: absolute;
  width: 100%;
}

.banner .board {
  width: 100%;
  max-width: 850px;
}

.banner .dashboard-pin {
  position: absolute;
  bottom: 0rem;
  left: 49%;
}

.banner .pin {
  transform: rotate(105deg) translateY(-125px);
}
</style>
