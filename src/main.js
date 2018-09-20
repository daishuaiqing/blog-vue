import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


Vue.use(VueQuillEditor)

Vue.config.productionTip = false

Vue.filter('formatUnix', function (val, pattern) {
  var padDate=function(va){
    va=va<10?'0'+va:va;
    return va
  }
  var formatToDate=function(val){
    var value=new Date(val*1000);
    var year=value.getFullYear();
    var month=padDate(value.getMonth()+1);
    var day=padDate(value.getDate());
    return year+'-'+month+'-'+day;
  }
  var formatToDateTime=function(val){
    var value=new Date(val*1000);
    var year=value.getFullYear();
    var month=padDate(value.getMonth()+1);
    var day=padDate(value.getDate());
    var hour=padDate(value.getHours());
    var minutes=padDate(value.getMinutes());
    var seconds=padDate(value.getSeconds());
    return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds;
  }
  switch(pattern){
    case "date": return formatToDate(val)
    case "dateTime": return formatToDateTime(val)
    default: return formatToDateTime(val)
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
