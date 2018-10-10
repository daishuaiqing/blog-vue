<template>
    <div>
        
                
                    <div v-for="item in items" :key="item.id">
                        <!-- Single Blog Area  -->
                        <div class="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1000ms" style="visibility: visible; animation-duration: 1000ms; animation-delay: 0.2s; animation-name: fadeInUp;">
                            <div class="row align-items-center">
                                <div class="col-12 col-md-12">
                                    <div class="single-blog-content">
                                        <div class="line"></div>
                                        <a href="#" class="post-tag">{{ item.createTime, "date" | formatUnix }}</a>
                                        <h4><a href="#" @click="toArticle(item.id)" class="post-headline">{{ item.title }}</a></h4>
                                        <p>{{ item.summary }}</p>
                                        <div class="post-meta">
                                            <p>发表于 {{ item.createTime, "dateTime" | formatUnix }}</p>
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
            toArticle(id){
                this.$router.push({ name: "articleView" ,params: {articleId : id}});
            },
        }
    }
</script>

<style scoped>

</style>