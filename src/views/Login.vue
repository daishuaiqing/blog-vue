<template>
    <div>
        <div style="margin-top:50px">
            <div class="row">
                <div class="col-12 col-md-4"></div>
                <div class="col-12 col-md-4">
                    <div class="group">
                        <input type="text" name="name" id="name" v-model="user.userName" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>用户名</label>
                    </div>
                </div>
                <div class="col-12 col-md-4"></div>
                <div class="col-12 col-md-4"></div>
                <div class="col-12 col-md-4">
                    <div class="group">
                        <input type="text" name="subject" id="subject" v-model="user.password" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>密码</label>
                    </div>
                </div>
                <div class="col-12 col-md-4"></div>
                <div class="col-12 col-md-4"></div>
                <div class="col-12 col-md-4">
                    <button class="btn original-btn" @click="submit">登录</button>
                </div>
                <div class="col-12 col-md-4"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                user:{
                    userName:'',
                    password:''
                }
            }
        },
        methods:{
            submit(){
                this.$axios.post('/user/login',this.user)
                    .then(res => {
                        if(res.code==='00'){
                            window.localStorage.setItem("token",res.data);
                            this.$router.push({name:'admin'});
                        }
                    });
            }
        }
    }
</script>

<style scoped>

</style>