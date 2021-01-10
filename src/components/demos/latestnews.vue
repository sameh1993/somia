<template>
  <!-- ##### Blog Area Start ##### -->
  <section class="our_blog_area clearfix" id="blog">
    <div class="container">
      <div class="row">
        <div class="col-12">
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
              {{ latestNews.title }}
            </h2>
            <p class="wow fadeInUp" data-wow-delay="0.4s">
              {{ latestNews.para }}
            </p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <!-- Single Blog Post -->
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="(item, index) in latestNews.content"
          :key="index + 1"
        >
          <div class="single-blog-area wow fadeInUp" data-wow-delay="0.2s">
            <!-- Post Thumbnail -->
            <div class="blog_thumbnail">
              <img :src="item.img" alt="" />
            </div>
            <!-- Post Content -->
            <div class="blog-content">
              <!-- Dream Dots -->

              <div class="post-meta mt-20">
                <p>
                  By <a href="#" class="post-author">ADMIN</a>
                  <a href="#">Apr 10, 2018</a>
                  <a href="#" class="post-comments">7 comments</a>
                </p>
              </div>
              <a href="index-single-blog.html" class="post-title">
                <h4>{{ item.contentTit }}</h4>
              </a>
              <p>
                {{ item.contentPara }}
              </p>
              <a href="index-single-blog.html" class="btn dream-btn mt-15"
                >Read Details</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Blog Area End ##### -->
</template>

<script>
export default {
  data() {
    return {
      latestNews: {
        title: "Latest News",
        para:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
        content: [
          {
            img: require("@/assets/img/blog-img/1.jpg"),
            contentTit: "How to become a successful businessman.",
            contentPara:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat at vitae, ratione sapiente repellat.",
          },
          {
            img: require("@/assets/img/blog-img/2.jpg"),
            contentTit: "How to become a successful businessman.",
            contentPara:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat at vitae, ratione sapiente repellat.",
          },
          {
            img: require("@/assets/img/blog-img/3.jpg"),
            contentTit: "How to become a successful businessman.",
            contentPara:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat at vitae, ratione sapiente repellat.",
          },
        ],
      },
    };
  },
};
</script>