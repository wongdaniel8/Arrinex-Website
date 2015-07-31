

function adjustPicture()
{
	
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
	var parallax_shifted = false;
        $(document).scroll(function() {
            
            //FUNCTION that deals with fade in and out
	            var scroll_point2 = $("body").scrollTop();


	            if ((scroll_point2 - scroll_point1 > 0) && scroll_point2 > 250) // scrolling down

	            if ((scroll_point2 - scroll_point1 > 0) && scroll_point2 > 150) // scrolling down

			    {
			    	$("#rhinitisInfo").css("opacity","1");
			    }
			    if ((scroll_point2 - scroll_point1 < 0) && scroll_point2 < 150)// scrolling up
			    {
			    	$("#rhinitisInfo").css("opacity","0");
			    }
			    
			    scroll_point1 = scroll_point2;// update the data points to ensure accuracy

			    if (scroll_point2 > 30)
			    {
			    	$("#navBarDiv").css("height","50px");
			    	$(".navBarLinks").css("padding","13px 25px");
			    	$("#logoBlock").css("padding","10px 17px");
			    	$(".dropDownList").css("top","17px");
			    }
			    else
			    {
			    	$("#navBarDiv").css("height","70px");
			    	$(".navBarLinks").css("padding","25px 25px");
			    	$("#logoBlock").css("padding","20px 17px");
			    	$(".dropDownList").css("top","25px");
			    }


			//FUNCTION for parallax
				if (scroll_point2 < 300)
				{   parallax_shifted = true;
					var parallax_displacement = scroll_point2*0.8;
					var parallax_opacity = 1-scroll_point2*0.004;
					$("#parallaxHelpDiv").css("bottom",""+parallax_displacement+"px");
					$("#firstHomeText").css("opacity",""+parallax_opacity);
				}


			//FUNCTION trigger the carousel initially
				var pos_from_top = $("body").scrollTop();
				var vert_pos_exist_soln_div = $("#existingSolutions").offset().top;
				var height_exist_soln_div = parseFloat($("#existingSolutions").css("height"));
				
				if (pos_from_top > vert_pos_exist_soln_div - height_exist_soln_div && pos_from_top < vert_pos_exist_soln_div + height_exist_soln_div && first_toggle == false)
				{
					first_toggle = true;
					playCarousel();
				}


        });




	// FUNCTIONS FOR NAVIGATION BAR SCROLLING
				$("#teamLink").click(function() {
					if (parallax_shifted == true || (parallax_shifted == false && $("body").scrollTop() == 0)) {
						
						$("html, body").animate({ scrollTop: 1960 + 'px'}, 1000);
					}
					else {
						$("html, body").animate({ scrollTop: 2140 + 'px'}, 1000);
	    			}
	    			return true;
				});

				// WHAT IS RHINITIS LINK NEEDS WORK BECAUSE OF PARALLAX
				$("#whatIsLink").click(function() {
					if (parallax_shifted == true || (parallax_shifted == false && $("body").scrollTop() == 0)) {
				    		$("html, body").animate({ scrollTop: 458 + 'px'}, 1000);
				    	}
				    	else {
				    		$("html, body").animate({ scrollTop: 678 + 'px'}, 1000);
				    	}
				    	return true;
					
				});

				$("#currentSolutionsLink").click(function() {
						if (parallax_shifted == true || (parallax_shifted == false && $("body").scrollTop() == 0)) {
				    		$("html, body").animate({ scrollTop: 1215 + 'px'}, 1000);
				    	}
				    	else {
				    		$("html, body").animate({ scrollTop: 1435 + 'px'}, 1000);
				    	}
				    	return true;
				});

				$("#arrinexSolutionLink").click(function() {
					if (parallax_shifted == true || (parallax_shifted == false && $("body").scrollTop() == 0)) {
				    		$("html, body").animate({ scrollTop: 2681 + 'px'}, 1010);
				    	}
				    	else {
				    		$("html, body").animate({ scrollTop: 2901 + 'px'}, 1000);
				    	}
				    	return true;
				});

				$("#solutionButt").click(function() {
					if (parallax_shifted == true || (parallax_shifted == false && $("body").scrollTop() == 0)) {
				    		$("html, body").animate({ scrollTop: 2681 + 'px'}, 1080);
				    	}
				    	else {
				    		$("html, body").animate({ scrollTop: 2901 + 'px'}, 1000);
				    	}
				    	return true;
				});

				$("#chronicRhinitisButt").click(function() {
				    	if (parallax_shifted == true || (parallax_shifted == false && $("body").scrollTop() == 0)) {
				    		$("html, body").animate({ scrollTop: 458 + 'px'}, 1000);
				    	}
				    	else {
				    		$("html, body").animate({ scrollTop: 678 + 'px'}, 1000);
				    	}
				    	return true;
				});

				$("#sabLink").click(function() {
					if (parallax_shifted == true || (parallax_shifted == false && $("body").scrollTop() == 0)) {
				    		$("html, body").animate({ scrollTop: 3600 + 'px'}, 1000);
				    	}
				    	else {
				    		$("html, body").animate({ scrollTop: 3590 + 'px'}, 1000);
				    	}
				    	return true;
				});


	//FUNCTION to assist carousel
		$(".pictureDescription[data-position='1']").css("display","block");


	////////////	drop down menus
        $( "#navBarList li a" ).mouseover(
		  function() {
		    $( this ).parent().find(".dropDownList").addClass("dropDownON");
		    
		  });
        $( "#navBarList li" ).mouseleave( function() {
		    $( this ).find("ul").removeClass("dropDownON");
		    
		  });

	//this PART was added to ensure the cogs didn't interfere with the DD menu
	        $( "#navBarList li" ).mouseleave(
			  function() {

			    	var over_DD = false;
				    $( ".dropDownList " ).mouseover( function() {
				    over_DD = true;
				    
				  });
				    if (!over_DD)
				    {
				    	$( this ).find(".dropDownList").removeClass("dropDownON")
				    }
			    
			  });

	//close the description of vahid and mojgan
	    	$("#boy_face .close_gear_modal").click(function(){
	    		$(this).parent("div").css("display","none");
	    		playBoyGearMotion();
	    	});
	    	$("#girl_face .close_gear_modal").click(function(){
	    		$(this).parent("div").css("display","none");
	    		playGirlGearMotion();
	    	});
	    	$("#boy_picture").click(function(){
	    		$(this).prev().prev().css("display","block");
	    		pauseBoyGearMotion();
	    	});
	    	$("#girl_picture").click(function(){
	    		$(this).prev().prev().css("display","block");
	    		pauseGirlGearMotion();
	    	});



    ///////////////////FUNCTION for the cool highlight method for the DropDownMenus
       	$(".dropDownLI").mouseover(function(){
       		$(this).find(".highlightLeft").css("opacity","1").css("left","0px");

       		$(this).find(".highlightRight").css("opacity","1").css("left","0px");
       	});
       	$(".dropDownLI").mouseleave(function(){
       		$(this).find(".highlightLeft").css("opacity","0").css("left","-196px");

       		$(this).find(".highlightRight").css("opacity","0").css("left","196px");
       	});



    //////////////login modal
    	$("#forInvestors").click(
    		function(){
    			$("#contact").css("opacity","0");
    			$("#contact").css("z-index","0");
    			$("#navBarDiv").css("z-index","1000"); //1000 to fix issue of pdf z index exceeding z index of navbar in investors page FIXME
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

    	$("#contactUs").click(
    		function(){
    			$("#passwordField").css("opacity","0");
    			$("#passwordField").css("z-index","0");
    			$("#passwordInput").css("opacity","0");
    			$("#passwordInput").css("z-index","0");
    			$("#navBarDiv").css("z-index","1000"); //1000 to fix issue of pdf z index exceeding z index of navbar in investors page FIXME
    			$("#contact").css("opacity",".8");
    			$("#contact").css("z-index","3");
    		});

    	$("#contactUs").mouseout(
    		function() {
    			$("#navBarDiv").css("z-index","1");
    			$("#contact").css("opacity", "0");
    			$("#contact").css("z-index","0");


    		});


});


//////////Display Bio
    // function fullBio(event){
    // 	if ($(event + 'Para').css("display") == 'none'){
    // 		//$("#sab").css("height", "670px");
    // 		//$(event).parent().css("height", "235px");
    // 		$("#hwangPara").css("display", "none");
    // 		$("#hwangButton").html("&nbsp; &nbsp;Full Bio &darr;");
    // 		$("#hwangHeader").css("background", "rgba(255,255,255,.7");
    // 		$("#weissPara").css("display", "none");
    // 		$("#weissButton").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full Bio &darr;");
    // 		$("#weissHeader").css("background", "rgba(255,255,255,.7");
    // 		$("#bolgerPara").css("display", "none");
    // 		$("#bolgerButton").html("Full Bio &darr;");
    // 		$("#bolgerHeader").css("background", "rgba(255,255,255,.7");
    // 		$("#goodePara").css("display", "none");
    // 		$("#goodeButton").html("&nbsp;&nbsp;&nbsp;&nbsp;Full Bio &darr;");
    // 		$("#goodeHeader").css("background", "rgba(255,255,255,.7");
    // 		$("#nelsonPara").css("display", "none");
    // 		$("#nelsonButton").html("Full Bio &darr;");
    // 		$("#nelsonHeader").css("background", "rgba(255,255,255,.7");
    // 		$("#stromePara").css("display", "none");
    // 		$("#stromeButton").html("Full Bio &darr;");
    // 		$("#stromeHeader").css("background", "rgba(255,255,255,.7");
    // 		$(event + 'Para').css("transition", "display .7s ease");
    // 		$(event + 'Para').css("display", "inline");
    // 		$(event + 'Button').html("Full Bio &uarr;");
    // 		$(event + 'Header').css("transition", "background .7s ease");
    // 		$(event + 'Header').css("background", "rgba(125,125,125,.7");

    // 	} else{
    // 		//$(event).parent().css("height", "100px");
    // 		//$("#sab").css("height", "270px");
    // 		$(event + 'Header').css("transition", "background .7s ease");
    // 		$(event + 'Header').css("background", "rgba(255,255,255,.7");
    // 		$(event + 'Para').css("transition", "display .7s ease");
    // 		$(event + 'Para').css("display", "none");
    // 		$(event + 'Button').html("Full Bio &darr;");
    // 	}
    // }
		

/////////////////PASSWORD SCRIPT START///////////////////////
function verifyKey(e) {
    var keycode;
    if (window.event)
        keycode = window.event.keyCode;
    if (keycode == 13) {
        return verification();
    }
}
function verification() {
	// var passwordArray = ["a", "b", "password"];
	var passwordArray = ["0cc175b9c0f1b6a831c399e269772661", "92eb5ffee6ae2fec3ad71c777531578f", "5f4dcc3b5aa765d61d8327deb882cf99"];

    var x;
    var invalidDisplay = document.getElementById('errorPar');
    var i;
    x = document.getElementById("passwordInput").value;
    var hashedPasswordInput = CryptoJS.MD5(x);
    // alert(hashedPasswordInput);
    try { 
        for (i = 0; i < passwordArray.length; i++) {
			if(hashedPasswordInput == passwordArray[i]) {
	    	    invalidDisplay.style.opacity = "0";
	    	    window.open("investors.html");
	    	    return;
			}
		}
        return invalid();
    }
    catch(err) {
        message.innerHTML = "Error in input: " + err;
    }
}

var shakeCount = 0;
function invalid() {
    var invalidDisplay = document.getElementById('errorPar');
    document.getElementById("passwordInput").value = "";
    invalidDisplay.style.opacity = 1;
    
    shakeCount++;
    if (shakeCount != 1) { 
	    var elem = invalidDisplay;
	    var invalidDisplay1 = elem.cloneNode(true);
	    elem.parentNode.replaceChild(invalidDisplay1, elem);
	    invalidDisplay1.style.animation = "shake";
	    invalidDisplay1.style.animationDuration = "1s";
	    alert("invalid key" + shakeCount);
	}

}

function pause() {
	var invalidDisplay = document.getElementById('errorPar');
    invalidDisplay.style.animationPlayState = "paused";
}


/////////////////PASSWORD SCRIPT END///////////////////////

var card_1_flipped_back = 1;
var card_2_flipped_back = 1;
var card_3_flipped_back = 1;

function rotate(card, container, ident) {

	if (card == "f1_card1"  )
	{

		
			var car = document.getElementById(card);
			car.style.transition = "1s linear";
			var rotateDeg = card_1_flipped_back * 180;
			car.style.transform = "rotateY("+rotateDeg+"deg)" ;
		
	}
	if (card == "f1_card2" )
	{

		
			var car = document.getElementById(card);
			car.style.transition = "1s linear";
			var rotateDeg = card_2_flipped_back * 180;
			car.style.transform = "rotateY("+rotateDeg+"deg)" ;
		
	}
	if (card == "f1_card3" )
	{

		
			var car = document.getElementById(card);
			car.style.transition = "1s linear";
			var rotateDeg = card_3_flipped_back * 180;
			car.style.transform = "rotateY("+rotateDeg+"deg)" ;
		
	}
	
}

function leftCard(card)
{
	if (card == "f1_card1")
	{
		card_1_flipped_back++;
	}
	else if (card == "f1_card2")
	{
		card_2_flipped_back++;
	}
	else if (card == "f1_card3")
	{
		card_3_flipped_back++;
	}
}


var carousel_is_on = false;
var carousel_var;
var count = 0;
var first_toggle = false;
function playCarousel()
{
	
	var pos_from_top = $("body").scrollTop();
	var vert_pos_exist_soln_div = $("#existingSolutions").offset().top;
	var height_exist_soln_div = parseFloat($("#existingSolutions").css("height"));
	
	//if (pos_from_top > vert_pos_exist_soln_div - height_exist_soln_div && pos_from_top < vert_pos_exist_soln_div + height_exist_soln_div)
	//if (pos_from_top > vert_pos_exist_soln_div && pos_from_top < vert_pos_exist_soln_div + height_exist_soln_div)
	//{
		// each cycle takes 6 seconds
		// if the carousel is not already on turn it on
			carousel_is_on = true;
			if (count == 0 )
			{
				$(".pictureDescription[data-position='1']").css("display","block");
				$(".pictureDescription[data-position='1']").css("opacity","1");
			}
			//alert("played!");
			
			executeCarousel();
			carousel_var = setInterval(function(){ executeCarousel() },5000);

			//hide the pause button
			$("#carouselPause").css("display","inline-block");
			$("#carouselPlay").css("display","none");
	//}
}

	//helperfunction for playCarousel()
		function executeCarousel()
		{
			// the first 5 seconds wait to put the red cirlce
			setTimeout(function(){
				if (carousel_is_on == true)
					displayRedCircle();

			},2500);

			// after the last second switch pictures
			setTimeout(function(){
				//hide the big red circle and return its original demensions and position
				if (carousel_is_on == true)
				{
					hideRedCircle();
					tickCarouselOne();
				}

			},5000);

		}
		//helper functions for execute carousel
				function displayRedCircle()
				{
					$("#wrong_pic_holder").css("display","block");
					$("#wrong_pic_holder").css("opacity","1");
					$("#wrong_pic_holder").css("top","0px");
					$("#wrong_pic_holder").css("left","120px");
					$("#wrong_pic_holder").css("width","600px");
					$("#wrong_pic_holder").css("height","600px");
				}
				function hideRedCircle()
				{
					$("#wrong_pic_holder").css("display","none");
					$("#wrong_pic_holder").css("top","-225px");
					$("#wrong_pic_holder").css("left","-140px");
					$("#wrong_pic_holder").css("width","1000px");
					$("#wrong_pic_holder").css("height","1000px");
				}

				var carousel_in_motion = false;
				function tickCarouselOne()
				{
					if (carousel_in_motion == false)
					{
						carousel_in_motion = true;
						if (count == -1 || ((count+1) % 5 == 0 && count > 0))
						{
							$(".carouselList").css("margin-left","0px");
							count++;
						}
						else
						{
							var left_position = parseFloat($(".carouselList").css("margin-left")) - 695;
							$(".carouselList").css("margin-left",""+left_position + "px");
							count++;
						}
						// hide all the list items
						$(".pictureDescription").css("display","none");
						// the first one starts off display: none so this fixes that

						// only show the one we care about
						 var the_chossen_one = $(".pictureDescription[data-position='"+((count%5)+1)+"']");
						the_chossen_one.css("display","block");
						the_chossen_one.css("opacity","1");
						setTimeout(function(){
							carousel_in_motion = false;
						},1500);
						// alert();
					}
				}



		function pauseCarousel()
		{
			carousel_is_on = false;
			$("#carouselPlay").css("display","inline-block");
			$("#carouselPause").css("display","none");
			clearTimeout(carousel_var);
		}

		function tickRight()
		{
			pauseCarousel();
			hideRedCircle();
			tickCarouselOne();
		}

		function tickLeft()
		{
			pauseCarousel();
			hideRedCircle();
			// execture tickCarouselOne() in reverse
			if (carousel_in_motion == false)
			{
				carousel_in_motion = true;
				if ((count) % 5 == 0 )
				{
					$(".carouselList").css("margin-left","-2778.6767578125px");
					count--;
				}
				else
				{//alert(count);
					var left_position = parseFloat($(".carouselList").css("margin-left")) + 695;
					$(".carouselList").css("margin-left",""+left_position + "px");
					count--;
				}
				// hide all the list items
				$(".pictureDescription").css("display","none");
				// the first one starts off display: none so this fixes that

				// only show the one we care about
				 var the_chossen_one = $(".pictureDescription[data-position='"+((count%5)+1)+"']");
				the_chossen_one.css("display","block");
				the_chossen_one.css("opacity","1");

				setTimeout(function(){
							carousel_in_motion = false;
						},1500);
			}
		}

// code for TEAM and COGS/ GEARS///////////////////////////////////////////////////////////////

function pauseGirlGearMotion()
{
	$("#girl_gear, #girl_face .spoke_tip1").css("-webkit-animation-play-state","paused").css("-moz-animation-play-state","paused").css("-o-animation-play-state","paused").css("animation-play-state","paused");
	$("#girl_gear, #girl_face .spoke_tip2").css("-webkit-animation-play-state","paused").css("-moz-animation-play-state","paused").css("-o-animation-play-state","paused").css("animation-play-state","paused");
} 

function playGirlGearMotion()
{
	$("#girl_gear, #girl_face .spoke_tip1").css("-webkit-animation-play-state","running").css("-moz-animation-play-state","running").css("-o-animation-play-state","running").css("animation-play-state","running");
	$("#girl_gear, #girl_face .spoke_tip2").css("-webkit-animation-play-state","running").css("-moz-animation-play-state","running").css("-o-animation-play-state","running").css("animation-play-state","running");
}

function pauseBoyGearMotion()
{
	$("#boy_gear, #boy_face .spoke_tip1").css("-webkit-animation-play-state","paused").css("-moz-animation-play-state","paused").css("-o-animation-play-state","paused").css("animation-play-state","paused");
	$("#boy_gear, #boy_face .spoke_tip2").css("-webkit-animation-play-state","paused").css("-moz-animation-play-state","paused").css("-o-animation-play-state","paused").css("animation-play-state","paused");
} 

function playBoyGearMotion()
{
	$("#boy_gear, #boy_face .spoke_tip1").css("-webkit-animation-play-state","running").css("-moz-animation-play-state","running").css("-o-animation-play-state","running").css("animation-play-state","running");
	$("#boy_gear, #boy_face .spoke_tip2").css("-webkit-animation-play-state","running").css("-moz-animation-play-state","running").css("-o-animation-play-state","running").css("animation-play-state","running");
}



$(document).on('scroll', function(e) {
	
        var S = $(this).scrollTop() - 3235,                // scrolled distance
            T = 315 + (S/45),                        // value for Top
            L = 200 + (S/45)							//value for Left
            H = 100*(S/75)							//value for height
            W = 100*(S/70)							//value for width
            D = 360 *(S/100)						//value for degrees
            //L = 10 + Math.abs(Math.sin(S/40)*50);  // value for Left
            //set CSS
           
        if(H > 10 && H <= 401){
        	$("#dandelion").css({"margin-top": T + 'px'});
        	$("#dandelion").css({"margin-left": L + 'px'});
        	$("#dandelion").css({"height": H + 'px'});
        	$("#dandelion").css({"width": W + 'px'});
        	$("#dandelion").css({"transform": 'rotate(' + D + 'deg)'});
        }
        if(H>90){
        		$("#hwangHeader").fadeIn();
		        $("#bud").fadeIn();
		    } else{
		    	$("#hwangPara").fadeOut();
		    	$("#hwangHeader").fadeOut();
		        $("#bud").fadeOut();
		    }
		    if(H>150){
        		$("#weissHeader").fadeIn();
		        $("#bud1").fadeIn();
		    } else{
		    	$("#weissPara").fadeOut();
		    	$("#weissHeader").fadeOut();
		        $("#bud1").fadeOut();
		    }
		    if(H>200){
		    	$("#sabHeader").fadeIn();
        		$("#stromeHeader").fadeIn();
		        $("#bud2").fadeIn();
		    } else{
		    	$("#stromePara").fadeOut();
		    	$("#stromeHeader").fadeOut();
		        $("#bud2").fadeOut();
		        $("#sabHeader").fadeOut();
		    }
		    if(H>300){
        		$("#bolgerHeader").fadeIn();
		        $("#bud3").fadeIn();
		    } else{
		    	$("#bolgerPara").fadeOut();
		    	$("#bolgerHeader").fadeOut();
		        $("#bud3").fadeOut();
		    }
		     if(H>360){
		     	$("#dandelion").fadeOut();
		     	$("#dandelion2").fadeIn();
        		$("#goodeHeader").fadeIn();
		        $("#bud4").fadeIn();
		        $("#dandelion").css({"margin-top": T + 'px'});
        		$("#dandelion").css({"margin-left": L + 'px'});
        		$("#dandelion").css({"height": '400px'});
        		$("#dandelion").css({"width": '428'});
		    } else{
		    	$("#dandelion").fadeIn();
		     	$("#dandelion2").fadeOut();
		    	$("#goodePara").fadeOut();
		    	$("#goodeHeader").fadeOut();
		        $("#bud4").fadeOut();
		    }
		    if(H>390){
        		$("#nelsonHeader").fadeIn();
		        $("#bud5").fadeIn();
		    } else{
		    	$("#nelsonPara").fadeOut();
		    	$("#nelsonHeader").fadeOut();
		        $("#bud5").fadeOut();
		    }
    });

function sabClick(event){
	$("#hwangPara").css("display", "none");
    $("#weissPara").css("display", "none");
   	$("#stromePara").css("display", "none");
    $("#bolgerPara").css("display", "none");
    $("#goodePara").css("display", "none");
    $("#nelsonPara").css("display", "none");
	$(event + 'Para').css("text-align", "center");
    $(event + 'Para').css("width", "300px");
    $(event + 'Para').css("height", "200px");
    $(event + 'Para').css("display", "inline-block");
}

var angle = 0;
setInterval(function(){
      angle += .33;
      $(".budRow2").css({"transform": 'rotate(' + angle + 'deg)'});
      if (!($("#bud").css("display") == 'none')){
      	$("#bud").css({"transform": 'rotate(' + angle + 'deg)'});
      }
      if (!($("#bud1").css("display") == 'none')){
      	$("#bud1").css({"transform": 'rotate(' + angle + 'deg)'});
      }
      if (!($("#bud2").css("display") == 'none')){
      	$("#bud2").css({"transform": 'rotate(' + angle + 'deg)'});
      }
      if (!($("#bud3").css("display") == 'none')){
      	$("#bud3").css({"transform": 'rotate(' + angle + 'deg)'});
      }
      if (!($("#bud4").css("display") == 'none')){
      	$("#bud4").css({"transform": 'rotate(' + angle + 'deg)'});
      }
      if (!($("#bud5").css("display") == 'none')){
      	$("#bud5").css({"transform": 'rotate(' + angle + 'deg)'});
      }
     //$("#bud").rotate(angle);
}, 50);



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











