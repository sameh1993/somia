<template>
  <div class="demoOne">
    <!-- start navbar -->
    <Navbar></Navbar>

    <!-- slider section -->
    <welcome></welcome>

    <!-- trust section -->
    <trust></trust>

    <!-- aboutUsOne section -->
    <about-us-one></about-us-one>

    <!-- about us second -->
    <about-us-two></about-us-two>

    <!-- watch our demo -->
    <watch-our-demo></watch-our-demo>

    <div class="clearfix"></div>

    <!-- our services -->
    <our-services></our-services>

    <!-- our Ico Roadmap -->
    <our-ico-roadmap></our-ico-roadmap>

    <!-- start our app  feature -->
    <features></features>

    <!-- subscribe section -->
    <subscribe></subscribe>

    <!-- frequestly  section -->
    <frequestly></frequestly>

    <!-- start distribution section -->
    <distribution></distribution>

    <!-- our team section -->
    <our-team></our-team>

    <!-- our  parters section -->
    <ourParters></ourParters>

    <!-- start latest News -->
    <latestNews></latestNews>

    <!-- contact us section -->
    <contact-us></contact-us>

    <!-- VerticalSocial section -->
    <VerticalSocial></VerticalSocial>
  </div>
</template>



<script>
global.jQuery = require("jquery");
const $ = global.jQuery;
window.$ = $;

import Navbar from "@/components/demos/demoOne/navbar.vue";
import welcome from "@/components/demos/welcome.vue";

import Trust from "@/components/demos/trust.vue";
import AboutUsOne from "../components/demos/aboutUsOne.vue";

import AboutUsTwo from "../components/demos/aboutUsTwo.vue";
import watchOurDemo from "../components/demos/watchOurDemo.vue";
import OurServices from "../components/demos/ourServices.vue";
import OurIcoRoadmap from "../components/demos/demoTwo/ourIcoRoadmap.vue";
import features from "../components/demos/features.vue";
import Subscribe from "../components/demos/subscribe.vue";
import frequestly from "../components/demos/Frequently-Questions.vue";
import distribution from "../components/demos/distribution.vue";

import ourTeam from "../components/demos/ourTeam.vue";
import latestNews from "../components/demos/latestnews.vue";
import contactUs from "../components/demos/contactUs.vue";
import VerticalSocial from "@/components/demos/vertical-social.vue";

export default {
  components: {
    Navbar,
    welcome,
    Trust,
    AboutUsOne,
    AboutUsTwo,
    watchOurDemo,
    OurServices,
    OurIcoRoadmap,
    features,
    Subscribe,
    frequestly,
    distribution,
    ourTeam,
    latestNews,
    contactUs,
    VerticalSocial,
  },
  mounted() {
    $("body").removeClass("darker-blue");
  },
};
</script>