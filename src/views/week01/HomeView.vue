<template>
  <div id="app">
    <div class="section1 box justify-content-evenly">

        <img src="@/assets/images/week01/dashboard_sec1_board.png" class="board" alt="board">
        <div class="text1">
          <img src="@/assets/images/week01/dashboard_sec1_pin.png" class="rounded-circle pin" alt="pin">
        </div>
    </div>

    <div class="section2"></div>
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
          trigger: ".box",
          start: "center center",
          end: "bottom top",
          markers: true,
          scrub: true,
          pin: true,
        }
      })
      .from(".text1", { rotation : -210, duration: 3 })
    }
  }
}

</script>

<style scoped>
.section1 {
  display: flex;
  height: 100vh;
  background-color: #fd89b9;
}

.board {
  width: 100%;
  max-width: 800px;
  position: absolute;
  bottom: 20%;
}

.text1 {
  position: absolute;
  top: 52%;
}

.pin {
  transform: rotate(105deg) translateY(-125px);
}

.section2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fd89b9;
}
</style>