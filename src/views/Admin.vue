<template>
    <div>
        <el-container>
            <el-header>博客后台</el-header>
            <el-main>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <div class="grid-content bg-purple">
                            <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @select="select"
                            >
                            <el-menu-item index="1">
                                <i class="el-icon-location"></i>
                                <span slot="title">总览</span>
                            </el-menu-item>
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">分类</span>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <i class="el-icon-document"></i>
                                <span slot="title">文章</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>
                                <span slot="title">设置</span>
                            </el-menu-item>
                            </el-menu>
                        </div>
                    </el-col>
                    <el-col :span="20">
                        
                        <router-view/>

                    </el-col>
                </el-row>
                
            </el-main>
        </el-container>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:"hahahhanihao a ahjdiashn  dihasidha"
            }
        },
        methods: {
            select(index, path) {
                switch(index){
                    case "1" : 
                        this.$router.push({ name: "viewAll" }) 
                        break;
                    case "2" : 
                        this.$router.push({ name: "articleType" })
                        break;
                    case "3" : 
                        this.$router.push({ name: "article" })
                        break;
                    case "4" : 
                        this.$router.push({ name: "setting" })
                        break;
                }
            }
        }
    }
</script>

<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

</style>