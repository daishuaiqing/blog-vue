<template>
    <div>
        <el-button type="text" @click="gotoAdd">新增文章</el-button>
        <template>
            <el-table
                :data="listData"
                stripe
                style="width: 100%">
                <el-table-column
                prop="createTime"
                label="日期"
                width="180">
                <template slot-scope="scope">
                    {{ scope.row.createTime, "date" | formatUnix }}
                </template>
                </el-table-column>
                <el-table-column
                prop="title"
                label="名称">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="200">
                <template slot-scope="scope">
                    <el-button type="primary" @click="toEdit(scope.row.id)" icon="el-icon-edit" circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle></el-button>
                </template>
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                listData:[]
            }
        },
        methods:{
            gotoAdd(){
                this.$router.push({ name: "articleAdd" });
            },
            getList(){
                this.$axios.get('/article/list',{})
                    .then(res => {
                        this.listData=res;
                    });
            },
            toEdit(id){
                this.$router.push({ name: "articleAdd" ,params: {articleId : id}});
            }
        },
        created(){
            this.getList();
        }
    }
</script>

<style scoped>

</style>