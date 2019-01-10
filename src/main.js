import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import BootstrapVue from 'bootstrap-vue';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';
import "./custom.css";
import vbclass from 'vue-body-class';
import quillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {DataTables, DataTablesServer} from 'vue-data-tables';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import {Modal} from 'bootstrap-vue/es/components';
import VueUploadComponent from "vue-upload-component";
import Vuelidate from 'vuelidate';
import VueCharts from 'vue-chartjs';
Vue.component('file-upload', VueUploadComponent);


locale.use(lang);
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(DataTables);
Vue.use(DataTablesServer);
Vue.use(ElementUI);
Vue.use(Vuesax);
Vue.use(vbclass, router);
Vue.use(quillEditor);
Vue.use(Modal);
Vue.use(Vuelidate);
Vue.use(VueCharts);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
