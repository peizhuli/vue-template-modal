1.main.js��������
import vueModal from 'vue-template-modal';
�ṩ������$templateModal
Vue.use(vueModal);
2.ʹ�ã�this.$templateModal(modalOptions );
3.modalOptions ��������
modalOptions = {
    //default setting options
    hasMark: true,              //�Ƿ������
    modelWidth: 600,            //�������
    modelHeight: 400,           //�����߶�
    modelBgColor: '#fff',       //��������ɫ
    modelType: 2,               //�������ͣ�{ 1: ��ͨtip������duration����ʧ��2���轻������ }
    hasCloseButton: true,      //�Ƿ��йرհ�ť
    hasFooterButtons: false,   //�Ƿ���ʾ�ײ���ť��
    hasHeader: false,          //�Ƿ���ʾ��������
    headerText: '����',            //������������
    bodyHtml: '',              //������������,��Ϊ�ַ���/html��ǩ/vue���
    bodyOptions: null,          // body����Ϊ���ʱ����Ҫ���ݵ�props����
    confirmBtnText: 'ȷ��',    //ȷ����ť����
    cancelBtnText: 'ȡ��',     //ȡ����ť����
    activeBgColor: '#10a1e5',    //���ⱳ��ɫ��ȷ����ť����ɫ
    activeColor: '#fff',               //����������ɫ��ȷ����ť������ɫ
    normalBgColor: '#999',       // ȡ����ť����ɫ
    normalColor: '#fff',             //ȡ����ť������ɫ
    callback: null,                   //ȷ����ť�ص�����
    duration: 3000                     //������ʾʱ��
  };