!function(){function e(e){this.s=e,"object"==typeof e?e:this.s=document.querySelector(e),"object"==typeof e?e:this.sAll=document.querySelectorAll(e)}var t=function(t){return new e(t)};t.fn=e.prototype={hide:function(){return elem=this.s,this.s.style.display="none",this},show:function(){return elem=this.s,this.s.style.display="block",this},ajaxCall:function(e,t,s,n,i){elem=this.s;var r=function(){switch(o.readyState){case 0:case 1:i(o,o.responseText);case 2:case 3:break;case 4:i(o,o.responseText);break;default:alert("error")}},o=new XMLHttpRequest;return o.onreadystatechange=r,"POST"==e?(o.open(e,t,n),o.setRequestHeader("Content-type","application/x-www-form-urlencoded")):o.open(e,t+"?"+s,n),o.send(s),this},ajaxStart:function(e){return this.s.readyState<4?(e(),this):!1},ajaxStop:function(e){return 4!=this.s.readyState&&200!=this.s.status?!1:(e(),this)},each:function(e){elem=this.s;var t;return[].slice.call(this.sAll).forEach(function(s,n){t=e(s)}),t},append:function(e,t,s,n){return elem=this.s,n="undefined"!=typeof n?n:this.s,t="undefined"!=typeof t?t:"span",s="undefined"!=typeof s?s:"",null==n&&console.log("No Label Found For A Form Input"),outer=document.createElement(t),outer.id=s,outer.classList.add(s),outer.innerHTML=e,n.appendChild(outer),this},event:function(e,t){var s=this.s;return s.addEventListener?s.addEventListener(e,t,!1):s.attachEvent&&s.attachEvent("on"+e,t),this},parent:function(){return elem=this.s,this.s.parentNode},child:function(){return elem=this.s,elem.childNodes[0]},attr:function(e,t){return elem=this.s,"undefined"==t||null==t||""==t?this.s.getAttribute(e):(this.s.setAttribute(e,t),this)},css:function(e){return elem=this.s,this.s.style.cssText=e,this},remove:function(){elem=this.s,this.s?this.s.parentNode.removeChild(this.s):console.log("cannot perform remove action for this element, already performed")},delay:function(e,t){return elem=this.s,setTimeout(e,t),this},removeAttr:function(e){return elem=this.s,this.s.removeAttribute(e),this},addClass:function(e){return elem=this.s,this.s.classList.contains(e)?!1:(null==this.s.classList||""==this.s.classList?this.s.className+=e:this.s.className+=" "+e,this)},hasClass:function(e){return elem=this.s,new RegExp(" "+e+" ").test(" "+this.s.className+" ")},removeClass:function(e){return elem=this.s,elem.className=elem.className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)")," ").replace(/^\s+|\s+$/g,""),this},toggleClass:function(e){return elem=this.s,this.hasClass(e)?this.removeClass(e):this.addClass(e),this},closestClass:function(e,s){for(var n=this.s;n.className!=e;)if(n=t(n).parent(),!n)return null;return n},html:function(e){return elem=this.s,e?(this.s.innerHTML=e,this):this.s.innerHTML},text:function(e){if(elem=this.s,e)this.s.innerText=e;else var t=this.s.innerText;return"undefined"!=typeof t?t:this.s.textContent,t},animate:function(e,t,s,n,i){if(elem=this.s,elem){var r=(new Date).getTime(),o=setInterval(function(){var a=Math.min(1,((new Date).getTime()-r)/i);elem.style[e]=s+a*(n-s)+t,1==a&&clearInterval(o)},25);return elem.style[e]=s+t,this}},genUniq:function(baseId='Quix_'){return baseId+'_'+Math.random().toString(16).slice(2);},serializeData:function(){var e=this.s;e="undefined"!=typeof this.s?e:this;var t,s=[];if("object"==typeof e&&("FORM"==e.nodeName||"form"==e.nodeName)){var n=e.elements.length;for(i=0;i<n;i++)if(t=e.elements[i],t.name&&!t.disabled&&"file"!=t.type&&"reset"!=t.type&&"submit"!=t.type&&"button"!=t.type)if("select-multiple"==t.type)for(j=e.elements[i].options.length-1;j>=0;j--)t.options[j].selected&&(s[s.length]=encodeURIComponent(t.name)+"="+encodeURIComponent(t.options[j].value));else("checkbox"!=t.type&&"radio"!=t.type||t.checked)&&(s[s.length]=encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}return s.join("&").replace(/%20/g,"+")}},window.v||(window.v=t)}();!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.lifecycle=t()}(this,function(){"use strict";var e=void 0;try{new EventTarget,e=!1}catch(t){e=!1}var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},s=function(){function e(){n(this,e),this._registry={}}return i(e,[{key:"addEventListener",value:function(e,t){this._getRegistry(e).push(t)}},{key:"removeEventListener",value:function(e,t){var n=this._getRegistry(e),i=n.indexOf(t);i>-1&&n.splice(i,1)}},{key:"dispatchEvent",value:function(e){return e.target=this,Object.freeze(e),this._getRegistry(e.type).forEach(function(t){return t(e)}),!0}},{key:"_getRegistry",value:function(e){return this._registry[e]=this._registry[e]||[]}}]),e}(),o=e?EventTarget:s,u=e?Event:function e(t){n(this,e),this.type=t},f=function(e){function t(e,i){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.newState=i.newState,r.oldState=i.oldState,r.originalEvent=i.originalEvent,r}return r(t,u),t}(),c="active",h="passive",d="hidden",l="frozen",p="terminated",v="object"===("undefined"==typeof safari?"undefined":t(safari))&&safari.pushNotification,y=["focus","blur","visibilitychange","freeze","resume","pageshow","onpageshow"in self?"pagehide":"unload"],g=function(e){return e.preventDefault(),e.returnValue="Are you sure?"},_=[[c,h,d,p],[c,h,d,l],[d,h,c],[l,d],[l,c],[l,h]].map(function(e){return e.reduce(function(e,t,n){return e[t]=n,e},{})}),b=function(){return document.visibilityState===d?d:document.hasFocus()?c:h};return new(function(e){function t(){n(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),i=b();return e._state=i,e._unsavedChanges=[],e._handleEvents=e._handleEvents.bind(e),y.forEach(function(t){return addEventListener(t,e._handleEvents,!0)}),v&&addEventListener("beforeunload",function(t){e._safariBeforeUnloadTimeout=setTimeout(function(){t.defaultPrevented||t.returnValue.length>0||e._dispatchChangesIfNeeded(t,d)},0)}),e}return r(t,o),i(t,[{key:"addUnsavedChanges",value:function(e){!this._unsavedChanges.indexOf(e)>-1&&(0===this._unsavedChanges.length&&addEventListener("beforeunload",g),this._unsavedChanges.push(e))}},{key:"removeUnsavedChanges",value:function(e){var t=this._unsavedChanges.indexOf(e);t>-1&&(this._unsavedChanges.splice(t,1),0===this._unsavedChanges.length&&removeEventListener("beforeunload",g))}},{key:"_dispatchChangesIfNeeded",value:function(e,t){if(t!==this._state)for(var n=function(e,t){for(var n,i=0;n=_[i];++i){var r=n[e],a=n[t];if(r>=0&&a>=0&&a>r)return Object.keys(n).slice(r,a+1)}return[]}(this._state,t),i=0;i<n.length-1;++i){var r=n[i],a=n[i+1];this._state=a,this.dispatchEvent(new f("statechange",{oldState:r,newState:a,originalEvent:e}))}}},{key:"_handleEvents",value:function(e){switch(v&&clearTimeout(this._safariBeforeUnloadTimeout),e.type){case"pageshow":case"resume":this._dispatchChangesIfNeeded(e,b());break;case"focus":this._dispatchChangesIfNeeded(e,c);break;case"blur":this._state===c&&this._dispatchChangesIfNeeded(e,b());break;case"pagehide":case"unload":this._dispatchChangesIfNeeded(e,e.persisted?l:p);break;case"visibilitychange":this._state!==l&&this._state!==p&&this._dispatchChangesIfNeeded(e,b());break;case"freeze":this._dispatchChangesIfNeeded(e,l)}}},{key:"state",get:function(){return this._state}},{key:"pageWasDiscarded",get:function(){return document.wasDiscarded||!1}}]),t}())});var QuixData=[];var MsgData=[];var FirstMsg=[];var genUn='';var chatter_id='quix'+Quix_license_key;var Quix_agent_icon='';var Quix_chat_title='';var Quix_chat_button_type=1;var senderMsg='Hello How May I Help You!'
var Quix_chat_subtitle='';var Quix_chat_bubble_color='';var Quix_chat_bubble_text_color='';var Quix_chat_bubble_link_color='';if(typeof(Storage)!=="undefined"){var localStorage=window.localStorage;}
v('body').append('','root','Quixchat_Body_Frame');var Quix_api_url='https://api-beta.quixchat.com/View/';var SendBackUrl='';var singleBtnIcn='flaticon-comment';v('#Quixchat_Body_Frame').ajaxCall('POST',Quix_api_url,'access_token='+Quix_base_id+'&hash='+Quix_license_key,true,function(res){if(res.status==200&&res.readyState==4){var data=JSON.parse(res.response);genUn=data.chat_data_id;Quix_agent_icon=data.chat_agent_icon;Quix_chat_title=data.chat_title;Quix_chat_subtitle=data.chat_subtitle;var bubble_color=data.bubble_color;var bubble_text_color=data.bubble_text_color;Quix_chat_button_type=data.button_type;Quix_chat_bubble_link_color=data.bubble_link_color;SendBackUrl=data.send_back_url;var chat_tools=data.chat_tools;var btnStyle='';if(chat_tools.length==1){singleBtnIcn=chat_tools[0].icon;if(chat_tools[0].id=='whatsapp'){bubble_color='#08c65b';bubble_text_color='#ffffff';}else if(chat_tools[0].id=='messenger'){bubble_color='#0084ff';bubble_text_color='#ffffff';}else if(chat_tools[0].id=='telegram'){bubble_color='#028fd1';bubble_text_color='#ffffff';}else if(chat_tools[0].id=='viber'){bubble_color='#7d3daf';bubble_text_color='#ffffff';}else if(chat_tools[0].id=='line'){bubble_color='#3ace01';bubble_text_color='#ffffff';}else if(chat_tools[0].id=='snapchat'){bubble_color='#f09819';bubble_text_color='#ffffff';}else if(chat_tools[0].id=='wechat'){bubble_color='#2dc100';bubble_text_color='#ffffff';}else if(chat_tools[0].id=='vk'){bubble_color='#0767cb';bubble_text_color='#ffffff';}else if(chat_tools[0].id=='skype'){bubble_color='#00aaf2';bubble_text_color='#ffffff';}else if(chat_tools[0].id=='mail'){}else if(chat_tools[0].id=='call'){}else if(chat_tools[0].id=='sms'){}
if(Quix_chat_button_type==1){btnStyle='#'+genUn+'_chat_sm_container>li.Quix_only_child a:after {\
                    content: "'+chat_tools[0].caption+'";\
                    font-size: 18px;\
                    position: relative;\
                    top: -3px;\
                    left: 6px;\
                }\
                .'+genUn+'_ChatBtn{\
                    font-size: 32px !important;\
                    border-radius:50%;\
                    height:68px;\
                }\
                .'+genUn+'_ChatBtn_Close{\
                    font-size: 24px !important;\
                    border-bottom-left-radius: 0;\
                    box-shadow: rgb(0 0 0 / 10%) 0px 12px 24px 0px;\
                } .'+genUn+'_ChatBtn:after, .'+genUn+'_ChatBtn:before{display:none;}\
                .'+genUn+'_chat_social_mesengers_h3{display:none !important;}\
                ul.'+genUn+'_chat_sm_container{background: #f9f9f9 !important;}';}else{btnStyle='';}}
Quix_chat_bubble_color=bubble_color;Quix_chat_bubble_text_color=bubble_text_color;if(Quix_chat_button_type==1){var StylHtml='<style>.'+genUn+'_Sender_Msg a{color:'+Quix_chat_bubble_link_color+'  !important;}\
         ul.'+genUn+'_chat_sm_container>li>a{background:#607d8b !important; color:'+Quix_chat_bubble_text_color+'  !important;}\
         ul.'+genUn+'_chat_sm_container>li>a.Quix_whatsapp{background:#08c65b !important;}\
         ul.'+genUn+'_chat_sm_container>li>a.Quix_messenger{background:#0084ff !important;}\
         ul.'+genUn+'_chat_sm_container>li>a.Quix_mail {background:#d44a3d !important;}\
         ul.'+genUn+'_chat_sm_container>li>a.Quix_call {background:#ea9c4b !important;}\
         ul.'+genUn+'_chat_sm_container>li>a.Quix_sms {background:#06b998 !important;}\
         ul.'+genUn+'_chat_sm_container>li>a.Quix_skype {background:#00aaf2 !important;}\
         ul.'+genUn+'_chat_sm_container>li>a.Quix_line {background:#3ace01 !important;}\
         ul.'+genUn+'_chat_sm_container>li>a.Quix_snapchat {background:#f09819 !important;}\
         ul.'+genUn+'_chat_sm_container>li>a.Quix_telegram {background:#028fd1 !important;}\
         ul.'+genUn+'_chat_sm_container>li>a.Quix_viber {background:#7d3daf !important;}\
         ul.'+genUn+'_chat_sm_container>li>a.Quix_wechat {background:#2dc100 !important;}\
         ul.'+genUn+'_chat_sm_container>li>a.Quix_vk {background:#0767cb !important;}\
         #'+genUn+'Texts li .QuixFlexReverse .'+genUn+'_Sender_Msg{background:#ffffff !important;} #'+genUn+'Texts li .'+genUn+'_BotQBadge{background:#ffffff !important; border-color:'+Quix_chat_bubble_color+' !important; color:'+Quix_chat_bubble_color+'  !important;} #'+genUn+'Texts li .'+genUn+'_BotQBadge:hover{color:'+Quix_chat_bubble_text_color+' !important; background:'+Quix_chat_bubble_color+' !important;}\
         #wave .dot{background:'+Quix_chat_bubble_color+' !important;}#'+genUn+'Texts li .'+genUn+'_Sender_Msg{background:'+Quix_chat_bubble_color+' !important; color:'+Quix_chat_bubble_color+'  !important; border-color:'+Quix_chat_bubble_color+'  !important;}\
         #'+genUn+'Texts li.'+genUn+'_Sender .'+genUn+'_Sender_Msg p{color:'+Quix_chat_bubble_text_color+'  !important;} #'+genUn+'Texts li .'+genUn+'_BotQBadge:hover{color:'+Quix_chat_bubble_text_color+' !important;}\
         #'+genUn+'Texts li.'+genUn+'_Reciver .QuixFlexReverse .'+genUn+'_Sender_Msg p{color:'+Quix_chat_bubble_color+'  !important;background:#ffffff !important;}\
        #'+genUn+'Header{background:'+Quix_chat_bubble_color+' !important;color:'+Quix_chat_bubble_text_color+' !important;}\
        #'+genUn+'Header *{color:'+Quix_chat_bubble_text_color+' !important;}\
        #'+genUn+'_window_closebtn{color:'+Quix_chat_bubble_text_color+' !important;}\
        #'+genUn+'_ChatBtn{background:'+Quix_chat_bubble_color+'!important; color:'+Quix_chat_bubble_color+' !important;}\
        #'+genUn+'_ChatBtn>i{color:'+Quix_chat_bubble_text_color+' !important;}\
         </style>';}else{var StylHtml=''}
var QuixPreExten='';if(Quix_chat_button_type==1){QuixPreExten='';}else{QuixPreExten=''+genUn+''}
QuixChatSendBackData();if(Quix_chat_button_type==1){v('#Quixchat_Body_Frame').append('','app',''+genUn+'_Body');v('#'+genUn+'_Body').append('','div',''+genUn+'_Content');v('#'+genUn+'_Body').append('','div',''+genUn+'_Style');v('#'+genUn+'_Style').html(StylHtml);v('#'+genUn+'_Content').append('','div',''+genUn+'Header');v('#'+genUn+'Header').append('','div',''+genUn+'_Avatar');v('#'+genUn+'_Avatar').append('','img','Quix_header_avatar');v('#Quix_header_avatar').attr('width','32');v('#Quix_header_avatar').attr('height','32');v('#Quix_header_avatar').attr('src',Quix_agent_icon);v('#Quix_header_avatar').attr('alt','Quixchat - Add Chat support to your website with popular messengers');v('#'+genUn+'Header').append('','div',''+genUn+'HeaderContent');v('#'+genUn+'HeaderContent').append(Quix_chat_title,'h3',''+genUn+'HeaderContent_h3');v('#'+genUn+'HeaderContent').append(Quix_chat_subtitle,'p',''+genUn+'HeaderContent_p');v('#'+genUn+'HeaderContent').append('<i class="flaticon flaticon-cancel"></i>','a',''+genUn+'_window_closebtn');v('#'+genUn+'_Content').append('','div','QuixChat_window');v('#QuixChat_window').addClass(''+genUn+'_Chat_Msgs');v('#QuixChat_window').addClass(''+genUn+'_scroll');v('#QuixChat_window').append('','ul',genUn+'Texts');senderMsg=data.hello_msg;MsgData=data.msgs;FirstMsg=[];var SubMsgs="";FirstMsg=MsgData.filter((item)=>item.parent==-1);MsgData=MsgData.filter((item)=>item.parent!==-1);v('#QuixChat_window').append('','input',genUn+'_submsgs');v('.'+genUn+'_submsgs').attr('type','hidden');v('.'+genUn+'_submsgs').attr('name','.'+genUn+'_submsgs');v('.'+genUn+'_submsgs').attr('value',JSON.stringify(MsgData));v('#'+genUn+'_Content').append('','div',''+genUn+'_chat_social_mesengers');v('#'+genUn+'_chat_social_mesengers').append('','h3',''+genUn+'_chat_social_mesengers_h3');v('#'+genUn+'_chat_social_mesengers').append('','ul',''+genUn+'_chat_sm_container');v('#'+genUn+'_chat_social_mesengers').append('','div',''+genUn+'_footer_branding');v('#'+genUn+'_chat_social_mesengers_h3').text('Start Chatting With');v('#'+genUn+'_footer_branding').html(' Powered By QuixChat V3.0 (<a href="https://quixchat.com/?ref=widget" target="_blank" class="'+genUn+'_branding_sm_btn">Add This to Your Site!</a>)');var SocialMessagingTool='';var ToggleTool='   <a href="javascript:void(0);"  data-tool="chat_close" class="'+genUn+'_msg Quix_more '+genUn+'_tooltip"><span class="'+genUn+'_tooltiptext '+genUn+'_expend_chat_window_btn">Hide Chat Window!</span><i class="flaticon flaticon-down-arrow '+genUn+'_expend_chat_window_btn_icon"></i></a>';chat_tools.forEach(function(item,index){SocialMessagingTool='<a href="'+item.action+'" target="_blank" data-tool="'+item.id+'" class="'+genUn+'_msg Quix_'+item.id+' '+genUn+'_tooltip"><span class="'+genUn+'_tooltiptext">'+item.caption+'</span><i class="flaticon '+item.icon+'"></i></a>';if(chat_tools.length==1){v('#'+genUn+'_chat_sm_container').append(SocialMessagingTool,'li','Quix_only_child');}else{v('#'+genUn+'_chat_sm_container').append(SocialMessagingTool,'li',''+genUn+'_chat_sm_container_li');}});if(chat_tools.length>1){v('#'+genUn+'_chat_sm_container').append(ToggleTool,'li',''+genUn+'_chat_sm_container_li');}
v('#'+genUn+'_Body').append('<i class="flaticon '+singleBtnIcn+' '+genUn+'_ChatBtnIcon"></i><a class="'+genUn+'_branding" href="https://quixchat.com/?ref=widget" target="_blank">Get Button</a>','div',''+genUn+'_ChatBtn');var QuixStyle=document.createElement('style');QuixStyle.innerHTML='@import url("//api.quixchat.com/assets/js/font/flaticon.css"); @import url("//fonts.googleapis.com/css2?family=NTR&display=swap");.'+genUn+'_Body *{line-height:1.4;font-family:"NTR",sans-serif;} .'+genUn+'_Body{margin:0;padding:0;height:0;width:auto;font-family:"NTR",sans-serif; font-size: 1rem; font-weight: 400; line-height: 1.5 !important;border:0;position:fixed;z-index:16000160;bottom:20px;text-align:center;overflow:visible;float:right;margin-bottom:10px; right:30px}.'+genUn+'_Body_use{height:100%}.'+genUn+'_BotQBadge{display:inline-block;clear:both;width:auto;font-family:inherit;padding:10px 12px;border:1px solid #fc7864;border-radius:6px;margin:4px 3px;cursor:pointer;background:#fff;text-decoration:none;text-align:left;outline:0;font-size:11px;transition:0.2s ease-out all}.'+genUn+'_BotQBadge:hover{background:#fc7864;color:#fff;transition:0.2s ease-in all}.'+genUn+'_Chat_Msgs{overflow-x:hidden;min-height:100px;max-height:calc(100vh - 360px);display:block}.'+genUn+'_Chat_Msgs_toggle{display:none}.'+genUn+'_scroll{overflow-x:hidden}.'+genUn+'_scroll::-webkit-scrollbar{width:4px}.'+genUn+'_scroll::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px #eee;border-radius:10px}.'+genUn+'_scroll::-webkit-scrollbar-thumb{border-radius:10px;-webkit-box-shadow:inset 0 0 6px#aaa}.'+genUn+'_BotQuestions{padding-bottom:10px;padding-left:50px;text-align:right}.'+genUn+'_Sender_Msg{padding:10px;margin:0 10px 10px;background:#ffd16f;color:#ffd16f;border-radius:6px;width:auto;position:relative;margin-right:38px;font-size:13px;top:-10px}.'+genUn+'_Sender_Msg:before{content:"";border:8px solid transparent;border-top-color:currentColor;position:absolute;top:0;left:-8px}.QuixFlexReverse .'+genUn+'_Sender_Msg:before,.QuixFlexReverse .'+genUn+'_Sender_Msg:after{  content: "";border: 8px solid currentColor;border-bottom-color: transparent; border-left-color: transparent; border-right-color: transparent; position: absolute; top: -1px;right: -9px; left: auto;}.'+genUn+'_Sender_Msg p{margin:0;margin-bottom:2px; color:#000000;} .QuixFlexReverse .'+genUn+'_Sender_Msg p{color:#fc6262} .'+genUn+'_Content{background:#fff;position:relative;position:absolute;right:0;bottom:70px;transition:0.3s all;width:365px;border-radius:20px;opacity:0;height:auto;visibility:hidden;transition:0.3s all;transform:scale(1) rotate(-2deg) translateY(70px);box-shadow:rgba(0, 0, 0, 0.1) 0px 12px 24px 0px;}.'+genUn+'_Content_show{display:block;opacity:1;visibility:visible;height:auto;width:365px;transform:scale(1) rotate(0deg) translateY(0);transition:0.3s all}.'+genUn+'_Content_show_min{position:absolute;right:0;bottom:70px;transition:0.3s all}.Quix_header_avatar{border:5px solid #fff;display:block;border-radius:50%;background:none repeat scroll 0 0 #fff;padding:0;margin:0 auto!important;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)}.'+genUn+'Header{display:flex;align-items:center;background:linear-gradient(-45deg, #fc6262, #ffd06e);padding:20px 20px;border-top-right-radius:20px;border-top-left-radius:20px;color:#fff}.'+genUn+'HeaderContent{text-align:left;padding:5px 10px}.'+genUn+'HeaderContent h3{font-size:16px;margin:0;font-weight:400;margin-bottom:4px}.'+genUn+'_avatar{border-radius:50%;border:1px solid #efefef;padding:3px}.'+genUn+'_window_closebtn{position:absolute;font-size:12px;right:15px;top:15px;text-decoration:none;color:#fff;outline:0;display:block}.'+genUn+'_ChatBtn{width:68px;height:64px;cursor:pointer;transition: .2s ease-out;line-height:64px !important;background:linear-gradient(30deg,#fc6262,#ffd86f);right:0;font-size:24px;position:absolute;color:#fc6262;bottom:20px;text-align:center;border-radius:20px;z-index:16000160;border-bottom-left-radius:0px}.QuixFlexReverse .'+genUn+'_Sender_Msg:after{border-top-color: #ffffff !important;top: 0px;    right: -6px;} .QuixFlexReverse{flex-direction:row-reverse}.QuixFlexReverse .'+genUn+'_Sender_Msg{border:1px solid #fc7864;background: #ffffff !important; margin-right:3px;color:#fc7864;}.'+genUn+'_ChatBtn>i{color:#fff;line-height: inherit;}.'+genUn+'_ChatBtn:after,.'+genUn+'_ChatBtn:before{content:"";position:absolute;border:8px solid currentColor;top:60px;left:0;border-bottom-color:transparent;border-right-color:transparent;transition:0.2s all}.'+genUn+'_ChatBtn_Close{border-bottom-left-radius:50%;background:linear-gradient(30deg, #ffcc6e,#fd6c63);transform:rotate(65deg);border-radius:50%;width:68px;height:68px;line-height:68px !important;transition:0.2s all}.'+genUn+'_ChatBtn_Close:after,.'+genUn+'_ChatBtn_Close:before{content:"";border-width:0;top:45px}ul.'+genUn+'_chat_sm_container,.'+genUn+'Texts{list-style:none;padding:10px;margin:0;text-align:left;display:block}.'+genUn+'Texts{display:flex;flex-direction:column;align-items:flex-end}ul.'+genUn+'Texts li{width:100%}.'+genUn+'_Sender_Msg_Container{display:flex;align-items:baseline}.'+genUn+'Texts>li>img{width:27px;height:27px;padding:3px;background:#fff;border-radius:50%;border:1px solid #aaa}ul.'+genUn+'_chat_sm_container>li{display:inline-block}.'+genUn+'_chat_social_mesengers{display:block;padding-top:0;border-top:1px solid #efefef}.'+genUn+'_chat_social_mesengers>h3{margin:0;font-size:14px;text-align:left;font-weight:400;font-family:inherit;padding: 14px 15px;line-height:0 !important;display:block;background:#fdfdfd}.'+genUn+'_chat_social_mesengers_floating{position:absolute;top:0;background:#fff;width:100%;height:100%;border-radius:20px;z-index:999;display:block;visibility:hidden;opacity:0;transform:scale(0) translateY(80%) translateX(80%);transition:0.3s all;border:0}.'+genUn+'_tooltip{position:relative}.'+genUn+'_tooltip .'+genUn+'_tooltiptext{visibility:hidden;width:120px;font-size:12px;background-color:#555;color:#fff;text-align:center;border-radius:6px;padding:5px 0;line-height:1.5 !important;position:absolute;z-index:1;bottom:120%;left:50%;margin-left:-60px;opacity:0;transition:opacity 0.3s}.'+genUn+'_tooltip .'+genUn+'_tooltiptext::after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#555 transparent transparent transparent}.'+genUn+'_tooltip:hover .'+genUn+'_tooltiptext{visibility:visible;opacity:1}.'+genUn+'_chat_social_mesengers_floating_show{display:block;visibility:visible;opacity:1;transform:scale(1) translateY(0) translateX(0);transition:0.3s all}.'+genUn+'_chat_textarea{display:flex;width:calc(100% - 20px);align-items:center;border-radius:0;background:#f8f8f8;border-top:1px solid #eee;visibility:hidden;opacity:0;height:0px;padding:0;display:none;transition:0.3s all}.'+genUn+'_chat_textarea_show{visibility:visible;opacity:1;display:flex;padding:10px 10px;height:auto;transition:0.3s all}.'+genUn+'_chat_text{width:100%;border-radius:45px;border:0}.'+genUn+'_chat_sm_container{list-style:none;padding:10px 10px 10px !important;margin:0;text-align:left;display:block;padding-top:5px;border-top:1px solid #f9f9f9}.'+genUn+'Textarea{width:calc(100% - 32px);border:1px solid #fff;margin-right:0;float:left;border-radius:4px;appearance:none;padding:10px 10px 9px 10px;outline:0;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)}.'+genUn+'_sendbtn{width:75px;height:38px;background:linear-gradient(45deg, #fc6262, #ffce6e);color:#fff;border-radius:4px;margin:0;padding:5px;font-size:14px;cursor:pointer;outline:0;border:1px solid #fff;font-family:inherit;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)}ul.'+genUn+'_chat_sm_container>li>a>i{line-height:inherit;}ul.'+genUn+'_chat_sm_container>li>a{display: block; text-align: center; font-size: 23px;width: 42px;height: 42px;line-height: 42px !important; margin: 3px 3px; background-color: #607d8b;color: #fff;text-decoration: none; border-radius: 50%; box-shadow: #dcdcdc 1px 2px 3px 1px;}.Quix_chat_align_center_tools{display:flex;align-items:center;height:calc(100% - 88px)}.'+genUn+'_chat_social_mesengers_floating_show>.Quix_chat_align_center_tools>ul>li>a{font-size:38px;width:64px;height:64px;line-height:64px !important;border-radius:12px;margin:9.5px}.'+genUn+'_chat_social_mesengers_floating_show>.Quix_chat_align_center_tools>ul{border-top:0 !important}.'+genUn+'HeaderContent p{margin:0;font-size:12px}.Quix_messenger{background:linear-gradient(45deg, #0a6fbf, #00BCD4) !important}.Quix_mail{background:linear-gradient(45deg, #F44336, #FFC107) !important}.Quix_sms{background:linear-gradient(45deg, #3F51B5, #558f96) !important}.Quix_call{background:linear-gradient(45deg, #128516, #8fda36) !important}.Quix_more{background:linear-gradient(45deg, #607D8B, #9E9E9E) !important}.Quix_skype{background:linear-gradient(45deg, #388690, #00BCD4) !important}.Quix_telegram{background:linear-gradient(45deg, #217ba4, #00BCD4) !important}.Quix_snapchat{background:linear-gradient(45deg, #ec9009, #ffe60b) !important}.Quix_viber{background:linear-gradient(45deg, #512871, #a12bff) !important}.Quix_line{background:linear-gradient(45deg, #33691e, #3ed604) !important}.Quix_wechat{background:linear-gradient(45deg, #3e752d, #2dc100) !important}.Quix_vk{background:linear-gradient(45deg, #0c3764, #0767cb) !important}#wave{position:relative;text-align:right;height:auto;margin-left:auto;margin-right:auto;width:45px;display:block;position:absolute;height:18px;background-size:28px;z-index:999;bottom:-17px;right:2px;}div#wave .dot{display:inline-block;width:5px;height:5px;border-radius:50%;margin-right:3px;background:#989898;animation:wave 1.3s linear infinite}div#wave .dot:nth-child(2){animation-delay:-1.15s}div#wave .dot:nth-child(3){animation-delay:-1s}@keyframes wave{0%,60%,100%{transform:initial}30%{transform:translateY(-5px)}}.Quix_chat_loading_msg{margin-bottom:300px;} .'+genUn+'_footer_branding{font-size: 12px;text-align: left;padding: 10px 15px;border-top: 1px solid #efefef;background: #fefefe;border-bottom-left-radius: 20px;border-bottom-right-radius: 20px; }\
            .'+genUn+'_branding_sm_btn {background: #ffffff !important;text-decoration: underline !important;color: #5271ff !important; margin-left: 2px; display: inline-block;}\
            #'+genUn+'_chat_sm_container>li.Quix_only_child {\
                width: calc(100% - 5px);\
            } \
            #'+genUn+'_chat_sm_container>li.Quix_only_child a {\
                width: 100%;\
                border-radius: 24px;\
            }\ '+btnStyle+'\
            .'+genUn+'_branding{position: absolute;font-size: 11px; width: 68px; left: 0; bottom: -36px; background: rgba(0,0,0,0.05); padding: 1px 3px; display: block; line-height: 1.4 !important; border-radius: 40px; color: #5271ff; text-decoration:none;}  .'+genUn+'_Body_use .'+genUn+'_branding { display: none !important;}.Quix_PastChat { display: flex;align-items: center;text-align: center;color:#888888;}.Quix_hasPasChat{width:100%;display:block;text-align:center;} .Quix_PastChat::before, .Quix_PastChat::after {content: "";flex: 1;border-bottom: 1px solid #888888;} .Quix_PastChat::before {margin-right: .25em;}.Quix_PastChat::after {margin-left: .25em;}.Quix_clear_past_chatBtn{display: inline-block;background: #fff !important;border: 1px solid #888888;margin: 5px;padding: 4px 8px;font-size: 11px;font-family: inherit;line-height: 1.4 !important;color: #888888;outline:0;border-radius: 24px;cursor: pointer;}';var ref=document.getElementById(''+genUn+'_Body');ref.parentNode.insertBefore(QuixStyle,ref);QuixChat_Build();v('#'+genUn+'_ChatBtn').event('click',function(){ToggleQuixChatAction(genUn);});v('#'+genUn+'_window_closebtn').event('click',function(){ToggleQuixChatAction(genUn);});v('#'+genUn+'_chat_sm_container li a').each(function(item,index){v(item).event('click',function(){if(typeof(Storage)!=="undefined"){localStorage.setItem('tool',item.getAttribute('data-tool'));}});});if(chat_tools.length>1){v('.Quix_more').event('click',function(){Quixchat_ToogleChatArea(genUn);var chatWindow=document.getElementById('QuixChat_window');var xH=chatWindow.scrollHeight;chatWindow.scroll({top:xH,left:0,behavior:'smooth'});});}}else{v('#Quixchat_Body_Frame').append('','app',''+genUn+'_Body');v('#'+genUn+'_Body').append('','div',''+genUn+'_Content');v('#'+genUn+'_Body').append('','div',''+genUn+'_Style');v('#'+genUn+'_Style').html(StylHtml);v('#'+genUn+'_Content').append('','ul',''+genUn+'_chat_sm_container');var SocialMessagingTool='';var ToggleTool='   <a href="javascript:void(0);"  data-tool="chat_close" class="'+genUn+'_msg Quix_more '+genUn+'_tooltip"><span class="'+genUn+'_tooltiptext '+genUn+'_expend_chat_window_btn">Hide Chat Window!</span><i class="flaticon flaticon-down-arrow '+genUn+'_expend_chat_window_btn_icon"></i></a>';chat_tools.forEach(function(item,index){SocialMessagingTool='<a href="'+item.action+'" target="_blank" data-tool="'+item.id+'" class="'+genUn+'_msg Quix_'+item.id+' '+genUn+'_tooltip"><span class="'+genUn+'_tooltiptext">'+item.caption+'</span><i class="flaticon '+item.icon+'"></i></a>';if(chat_tools.length==1){if(QuixGetCookie('QuixChat_Webseen')==window.location.hostname){SocialMessagingTool='<a href="'+item.action+'" target="_blank" data-tool="'+item.id+'" class="'+genUn+'_msg Quix_'+item.id+' '+genUn+'_tooltip"><i class="flaticon '+item.icon+'"></i></a>';v('#'+genUn+'_chat_sm_container').append(SocialMessagingTool+' <a class="'+genUn+'_branding_link" href="https://quixchat.com/?ref=widget" target="_blank">Get Button</a>','li','Quix_only_child');}else{v('#'+genUn+'_chat_sm_container').append(SocialMessagingTool+' <a class="'+genUn+'_branding_link" href="https://quixchat.com/?ref=widget" target="_blank">Get Button</a>','li','Quix_only_child');}}else{v('#'+genUn+'_chat_sm_container').append(SocialMessagingTool,'li',''+genUn+'_chat_sm_container_li');}});var d=new Date();d.setTime(d.getTime()+(1*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie='QuixChat_Webseen'+"="+window.location.hostname+";"+expires+";path=/";if(chat_tools.length>1){v('#'+genUn+'_Body').append('<i class="flaticon '+singleBtnIcn+' '+genUn+'_ChatBtnIcon"></i><a class="'+genUn+'_branding" href="https://quixchat.com/?ref=widget" target="_blank">Get Button</a>','div',''+genUn+'_ChatBtn');v('#'+genUn+'_ChatBtn').event('click',function(){v('.'+genUn+'_ChatBtnIcon').toggleClass('flaticon-comment');v('.'+genUn+'_ChatBtnIcon').toggleClass('flaticon-cancel');v('.'+genUn+'_Body').toggleClass(''+genUn+'_Body_use');v('.'+genUn+'_Content').toggleClass(''+genUn+'_Content_show');v('.'+genUn+'_ChatBtn').toggleClass(''+genUn+'_ChatBtn_Close');});}else{v('.'+genUn+'_Body').addClass(''+genUn+'_Body_use');v('.'+genUn+'_Content').addClass(''+genUn+'_Content_show');v('.'+genUn+'_Content').addClass(''+genUn+'_Content_Single_show');}
var QuixStyle=document.createElement('style');QuixStyle.innerHTML='@import url("//api.quixchat.com/assets/js/font/flaticon.css");\
                    @import url("//fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap");\
                    .'+genUn+'_Body {\
                        margin: 0;\
                        padding: 0;\
                        height: 0;\
                        width: auto;\
                        font-family: "Lato", sans-serif;\
                        border: 0;\
                        position: fixed;\
                        z-index: 16000160;\
                        bottom: 25px;\
                        text-align: center;\
                        overflow: visible;\
                        float: right;\
                        right: 20px;\
                    }\
                    .'+genUn+'_Body_use {\
                        height: 100%\
                    }\
                    ul.'+genUn+'_chat_sm_container>li>a.Quix_whatsapp{background:#08c65b !important;}\
                    ul.'+genUn+'_chat_sm_container>li>a.Quix_messenger{background:#0084ff !important;}\
                    ul.'+genUn+'_chat_sm_container>li>a.Quix_mail {background:#d44a3d !important;}\
                    ul.'+genUn+'_chat_sm_container>li>a.Quix_call {background:#ea9c4b !important;}\
                    ul.'+genUn+'_chat_sm_container>li>a.Quix_sms {background:#06b998 !important;}\
                    ul.'+genUn+'_chat_sm_container>li>a.Quix_skype {background:#00aaf2 !important;}\
                    ul.'+genUn+'_chat_sm_container>li>a.Quix_line {background:#3ace01 !important;}\
                    ul.'+genUn+'_chat_sm_container>li>a.Quix_snapchat {background:#f09819 !important;}\
                    ul.'+genUn+'_chat_sm_container>li>a.Quix_telegram {background:#028fd1 !important;}\
                    ul.'+genUn+'_chat_sm_container>li>a.Quix_viber {background:#7d3daf !important;}\
                    ul.'+genUn+'_chat_sm_container>li>a.Quix_wechat {background:#2dc100 !important;}\
                    ul.'+genUn+'_chat_sm_container>li>a.Quix_vk {background:#0767cb !important;}\
                    .'+genUn+'_Content {\
                        background: transparent;\
                        position: relative;\
                        position: absolute;\
                        right: 0;\
                        transition: 0.3s all;\
                        width: auto;\
                        border-radius: 12px;\
                        opacity: 0;\
                        height: auto;\
                        visibility: hidden;\
                        transition: 0.3s all;\
                        transform: scale(1) rotate(-2deg) translateY(70px);\
                        right: -3px;\
                        width: auto;\
                        bottom: 90px;\
                        border-radius: 12px;\
                    }\
                    .'+genUn+'_Content_show {\
                        display: block;\
                        opacity: 1;\
                        visibility: visible;\
                        height: auto;\
                        width: auto;\
                        transform: scale(1) rotate(0deg) translateY(0);\
                        transition: 0.3s all;\
                    }\
                    .'+genUn+'_Content_show_min {\
                        position: absolute;\
                        right: 0;\
                        bottom: 70px;\
                        transition: 0.3s all;\
                    }\
                    .'+genUn+'_ChatBtn {\
                        width: 68px;\
                        height: 64px;\
                        cursor: pointer;\
                        transition: .2s ease-out;\
                        line-height: 64px;\
                        background:'+bubble_color+';\
                        right: 0;\
                        font-size: 24px;\
                        position: absolute;\
                        color: '+bubble_color+';\
                        bottom: 20px;\
                        text-align: center;\
                        border-radius: 50%;\
                        z-index: 16000160;\
                        box-shadow: rgba(0, 0, 0, 0.1) 0px 12px 24px 0px;\
                margin: 5px;\
                    }\
                    .'+genUn+'_ChatBtn>i {\
                        color: #fff\
                    }\
                    .'+genUn+'_ChatBtn:after,\
                    .'+genUn+'_ChatBtn:before {\
                        content: "";\
                        position: absolute;\
                        border: 10px solid currentColor;\
                        top: 53px;\
                        right:8.4px;\
                        left:auto;\
                        border-bottom-color: transparent;\
                        border-right-color: transparent;\
                        transition: 0.2s all;\
                    }\
                    .'+genUn+'_ChatBtn_Close {\
                        border-bottom-left-radius: 50%;\
                        background:'+bubble_color+';\
                        transform: rotate(65deg);\
                        border-radius: 50%;\
                        width: 68px;\
                        height: 68px;\
                        line-height: 68px;\
                        transition: 0.2s all;\
                    }\
                    .'+genUn+'_ChatBtn_Close:after,\
                    .'+genUn+'_ChatBtn_Close:before {\
                        content: "";\
                        border-width: 0;\
                        top: 45px\
                    }\
                    ul.'+genUn+''+genUn+'_chat_sm_container{\
                        list-style: none;\
                        padding: 10px;\
                        margin: 0;\
                        text-align: left;\
                        display: block;\
                    }\
                    ul.'+genUn+'_chat_sm_container>li {\
                        display: inline-block;\
                    }\
                    .'+genUn+'_chat_sm_container {\
                        list-style: none;\
                        padding: 10px 10px 10px !important;\
                        margin: 0;\
                        text-align: left;\
                        display: block;\
                        padding-top: 5px;\
                    }\
                    ul.'+genUn+'_chat_sm_container>li>a.'+genUn+'_msg {\
                        display: block;\
                        text-align: center;	\
                        font-size: 30px;\
                        position: relative;\
                        width: 64px;\
                        height: 64px;\
                        line-height: 64px !important;\
                        margin: 3px 0;\
                        background-color: #607d8b;\
                        color: #fff;\
                        text-decoration: none;\
                        border-radius: 50%;\
                        box-shadow: none !important;\
                        transform: scale(0.9);\
                        transition:0.3s all;\
                    }\
                    ul.'+genUn+'_chat_sm_container li a.'+genUn+'_tooltip {\
                        position: relative;\
                    }\
                    ul.'+genUn+'_chat_sm_container li a.'+genUn+'_tooltip .'+genUn+'_tooltiptext {\
                        visibility: hidden;\
                        width: 120px;\
                        font-size: 12px;\
                        background-color: #555;\
                        color: #fff;\
                        text-align: center;\
                        border-radius: 6px;\
                        padding: 5px 0;\
                        line-height: 1.5;\
                        position: absolute;\
                        z-index: 1;\
                        top: calc(50% - 12px);\
                        left: -135px;\
                        opacity: 0;\
                        transition: opacity 0.3s;\
                    }\
                    ul.'+genUn+'_chat_sm_container li a.'+genUn+'_tooltip .'+genUn+'_tooltiptext::after {\
                        content: "";\
                        position: absolute;\
                        top: 28%;\
                        right: -13px;\
                        border-width: 7px;\
                        border-style: solid;\
                        border-color: transparent transparent transparent #555;\
                    }\
                    .'+genUn+'_Content_Single_show{\
                        background: transparent;\
                        box-shadow: none;\
                        bottom: -15px;\
                        right: 0;\
                    }\
                    .'+genUn+'_branding{\
                        position: absolute;\
                        font-size: 11px;\
                        width: 68px;\
                        left: 0;\
                        bottom: -36px;\
                        background: rgba(255,255,255,0.6);\
                        padding: 1px 3px;\
                        display: block;\
                        line-height: 1.4;\
                        border-radius: 40px;\
                        color: #5271ff;\
                        text-decoration: none;\
                    }\
                    .'+genUn+'_Body_use .'+genUn+'_branding{\
                        display:none !important;\
                    }\
                    ul.'+genUn+'_chat_sm_container li.Quix_only_child a.'+genUn+'_msg {\
                        width: 66px !important;\
                        height: 66px !important;\
                        line-height: 64px !important;\
                        background-color: '+bubble_color+';\
                        color: '+bubble_text_color+';\
                        font-size: 32px !important;\
                        transform: scale(0.9);\
                        transition:0.3s all;\
                    }\
                    ul.'+genUn+'_chat_sm_container li.Quix_only_child a:hover,ul.'+genUn+'_chat_sm_container li a:hover{\
                    transform: scale(1);\
                    box-shadow: #a4a4a4 1px 2px 3px 1px;\
                    transition:0.3s all;\
                    }\
                    ul.'+genUn+'_chat_sm_container li.Quix_only_child a.'+genUn+'_tooltip .'+genUn+'_tooltiptext{\
                        visibility: visible;\
                        opacity: 1;\
                        transition:0.3s all;\
                    }\
                    ul.'+genUn+'_chat_sm_container li a.'+genUn+'_tooltip:hover .'+genUn+'_tooltiptext {\
                        visibility: visible;\
                        opacity: 1;\
                        transition:0.3s all;\
                    }\
                    ul.'+genUn+'_chat_sm_container li.Quix_only_child a.'+genUn+'_tooltip:hover .'+genUn+'_tooltiptext{\
                        visibility: hidden;\
                        opacity: 0;\
                        transition:0.3s all;\
                    }\
                    ul.'+genUn+'_chat_sm_container li.Quix_only_child a.'+genUn+'_branding_link {\
                        position: absolute !important;\
        font-size: 11px !important;\
        width: 68px !important;\
        left: 6px !important;\
        bottom: -5px !important;\
        background: transparent !important;\
        box-shadow: none !important;\
        height: auto !important;\
        padding: 1px 3px;\
        display: block !important;\
        line-height: 1.4 !important;\
        border-radius: 40px !important;\
        color: #5271ff !important;text-align: center !important;\
        text-decoration: none !important;\
        margin: 0 !important;}';var ref=document.getElementById(''+genUn+'_Body');ref.parentNode.insertBefore(QuixStyle,ref);}}else if(res.status==404){v('#Quixchat_Body_Frame').append('<a href="https://quixchat.com">QuixChat Unable to Load, Please Try Again!</a>','div','Quixchat_NotAvailable_Body');}});function QuixChat_Build(){if(typeof(Storage)!=="undefined"){var QuixOldChat=[];if(localStorage.getItem(chatter_id)){QuixOldChat=JSON.parse(localStorage.getItem(chatter_id));if(FirstMsg.length>0){if(FirstMsg[0].id==0){v('.'+genUn+'Texts').append(BuildSenderMsg(genUn,Quix_agent_icon,FirstMsg[0].id,FirstMsg[0].title,FirstMsg[0].answer,MsgData,false),'li',''+genUn+'_Sender');}}
QuixOldChat.forEach(function(item,index){setTimeout(function(){var genMsgId=Date.now().toString();v('#'+genUn+'Texts').append(BuildReciverMsg(genMsgId,genUn,item.title),'li',genUn+'_Reciver');v('.Quix_chat_loading_msg').removeClass('Quix_chat_loading_msg');v('#wave').remove();if(QuixOldChat.length-1==index){v('#'+genUn+'Texts').append(BuildSenderMsg(genUn,Quix_agent_icon,item.id,item.title,item.answer,MsgData,true),'li',genUn+'_Sender');v('#'+genUn+'Texts').append('<span class="Quix_PastChat">Previous Chat Found!</span> <button type="button" class="Quix_clear_past_chatBtn" onClick="QuixChatClearChat();">Clear Previous Chat</button> <button type="button" class="Quix_clear_past_chatBtn" onClick="QuixJumptoTop();">Check Previous Chat</button> <button type="button" class="Quix_clear_past_chatBtn" onClick="QuixHidePastChatNotification();">Continue Chatting</button>','div','Quix_hasPasChat');}else{v('#'+genUn+'Texts').append(BuildSenderMsg(genUn,Quix_agent_icon,item.id,item.title,item.answer,MsgData,false),'li',genUn+'_Sender');}},100);});}else{if(FirstMsg.length>0){if(FirstMsg[0].id==0){v('.'+genUn+'Texts').append(BuildSenderMsg(genUn,Quix_agent_icon,FirstMsg[0].id,FirstMsg[0].title,FirstMsg[0].answer,MsgData),'li',''+genUn+'_Sender');}else{v('.'+genUn+'Texts').append(BuildSenderMsg(genUn,Quix_agent_icon,0,senderMsg,[],[]),'li',genUn+'_Sender');}}else{v('.'+genUn+'Texts').append(BuildSenderMsg(genUn,Quix_agent_icon,senderMsg,[],[]),'li',genUn+'_Sender');}}}}
function QuixChat_SendMsg(genUn,Quix_agent_icon,answer_id,text,liveData=[],maketype=true){QuixHidePastChatNotification();liveData=JSON.parse(v('.'+genUn+'_submsgs').attr('value'));if(liveData.length==0)return false;var MsgData=liveData.filter((item)=>item.parent!==-1);var genMsgId=Date.now().toString();v('#'+genUn+'Texts').append(BuildReciverMsg(genMsgId,genUn,text),'li',genUn+'_Reciver');if(v('.'+genUn+'_BotQuestions'))v('.'+genUn+'_BotQuestions').remove();var chatWindow=document.getElementById('QuixChat_window');var lastRecMsg=v('.'+genUn+'_BotQuestions');chatWindow.scroll({top:lastRecMsg.offsetTop,left:0,behavior:'smooth'});v('.Quix_chat_loading_msg').removeClass('Quix_chat_loading_msg');setTimeout(function(){v('#wave').remove();MsgData.forEach(function(item,index){if(item.id==answer_id){if(maketype){ChatDataStorage(item);}
v('#'+genUn+'Texts').append(BuildSenderMsg(genUn,Quix_agent_icon,item.id,item.title,item.answer,MsgData,maketype),'li',genUn+'_Sender');}});var lastRecMsg=document.getElementById('QuixChat_msg_id'+genMsgId);chatWindow.scroll({top:lastRecMsg.offsetTop-lastRecMsg.scrollHeight-58,left:0,behavior:'smooth'});},1000);}
function QuixChatSendBackData(){if(SendBackUrl){lifecycle.addEventListener('statechange',function(event){localStorage.setItem('last_statechange',event.newState);if(typeof(Storage)!=="undefined"){if(event.newState=='terminated'){if(localStorage.getItem(chatter_id)){navigator.sendBeacon(SendBackUrl,'domain='+window.location.hostname+'&ip='+localStorage.getItem('QuixCustomerIp')+'&data='+localStorage.getItem(chatter_id)+'&tools='+localStorage.getItem('tool'));}}}});}}
function ChatDataStorage(item){QuixChatgetIP();if(typeof(Storage)!=="undefined"){if(localStorage.getItem('QuixCustomerIp')){item.ip=localStorage.getItem('QuixCustomerIp');}else{item.ip='Unkown/Proxy Detected!'}
if(localStorage.getItem(chatter_id)){QuixData=JSON.parse(localStorage.getItem(chatter_id));}
QuixData.push(item);localStorage.setItem(chatter_id,JSON.stringify(QuixData));}else{}}
function QuixChatgetIP(){if(typeof(Storage)!=="undefined"){if(!localStorage.getItem('QuixCustomerIp')||localStorage.getItem('QuixCustomerIp')=='undefined'){v('#Quixchat_Body_Frame').ajaxCall('GET','https://api.ipify.org','',false,function(res){if(res.status==200&&res.readyState==4){var response=res.response;localStorage.setItem('QuixCustomerIp',response);return response;}});}else{return localStorage.getItem('QuixCustomerIp');}}else{}}
function QuixGetCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return "";}
function QuixSetCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}
function BuildReciverMsg(genMsgId,genUn,msg){var msg='<div class="'+genUn+'_Sender_Msg_Container QuixFlexReverse" id="QuixChat_msg_id'+genMsgId+'">\
        <div class="'+genUn+'_Sender_Msg Quix_chat_loading_msg">\
            <p>'+msg+'</p>\
            <div id="wave">\
                <span class="dot"></span>\
                <span class="dot"></span>\
                <span class="dot"></span>\
            </div>\
        </div>\
    </div>';return msg;}
function BuildSenderMsg(genUn,Quix_agent_icon,parent,msg,answer,msgData=[],make_type=true){var msg='<div class="'+genUn+'_Sender_Msg_Container">\
                               <img class="'+genUn+'_avatar" src="'+Quix_agent_icon+'" width="32" height="32" alt="'+genUn+' - Add Chat support to your website with popular messengers"/>\
                               <div class="'+genUn+'_Sender_Msg">\
                                   <p>'+answer+'</p>\
                               </div>\
                           </div>';if(make_type){var options=msgData.filter((item)=>item.parent==parent);if(options.length>0){msg+='<div class="'+genUn+'_BotQuestions">';options.forEach(function(item,index){if(item.type=='action'){msg+='   <button class="'+genUn+'_BotQBadge" data-id="'+item.id+'"  onclick="Quixchat_ToogleChatArea(\''+genUn+'\');">'+item.title+'</button>';}else{msg+='   <button class="'+genUn+'_BotQBadge" data-id="'+item.id+'" onClick="QuixChat_SendMsg(\''+genUn+'\',\''+Quix_agent_icon+'\',\''+item.id+'\',\''+item.title+'\')">'+item.title+'</button>';}});msg+='</div>';}else{options=msgData.filter((item)=>item.parent==0&&item.id!=parent);msg+='<div class="'+genUn+'_BotQuestions">';options.forEach(function(item,index){if(item.type=='action'){msg+='   <button class="'+genUn+'_BotQBadge" data-id="'+item.id+'"  onclick="Quixchat_ToogleChatArea(\''+genUn+'\');">'+item.title+'</button>';}else{msg+='   <button class="'+genUn+'_BotQBadge" data-id="'+item.id+'" onClick="QuixChat_SendMsg(\''+genUn+'\',\''+Quix_agent_icon+'\',\''+item.id+'\',\''+item.title+'\')">'+item.title+'</button>';}});msg+='</div>';}}
return msg;}
function ToggleQuixChatAction(genUn){v('.'+genUn+'_Body').toggleClass(''+genUn+'_Body_use');v('.'+genUn+'_Content').toggleClass(''+genUn+'_Content_show');v('.'+genUn+'_ChatBtn').toggleClass(''+genUn+'_ChatBtn_Close');v('.'+genUn+'_ChatBtnIcon').toggleClass(singleBtnIcn);v('.'+genUn+'_ChatBtnIcon').toggleClass('flaticon-cancel');var chatWindow=document.getElementById('QuixChat_window');setTimeout(function(){var xH=chatWindow.scrollHeight;chatWindow.scroll({top:xH,left:0,behavior:'smooth'});},1000);}
function QuixChatClearChat(){if(typeof(Storage)!=="undefined"){localStorage.removeItem(chatter_id,JSON.stringify(QuixData));v('#'+genUn+'Texts').remove();v('#QuixChat_window').append('','ul',genUn+'Texts');QuixChat_Build();}}
function QuixHidePastChatNotification(){if(typeof(document.getElementById('Quix_hasPasChat'))!='undefined'&&document.getElementById('Quix_hasPasChat')!=null&&document.body.contains(document.getElementById('Quix_hasPasChat'))){v('.Quix_hasPasChat').hide();}}
function QuixJumptoTop(){var chatWindow=document.getElementById('QuixChat_window');QuixHidePastChatNotification();setTimeout(function(){var xH=chatWindow.scrollHeight;chatWindow.scroll({top:0,left:0,behavior:'smooth'});},100);}
function Quixchat_ToogleChatArea(genUn){v('.'+genUn+'_Content_show').toggleClass(''+genUn+'_Content_show_min');v('.'+genUn+'_Chat_Msgs').toggleClass(''+genUn+'_Chat_Msgs_toggle');v('.'+genUn+'_expend_chat_window_btn_icon').toggleClass('flaticon-up-arrow');v('.'+genUn+'_expend_chat_window_btn_icon').toggleClass('flaticon-down-arrow');if(v('.'+genUn+'_expend_chat_window_btn_icon').hasClass('flaticon-up-arrow')){v('.'+genUn+'_expend_chat_window_btn').text('Show Chat Window!');}else{v('.'+genUn+'_expend_chat_window_btn').text('Hide Chat Window!');}
var chatWindow=document.getElementById('QuixChat_window');setTimeout(function(){var xH=chatWindow.scrollHeight;chatWindow.scroll({top:xH,left:0,behavior:'smooth'});},1000);}