// JavaScript Document

$(document).ready(function () {

	// hot_product
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
	
});