<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-9">
                    <div v-for="item in items" :key="item.id">
                        <!-- Single Blog Area  -->
                        <div class="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1000ms" style="visibility: visible; animation-duration: 1000ms; animation-delay: 0.2s; animation-name: fadeInUp;">
                            <div class="row align-items-center">
                                <div class="col-12 col-md-12">
                                    <div class="single-blog-content">
                                        <div class="line"></div>
                                        <a href="#" class="post-tag">Lifestyle</a>
                                        <h4><a href="#" @click="toArticle(item.id)" class="post-headline">{{ item.title }}</a></h4>
                                        <p>{{ item.summary }}</p>
                                        <div class="post-meta">
                                            <p>Time <a href="#">{{ item.createTime, "date" | formatUnix }}</a></p>
                                            <p>3 comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Load More -->
                    <div class="load-more-btn mt-100 wow fadeInUp" data-wow-delay="0.7s" data-wow-duration="1000ms" style="visibility: visible; animation-duration: 1000ms; animation-delay: 0.7s; animation-name: fadeInUp;">
                        <a href="#" class="btn original-btn">Read More</a>
                    </div>
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
                            <h5 class="title subscribe-title">Subscribe to my newsletter</h5>
                            <div class="widget-content">
                                <form action="#" class="newsletterForm">
                                    <input type="email" name="email" id="subscribesForm" placeholder="Your e-mail here">
                                    <button type="submit" class="btn original-btn">Subscribe</button>
                                </form>
                            </div>
                        </div>

                        <!-- Widget Area -->
                        <div class="sidebar-widget-area">
                            <h5 class="title">Latest Posts</h5>

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
                            <h5 class="title">Tags</h5>
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
            this.getList();
        },
        methods:{
            getList(){
                this.$axios.get('/article/list',{})
                            .then(res => {
                                this.items=res;
                            });
            },
            toArticle(){
                this.$router.push({ name: "articleAdd" ,params: {articleId : id}});
            },
        }
    }
</script>

<style scoped>

</style>