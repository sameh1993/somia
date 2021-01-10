<template>
  <!-- ##### Team Area Start ##### -->
  <section class="our_team_area section-padding-100-0 clearfix" id="team">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-heading text-center">
            <!-- Dream Dots -->
            <div
              class="dream-dots justify-content-center wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h2 class="wow fadeInUp" data-wow-delay="0.3s">Awesome Team</h2>
            <p class="wow fadeInUp" data-wow-delay="0.4s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Single Team Member -->
        <div
          class="col-12 col-sm-6 col-lg-3"
          v-for="(item, index) in ourTeam"
          :key="index"
        >
          <div class="single-team-member wow fadeInUp" data-wow-delay="0.5s">
            <!-- Image -->
            <div class="team-member-thumb">
              <img :src="item.img" class="center-block" alt="" />
            </div>
            <!-- Team Info -->
            <div class="team-info">
              <h5>{{ item.title }}</h5>
              <p>{{ item.titleJob }}</p>
            </div>
            <!-- Icon -->
            <div class="team-social-icon">
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-instagram"></i></a>
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-skype"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Team Area End ##### -->
</template>

<script>
export default {
  data() {
    return {
      ourTeam: [
        {
          img: require("@/assets/img/team-img/1.png"),
          title: "SUNNY KHAN",
          titleJob: "EXECUTIVE OFFICER",
        },
        {
          img: require("@/assets/img/team-img/2.png"),
          title: "AJOY DAS",
          titleJob: "BUSINESS DEVELOPMENT",
        },
        {
          img: require("@/assets/img/team-img/3.png"),
          title: "AFROZA MOU",
          titleJob: "UX/UI DESIGNER",
        },
        {
          img: require("@/assets/img/team-img/4.png"),
          title: "LIM SARAH",
          titleJob: "HEAD OF MARKETING",
        },
        {
          img: require("@/assets/img/team-img/1.png"),
          title: "SUNNY KHAN",
          titleJob: "EXECUTIVE OFFICER",
        },
        {
          img: require("@/assets/img/team-img/2.png"),
          title: "AJOY DAS",
          titleJob: "BUSINESS DEVELOPMENT",
        },
        {
          img: require("@/assets/img/team-img/3.png"),
          title: "AFROZA MOU",
          titleJob: "UX/UI DESIGNER",
        },
        {
          img: require("@/assets/img/team-img/4.png"),
          title: "LIM SARAH",
          titleJob: "HEAD OF MARKETING",
        },
      ],
    };
  },
};
</script>