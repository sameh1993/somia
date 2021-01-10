<template>
  <div class="classy-nav-container bg-transparent breakpoint-off fixed-top">
    <div class="container">
      <!-- Classy Menu -->
      <nav class="classy-navbar justify-content-between" id="dreamNav">
        <!-- Logo -->
        <router-link class="nav-brand" to="/"
          ><img src="@/assets/img/core-img/logo.png" alt="logo" />
          Somia.</router-link
        >

        <!-- Navbar Toggler -->
        <div class="classy-navbar-toggler">
          <span class="navbarToggler"
            ><span></span><span></span><span></span
          ></span>
        </div>

        <!-- Menu -->
        <div class="classy-menu">
          <!-- close btn -->
          <div class="classycloseIcon">
            <div class="cross-wrap">
              <span class="top"></span><span class="bottom"></span>
            </div>
          </div>

          <!-- Nav Start -->
          <div class="classynav">
            <ul id="nav" class="mb-0">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <!-- Button -->
            <a href="#" class="btn login-btn ml-15">Log in</a>
          </div>
          <!-- Nav End -->
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.classyNav {
  background-color: #192a56;
}
.classy-navbar-toggler .navbarToggler span {
  background-color: #fff;
}
</style>

<style scoped>
@import "../../../assets/css/animate.css";
#nav {
  margin-bottom: 0 !important;
}

.classy-nav-container {
  background-color: #281b87;
}

.bg-transparent {
  background-color: transparent;
  transition: all 0.5s linear;
}

.classy-nav-container a {
  color: rgba(225, 255, 255, 0.7) !important;
}
</style>

<script>
const $ = require("jquery");
window.$ = window.jQuery = $;

import "../../../assets/js/animated";
import "../../../assets/js/wow.min.js";

export default {
  mounted() {
    $("#nav li a").click(function () {
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top - 100,
        },
        1700
      );
    });

    $(".classy-navbar-toggler").click(function () {
      $(".classy-menu").toggleClass("menu-on");
    });

    $(".classycloseIcon .cross-wrap").click(function () {
      $(".classy-menu").removeClass("menu-on");
    });
  },
};
</script>