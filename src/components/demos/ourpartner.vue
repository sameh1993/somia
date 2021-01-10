<template>
  <!-- ##### Our partners Area start ##### -->
  <section class="partners">
    <div class="section-heading text-center">
      <!-- Dream Dots -->
      <div
        class="dream-dots justify-content-center wow fadeInUp"
        data-wow-delay="0.2s"
      >
        <span></span><span></span><span></span><span></span><span></span
        ><span></span><span></span>
      </div>
      <h2 class="wow fadeInUp" data-wow-delay="0.3s">
        {{ ourPartners.title }}
      </h2>
      <p class="wow fadeInUp" data-wow-delay="0.4s">
        {{ ourPartners.para }}
      </p>
    </div>

    <div class="container">
      <div class="row">
        <div
          class="col-lg-2 col-sm-6"
          v-for="(item, index) in ourPartners.content"
          :key="index"
        >
          <div class="partner-box">
            <img :src="item" alt="" class="center-bock" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Our partners Area start ##### -->
</template>

<script>
export default {
  data() {
    return {
      ourPartners: {
        title: "our awesome parters",
        para:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
        content: [
          require("@/assets/img/partners/1.png"),
          require("@/assets/img/partners/2.png"),
          require("@/assets/img/partners/3.png"),
          require("@/assets/img/partners/4.png"),
          require("@/assets/img/partners/5.png"),
          require("@/assets/img/partners/6.png"),
          require("@/assets/img/partners/7.png"),
          require("@/assets/img/partners/8.png"),
          require("@/assets/img/partners/9.png"),
          require("@/assets/img/partners/10.png"),
          require("@/assets/img/partners/11.png"),
          require("@/assets/img/partners/12.png"),
        ],
      },
    };
  },
};
</script>