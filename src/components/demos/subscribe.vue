<template>
  <!-- ##### Subscribe Area start ##### -->
  <section
    class="container"
    :class="$route.name == 'demoThree' ? 'pt-100' : ''"
    style="padding-bottom: 0px"
    id="start"
  >
    <div class="subscribe">
      <div class="row">
        <div class="col-sm-12">
          <div class="subscribe-wrapper">
            <div class="section-heading text-center">
              <h2
                class="wow fadeInUp"
                data-wow-delay="0.3s"
                style="
                  visibility: visible;
                  animation-delay: 0.3s;
                  animation-name: fadeInUp;
                "
              >
                Don’t Miss ICO News And Updates!
              </h2>
              <p
                class="wow fadeInUp"
                data-wow-delay="0.4s"
                style="
                  visibility: visible;
                  animation-delay: 0.4s;
                  animation-name: fadeInUp;
                "
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
              </p>
            </div>
            <div class="service-text">
              <div
                class="col-lg-8 col-lg-offset-2 col-md-8 offset-md-2 col-xs-12 text-center"
              >
                <div class="group">
                  <input type="text" name="subject" required="" />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>enter your email</label>
                  <button class="dream-btn">
                    <i class="fa fa-paper-plane-o"></i>
                  </button>
                </div>
              </div>
              <div class="col-lg-5 col-lg-offset-1 col-sm-12 text-center">
                <span class="telegram-text">Join our chat: </span>
                <a href="" class="button"
                  ><i class="fa fa-telegram"></i>Telegram</a
                >
              </div>
              <div class="col-lg-5 col-sm-12 text-center">
                <ul class="list-unstyled list-inline social-list">
                  <li>
                    <a href=""><i class="fa fa-facebook-square"></i></a>
                  </li>
                  <li>
                    <a href=""><i class="fa fa-twitter-square"></i></a>
                  </li>
                  <li>
                    <a href=""><i class="fa fa-github-square"></i></a>
                  </li>
                  <li>
                    <a href=""><i class="fa fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href=""><i class="fa fa-medium"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Subscribe Area End ##### -->
</template>

<style scoped>
.pt-100 {
  padding-top: 100px;
}
</style>