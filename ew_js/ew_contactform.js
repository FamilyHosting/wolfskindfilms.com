!function(y){y.fn.simpleContactForm=function(C){return C=y.extend({errorClass:"error",senderEmail:"",subject:"New message from your website",url:"",type:"POST",clearAfterSend:!0,success:function(){alert("Email sent!")}},C),y(this).each(function(){var x=y(this);"localhost"!==location.hostname&&"127.0.0.1"!==location.hostname&&""!==location.hostname&&"file:"!==location.protocol||y("#recaptcha").html("<div style='font-family:Roboto,helvetica,arial,sans-serif;font-size:14px;line-height:16px;padding: 10px 20px;text-align:center;color:red;border-radius:6px;border:1px solid #c0c0c0;background-color:#ededed;'>Publish your website to test the SPAM Captcha</div>"),y(x).find(".btnSubmit").click(function(e){var t,a,s,i,r,l=!1,n=C.senderEmail,o=C.url,d="",c=0,p=0,u=!1,m=y(this);if(y(".tmpdata").remove(),y(m).attr("disabled","disabled"),x.is("[action]")&&(o=x.attr("action")),x.find('label[data-required="required"]').each(function(){var e=(a=y(this)).attr("for"),t=!1;y(this).siblings("input[type='checkbox'][data_section='"+e+"']").each(function(){y(this).is(":checked")&&(t=!0)}),y(this).siblings("input[type='radio'][name='"+e+"']").each(function(){y(this).is(":checked")&&(t=!0)}),t?(a.parent().css({border:"",padding:"",margin:"","border-radius":""}),a.removeClass(C.errorClass)):(l=!0,a.addClass(C.errorClass),a.parent().css({border:"2px solid #ff5c33",padding:"5px",margin:"5px","border-radius":"6px"}))}),x.find("input,textarea,select").each(function(){var e;s="","submit"!=this.type&&(t=y(this),i="",d=t.attr("id"),r=t.attr("type"),a=null,x.find("label").each(function(){if("checkbox"==r||t.is("select")&&void 0!==t.attr("multiple")&&!1!==t.attr("multiple")){if(t.attr("data_section")==y(this).attr("for"))return a=y(this),s=a.text().trim(),!1}else if(y(this).attr("for")==t.attr("id")||y(this).attr("for")==t.attr("name"))return a=y(this),s=a.text().trim(),!1}),t.removeClass(C.errorClass),d=d||t.attr("name"),null!=a&&a.removeClass(C.errorClass),t.is("select")?i=t.find(":selected").val():"checkbox"==r||"radio"==r?i=t.is(":checked")?"true":"false":"file"==r?(s="",0<this.files.length&&(i=this.files[0].name,c+=parseInt(this.files[0].size),u=!0,p++)):i="text"==r&&t.hasClass("dpicker")?(e=t.attr("name"),hiddenEl=t.siblings(':input[type="hidden"][name="dtpic_'+e+'_submit"]'),hiddenEl.val()):t.val(),!t.is(".required")||null!=i&&0!=i.length||(l=!0,t.addClass(C.errorClass),null!=a&&a.addClass(C.errorClass)),t.is(".required")&&"checkbox"==r&&"false"==i&&(l=!0,null!=a&&a.addClass(C.errorClass)),t.is(".required")&&"radio"==r&&"false"==i&&(l=!0,null!=a&&a.addClass(C.errorClass)),!t.is(".email")&&!t.is(".senderEmail")&&"email"!=r||function(e){if("-1"!=e.indexOf("@")&&"-1"!=e.indexOf(".")&&""!=e&&2==e.split("@").length)return!0}(i)||(l=!0,t.addClass(C.errorClass),null!=a&&a.addClass(C.errorClass)),t.is(".senderEmail")&&(n=t.val()),t.is(".email")&&""==n.length&&(n=t.val()),"email"==r&&""==n.length&&(n=t.val()),""!=s&&(i=encodeURIComponent(i),"*"==(s=encodeURIComponent(s)).slice(-1)&&(s=s.substring(0,s.length-1)),d="","checkbox"==r||t.is("select")&&void 0!==t.attr("multiple")&&!1!==t.attr("multiple")?y(x).append('<input class="tmpdata" type="hidden" name="'+y(this).attr("data_section")+'_label" value="'+s+'"/>'):"hidden"!=r&&"checkbox"!=r&&y(x).append('<input class="tmpdata" type="hidden" name="'+y(this).attr("name")+'_label" value="'+s+'"/>')))}),l)y(x).find(".validation-error").show(),y(m).removeAttr("disabled"),y(".tmpdata").remove();else{if(y(".validation-error").hide(),"localhost"===location.hostname||"127.0.0.1"===location.hostname||""===location.hostname||"file:"===location.protocol)return alert("The contact form must be published online to send."),y(m).removeAttr("disabled"),y(".tmpdata").remove(),!1;y(x).find(".required").each(function(e,t){y(x).find(".reqFieldsHelper").remove(),y(x).append('<input type="hidden" class="reqFieldsHelper tmpdata" name="reqFields[]" value="'+y(t).attr("name")+'" />')});var h=y(x).find(".upload_progress"),f=y(x).find(".bar"),b=y(x).find(".percent"),v=y(x).find(".progress"),g="0%";f.width(g),b.html(g),y(x).append('<input class="tmpdata" type="hidden" name="emailSubject" value="'+C.subject+'" />'),y(x).append('<input class="tmpdata" type="hidden" name="emailSender" value="'+n+'" />'),y(x).append('<input class="tmpdata" type="hidden" name="numfiles" value="'+p+'" />'),y.post(o,y(x).serialize()+"&required_size="+c+"&required_size_label=",function(e){if(!e.success)return resultMessage=e.message,""==resultMessage&&(resultMessage="Service temporarily unavailable"),alert(resultMessage),y(m).removeAttr("disabled"),y(".tmpdata").remove(),!1;!u||e.can_submit&&e.can_upload||(u=!1,console.log("Unable to upload file because the file is too large."),y(x).find("input[type=file]").attr("disabled","disabled"),alert("The file(s) could not be uploaded because the file(s) are too large.")),y(x).append('<input class="tmpdata" type="hidden" name="can_upload" value="'+e.can_upload+'" />'),y(x).append('<input class="tmpdata" type="hidden" name="can_submit" value="'+e.can_submit+'" />');var t=c+parseInt(e.space_used),a=parseInt(e.submissions_used)+1;y(x).append('<input class="tmpdata" type="hidden" name="submissions_quota" value="'+e.submissions_quota+'" />'),y(x).append('<input class="tmpdata" type="hidden" name="submissions_used" value="'+a+'" />'),y(x).append('<input class="tmpdata" type="hidden" name="space_used" value="'+t+'" />'),y(x).append('<input class="tmpdata" type="hidden" name="space_quota" value="'+e.space_quota+'" />'),y(x).ajaxSubmit({url:o,beforeSend:function(){u&&(g="0%",f.width(g),b.html(g),y(v).show(),y(h).show())},uploadProgress:function(e,t,a,s){u&&(g=s+"%",f.width(g),b.html(g))},complete:function(t){y(x).find(".upload_progress").hide(),y(x).find("input[type=file]").removeAttr("disabled"),y(m).removeAttr("disabled");try{var e=y.parseJSON(t.responseText)}catch(e){return console.log(t),console.log(t.responseText),console.log(e),alert("An error occurred while sending the form. The response could not be read. Check the error console for more details."),y(m).removeAttr("disabled"),y(".tmpdata").remove(),!1}var a;e.success?(a="100%",f.width(a),b.html(a),C.clearAfterSend&&(y(x).resetForm(),y(".tmpdata").remove(),y(".g-recaptcha").length&&grecaptcha&&grecaptcha.reset()),C.success()):(alert(e.message),e.log&&console.log(e.log),y(v).hide())}})},"json").fail(function(e,t,a){alert("An error occurred while sending the contact form. Check the developer console for errors"),console.log(e),console.log(e.responseText),console.log(t),console.log(a)})}return!1})}),y(this)}}(jQuery);