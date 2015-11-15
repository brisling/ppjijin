// JavaScript Document

$(document).ready(function () {

	$('#login-form').ajaxForm();

	$("#login-form").validate({
		rules: {
            userName: {
            	required: true,
            	isMobile: true
            }, 
            password: {
                required: true,
                rangelength: [6, 16]
            }
		},
		
		//error message
        messages:{
            userName:{
            	required: "请输入手机号"
            },
            password:{
                required: "请输入密码",
                rangelength: "请输入6-16位的密码"
            }
        },
        
        submitHandler: function() {
    		// md5 password
    		var password = $("#password").val();
    		var md5 = hex_md5(password);
    		$("#passwordMD5").val(md5);
    		
    		// clean up
    		$("#password").val("");

    		// submit form
    		$('#login-form').ajaxSubmit(function(data) {
    			if (data.status == 0) {
    				// success
    				window.location.href = data.redirectUrl;
    			} 
    			else if (data.status == 1)
    			{
    				// mismatch
    				$("#login-error-tip").html("<label>" + data.message + "</label>");
    			}
    		});
        },
        
        // where to display error message
        errorPlacement: function (error, element) {
        	 error.appendTo(element.next(".error-tip"));
        }
	});
	
	
	$("#userName").focus(function () {
		$("#login-error-tip").html("");
	});
	
	$("#password").focus(function () {
		$("#login-error-tip").html("");
	});
	
	$('#index').attr("class", "");
});