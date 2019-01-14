<template>
  <transition name="modal" mode="out-in">
    <div class="modal-container" ref="modalContainer" v-if="options">
      <div class="modal-mark" v-if="options.hasMark"></div>
      <div class="modal-content" :style="modelStyle">
        <button class="modal-btn" v-if="options.modelType != 1 && options.hasCloseButton" :style="{background: options.activeBgColor, color: options.activeColor}" @click="closeModal">×</button>
        <div class="modal-header" v-if="options.modelType != 1 && options.hasHeader" :style="{background: options.activeBgColor, color: options.activeColor}">
          <span>{{ options.headerText }}</span>
        </div>
        <div class="modal-body">
          <div ref="bodyTemplate" v-html="options.bodyHtml"></div>
        </div>
        <div class="modal-footer" v-if="options.modelType != 1 && options.hasFooterButtons">
          <button @click="commitModal" :style="{background: options.activeBgColor, color: options.activeColor}">{{ options.confirmBtnText }}</button>
          <button @click="closeModal" :style="{background: options.normalBgColor, color: options.normalColor}">{{ options.cancelBtnText }}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Vue from 'vue';
  export default {
    mounted() {
        let windowWidth = document.documentElement.clientWidth;
        let windowHeight = document.documentElement.clientHeight;
        let vm = this;
        setTimeout(function() {
          let positionLeft = (windowWidth - vm.options.modelWidth) / 2;
          let positionTop = (windowHeight - vm.options.modelHeight) / 2;
          vm.confirmBtnStyle = 'background:' + vm.options.confirmButtonBgColor + '; color: ' + vm.options.confirmButtonTextColor;
          vm.cancelBtnStyle = 'background:' + vm.options.cancelButtonBgColor + '; color: ' + vm.options.cancelButtonTextColor;
          if(typeof vm.options.bodyHtml == 'object' && typeof vm.options.bodyHtml.render == 'function') {
              let modalBody = Vue.extend(vm.options.bodyHtml);
              let modalTemplate = new modalBody();
              modalTemplate.$mount(vm.$refs.bodyTemplate);
              modalTemplate.options = vm.options.bodyOptions;
          }
          vm.modelStyle = 'width:' + vm.options.modelWidth + 'px; height:' + vm.options.modelHeight + 'px; top:' + positionTop + 'px; left:' + positionLeft + 'px; background:' + vm.options.modelBgColor;
        },100);
    },
    data() {
        return {
          modelStyle: '',
          confirmBtnStyle: '',
          cancelBtnStyle: ''
        }
    },
    props: ['options'],
    methods: {
      closeModal() {
        this.$refs.modalContainer.remove();
      },
      commitModal() {
        if(this.options.callback && typeof this.options.callback == 'function') {
          this.options.callback();
        }
        this.closeModal();
      }
    }
  }
</script>

<style scoped>
  @keyframes showIn {
    0% {
      transform: scale(1.3);
      opacity: 0
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes showMark {
    0% {
      opacity: 0
    }
    100% {
      opacity: 1;
    }
  }
  .modal-container {

  }
  .modal-leave-active {
    opacity: 0;
  }
  /*.modal-enter, .modal-leave-active {*/
    /*opacity: 0;*/
  /*}*/
  .modal-content {
    position: absolute;
    box-shadow: -2px 2px 10px 1px rgba(6, 6, 6, 0.2);
    -webkit-box-shadow: -2px 2px 10px 1px rgba(6, 6, 6, 0.2);
    -moz-box-shadow: -2px 2px 10px 1px rgba(6, 6, 6, 0.2);
    -o-box-shadow: -2px 2px 10px 1px rgba(6, 6, 6, 0.2);
    transition: all 0.5s;
    animation: showIn .7s;
  }
  .modal-mark {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.4);
    animation: showMark .7s;
  }
  .modal-btn {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    color: #fff;
    font-size: 30px;
    line-height: 1;
    background: #409eff;
    outline: none;
    cursor: pointer;
  }
  .modal-header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    text-align: center;
  }
  .modal-body {
    height: calc(100% - 90px);
    padding: 20px;
    overflow: hidden;
    overflow-y: auto;
  }
  .modal-footer {
    width: 100%;
    padding: 10px 0;
    position: absolute;
    bottom: 0;
    font-size: 16px;
    text-align: center;
  }
  .modal-footer button {
    padding: 5px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 3px;
    background: #ccc;
    outline: none;
    cursor: pointer;
  }
</style>
