<template>
  <div id="app">
    <Section01View />
    <Section02View />
    <Section03View />
  </div>
</template>


<script>
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Section01View from '../../components/week01/Section01View.vue';
import Section02View from '../../components/week01/Section02View.vue';
import Section03View from '../../components/week01/Section03View.vue';

export default {
  name: 'HomeView',
  components: {
    Section01View,
    Section02View,
    Section03View
  }
}

</script>