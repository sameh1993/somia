<template>
  <!-- ##### Mission Area Start ##### -->
  <section class="our-mission-area clearfix" id="feature">
    <div
      class="divimage dzsparallaxer--target"
      style="
        width: 101%;
        height: 130%;
        background-image: url(img/bg-img/bg-3.jpg);
      "
    >
      <!-- Mission Content -->
      <div class="our-mission-content section-padding-100">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div
              class="col-12 col-md-4"
              v-for="(item, index) in mission"
              :key="index"
            >
              <!-- Single Mission -->
              <div class="single-mission wow fadeInUp" data-wow-delay="0.2s">
                <i :class="item.icon"></i>
                <h6>{{ item.title }}</h6>
                <p>
                  {{ item.para }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Mission Area End ##### -->
</template>

<style lang="scss" >
@import "@/assets/_Rules.scss";

.our-mission-area {
  background-image: url("../../assets/img/bg-img/bg-3.jpg");
  height: auto !important;

  .our-mission-content {
    position: relative !important;
    height: auto !important;
    .row > div {
      margin-top: 25px;
    }
    h6 {
      color: #fff;
      font-weight: normal;
      letter-spacing: 1px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      mission: [
        {
          icon: "ti-shine",
          title: "Quality",
          para:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, illo, cumque. Fuga neque similique quibusdam animi ipsam obcaecati.",
        },
        {
          icon: "ti-ruler-pencil",
          title: "Creativity",
          para:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, illo, cumque. Fuga neque similique quibusdam animi ipsam obcaecati.",
        },
        {
          icon: "ti-heart",
          title: "Reliability",
          para:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, illo, cumque. Fuga neque similique quibusdam animi ipsam obcaecati.",
        },
      ],
    };
  },
};
</script>