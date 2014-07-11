function loadHeader(){
    $("#header").load("header.html"); 
};

function toggleHeader() {
	$("#header").toggle();
};



function click_div() {
  $(document).ready( function(event) {
    console.log(window.location.href);
    var name = window.location.href.substring(window.location.href.indexOf('#') + 1);
    $("div").find("."+name).trigger("click");
  });
};