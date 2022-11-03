<template>
  <div class="section2">
    <img src="@/assets/images/week01/title_sec2_outline.png" alt="title_sec2_outline" class="title_sec2_outline my-5 pt-5">

    <img src="@/assets/images/week01/icon_sec2_left_gsap.png" alt="icon_sec2_left_gsap" class="icon_sec2_left_gsap">

    <img src="@/assets/images/week01/icon_sec2_right_gsap.png" alt="icon_sec2_right_gsap" class="icon_sec2_right_gsap">

    <img src="@/assets/images/week01/block_sec2_01_flyin.png" alt="block_sec2_01_flyin" class="block_sec2_01_flyin my-4 float-end">

    <img src="@/assets/images/week01/block_sec2_02_flyin.png" alt="block_sec2_02_flyin" class="block_sec2_02_flyin my-4 float-start">
  
    <img src="@/assets/images/week01/block_sec2_03_flyin.png" alt="block_sec2_03_flyin" class="block_sec2_03_flyin my-4 float-end">
  </div>
</template>

<style scoped>
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
</style>