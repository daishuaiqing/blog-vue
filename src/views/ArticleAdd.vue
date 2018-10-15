<template>
    <div>
        <div style="margin-top:20px">
            <el-input v-model="form.title" placeholder="请输入文章标题"></el-input>
        </div>
        <div style="margin-top:20px">
            <el-select v-model="form.typeId" placeholder="请选择分类">
                <el-option
                v-for="item in types"
                :key="item.id"
                :label="item.typeName"
                :value="item.id">
                </el-option>
            </el-select>
        </div>
        <div style="margin-top:20px">
            <quill-editor ref="myTextEditor"
                        v-model="form.content"
                        :options="editorOption"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)"
                        @change="onEditorChange($event)">
            </quill-editor>
            
            <div class="limit">当前已输入 <span>{{nowLength}}</span> 个字符，您还可以输入 <span>{{SurplusLength}}</span> 个字符。</div>
        </div>
        <div style="margin-top:20px">
            <el-button plain @click="submitForm">完成提交</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                types:[],
                nowLength: 0,
                SurplusLength: 10000,
                form: {
                    id: null,
                    title: "",
                    typeId: null,
                    content: "",
                    summary:''
                },
                editorOption: {
                    modules: {
                        toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ 'header': 1 }, { 'header': 2 }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'script': 'sub' }, { 'script': 'super' }],
                        [{ 'indent': '-1' }, { 'indent': '+1' }],
                        [{ 'direction': 'rtl' }],
                        [{ 'size': ['small', false, 'large', 'huge'] }],
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'font': [] }],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'align': [] }],
                        ['clean'],
                        ['link', 'image', 'video']
                        ],
                        
                    }
                }
            }
        },
        methods: {
            onEditorBlur(editor) {
            },
            onEditorFocus(editor) {
            },
            onEditorReady(editor) {
            },
            onEditorChange({ editor, html, text }) {
                this.form.content = html;
                console.log(html);
                this.form.summary = text.substring(0,150);
                this.nowLength = text.length;
                this.SurplusLength = 10000-this.nowLength;
            },
            submitForm(){
                if(this.form.id===null){
                    this.$axios.post('/article/save',this.form)
                    .then(res => {
                        this.$message({
                            showClose: true,
                            message: '恭喜你，保存成功',
                            type: 'success'
                        });
                    });
                }else{
                    this.$axios.put('/article/update',this.form)
                    .then(res => {
                        this.$message({
                            showClose: true,
                            message: '恭喜你，保存成功',
                            type: 'success'
                        });
                    });
                }
            },
            getTypesList(){
                this.$axios.get('/articleType/list',{})
                    .then(res => {
                        this.types=res.data;
                    });
            },
            loadForm(){
                if(this.$route.params.articleId != null){
                    this.$axios.get('/article/get?id='+this.$route.params.articleId)
                        .then(res => {
                            this.form = res;
                        });
                }
            }
        },
        created(){
            //types data load
            this.getTypesList();
            //form load
            this.loadForm();
        },
        computed: {
            editor() {
                return this.$refs.myTextEditor.quillEditor
            },
        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
.quill-editor {
 height: 745px;
}
 .quill-editor .ql-container {
 height: 680px;
 }
.limit {
    margin-top: 40px;
 height: 30px;
 border: 1px solid #ccc;
 line-height: 30px;
 text-align: right;
}
.limit span {
 color: #ee2a7b;
 }
 
.ql-snow .ql-editor img {
 max-width: 480px;
}
 
.ql-editor .ql-video {
 max-width: 480px;
}

</style>