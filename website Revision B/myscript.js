/** 
 *  Javascript for index.html
 *  @author Daniel Wong, Herberth Bonilla, Devin Morgan
 */


 //function to check browser type 
 $(document).ready(function() {  
    navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        alert('IE '+(tem[1] || '') );
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
	})();
 	
 	
 	var prefix = navigator.sayswho.substring(0,6);
 	if (prefix == "Safari") {
 		$("#homeImageDiv").css("height", "700");
 	}
 	else {
 		$(".budRow1").css( "animation-name", "none");
 		$(".budRow2").css( "animation-name", "none");
 	}
 });


function adjustPicture() {
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




$(document).ready(function(){

	var scroll_point1 = 0;
	var trigger_fade_height = 150;
	var parallax_shifted = false;
        $(document).scroll(function() {
            
            //FUNCTIONS that deals with fade in and out
	            var scroll_point2 = $("body").scrollTop() + $("html").scrollTop();;
	            //						^for chrome				^for firefox
	            
	            if ((scroll_point2 - scroll_point1 > 0) && scroll_point2 > 450) { // scrolling down 410
					$("#copyright").css("opacity", "1");
				}
			    if ((scroll_point2 - scroll_point1 < 0) && scroll_point2 < 30) {// scrolling up 
					$("#copyright").css("opacity", "0");
			    }

	            if ((scroll_point2 - scroll_point1 > 0) && scroll_point2 > 150) { // scrolling down
			    	$("#rhinitisInfo").css("opacity","1");
				}

			    if ((scroll_point2 - scroll_point1 < 0) && scroll_point2 < 220)// scrolling up
			    {
			    	$("#rhinitisInfo").css("opacity","0");
			    }

			    if ((scroll_point2 - scroll_point1 > 0) && scroll_point2 > 845) { //scrolling down
			    	$("#existingSolutions").css("opacity","1");
 			    }
			     if ((scroll_point2 - scroll_point1 < 0) && scroll_point2 < 1125) { //scrolling up
			    	$("#existingSolutions").css("opacity","0");
 			    }
 
			     if ((scroll_point2 - scroll_point1 > 0) && scroll_point2 > 1400) { //scrolling down
			    	$("#arrinexSolution").css("opacity","1");
			    }
			    if ((scroll_point2 - scroll_point1 < 0) && scroll_point2 < 1920) { //scrolling up
			    	$("#arrinexSolution").css("opacity","0");
			    }


			    
			    scroll_point1 = scroll_point2;// update the data points to ensure accuracy

			    if (scroll_point2 > 30)
			    {
			    	$("#navBarDiv").css("height","50px");
			    	$(".navBarLinks").css("padding","13px 25px");
			    	$("#logoBlock").css("padding","10px 17px");
			    	$(".dropDownList").css("top","17px");

			    	$("#documents").css("padding-bottom","0px");

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
					$("#arrinexSolution").css("height",""+ 630 - parallax_displacement+"px");
					$("#firstHomeText").css("opacity",""+parallax_opacity);
				}


			//FUNCTION trigger the carousel initially
			if (!isInvestors) {
				var pos_from_top = $("body").scrollTop();
				var vert_pos_exist_soln_div = $("#existingSolutions").offset().top;
				var height_exist_soln_div = parseFloat($("#existingSolutions").css("height"));
				
				if (pos_from_top > vert_pos_exist_soln_div - height_exist_soln_div && pos_from_top < vert_pos_exist_soln_div + height_exist_soln_div && first_toggle == false)
				{
					first_toggle = true;
					playCarousel();
				}
			}
        });


	/* ================= FUNCTIONS FOR NAVIGATION BAR SCROLLING ================= */
				
				$("#company").click(function() {
					$("html, body").animate({ scrollTop: 3000+ 'px'}, 1000);
				});

				$("#teamLink").click(function() {
					if (isInvestors == false) {
						
						if (parallax_shifted == true || (parallax_shifted == false && $("body").scrollTop() == 0)) {
							
							$("html, body").animate({ scrollTop: 1960 + 'px'}, 1000);
						}
						else {
							$("html, body").animate({ scrollTop: 2140 + 'px'}, 1000);
		    			}
		    			return true;

		    		}
		    		else window.location = "index.html#team";					
				});

				

				$("#whatIsLink").click(function() {
					if (isInvestors == false) {

						if (parallax_shifted == true || (parallax_shifted == false && $("body").scrollTop() == 0)) {
					    		$("html, body").animate({ scrollTop:  500 + 'px'}, 1000); 
					    	}
					    	else {
					    		$("html, body").animate({ scrollTop: 678 + 'px'}, 1000); //678
					    	}
					    	return true;

					    }
					else window.location = "index.html#rhinitisInfo";
				});


				$("#chronicRhinitisButt").click(function() {
				    	if (parallax_shifted == true || (parallax_shifted == false && $("body").scrollTop() == 0)) {
				    		$("html, body").animate({ scrollTop: 510 + 'px'}, 1000);
				    	}
				    	else {
				    		$("html, body").animate({ scrollTop: 678 + 'px'}, 1000);
				    	}
				    	return true;
				});


				$("#currentSolutionsLink").click(function() {
					if (isInvestors == false) {
						if (parallax_shifted == true || (parallax_shifted == false && $("body").scrollTop() == 0)) {
				    		$("html, body").animate({ scrollTop: 1215 + 'px'}, 1000);
				    	}
				    	else {
				    		$("html, body").animate({ scrollTop: 1450 + 'px'}, 1000);
				    	}
				    	return true;
				    } 
					else window.location = "index.html#existingSolutions";

				});

				$("#arrinexSolutionLink").click(function() {
					if (isInvestors == false) {
						if (parallax_shifted == true || (parallax_shifted == false && $("body").scrollTop() == 0)) {
					    		$("html, body").animate({ scrollTop: 2681 + 'px'}, 1010);
					    	}
					    	else {
					    		$("html, body").animate({ scrollTop: 2901 + 'px'}, 1000);
					    	}
					    	return true;
					} else window.location = "index.html#arrinexSolution";
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

				$("#sabLink").click(function() {
					if (isInvestors == false) {
						if (parallax_shifted == true || (parallax_shifted == false && $("body").scrollTop() == 0)) {
					    		$("html, body").animate({ scrollTop: 3600 + 'px'}, 1000);
					    	}
					    	else {
					    		$("html, body").animate({ scrollTop: 3590 + 'px'}, 1000);
					    	}
					    	return true;
				    } else window.location = "index.html#sab";
				});


	//FUNCTION to assist carousel
		$(".pictureDescription[data-position='1']").css("display","block");


	////////////	drop down menus
        $( "#navBarList li a").mouseover(
		  function() {
		    $( this ).parent().find(".dropDownList").addClass("dropDownON");
		    $('#navBarDiv').css('z-index', '3000');
		  });
       
        $( "#navBarList li" ).mouseleave( function() {
		    $( this ).find("ul").removeClass("dropDownON");
		  });

        $( ".dropDownList" ).mouseleave( function() {
		    $('#navBarDiv').css('z-index', '1000');
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


	/* ============ FUNCTION for the cool highlight method for the DropDownMenus ============ */
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
    			$("#passwordField").css("z-index","1010");
    			$("#passwordInput").css("opacity",".8");
    			$("#passwordInput").css("z-index","1010");
    		});

    	$("#passwordField").click(
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
    			$("#contact").css("opacity","1");
    			$("#contact").css("z-index","1000");
    		});

    	$("#contactUs").mouseout(
    		function() {
    			$("#contact").css("opacity", "0");
    			$("#contact").css("z-index","0");
    		});
});
		

/////////////////PASSWORD SCRIPT START///////////////////////
function verifyKey(e) {
    var keycode;
        keycode = (window.event) ? e.which : e.keyCode;

    if (keycode == 13) {

        return verification();
    }
}

var isInvestors = false;
function verification() {
	
	var passwordArray = ["0cc175b9c0f1b6a831c399e269772661", "92eb5ffee6ae2fec3ad71c777531578f",
	 "5f4dcc3b5aa765d61d8327deb882cf99", "827c749c685b3db7770955ec3b439f92"];
    
 //    var accessed = []
 //    var clients = { 
 //    	"daniel" : "password1", 
 //    	"herb" : "password2",
 //    	"dev" : "password3"
 //    }
 //    for client in clients {
 //    	for (i = 0; i < clients[client].length; i++) {
 //    		if (hashedPasswordInput == clients[client][i]) {
 //    			accessed.push(client);
 //    		}

 //    	}
 //    }

    var x;
    var invalidDisplay = document.getElementById('errorPar');
    var i;
    x = document.getElementById("passwordInput").value;
    var hashedPasswordInput = CryptoJS.MD5(x);
    try { 
        for (i = 0; i < passwordArray.length; i++) {
			if(hashedPasswordInput == passwordArray[i]) {
	    	    invalidDisplay.style.opacity = "0";
	    	    window.location = "investors.html";
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


	    //Safari compatibility
	    invalidDisplay1.style.webkitAnimationName = "shake";
	    invalidDisplay1.style.webkitAnimationDuration = "1s";
	  
	    invalidDisplay1.style.animation = "shake";
	    invalidDisplay1.style.animationDuration = "1s";
	}

}


/////////////////PASSWORD SCRIPT END///////////////////////

var card_1_flipped_back = 1;
var card_2_flipped_back = 1;
var card_3_flipped_back = 1;

function rotate(card, container, ident) {

	if (card == "f1_card1"  )
	{
		var rotateDeg = card_1_flipped_back * 180;
		$('#f1_card1').css('transition', 'all 1s linear');
		$('#f1_card1').css('-webkit-transform', 'rotateY('+ rotateDeg +'deg)');
		$('#f1_card1').css('-moz-transform', 'rotateY('+ rotateDeg +'deg)');
		
		 	
			//for safari compatibility
		 	if (card_1_flipped_back % 2 == 1) {
		 		$(document).ready(function(){
					 
					 setTimeout(function(){
						$('#logoWrapper1').css('display', 'none');
						 }, 500);
					});
			} else{ 
			 		$(document).ready(function(){
					 setTimeout(function(){
			       $('#logoWrapper1').css('display', 'block');
						 }, 500);
					});
			}		
	}

	if (card == "f1_card2" )
	{	
		var rotateDeg = card_2_flipped_back * 180;
		$('#f1_card2').css('transition', 'all 1s linear');
		$('#f1_card2').css('-webkit-transform', 'rotateY('+ rotateDeg +'deg)');
		$('#f1_card2').css('-moz-transform', 'rotateY('+ rotateDeg +'deg)');

		if (card_2_flipped_back % 2 == 1) {

		 		$(document).ready(function(){
					 
					 setTimeout(function(){
						$('#logoWrapper2').css('display', 'none');
						 }, 500);
					});
			} else{ 
			 		$(document).ready(function(){
					 setTimeout(function(){
			       $('#logoWrapper2').css('display', 'block');
						 }, 500);
					});
			}		
	
	}

	if (card == "f1_card3" )
	{
		var rotateDeg = card_3_flipped_back * 180;
		$('#f1_card3').css('transition', 'all 1s linear');
		$('#f1_card3').css('-webkit-transform', 'rotateY('+ rotateDeg +'deg)');
		$('#f1_card3').css('-moz-transform', 'rotateY('+ rotateDeg +'deg)');

		if (card_3_flipped_back % 2 == 1) {

		 		$(document).ready(function(){
					 
					 setTimeout(function(){
						$('#logoWrapper3').css('display', 'none');
						 }, 500);
					});
			} else{ 
			 		$(document).ready(function(){
					 setTimeout(function(){
			       $('#logoWrapper3').css('display', 'block');
						 }, 500);
					});
			}		

		
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
				{
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





