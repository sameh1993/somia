<template>
  <div class="demoOne">
    <!--start navbar -->
    <navbar></navbar>

    <!-- start welcome section -->
    <welcome></welcome>

    <!-- start trust -->
    <trust></trust>

    <!-- start about us one -->
    <about-us-one></about-us-one>

    <!-- start about us two -->
    <about-us-two></about-us-two>

    <!-- start Watch our demo -->
    <WatchOurDemo></WatchOurDemo>

    <div class="clearfix"></div>
    <!-- start OurServices section -->
    <OurServices class="clearfix"></OurServices>

    <!-- start roadmap section -->
    <road-map></road-map>

    <!-- start Feature -->
    <Features></Features>

    <!-- start subscribe section -->
    <subscribe></subscribe>

    <!-- start frequestly section -->
    <frequestly></frequestly>

    <!--s start Distribution -->
    <Distribution></Distribution>

    <!-- start our team -->
    <our-team></our-team>

    <!-- start latest news -->
    <latest-news></latest-news>

    <!-- start contact us -->
    <contact-us></contact-us>
  </div>
</template>


<script>
import navbar from "../components/demos/demoOne/navbar";
import welcome from "../components/demos/welcome.vue";
import Trust from "../components/demos/trust";
import aboutUsOne from "../components/demos/aboutUsOne";
import AboutUsTwo from "../components/demos/aboutUsTwo.vue";
import WatchOurDemo from "../components/demos/watchOurDemo.vue";
import OurServices from "../components/demos/ourServices.vue";
import RoadMap from "../components/demos/demoTwo/ourIcoRoadmap.vue";
import Features from "../components/demos/features.vue";
import subscribe from "../components/demos/subscribe.vue";
import frequestly from "../components/demos/Frequently-Questions";
import Distribution from "../components/demos/distribution.vue";
import OurTeam from "../components/demos/ourTeam.vue";
import LatestNews from "../components/demos/latestnews.vue";
import ContactUs from "../components/demos/contactUs.vue";

// We import JQuery
const $ = require("jquery");
// We declare it globally
window.$ = $;

export default {
  components: {
    navbar,
    welcome,
    Trust,
    aboutUsOne,
    AboutUsTwo,
    WatchOurDemo,
    OurServices,
    RoadMap,
    Features,
    subscribe,
    frequestly,
    Distribution,
    OurTeam,
    LatestNews,
    ContactUs,
  },
  mounted() {
    $("body").removeClass("darker-blue");
  },
};
</script>