// JavaScript Document

$(document).ready(function () {

	// ÒõÓ°Ð§¹û
	$(".shadow-box").hover(
	// move in 
	function () {
		$(this).css("-webkit-box-shadow", "0 3px 10px #8a8a8a");
		$(this).css("-moz-box-shadow", "0 3px 10px #8a8a8a");
		$(this).css("box-shadow", "0 3px 10px #8a8a8a");
	},
	// move out
	function () {
		$(this).css("-webkit-box-shadow", "");
		$(this).css("-moz-box-shadow", "");
		$(this).css("box-shadow", "");
	}
	);
	
	$(".tab").click(function() {
		var index = $(this).attr("tab-index");
		for (i = 0; i < 3; ++i) {
			if (index == i) {
				$("#tab"+i).attr({ class: "tab on" });
				$("#tab-pane"+i).attr({ class: "tab-pane in" });
			}
			else {
				$("#tab"+i).attr({ class: "tab"});
				$("#tab-pane"+i).attr({ class: "tab-pane" });
			}
		}
	});
	
}); // end of ready()