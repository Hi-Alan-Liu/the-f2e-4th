<template>
  <div id="app">
    <BannerView />
    <QuestionView />
    <Section03View />
    <ScheduleView />
  </div>
</template>


<script>
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import BannerView from '../../components/week01/BannerView.vue';
import QuestionView from '../../components/week01/QuestionView.vue';
import Section03View from '../../components/week01/Section03View.vue';
import ScheduleView from '../../components/week01/ScheduleView.vue';

export default {
  name: 'HomeView',
  components: {
    BannerView,
    QuestionView,
    Section03View,
    ScheduleView
  }
}

</script>