<template>
  <div class="demo-two">
    <!--start navbar -->
    <navbar></navbar>

    <!-- start welcome section -->
    <welcome></welcome>
  </div>
</template>

<script>
import navbar from "../components/demos/demoOne/navbar";
import Welcome from "../components/demos/welcome.vue";

export default {
  components: {
    navbar,
    Welcome,
  },
};
</script>