<template>
  <!-- ##### Our features Area start ##### -->
  <section class="features section-padding-100">
    <div class="section-heading text-center">
      <!-- Dream Dots -->
      <div
        class="dream-dots justify-content-center wow fadeInUp"
        data-wow-delay="0.2s"
      >
        <span></span><span></span><span></span><span></span><span></span
        ><span></span><span></span>
      </div>
      <h2 class="wow fadeInUp" data-wow-delay="0.3s">{{ features.title }}</h2>
      <p class="wow fadeInUp" data-wow-delay="0.4s">
        {{ features.para }}
      </p>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div
          class="services-column col-lg-5 col-lg-offset-1 col-md-10 offset-md-1 col-xs-10 offset-xs-1"
        >
          <!--Services Block Four-->
          <div
            class="services-block-four"
            v-for="(item, index) in features.featItem"
            :key="index"
          >
            <div class="inner-box">
              <div class="icon-box">
                <span :class="item.icon"></span>
              </div>
              <h3>
                <a href="#">{{ item.titleItem }}</a>
              </h3>
              <div class="text">
                {{ item.para }}
              </div>
            </div>
          </div>
        </div>
        <div class="service-img-wrapper col-lg-6 col-md-12 col-sm-12">
          <div class="image-box text-center">
            <img
              src="@/assets/img/phone.png"
              class="center-block img-responsive phone-img"
              alt=""
            />
            <img
              src="@/assets/img/core-img/rings-bg.png"
              class="center-block img-responsive rings"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Our features Area End ##### -->
</template>



<script>
export default {
  data() {
    return {
      features: {
        title: "Our Wallet Application",
        para:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
        featItem: [
          {
            icon: "icon ti-mobile",
            titleItem: "Powerfull Mobile And Online App",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae provident non hic eum dolores natus, vitae, quae, facere perferendis quas tempore. Consequuntur commodi facilis sed similique.",
          },
          {
            icon: "icon ti-widget",
            titleItem: "Brings More Transparency And Speed",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae provident non hic eum dolores natus, vitae, quae, facere perferendis quas tempore. Consequuntur commodi facilis sed similique.",
          },
          {
            icon: "icon ti-mobile",
            titleItem: "Special For Multiple Use Capabilities",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae provident non hic eum dolores natus, vitae, quae, facere perferendis quas tempore. Consequuntur commodi facilis sed similique.",
          },
        ],
      },
    };
  },
};
</script>