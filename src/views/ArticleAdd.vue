<template>
    <div>
        <quill-editor ref="myTextEditor"
                    v-model="content"
                    :config="editorOption"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)"
                    @change="onEditorChange($event)">
        </quill-editor>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            content: '<h2>I am Example</h2>',
            editorOption: {
            // something config
            }
            }
        },
        methods: {
            onEditorBlur(editor) {
            console.log('editor blur!', editor)
            },
            onEditorFocus(editor) {
            console.log('editor focus!', editor)
            },
            onEditorReady(editor) {
            console.log('editor ready!', editor)
            },
            onEditorChange({ editor, html, text }) {
            this.content = html
            }
        },
        computed: {
            editor() {
            return this.$refs.myTextEditor.quillEditor
            }
        },
        mounted() {
            // you can use current editor object to do something(editor methods)
            console.log('this is my editor', this.editor)
            // this.editor to do something...
        }
    }
</script>

<style scoped>

</style>