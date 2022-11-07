<template>
  <div class="signup">

    <div class="arrow">
      <img src="@/assets/images/week01/arrow_down.png" alt="arrow_down" class="arrow_down m-5">
      <img src="@/assets/images/week01/arrow_down.png" alt="arrow_down" class="arrow_down m-5">
      <img src="@/assets/images/week01/arrow_down.png" alt="arrow_down" class="arrow_down m-5">
    </div>

    <a v-if="!signupBtnHover" v-on:mouseover="signupBtnMouseOver(true)" >
      <img src="@/assets/images/week01/btn_web_apply_normal.png" alt="btn_web_apply_normal" class="btn_web_apply m-5">
    </a>
    <a v-else v-on:mouseleave="signupBtnMouseOver(false)" target="_blank" v-bind:href="url">
      <img src="@/assets/images/week01/btn_web_apply_hover.png" alt="btn_web_apply_hover"  class="m-5">
    </a>

  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://2022.thef2e.com/",
      signupBtnHover: false,
    }
  },
  mounted: function() {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
    },
    signupBtnMouseOver(mouseover) {
      this.signupBtnHover = mouseover;
    }
  }
}
</script>

<style scoped>
.signup {
  height: 100vh;
  overflow: hidden;
}

.signup .arrow {
  padding-top: 5rem;
  width: 100%;
  animation: move_arrow 2s infinite;
  -webkit-animation: move_arrow 2s infinite;
}

@keyframes move_arrow {
  0% { top: 16px }
  100% { top: 50px }
}

.signup .btn_web_apply {
  animation-name: example;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

.signup .btn_web_apply_hover {
  content:url(@/assets/images/week01/btn_web_apply_hover.png)
}

@keyframes example {
  0%   {content:url(@/assets/images/week01/btn_web_apply_normal.png)}
  33% {content:url(@/assets/images/week01/btn_web_apply_blink1.png)}
  66%   {content:url(@/assets/images/week01/btn_web_apply_blink2.png)}
  100% {content:url(@/assets/images/week01/btn_web_apply_blink3.png)}
}

</style>