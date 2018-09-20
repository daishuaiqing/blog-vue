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
                prop="typeName"
                label="名称"
                width="180">
                </el-table-column>
                <el-table-column
                prop="level"
                label="权重">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
                    <el-button type="text" size="small">编辑</el-button>
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
                items:[
                    {
                        id:1,
                        title:"第一篇文章",
                        content:"very good content,this is my first article,intruduction my info."
                    },
                    {
                        id:2,
                        title:"第二篇文章",
                        content:"very good content,this is my first article,intruduction my info."
                    },
                    {
                        id:3,
                        title:"第三篇文章",
                        content:"very good content,this is my first article,intruduction my info."
                    }
                ]
            }
        },
        methods:{
            gotoAdd(){
                this.$router.push({ name: "articleAdd" });
            }
        }
    }
</script>

<style scoped>

</style>