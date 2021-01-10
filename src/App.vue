<template>
  <div class="root">
    <!-- start view router -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <!-- end View Router -->

    <!-- ##### Footer Area Start ##### -->
    <footer>
      <!-- start contact us -->
      <footer-contact></footer-contact>
    </footer>
    <!-- ##### Footer Area End ##### -->
  </div>
</template>

<style>
header {
  background-color: var(--mainColor);
  transition: all 1s !important;
}
</style>

<script>
import FooterContact from "./components/footer/footerContact.vue";

import jquery from "jquery";
const $ = jquery;
window.$ = $;

export default {
  components: {
    FooterContact,
  },
  mounted() {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 100) {
        $(".navbar").addClass("shrink");
        $("#scrollUp").fadeIn(800);
      } else {
        $(".navbar").removeClass("shrink");
        $("#scrollUp").fadeOut(800);
      }
    });

    $("#scrollUp").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });
  },
  beforeMount() {
    $("#preloader")
      .delay(1000)
      .fadeOut(700, function () {
        $("#preloader").remove();
      });
  },
};
</script>
