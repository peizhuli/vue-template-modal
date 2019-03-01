## 1.main.js中引入插件 
'import vueModal from 'vue-template-modal';' 
### 提供方法：$templateModal
'Vue.use(vueModal);'
## 2.使用：this.$templateModal(modalOptions );
## 3.modalOptions 参数配置
modalOptions = {

    //default setting options
    hasMark: true,              //是否带遮罩
    modelWidth: 600,            //弹窗宽度
    modelHeight: 400,           //弹窗高度
    modelBgColor: '#fff',       //弹窗背景色
    modelType: 2,               //弹窗类型：{ 1: 普通tip弹窗，duration后消失，2：需交互弹窗 }
    hasCloseButton: true,      //是否有关闭按钮
    hasFooterButtons: false,   //是否显示底部按钮组
    hasHeader: false,          //是否显示弹窗标题
    headerText: '标题',            //弹窗标题描述
    bodyHtml: '',              //弹窗主体内容,可为字符串/html标签/vue组件
    bodyOptions: null,          // body内容为组件时，需要传递的props参数
    confirmBtnText: '确定',    //确定按钮描述
    cancelBtnText: '取消',     //取消按钮描述
    activeBgColor: '#10a1e5',    //标题背景色，确定按钮背景色
    activeColor: '#fff',               //标题字体颜色，确定按钮字体颜色
    normalBgColor: '#999',       // 取消按钮背景色
    normalColor: '#fff',             //取消按钮字体颜色
    callback: null,                   //确定按钮回调函数
    duration: 3000                     //弹窗显示时间
    
  };
