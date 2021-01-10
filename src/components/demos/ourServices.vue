<template>
  <!-- ##### Our Services Area Start ##### -->
  <section class="our_services_area section-padding-0-0 clearfix" id="services">
    <div class="container">
      <div class="section-heading text-center">
        <!-- Dream Dots -->
        <div
          class="dream-dots justify-content-center wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <span></span><span></span><span></span><span></span><span></span
          ><span></span><span></span>
        </div>
        <h2 class="wow fadeInUp" data-wow-delay="0.3s">{{ ourSer.title }}</h2>
        <p class="wow fadeInUp" data-wow-delay="0.4s">
          {{ ourSer.para }}
        </p>
      </div>

      <div class="row">
        <div
          class="col-12 col-sm-6 col-lg-4"
          v-for="(item, index) in ourSer.contentSer"
          :key="index"
        >
          <!-- Content -->
          <div
            class="service_single_content text-center mb-100 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <!-- Icon -->
            <div class="service_icon">
              <img :src="item.img" alt="" />
            </div>
            <h6>{{ item.title }}</h6>
            <p>
              {{ item.para }}
            </p>
          </div>
        </div>
        <!--------------------------  -->
      </div>
    </div>
  </section>
  <!-- ##### Our Services Area End ##### -->
</template>

<style lang="scss">
.service_icon {
  h6 {
    color: #fff;
  }
}
</style>

<script>
export default {
  data() {
    return {
      ourSer: {
        title: "Our Core Services",
        para:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
        contentSer: [
          {
            img: require("@/assets/img/services/1.svg"),
            title: "Smart Trading Modules",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.",
          },
          {
            img: require("@/assets/img/services/2.svg"),
            title: "Adaptive Social Assistant",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.",
          },
          {
            img: require("@/assets/img/services/3.svg"),
            title: "Analyzer of the News",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.",
          },
          {
            img: require("@/assets/img/services/4.svg"),
            title: "Exchange Order Management",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.",
          },
          {
            img: require("@/assets/img/services/5.svg"),
            title: "Module of Price Notification",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.",
          },
          {
            img: require("@/assets/img/services/6.svg"),
            title: "Crypto Trading Platform",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.",
          },
        ],
      },
    };
  },
};
</script>