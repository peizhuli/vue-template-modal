/**
 * Created by Y on 2019/1/11.
 */
import Modal from './modal.vue';
let vueTemplateModal = {};
let durationTimeout = null;    // tip定时器
let VNModal = null;
vueTemplateModal.install = function(Vue, options) {
  let defaultOpt= {
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
    bodyHtml: '',              //弹窗主体内容
    bodyOptions: null,
    confirmBtnText: '确定',    //确定按钮描述
    cancelBtnText: '取消',     //取消按钮描述
    activeBgColor: '#10a1e5',
    activeColor: '#fff',
    normalBgColor: '#999',
    normalColor: '#fff',
    // confirmButtonBgColor: '#10a1e5',   //确定按钮背景色
    // confirmButtonTextColor: '#fff',    //确定按钮文字颜色
    // cancelButtonBgColor: '#999',       //取消按钮背景色
    // cancelButtonTextColor: '#fff',     //取消按钮文字颜色
    callback: null,                   //确定按钮回调函数
    duration: 3000                     //弹窗显示时间
  };
  Vue.prototype.$templateModal = function (options) {
    if(durationTimeout) {
      clearTimeout(durationTimeout);
      durationTimeout = null;
    }
    let opts = JSON.parse(JSON.stringify(defaultOpt));
    if(typeof options == 'object') {
      for(let property in options) {
        opts[property] = options[property];
      }
    }

    let modelTemplate = Vue.extend(Modal);
    VNModal = new modelTemplate({
      el: document.createElement('div')
    });
    document.body.appendChild(VNModal.$el);
    VNModal.options = opts;
    if(opts.modelType == 1) {
      durationTimeout = setTimeout(function() {
        // 移除tip
        VNModal.$el.remove();
      },opts.duration)
    }
  }
};

export default  vueTemplateModal;
