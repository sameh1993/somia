<template>
  <!-- ##### About Us Area Start ##### -->
  <section class="about-us-area section-padding-0-100 clearfix" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6">
          <div class="welcome-meter wow fadeInUp" data-wow-delay="0.7s">
            <img
              :src="aboutUsOne.img"
              class="img-responsive center-block"
              alt=""
            />
            <!-- client meta -->
            <div
              class="growing-company text-center mt-30 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <p>
                * Already growing up <span class="counter">5236</span> company
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="who-we-contant">
            <!-- Dream Dots -->
            <div class="dream-dots wow fadeInUp" data-wow-delay="0.2s">
              <span></span><span></span><span></span><span></span><span></span
              ><span></span><span></span>
            </div>
            <h4 class="wow fadeInUp" data-wow-delay="0.3s">
              {{ aboutUsOne.title }}
            </h4>
            <p class="wow fadeInUp" data-wow-delay="0.4s">
              {{ aboutUsOne.para | shorten(220) }}
            </p>
            <p class="wow fadeInUp" data-wow-delay="0.4s">
              {{ aboutUsOne.para | shorten(350) }}
            </p>
            <router-link
              class="btn dream-btn mt-30 wow fadeInUp"
              data-wow-delay="0.6s"
              to="/"
              >Read More</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.who-we-contant {
  h4 {
    color: #fff;
  }
}
</style>


<script>
export default {
  data() {
    return {
      aboutUsOne: {
        title: "We complete every project with extra care as customer need.",
        para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!`,
        img: require("@/assets/img/svg/about1.svg"),
      },
    };
  },
};
</script>