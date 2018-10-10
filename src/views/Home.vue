<template>
  <div class="home">
    <header class="header-area">
    <!-- Logo Area -->
        <div class="logo-area text-center">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12">
                        <a href="index.html" class="original-logo"><img src="../assets/logo.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    <!-- Nav Area -->
        <div class="original-nav-area" id="stickyNav">
            <div class="classy-nav-container breakpoint-off">
                <div class="container">
                    <!-- Classy Menu -->
                    <nav class="classy-navbar justify-content-between">

                        <!-- Subscribe btn -->
                        <div class="subscribe-btn">
                            <a href="#" class="btn subscribe-btn" data-toggle="modal" data-target="#subsModal">欢迎</a>
                        </div>

                        <!-- Navbar Toggler -->
                        <div class="classy-navbar-toggler">
                            <span class="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        <!-- Menu -->
                        <div class="classy-menu" id="originalNav">
                            <!-- close btn -->
                            <div class="classycloseIcon">
                                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                            </div>

                            <!-- Nav Start -->
                            <div class="classynav">
                                <ul>
                                    <li><router-link :to="{name:'index'}">主页</router-link></li>
                                    <!-- <li class="dropdown1">
                                        <a href="#">Catagory</a>
                                    
                                    </li> -->
                                    <li><a href="#">时间轴</a></li>
                                    <li><a href="#">关于</a></li>
                                    <li><a href="#">活动</a></li>
                                </ul>
                                <!-- Search Form  -->
                                <div id="search-wrapper">
                                    <form action="#">
                                        <input type="text" id="search" placeholder="Search something...">
                                        <div id="close-icon"></div>
                                        <input class="d-none" type="submit" value="">
                                    </form>
                                </div>
                            </div>
                            <!-- Nav End -->
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    <!-- ##### Header Area End ##### -->
    </header>
    <div class="container">
            <div class="row">
                <div class="col-12 col-lg-9">
                <router-view></router-view>
            </div>
    <!-- ##### Sidebar Area ##### -->
                <div class="col-12 col-md-4 col-lg-3">
                    <div class="post-sidebar-area">

                        <!-- Widget Area -->
                        <div class="sidebar-widget-area">
                            <form action="#" class="search-form">
                                <input type="search" name="search" id="searchForm" placeholder="Search">
                                <input type="submit" value="submit">
                            </form>
                        </div>

                        <!-- Widget Area -->
                        <div class="sidebar-widget-area">
                            <h5 class="title subscribe-title">订阅我的文章到您的邮箱</h5>
                            <div class="widget-content">
                                <form action="#" class="newsletterForm">
                                    <input type="email" name="email" id="subscribesForm" placeholder="您的邮箱地址">
                                    <button type="submit" class="btn original-btn">订阅</button>
                                </form>
                            </div>
                        </div>

                        <!-- Widget Area -->
                        <div class="sidebar-widget-area">
                            <h5 class="title">最新公告</h5>

                            <div class="widget-content">
                                <!-- Single Blog Post -->
                                <div class="single-blog-post d-flex align-items-center widget-post">
                                    <!-- Post Thumbnail -->
                                    <!-- Post Content -->
                                    <div class="post-content">
                                        <a href="#" class="post-tag">Lifestyle</a>
                                        <h4><a href="#" class="post-headline">Party people in the house</a></h4>
                                        <div class="post-meta">
                                            <p><a href="#">12 March</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Widget Area -->
                        <div class="sidebar-widget-area">
                            <h5 class="title">分类</h5>
                            <div class="widget-content">
                                <ul class="tags">
                                    <li><a href="#">design</a></li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">travel</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>


export default {
    
  data(){
      return {
          items:[]
      }
  },
  created(){
      this.loadIndex();
  },
  methods:{
      loadIndex(){
          this.$router.push({ name: "index"});
      }
  }
}
</script>

<style scoped >

</style>

