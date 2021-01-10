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

    <!-- road map section -->
    <roadMap></roadMap>

    <!-- features section -->
    <features></features>

    <!-- Subscribe section -->
    <Subscribe></Subscribe>

    <!-- frequestly section -->
    <frequestly></frequestly>

    <!-- distribution section -->
    <distribution></distribution>

    <!-- our team section -->
    <our-team></our-team>

    <!-- our  parters section -->
    <ourParters></ourParters>

    <!-- start latest News -->
    <latestNews></latestNews>

    <!-- contact us section -->
    <contact-us></contact-us>
    <!-- vertical section -->
    <vertical-social></vertical-social>
  </div>
</template>

<script>
import Navbar from "@/components/demos/demoOne/navbar.vue";
import welcome from "@/components/demos/welcome.vue";
import Trust from "@/components/demos/trust.vue";
import AboutUsOne from "../components/demos/aboutUsOne.vue";
import AboutUsTwo from "../components/demos/aboutUsTwo.vue";
import VerticalSocial from "@/components/demos/vertical-social.vue";
import watchOurDemo from "../components/demos/watchOurDemo.vue";
import OurServices from "../components/demos/ourServices.vue";
import roadMap from "../components/demos/roadMap.vue";
import features from "../components/demos/features.vue";
import Subscribe from "../components/demos/subscribe.vue";
import frequestly from "../components/demos/Frequently-Questions.vue";
import distribution from "../components/demos/distribution.vue";
import ourTeam from "../components/demos/ourTeam.vue";
import ourParters from "../components/demos/ourpartner.vue";
import latestNews from "../components/demos/latestnews.vue";
import contactUs from "../components/demos/contactUs.vue";

export default {
  components: {
    AboutUsTwo,
    Trust,
    VerticalSocial,
    Navbar,
    welcome,
    AboutUsOne,
    watchOurDemo,
    OurServices,
    roadMap,
    features,
    Subscribe,
    frequestly,
    distribution,
    ourTeam,
    ourParters,
    latestNews,
    contactUs,
  },
};
</script>