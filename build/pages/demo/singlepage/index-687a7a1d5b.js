!function(){var t={};t.install=function(t){function e(t,e){for(var i=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;t;){if(i.call(t,e))return t;t=t.parentElement}return null}function i(t,e){var i=t.className.split(" ").filter(function(t){return 0!==t.lastIndexOf(e,0)});t.className=i.join(" ").trim()}function n(e,i,n,a){var o=e._vueFormCtrl,r="undefined"!=typeof a[n]?a[n]+"":t.util.getBindAttr(e.el,n);r&&i.$watch(r,function(a,s){o[n]=a,"type"===n?(delete o.validators[s],o.validators[a]=h[a]):"custom-validator"===n?o.validators[n]=i.$eval(r):(o.validators[n]=h[n],(a===!1||"undefined"==typeof a)&&(o.validators[n]=!1)),e._vueForm?o.validate():t.nextTick(function(){t.nextTick(function(){o.validate()})})},{immediate:!0});var s=e.el.getAttribute(n);null!==s&&(o[n]=s||!0,"type"===n?o.validators[s]=h[s]:"custom-validator"===n?o.validators[n]=i[s]:o.validators[n]=h[n])}var a=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,o=/^(http\:\/\/|https\:\/\/)(.{4,})$/,r="vf-dirty",s="vf-pristine",u="vf-valid",l="vf-invalid",c="vf-submitted",d="vf-touched",f="vf-untouched",m=["type","required","pattern","multiple","minlength","maxlength","min","max","custom-validator"],v=["minlength","maxlength","min","max","pattern"],h={required:function(e){return t.util.isArray(e)?!!e.length:!!e},email:function(t,e){return a.test(t)},number:function(t){return!isNaN(t)},url:function(t){return o.test(t)},minlength:function(t,e){return t.length>=e},maxlength:function(t,e){return e>=t.length},pattern:function(t,e){var i=new RegExp("^"+e+"$");return i.test(t)},min:function(t,e){return 1*t>=1*e},max:function(t,e){return 1*e>=1*t}};t.directive("form",{id:"form",priority:10001,bind:function(){var e=this.el,n=e.getAttribute("name"),a=e.getAttribute("hook"),o=this.vm,m={};e.noValidate=!0;var v=this._state={$name:n,$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$submitted:!1,$touched:!1,$untouched:!0,$error:{}};o.$set(n,v),t.util.addClass(e,s),t.util.addClass(e,u),t.util.addClass(e,f);var h=this.el._vueForm={name:n,state:v,controls:m,addControl:function(t){m[t.name]=t},removeControl:function(t){this.removeError(t.name),delete m[t.name],this.checkValidity()},setData:function(t,e){o.$set(n+"."+t,e)},removeError:function(t){v.$error[t]=!1,delete v.$error[t]},checkValidity:function(){var t=!0;Object.keys(m).forEach(function(e){m[e].state.$invalid&&(t=!1)}),this.setValidity(t)},setValidity:function(n){v.$valid=n,v.$invalid=!n,n?(t.util.addClass(e,u),t.util.removeClass(e,l),i(e,l+"-")):(t.util.removeClass(e,u),t.util.addClass(e,l))},setDirty:function(){v.$dirty=!0,v.$pristine=!1,t.util.addClass(e,r),t.util.removeClass(e,s)},setPristine:function(){v.$dirty=!1,v.$pristine=!0,Object.keys(m).forEach(function(t){m[t].setPristine()}),h.setSubmitted(!1),t.util.removeClass(e,r),t.util.addClass(e,s)},setSubmitted:function(i){v.$submitted=i,i?t.util.addClass(e,c):t.util.removeClass(e,c)},setTouched:function(){v.$touched=!0,v.$untouched=!1,t.util.addClass(e,d),t.util.removeClass(e,f)},setUntouched:function(){v.$touched=!1,v.$untouched=!0,t.util.removeClass(e,d),t.util.addClass(e,f),Object.keys(m).forEach(function(t){m[t].setUntouched()})}};a&&o[a](h),this._submitEvent=function(){h.setSubmitted(!0)},t.util.on(e,"submit",this._submitEvent)},update:function(){},unbind:function(){t.util.off(this.el,"submit",this._submitEvent),delete this.el._vueForm}}),t.directive("formCtrl",{id:"formCtrl",priority:1e4,deep:!0,bind:function(){function a(e){if(e){I._vueForm=e,e.addControl(F),e.setData(h,_),t.util.addClass(C,s),t.util.addClass(C,u),t.util.addClass(C,f),t.util.on(C,"blur",F.setTouched);var i=!0;y&&o.$watch(y,function(t,e){i||F.setDirty(),i=!1,I._value=t,F.validate(t)},{immediate:!0})}}var o,c,h=this.el.getAttribute("name"),p=this.el.getAttribute(":name")||this.el.getAttribute("v-bind:name"),b=this.el.getAttribute(":")||this.el.getAttribute("v-bind"),y=this.el.getAttribute("v-model"),g=this.el.getAttribute("hook"),$=this.vm,C=this.el,I=this;if(o=this._scope?this._scope:this.vm,p&&o.$watch(p,function(t){h=t},{immediate:!0}),null!==b&&(c=o.$eval(b),c.name&&(h=c.name)),!h)return void console.warn("Name attribute must be populated");var _=I._state={$name:h,$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$touched:!1,$untouched:!0,$error:{}},F=C._vueFormCtrl=I._vueFormCtrl={el:C,name:h,state:_,setVadility:function(e,n){var a=I._vueForm;if(a){if("boolean"==typeof e)return _.$valid=n,_.$invalid=!n,n?(a.removeError(h),t.util.addClass(C,u),t.util.removeClass(C,l)):(t.util.removeClass(C,u),t.util.addClass(C,l)),void a.checkValidity();e=t.util.camelize(e),n?(a.setData(h+".$error."+e,!1),delete _.$error[e],i(C,l+"-")):(a.setData(h+".$error."+e,!0),a.setData("$error."+h,_),t.util.addClass(C,l+"-"+e))}},setDirty:function(){_.$dirty=!0,_.$pristine=!1,I._vueForm.setDirty(),t.util.addClass(C,r),t.util.removeClass(C,s)},setPristine:function(){_.$dirty=!1,_.$pristine=!0,t.util.removeClass(C,r),t.util.addClass(C,s)},setTouched:function(e){_.$touched=!0,_.$untouched=!1,I._vueForm.setTouched(),t.util.addClass(C,d),t.util.removeClass(C,f)},setUntouched:function(e){_.$touched=!1,_.$untouched=!0,t.util.removeClass(C,d),t.util.addClass(C,f)},validators:{},error:{},validate:function(){var t=!0,e=this,i=I._value;return Object.keys(this.validators).forEach(function(n){var a=[i];if(e.validators[n]===!1)return void e.setVadility(n,!0);if(e.validators[n]){if("required"!==n&&!i&&"number"!=typeof i)return void e.setVadility(n,!0);"email"===n?a.push(e.multiple):-1!==v.indexOf(n)&&a.push(e[n]),e.validators[n].apply(this,a)?e.setVadility(n,!0):(t=!1,e.setVadility(n,!1))}}),e.setVadility(!0,t),t}};m.forEach(function(t){n(I,o,t,c||{})});var V;C.form?a(C.form._vueForm):(V=e(C,"form[name]"),V&&V._vueForm?a(V._vueForm):setTimeout(function(){V=C.form||e(C,"form[name]"),a(V._vueForm)},0)),g&&$[g](F)},update:function(t,e){"undefined"!=typeof t&&(this._notfirst&&this._vueFormCtrl.setDirty(),this._notfirst=!0,this._value=t,this._vueFormCtrl.validate(t))},unbind:function(){this._vueForm.removeControl(this._vueFormCtrl),t.util.off(this.el,"blur",this._vueFormCtrl.setTouched),delete this.el._vueFormCtrl}})},"object"==typeof exports?module.exports=t:"function"==typeof define&&define.amd?define([],function(){return t}):window.Vue&&(window.vueForm=t,Vue.use(t))}(),!function(){var t=/meituan.com/.test(location.href)?"http://jiudian.meituan.com":"http://hotel.hoteldev.sankuai.com",e={province:"/api/v1/fe/cityselect/provinces",subarea:"/api/v1/fe/cityselect/subarea",bizself:"/api/v1/mta/sc/bizself",upload:"/api/v1/mta/sc/bizself/certificate/upload"},i=new Vue({el:"#container",data:{config:{disabled:!1,submitForm:!1,submit:!1,provinceList:[],cityList:[],locationList:[]},basicInfo:{poiName:"",provinceId:-1,provinceName:"",cityId:-1,cityName:"",locationId:-1,locationName:"",address:"",phone:"",roomCount:"",introduction:""},certificateInfo:[],contactInfo:{name:"",phone:"",email:""}},methods:{init:function(){this.getProvince()},getProvince:function(){var i=this,n=t+e.province;Vue.http.get(n,null,null).then(function(t){var e=t.json();0===e.status?i.config.provinceList=e.data:alert("接口请求失败")},function(t){alert(t.message||"服务器错误")})},getSubarea:function(i,n){var a=this,o=t+e.subarea+"/"+i;Vue.http.get(o,null,null).then(function(t){var e=t.json();0===e.status?"city"===n?(a.config.cityList=e.data,a.config.locationList=[],a.basicInfo.cityId=-1,a.basicInfo.locationId=-1):"location"===n&&(a.config.locationList=e.data,a.basicInfo.locationId=-1):alert("接口请求失败")},function(t){alert(t.message||"服务器错误")})},changeRegion:function(t){var e=this;"province"===t?e.getSubarea(e.basicInfo.provinceId,"city"):"city"===t&&e.getSubarea(e.basicInfo.cityId,"location")},submitForm:function(){if(this.config.submit=!0,this.myform.$valid){var i=JSON.parse(JSON.stringify(this.basicInfo)),n=JSON.parse(JSON.stringify(this.contactInfo)),a=JSON.parse(JSON.stringify(this.certificateInfo));if(Number(i.provinceId)===-1)return void alert("请选择省份");if(Number(i.cityId)===-1)return void alert("请选择城市");if(Number(i.locationId)===-1)return void alert("请选择区域");var o={basicInfo:i,contactInfo:n,certificateInfo:a},r=t+e.bizself,s=this;Vue.http.post(r,o,null).then(function(t){var e=t.json();if(0===e.status){window.scroll(0,0);var i=window.screen.height;document.getElementById("container").style.minHeight=i+"px",s.config.submitForm=!0}else alert("接口请求失败")},function(t){alert(t.message||"服务器错误")})}},onFileChange:function(i){var n=i.target.files||i.dataTransfer.files;if(n.length){var a=n[0],o=t+e.upload,r=new FormData,s={cache:!1,processData:!1,contentType:!1},u=this;r.append("file",a),a.type.match("image.*")&&(u.config.disabled=!0,Vue.http.post(o,r,s).then(function(t){var e=t.json();if(0===e.status){var i=new Image;i.src=e.data.fileUrl,i.onload=function(){u.certificateInfo.push(e.data),u.config.disabled=!1}}else u.config.disabled=!1,alert("上传失败")},function(t){u.config.disabled=!1,alert(t.message||"服务器错误")}),document.getElementById("hue-file").value="")}},selectFile:function(){this.config.disabled||document.getElementById("hue-file").click()},removeImage:function(t){this.certificateInfo.splice(t,1)}}});i.init()}();
