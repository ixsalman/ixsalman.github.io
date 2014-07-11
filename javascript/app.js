function loadHeader(){
    $("#header").load("header.html"); 
};

function toggleHeader() {
	$("#header").toggle();
};



function click_div() {
  $(document).ready( function(event) {
    var name = window.location.href.substring(window.location.href.indexOf('#') + 1);
    console.log(name);
    $("div").find("."+name).trigger("click");
  });
};