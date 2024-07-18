<template>
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
        ref="editor"
      />
    </div>
</template>

<style lang="scss">
    .w-e-scroll {
      overflow-y: auto;
      height: 500px; /* 与编辑器高度一致 */
    }

    .w-e-modal {
      position: absolute;
      right: 10px !important;
      left: revert !important;
      .btn-close{
        svg{
          display: none;
        }
      }
    }

    .w-e-panel-content-color{
      .clear{
        display: flex;
        align-items: center;

        svg{
          margin-bottom: 0;
          margin-right: 5px;
        }
      }
    }
</style>

<script>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { ref, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

import { i18nAddResources, i18nChangeLanguage } from '@wangeditor/editor'

i18nAddResources('TC', {
  link: {
    title: '連結',
    edit: '編輯',
    insert: '插入',
    unLink: '刪除',
    view: '前往',
    text: '文本',
    url: '網址'
  },
  uploadImgModule: {
    uploadImage: '本地上傳'
  },
  image: {
    netImage: '圖片網址',
    src: '圖片網址',
    desc: '描述訊息',
    link: '添加連結',
    delete: '刪除',
    edit: '編輯',
    viewLink: '前往連結'
  },
  common: {
    ok: '確定'
  },
  color: {
    bgColor: '背景色',
    clear: '清除背景色',
    color: '文字顏色',
    default: '還原預設'
  },
  textStyle: {
    clear: '清除文字樣式',
    bold: '粗體'
  }
})
i18nChangeLanguage('TC')

export default {
  props: ['articleContent'],
  components: { Editor, Toolbar },
  data () {
    return {
      editorRef: shallowRef(),
      valueHtml: ref('<p></p>'),
      mode: 'default',
      toolbarConfig: {
        toolbarKeys: ['bold', 'clearStyle', 'color', 'bgColor', '|',
          {
            key: 'group-image',
            title: '圖片',
            iconSvg: '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>',
            menuKeys: ['uploadImage', 'insertImage', 'deleteImage', 'editImage', 'viewImageLink']
          },
          {
            key: 'group-link',
            title: '連結',
            menuKeys: ['insertLink', 'editLink', 'unLink', 'viewLink']
          }
        ]
      },
      editorConfig: {
        placeholder: '請輸入内容...',
        MENU_CONF: {
          uploadImage: {
            customUpload: this.customUpload
          }
        }
      }
    }
  },
  watch: {
    articleContent () {
      this.valueHtml = this.articleContent
    },
    valueHtml () {
      this.$emit('editContent', this.valueHtml)
    }
  },
  methods: {
    customUpload (resultFiles, insertFn) { // resultFiles為選取的檔案
      const formData = new FormData()
      formData.append('yourFileName', resultFiles)
      console.log(insertFn)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`

      this.$http.post(api, formData)
        .then((res) => {
          if (res.data.success) {
            insertFn(res.data.imageUrl) // 將圖片插入內容
            this.$pushMessage(res, '上傳')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    handleCreated (editor) {
      this.editorRef = editor
    },
    destroyEditor () {
      const editor = this.editorRef
      if (editor == null) return
      editor.destroy()
    }
  },
  mounted () {
    this.valueHtml = this.articleContent
  },
  beforeUnmount () {
    this.destroyEditor()
  }
}
</script>
