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
                            <a href="#" class="btn subscribe-btn" data-toggle="modal" data-target="#subsModal">Subscribe</a>
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
                                    <li><router-link :to="{name:'home'}">Home</router-link></li>
                                    <li><router-link :to="{name:'home'}">Catagory</router-link></li>
                                    <li><a href="single-post.html">Archives</a></li>
                                    <li><a href="contact.html">About</a></li>
                                    <li><a href="coming-soon.html">Atom</a></li>
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
    <router-view></router-view>
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

