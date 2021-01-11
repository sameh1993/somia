<template>
  <!-- ##### token-distribution Area start ##### -->
  <section class="token-distribution">
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
        <h2 class="wow fadeInUp" data-wow-delay="0.3s">Our ICO Distribution</h2>
        <p class="wow fadeInUp" data-wow-delay="0.4s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </div>

      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <h2 class="text-center mb-30 text-white">Token Allocation</h2>
          <div class="token-allocation">
            <img
              src="../../assets/img/core-img/allocation.png"
              class="center-block"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="token-info-wapper"></div>
          <h2 class="text-center mb-30 text-white">More Token Info</h2>
          <div class="token-info">
            <div class="info-wrapper">
              <img src="../../assets/img/svg/token-icon-1.svg" />
              <div class="token-descr">
                Lorem ipsum dolor sit amet, conse ctetur elit
              </div>
            </div>
          </div>
          <div class="token-info">
            <div class="info-wrapper">
              <img src="../../assets/img/svg/token-icon-2.svg" />
              <div class="token-descr">Sed quis accumsan nisi Ut ut felis</div>
            </div>
          </div>
          <div class="token-info">
            <div class="info-wrapper">
              <img src="../../assets/img/svg/token-icon-3.svg" />
              <div class="token-descr">felis congue nisl hendrerit commodo</div>
            </div>
          </div>
          <div class="token-info" style="margin-bottom: 0">
            <div class="info-wrapper">
              <img src="../../assets/img/svg/token-icon-4.svg" />
              <div class="token-descr">
                arch nemo sequi rem saepe ad quasi ullam.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <mission></mission>
  </section>
  <!-- ##### token-distribution Area End ##### -->
</template>

<style lang="scss" scoped>
.token-distribution {
  padding-bottom: 0;
  & > .container {
    padding-bottom: 100px;
  }
}
</style>


<script>
import mission from "@/components/demos/mission.vue";

export default {
  components: {
    mission,
  },
};
</script>