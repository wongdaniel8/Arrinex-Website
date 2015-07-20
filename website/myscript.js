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


			//FUNCTION to assist carousel
				carouselTimer();

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
    			$("#navBarDiv").css("z-index","5");
    			$("#passwordField").css("opacity",".8");
    			$("#passwordField").css("z-index","3");
    			$("#passwordInput").css("opacity",".8");
    			$("#passwordInput").css("z-index","3");
    		});

    	$("#passwordField").click(
    	//$("#company").mouseover(
    		function(){
    			$("#navBarDiv").css("z-index","1");
    			$("#passwordField").css("opacity","0");
    			$("#passwordField").css("z-index","0");
    			$("#passwordInput").css("opacity","0");
    			$("#passwordInput").css("z-index","0");
    		});


});
		

/////////////////PASSWORD SCRIPT START///////////////////////
function verification() {
    var x;
    var invalidDisplay = document.getElementById('errorPar');

    x = document.getElementById("passwordInput").value;
    try { 

        if(x == "a") {
            invalidDisplay.style.opacity = "0";
            window.open("company.html");
        }
        else return invalid();
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
}
function verifyKey(e) {
    var keycode;
    if (window.event)
        keycode = window.event.keyCode;
    if (keycode == 13) {
        alert("verifedKey");
        return verification();
        // window.open("company.html");
    }
}
function invalid() {
    var invalidDisplay = document.getElementById('errorPar');
    document.getElementById("passwordInput").value = "";

    invalidDisplay.style.opacity = 1;
    alert("invalid key");
}

/////////////////PASSWORD SCRIPT END///////////////////////


var carousel_is_on = false;
function carouselTimer()
{
	var pos_from_top = $("body").scrollTop();
	var vert_pos_exist_soln_div = $("#existingSolutions").offset().top;
	var height_exist_soln_div = parseFloat($("#existingSolutions").css("height"));
	var carousel_var;
		if (pos_from_top > vert_pos_exist_soln_div - height_exist_soln_div && pos_from_top < vert_pos_exist_soln_div + height_exist_soln_div)
		{
			var count = 0;
			// each cycle takes 6 seconds
			function executeCarousel()
			{
				if (carousel_is_on == false)
				{

				}
				// the first 5 seconds wait to put the red cirlce
				setTimeout(function(){
					$("#wrong_pic_holder").css("display","block");
					$("#wrong_pic_holder").css("opacity","1");
					$("#wrong_pic_holder").css("top","0px");
					$("#wrong_pic_holder").css("left","50px");
					$("#wrong_pic_holder").css("width","600px");
					$("#wrong_pic_holder").css("height","600px");


				},7500);
				// after the last second switch pictures
				setTimeout(function(){
					//hide the big red circle and return its original demensions and position
					$("#wrong_pic_holder").css("display","none");
					$("#wrong_pic_holder").css("top","-225px");
					$("#wrong_pic_holder").css("left","-140px");
					$("#wrong_pic_holder").css("width","1000px");
					$("#wrong_pic_holder").css("height","1000px");


					if (parseFloat($("#carouselList").css("margin-left")) < -695)
					{
						$("#carouselList").css("margin-left","0px");
						count++;

					}
					else
					{
						var left_position = parseFloat($("#carouselList").css("margin-left")) - 695;
						$("#carouselList").css("margin-left",""+left_position + "px");
						count++;
					}
					// hide all the list items
					$(".pictureDescription").css("display","none");

					// only show the one we care about
					 var the_chossen_one = $(".pictureDescription[data-position='"+((count%3)+1)+"']");
					the_chossen_one.css("display","block");
					the_chossen_one.css("opacity","1");

				},10000);

			}

			// if the carousel is not already on turn it on
			if (carousel_is_on == false)
			{
				// the first one starts off display: none so this fixes that
				$(".pictureDescription[data-position='1']").css("display","block");
				$(".pictureDescription[data-position='1']").css("opacity","1");

				executeCarousel();
				carousel_var = setInterval(function(){ executeCarousel() },11000);
				carousel_is_on = true;
			}
			//if its on already do nothing
		}

}