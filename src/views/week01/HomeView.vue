<template>
  <div id="app">
    <BannerView />
    <QuestionView />
    <SolutionView />
    <ScheduleView />
    <EventView />

    <img src="@/assets/images/week01/block_sec6_yellow.png" alt="block_sec6_yellow" class="block_sec6_yellow m-5">
    <img src="@/assets/images/week01/block_sec6_red.png" alt="block_sec6_red" class="block_sec6_red m-5">

  </div>
</template>


<script>
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import BannerView from '../../components/week01/BannerView.vue';
import QuestionView from '../../components/week01/QuestionView.vue';
import SolutionView from '../../components/week01/SolutionView.vue';
import ScheduleView from '../../components/week01/ScheduleView.vue';
import EventView from '../../components/week01/EventView.vue';

export default {
  name: 'HomeView',
  components: {
    BannerView,
    QuestionView,
    SolutionView,
    ScheduleView,
    EventView
  }
}

</script>