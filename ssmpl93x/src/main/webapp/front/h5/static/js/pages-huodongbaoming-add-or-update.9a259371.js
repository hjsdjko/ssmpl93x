(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-huodongbaoming-add-or-update"],{"198f":function(r,e,o){var i=o("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-c0900872]{padding:%?20?%}.content[data-v-c0900872]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220210/87bd12d356ac4a8e90125da208a7597e.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-c0900872]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-c0900872]{width:%?180?%}.avator[data-v-c0900872]{width:%?150?%;height:%?60?%}.right-input[data-v-c0900872]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-c0900872]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-c0900872]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-c0900872]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-c0900872]{border:0}.cu-form-group uni-input[data-v-c0900872]{padding:0 %?30?%}.uni-input[data-v-c0900872]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-c0900872]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-c0900872]::after{line-height:%?80?%}.select .uni-input[data-v-c0900872]{line-height:%?80?%}.input .right-input[data-v-c0900872]{line-height:%?88?%}',""]),r.exports=e},5956:function(r,e,o){"use strict";o.r(e);var i=o("b800"),t=o("7f89");for(var a in t)"default"!==a&&function(r){o.d(e,r,(function(){return t[r]}))}(a);o("7993");var n,d=o("f0c5"),s=Object(d["a"])(t["default"],i["b"],i["c"],!1,null,"c0900872",null,!1,i["a"],n);e["default"]=s.exports},7993:function(r,e,o){"use strict";var i=o("96b4"),t=o.n(i);t.a},"7f89":function(r,e,o){"use strict";o.r(e);var i=o("9df2"),t=o.n(i);for(var a in i)"default"!==a&&function(r){o.d(e,r,(function(){return i[r]}))}(a);e["default"]=t.a},"96b4":function(r,e,o){var i=o("198f");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var t=o("4f06").default;t("2889944a",i,!0,{sourceMap:!1,shadowMode:!1})},"9df2":function(r,e,o){"use strict";var i=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("a481"),o("c5f6"),o("f559"),o("ac6a"),o("96cf");var t=i(o("3b8d")),a=i(o("e2b1")),n={data:function(){return{cross:"",ruleForm:{huodongmingcheng:"",huodongleixing:"",huodongdidian:"",baomingshijian:"",baomingshuoming:"",huodongtupian:"",shetuanbianhao:"",zhanghao:"",xingming:"",sfsh:"",shhf:"",userid:""},user:{},ro:{huodongmingcheng:!1,huodongleixing:!1,huodongdidian:!1,baomingshijian:!1,baomingshuoming:!1,huodongtupian:!1,shetuanbianhao:!1,zhanghao:!1,xingming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:a.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,t.default)(regeneratorRuntime.mark((function r(e){var o,i,t,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this.ruleForm.baomingshijian=this.$utils.getCurDateTime(),o=uni.getStorageSync("nowTable"),r.next=4,this.$api.session(o);case 4:if(i=r.sent,this.user=i.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ro.zhanghao=!0,this.ruleForm.xingming=this.user.xingming,this.ro.xingming=!0,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=18;break}return this.ruleForm.id=e.id,r.next=16,this.$api.info("huodongbaoming",this.ruleForm.id);case 16:i=r.sent,this.ruleForm=i.data;case 18:if(this.cross=e.cross,!e.cross){r.next=66;break}t=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(t);case 22:if((r.t1=r.t0()).done){r.next=66;break}if(a=r.t1.value,"huodongmingcheng"!=a){r.next=28;break}return this.ruleForm.huodongmingcheng=t[a],this.ro.huodongmingcheng=!0,r.abrupt("continue",22);case 28:if("huodongleixing"!=a){r.next=32;break}return this.ruleForm.huodongleixing=t[a],this.ro.huodongleixing=!0,r.abrupt("continue",22);case 32:if("huodongdidian"!=a){r.next=36;break}return this.ruleForm.huodongdidian=t[a],this.ro.huodongdidian=!0,r.abrupt("continue",22);case 36:if("baomingshijian"!=a){r.next=40;break}return this.ruleForm.baomingshijian=t[a],this.ro.baomingshijian=!0,r.abrupt("continue",22);case 40:if("baomingshuoming"!=a){r.next=44;break}return this.ruleForm.baomingshuoming=t[a],this.ro.baomingshuoming=!0,r.abrupt("continue",22);case 44:if("huodongtupian"!=a){r.next=48;break}return this.ruleForm.huodongtupian=t[a],this.ro.huodongtupian=!0,r.abrupt("continue",22);case 48:if("shetuanbianhao"!=a){r.next=52;break}return this.ruleForm.shetuanbianhao=t[a],this.ro.shetuanbianhao=!0,r.abrupt("continue",22);case 52:if("zhanghao"!=a){r.next=56;break}return this.ruleForm.zhanghao=t[a],this.ro.zhanghao=!0,r.abrupt("continue",22);case 56:if("xingming"!=a){r.next=60;break}return this.ruleForm.xingming=t[a],this.ro.xingming=!0,r.abrupt("continue",22);case 60:if("userid"!=a){r.next=64;break}return this.ruleForm.userid=t[a],this.ro.userid=!0,r.abrupt("continue",22);case 64:r.next=22;break;case 66:this.styleChange();case 67:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},baomingshijianConfirm:function(r){console.log(r),this.ruleForm.baomingshijian=r.result,this.$forceUpdate()},huodongtupianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.huodongtupian="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,t.default)(regeneratorRuntime.mark((function r(){var e,o,i,t,a,n,d,s,u,g;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.cross){r.next=16;break}if(t=uni.getStorageSync("statusColumnName"),a=uni.getStorageSync("statusColumnValue"),""==t){r.next=16;break}if(n=uni.getStorageSync("crossObj"),t.startsWith("[")){r.next=12;break}for(d in n)d==t&&(n[d]=a);return s=uni.getStorageSync("crossTable"),r.next=10,this.$api.update("".concat(s),n);case 10:r.next=16;break;case 12:e=Number(uni.getStorageSync("userid")),o=n["id"],i=uni.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 16:if(!o||!e){r.next=38;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=o,u={page:1,limit:10,crossuserid:e,crossrefid:o},r.next=22,this.$api.list("huodongbaoming",u);case 22:if(g=r.sent,!(g.data.total>=i)){r.next=28;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 28:if(!this.ruleForm.id){r.next=33;break}return r.next=31,this.$api.update("huodongbaoming",this.ruleForm);case 31:r.next=35;break;case 33:return r.next=35,this.$api.add("huodongbaoming",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:r.next=46;break;case 38:if(!this.ruleForm.id){r.next=43;break}return r.next=41,this.$api.update("huodongbaoming",this.ruleForm);case 41:r.next=45;break;case 43:return r.next=45,this.$api.add("huodongbaoming",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,o=e.getFullYear(),i=e.getMonth()+1,t=e.getDate();return"start"===r?o-=60:"end"===r&&(o+=2),i=i>9?i:"0"+i,t=t>9?t:"0"+t,"".concat(o,"-").concat(i,"-").concat(t)},toggleTab:function(r){this.$refs[r].show()}}};e.default=n},b800:function(r,e,o){"use strict";var i={"w-picker":o("e2b1").default},t=function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("v-uni-view",{staticClass:"content"},[o("v-uni-form",{staticClass:"app-update-pv"},[o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("活动名称")]),o("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.huodongmingcheng,placeholder:"活动名称"},model:{value:r.ruleForm.huodongmingcheng,callback:function(e){r.$set(r.ruleForm,"huodongmingcheng",e)},expression:"ruleForm.huodongmingcheng"}})],1),o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("活动类型")]),o("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.huodongleixing,placeholder:"活动类型"},model:{value:r.ruleForm.huodongleixing,callback:function(e){r.$set(r.ruleForm,"huodongleixing",e)},expression:"ruleForm.huodongleixing"}})],1),o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("活动地点")]),o("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.huodongdidian,placeholder:"活动地点"},model:{value:r.ruleForm.huodongdidian,callback:function(e){r.$set(r.ruleForm,"huodongdidian",e)},expression:"ruleForm.huodongdidian"}})],1),o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("报名时间")]),o("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"报名时间"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.toggleTab("baomingshijian")}},model:{value:r.ruleForm.baomingshijian,callback:function(e){r.$set(r.ruleForm,"baomingshijian",e)},expression:"ruleForm.baomingshijian"}})],1),o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.huodongtupianTap.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("活动图片")]),o("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.huodongtupian?o("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.huodongtupian,mode:"aspectFill"}}):o("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("社团编号")]),o("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.shetuanbianhao,placeholder:"社团编号"},model:{value:r.ruleForm.shetuanbianhao,callback:function(e){r.$set(r.ruleForm,"shetuanbianhao",e)},expression:"ruleForm.shetuanbianhao"}})],1),o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("账号")]),o("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.zhanghao,placeholder:"账号"},model:{value:r.ruleForm.zhanghao,callback:function(e){r.$set(r.ruleForm,"zhanghao",e)},expression:"ruleForm.zhanghao"}})],1),o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("姓名")]),o("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.xingming,placeholder:"姓名"},model:{value:r.ruleForm.xingming,callback:function(e){r.$set(r.ruleForm,"xingming",e)},expression:"ruleForm.xingming"}})],1),o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("报名说明")]),o("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(161, 161, 161, 1)",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"报名说明"},model:{value:r.ruleForm.baomingshuoming,callback:function(e){r.$set(r.ruleForm,"baomingshuoming",e)},expression:"ruleForm.baomingshuoming"}})],1),o("v-uni-view",{staticClass:"btn"},[o("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(130, 163, 157, 1)",borderColor:"rgba(130, 163, 157, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1),o("w-picker",{ref:"baomingshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=r.$handleEvent(e),r.baomingshijianConfirm.apply(void 0,arguments)}}})],1)},a=[];o.d(e,"b",(function(){return t})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return i}))}}]);