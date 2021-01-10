<template>
  <section class="demo section-padding-100-0" id="demo">
    <div class="container">
      <div class="section-heading text-center">
        <!-- Dots -->
        <div
          class="dream-dots justify-content-center wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <span></span><span></span><span></span><span></span><span></span
          ><span></span><span></span>
        </div>
        <h2 class="wow fadeInUp" data-wow-delay="0.3s">Choose a demo</h2>
        <p class="wow fadeInUp" data-wow-delay="0.4s">
          Our ICO will be a perfect platform for presenting your ico launch.
          This Landing Page comes in great and clean design
        </p>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="demo-item">
            <router-link to="/index-demo-1"
              ><img
                src="@/assets/img/demos/demo-1.png"
                alt="demo"
                class="img-responsive"
            /></router-link>
            <div class="preview-btn-wrapper text-center">
              <router-link to="/index-demo-1" class="preview-demo"
                >View demo<i class="fa fa-long-arrow-right"></i
              ></router-link>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="demo-item">
            <router-link to="/index-demo-2"
              ><img
                src="@/assets/img/demos/demo-2.png"
                alt="demo"
                class="img-responsive"
            /></router-link>
            <div class="preview-btn-wrapper text-center">
              <router-link to="/index-demo-2" class="preview-demo"
                >View demo<i class="fa fa-long-arrow-right"></i
              ></router-link>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="demo-item">
            <router-link to="/index-demo-3"
              ><img
                src="@/assets/img/demos/demo-3.png"
                alt="demo"
                class="img-responsive"
            /></router-link>
            <router-link to="/index-demo-3" class="preview-demo text-center"
              >View demo<i class="fa fa-long-arrow-right"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.demo-item img {
  width: 100%;
}
</style>