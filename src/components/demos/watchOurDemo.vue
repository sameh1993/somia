<template>
  <!-- ##### demo-vedio Area End ##### -->
  <section class="demo-video section-before section-padding-100">
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
        <h2 class="wow fadeInUp" data-wow-delay="0.3s">Watch our demo video</h2>
        <p class="wow fadeInUp" data-wow-delay="0.4s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </div>
      <!-- Welcome Video Area -->
      <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
        <div class="welcome-video-area wow fadeInUp" data-wow-delay="0.5s">
          <!-- Welcome Thumbnail -->
          <div class="welcome-thumb">
            <img src="@/assets/img/bg-img/bg-4.jpg" alt="" />
          </div>
          <!-- Video Icon -->
          <div class="video-icon">
            <a
              href="https://www.youtube.com/watch?v=gbXEPHsTkgU"
              class="btn dream-btn video-btn"
              id="videobtn"
              ><i class="fa fa-play"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang='scss'>
@import "@/assets/_Rules.scss";

section {
  .video-icon i {
    font-size: 25px;
    margin-top: 14px;
    margin-left: 2px;
    @include maxScreen(lg) {
      margin-top: 21px;
    }
  }
}
</style>