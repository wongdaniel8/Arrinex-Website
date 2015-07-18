// function navBarHover(ident) {
// 	var id = document.getElementById(ident);
// 	id.style.color = "#606060";
// }


// function navBarHoverAway(ident, ident2) {
// 	var id = document.getElementById(ident);
// 	id.style.color = "#B8B8B8";
//     var id2 = document.getElementById(ident2);
//     // id2.style.display = "none";
//     id2.style.opacity = 0;

// }

//  on mouseover of main navigation, displays the hidden mini-summary and changes font color of link hovered over 
// function displayHidden(ident, self) {
// 	var id = document.getElementById(ident);
// 	id.style.display = "block";
// 	id.style.opacity = .9;
// 	var self = document.getElementById(self);
// 	self.style.color = "black";

// }



function adjustPicture()
{
	// 
	if (parseFloat(window.innerWidth) > 1024)
	{
		var initial_top_offset_at_1590_width = 325;
		var initial_left_offset_at_1590_width = 230;

		var multiplier_for_delta_top = .2;
		var multiplier_for_delta_left = .2;

		if (parseFloat(window.innerWidth) <1290)
			multiplier_for_delta_left = .3;
		

		var top_offset = initial_top_offset_at_1590_width - (1590 - parseFloat(window.innerWidth))*multiplier_for_delta_top;
		var left_offset = initial_left_offset_at_1590_width - (1630 - parseFloat(window.innerWidth))*multiplier_for_delta_left;

		$("#firstHomeText").css("top",""+top_offset+"px");
		$("#firstHomeText").css("left",""+left_offset+"px");
	}
	else
	{
		$("#firstHomeText").css("top","200px");
		$("#firstHomeText").css("left","40px");
	}
}



function homeParReveal(ident) {
	var id = document.getElementById(ident);
	id.style.opacity = .8;
	id.style.color = "rgb(105,105,105)";
}

function homeParHide(ident) {
	var id = document.getElementById(ident);
	id.style.opacity = 0;
}

$(document).ready(function(){
	var scroll_point1 = 0;
	var trigger_fade_height = 150;
        $(document).scroll(function() {
            
            //FUNCTION that deals with fade in and out
	            var scroll_point2 = $("body").scrollTop();


	            if ((scroll_point2 - scroll_point1 > 0) && scroll_point2 > 250) // scrolling down

	            if ((scroll_point2 - scroll_point1 > 0) && scroll_point2 > 150) // scrolling down

			    {
			    	$("#homePar").css("opacity","1");
			    }
			    if ((scroll_point2 - scroll_point1 < 0) && scroll_point2 < 150)// scrolling up
			    {
			    	$("#homePar").css("opacity","0");
			    }
			    
			    scroll_point1 = scroll_point2;// update the data points to ensure accuracy

			    if (scroll_point2 > 30)
			    {
			    	$("#navBarDiv").css("height","50px");
			    	$(".navBarLinks").css("padding","13px 17px");
			    	$("#logoBlock").css("padding","10px 17px");
			    	$(".dropDownList").css("top","17px");
			    }
			    else
			    {
			    	$("#navBarDiv").css("height","70px");
			    	$(".navBarLinks").css("padding","25px 17px");
			    	$("#logoBlock").css("padding","20px 17px");
			    	$(".dropDownList").css("top","25px");
			    }


			//FUNCTION for parallax
				if (scroll_point2 < 300)
				{
					var parallax_displacement = scroll_point2*0.8;
					var parallax_opacity = 1-scroll_point2*0.004;
					$("#parallaxHelpDiv").css("bottom",""+parallax_displacement+"px");
					$("#firstHomeText").css("opacity",""+parallax_opacity);
				}

        });
	////////////	drop down menus
        $( "#navBarList li a" ).mouseover(
		  function() {
		    $( this ).parent().find(".dropDownList").addClass("dropDownON");
		    
		  });
        $( "#navBarList li" ).mouseleave( function() {
		    $( this ).find("ul").removeClass("dropDownON");
		    
		  });
    //////////////login modal
    	$("#forInvestors").mouseover(
    		function(){
    			$("#passwordField").css("opacity",".8");
    		});

    });
		





