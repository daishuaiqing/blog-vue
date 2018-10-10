<template>
    <div>
                    <!-- Single Blog Area  -->
                    <div class="single-blog-area blog-style-2 mb-50">
                        <!-- Blog Content -->
                        <div class="single-blog-content">
                            <div class="line"></div>
                            <a href="#" class="post-tag">Lifestyle</a>
                            <h4><a href="#" class="post-headline mb-0">{{ article.title }}</a></h4>
                            <div class="post-meta mb-50">
                                <p>Time <a href="#">{{ article.createTime, "date" | formatUnix }}</a></p>
                                <p>3 comments</p>
                            </div>
                            <p v-html="article.content">
                            </p>

                        </div>
                    </div>
    </div>
</template>

<script>
    export default {
        created(){
            this.loadArticle();
        },
        data(){
            return {
                article:{}
            }
        },
        methods:{
            loadArticle(){
                this.$axios.get('/article/get?id='+this.$route.params.articleId)
                        .then(res => {
                            this.article = res;
                        });
            }
        }
    }
</script>

<style scoped>

</style>