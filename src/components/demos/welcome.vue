<template>
  <!-- ##### Welcome Area Start ##### -->
  <section
    class="welcome_area clearfix dzsparallaxer auto-init ico fullwidth"
    data-options='{direction: "normal"}'
    id="home"
  >
    <div
      class="divimage dzsparallaxer--target"
      :class="$route.name == 'demoTwo' ? 'demoTwo' : ''"
    >
      <!-- Hero Content -->
      <div
        class="hero-content transparent"
        :class="$route.name != 'demoTwo' ? 'dark-blue' : ''"
      >
        <!-- blip -->
        <div class="dream-blip blip1"></div>
        <div class="dream-blip blip2"></div>
        <div class="dream-blip blip3"></div>
        <div class="dream-blip blip4"></div>

        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <!-- Welcome Content -->
            <div class="col-12 col-lg-6 col-md-12">
              <div class="welcome-content">
                <div class="promo-section">
                  <div class="integration-link mt-25">
                    <span class="integration-icon">
                      <img
                        src="@/assets/img/svg/img-dollar.svg"
                        width="24"
                        height="24"
                        alt=""
                      />
                    </span>
                    <span class="integration-text">
                      {{ currentItem.subTitle }}</span
                    >
                  </div>
                </div>
                <h1 class="wow fadeInUp text-white" data-wow-delay="0.2s">
                  {{ currentItem.title }}
                </h1>
                <p class="wow fadeInUp" data-wow-delay="0.3s">
                  {{ currentItem.para }}
                </p>

                <div class="dream-btn-group wow fadeInUp" data-wow-delay="0.4s">
                  <a href="#" class="btn dream-btn">Learn More</a>
                  <a href="#" class="btn dream-btn">Contact Us</a>
                </div>
              </div>
            </div>

            <!-- Welcome Video Area -->
            <div class="col-12 col-lg-6 col-md-12">
              <div
                class="main-ilustration wow fadeInUp"
                data-wow-delay="0.5s"
                v-if="$route.name == 'demoOne'"
              ></div>
              <div
                class="main-ilustration wow fadeInUp demoThree"
                data-wow-delay="0.5s"
                v-if="$route.name == 'demoThree'"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Welcome Area End ##### -->
</template>

<style lang="scss" scoped>
@import "@/assets/_Rules.scss";

.dream-btn-group a {
  margin: 0 2px;
}

.welcome_area {
  min-height: 100vh;
  @include maxScreen(lg) {
    .welcome-content h1 {
      font-size: 29px !important;
    }
  }
  .row {
    & > div {
      margin: 40px 0;
    }
  }
  .btn {
    margin-left: 2px;
    margin-right: 2px;
  }
  .divimage {
    background-image: url("../../assets/img/bg-img/bg-2.jpg") !important;
    height: 100%;
  }
}

.divimage.demoTwo {
  background-image: url("../../assets/img/bg-img/bg-5.png") !important;
  transform: translate3d(0px, -45.0001px, 0px);
}

.main-ilustration.demoThree {
  background-image: url("../../assets/img/svg/head-bg-1.svg");
}
</style>

<script>
export default {
  data() {
    return {
      demoOne: {
        subTitle: "Discover a new ways to enjoy your World!",
        title: "Artificial Intelligence Crypto Revolution",
        para: `We have over 15 year exprience in business consultting arena. We
                have over 15 year exprience in business consultting arena and
                artficial intelligence.`,
      },
      demoThree: {
        subTitle: "Discover a new ways to enjoy your World!",
        title: "Buy & sell crypto easier than ever",
        para: `We have over 15 year exprience in business consultting arena. We
                have over 15 year exprience in business consultting arena and
                artficial intelligence.`,
      },
    };
  },
  computed: {
    currentItem() {
      if (this.$route.name == "demoThree") {
        return this.demoThree;
      } else {
        return this.demoOne;
      }
    },
  },
  filters: {
    subText(v, textLength) {
      return v.subString(1, textLength);
    },
  },
};
</script>