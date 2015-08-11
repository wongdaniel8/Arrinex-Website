//============================================================
	// JAVASCRIPT FOR INVESTORS PAGE
	//============================================================
    
    zIndex = 4;

	function articleReveal(ident) {
		var id = document.getElementById(ident);
		var navBar = document.getElementById("navBarDiv");
		
		// id.style.zIndex = "4";

		var num = zIndex.toString()
		zIndex++;
		id.style.zIndex = num;
		navBar.style.zIndex = num + 2;
		id.style.opacity = 1;
	}


	$(document).ready(function(){
    $("#foxButton").click(function(){
        $("#fox").animate({left: "700px"}, 6000, "linear");
    });
    
}); 