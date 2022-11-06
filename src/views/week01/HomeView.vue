<template>
  <div id="app">
    <BannerView />
    <Section02View />
    <Section03View />
    <ScheduleView />
  </div>
</template>


<script>
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import BannerView from '../../components/week01/BannerView.vue';
import Section02View from '../../components/week01/Section02View.vue';
import Section03View from '../../components/week01/Section03View.vue';
import ScheduleView from '../../components/week01/ScheduleView.vue';

export default {
  name: 'HomeView',
  components: {
    BannerView,
    Section02View,
    Section03View,
    ScheduleView
  }
}

</script>