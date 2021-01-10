<template>
  <!-- ##### About Us Area Start ##### -->
  <section class="about-us-area section-padding-0-100 clearfix">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6">
          <div class="who-we-contant">
            <!-- Dream Dots -->
            <div class="dream-dots wow fadeInUp" data-wow-delay="0.2s">
              <span></span><span></span><span></span><span></span><span></span
              ><span></span><span></span>
            </div>
            <h4 class="wow fadeInUp" data-wow-delay="0.3s">
              {{ aboutUsSecond.title }}
            </h4>
            <p class="wow fadeInUp" data-wow-delay="0.4s">
              {{ aboutUsSecond.para | subString(296) }}
            </p>
            <p class="wow fadeInUp" data-wow-delay="0.4s">
              {{ aboutUsSecond.para | subString(350) }}
            </p>
            <a
              class="btn dream-btn mt-30 wow fadeInUp"
              data-wow-delay="0.6s"
              href="#"
              >Read More</a
            >
          </div>
        </div>

        <div class="col-12 col-lg-6 mt-25">
          <div
            class="welcome-meter wow fadeInUp xs-text-center mt-25"
            data-wow-delay="0.7s"
          >
            <img :src="aboutUsSecond.img" class="center-block" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### About Us Area End ##### -->
</template>

<style lang="scss" scoped>
@import "@/assets/_Rules.scss";
.welcome-meter {
  @include maxScreen(lg) {
    margin-top: 25px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      aboutUsSecond: {
        title: "We complete every project with extra care as customer need.",
        para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!`,
        img: require("@/assets/img/solution.png"),
      },
    };
  },
  filters: {
    subString(value, textLength) {
      return value.substring(0, textLength);
    },
  },
};
</script>