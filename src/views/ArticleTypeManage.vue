<template>
    <div>
    <el-button type="text" @click="dialogFormVisible = true">新增分类</el-button>

    <el-dialog title="新增分类" :visible.sync="dialogFormVisible">
    <el-form :model="form">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
        <el-input v-model="form.typeName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="权重" :label-width="formLabelWidth">
        <el-input v-model="form.level" auto-complete="off"></el-input>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
    </div>
    </el-dialog>
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
        data() {
            return {
                listData: [],
                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                    typeName: '',
                    level: 0
                },
                formLabelWidth: '120px'
            }
        },
        created(){
            //装在初始化列表数据
            this.getList();
        },
        methods: {
            getList(){
                this.$axios.get('/articleType/list')
                    .then(res => {
                        this.listData=res.data;
                    });
            },
            submitForm(){
                this.$axios.post('/articleType/save',this.form)
                    .then(res => {
                        this.dialogFormVisible = false;
                        this.getList();
                    });
            }
        }

    }
</script>

<style scoped>

</style>