//============================================================
// JAVASCRIPT FOR INVESTORS PAGE
//============================================================
    

$(document).ready(function(){
	// FUNCTION to reveal document navigator
		
});

var dd_animation_in_progress = false;

function showDropDown()
{
	if (dd_animation_in_progress == false)
	{
		window.console.log((dd_animation_in_progress == false)+ "   show");
		$("#documentDDContainer").css("display","block");
		$("#documentDDContainer").parent().html($("#documentDDContainer").parent().html());
		$("#documentDDContainer").removeClass("ddUp").addClass("ddDown");
		
		$("#docDescriptionList, #descListHeader").css("display","block");
		
		dd_animation_in_progress = true;
	}
	
}


function hideDropDown()
{
	if (dd_animation_in_progress == true)
	{
		window.console.log((dd_animation_in_progress == true) + "   hide");
		$("#documentDDContainer").parent().html($("#documentDDContainer").parent().html());
		$("#documentDDContainer").removeClass("ddDown").addClass("ddUp");
		$("#docDescriptionList, #descListHeader").css("display","none");
		

			dd_animation_in_progress = false;


	}
	
}


//FUNCTION to reveal quick preview
function selectMiniArticle(article_number,item)
{
	//hide instructions
	$("#instructions").css("display","none");
	// reveal the small pdf
	$(".previewItem").css("display","none");
	$(".previewItem[data-art-num="+article_number+"]").css("display","block");

	// underline title of slected document
	
	$(".documentListLI").css("border-bottom","1px solid transparent");
	$(item).parent().css("border-bottom","1px solid black");
	// this.style.borderBottom = "2px solid black";
}

function selectMainArticleAndHideDropDown(article_number,item)
{
	//reset the drop down menu
		// hide all previews
		$(".previewItem").css("display","none");

		//erase the underline
		$(".documentListLI").css("border-bottom","1px solid transparent");

		//display instructions
		$("#instructions").css("display","block");

		// hide the drop down menu
		hideDropDown();

		//animate the vacuum removal
		deployVacuum(article_number,item);

}

var currentArticleNumber = 1;
var permit_retraction = false;

function deployVacuum(article_number,item)
{
	permit_retraction = true;
	$( "#vert_extend_rect" ).animate({

							height: "+=350"

	 	}, 300, function() {
		    // vert_extend_rect COMPLETE.
		    $("#horz_extend_rect").css("display","block");
		    $("#horz_extend_rect").animate({

		          					width: "+=100"

			    }, 300, function() {
			    	// horz_extend_rect COMPLETE.
			    	$("#vacuum_nosel").css("display","block");
			    	$("#vacuum_nosel").animate({

			          					height: "+=50",
			          					top: "-=25",
			          					borderTop: "60px solid transparent", 
									    borderRight: "100px solid blue", 
									    borderBottom: "60px solid transparent",
									    right: "-30px"

				    	}, 500, function() { 
				    		// vacuum_nosel COMPLETE.
				    		$(".article[data-art-num="+currentArticleNumber+"]").find(".trapazoidTop").addClass("trapazoidTopLive");
				    		$(".article[data-art-num="+currentArticleNumber+"]").find(".trapazoidBot").addClass("trapazoidBotLive");
				    		$(".article[data-art-num="+currentArticleNumber+"]").animate({

				    			right: "1300px"

				    			}, 500, function(){

				    				// article COMPLETE
				    					
				    					// set the hidden article back to default css 
				    					$(".article[data-art-num="+currentArticleNumber+"]").css("right","0px");
				    					$(".article[data-art-num="+currentArticleNumber+"]").find(".trapazoidTop").removeClass("trapazoidTopLive");
				    					$(".article[data-art-num="+currentArticleNumber+"]").find(".trapazoidBot").removeClass("trapazoidBotLive");

				    					//reset the top/ bot trapazoids so they can do animation again
				    					var parentHTML = $(".article[data-art-num="+currentArticleNumber+"]").parent().html();
				    					$(".article[data-art-num="+currentArticleNumber+"]").parent().html(parentHTML);


				    					// get rid of the vacuum device
				    					retractVacuum();

				    					//hide all main articles
										$(".article").css("display","none");

										//select the desired one
										$(".article[data-art-num="+article_number+"]").css("display","block");

										// set the current article number
										currentArticleNumber = article_number;
				    				

				    		});


			    	});

		    });

	});
	
}


function retractVacuum()
{
	if (permit_retraction == true)
	{
		permit_retraction = false;
		// retract blue triangle
		$("#vacuum_nosel").animate({

							height: "-=50",
	      					top: "+=25",
	      					borderTop: "25px solid transparent", 
						    borderRight: "50px solid blue", 
						    borderBottom: "25px solid transparent",
						    right: "0px"


			}, 300, function(){
				// nosel COMPLETE
				$("#vacuum_nosel").css("display","none");
				$("#horz_extend_rect").animate({

										width: "-=100"

					}, 300, function() {
						// horz_extend_rect COMPLETE
						$("#horz_extend_rect").css("display","none");
						$("#vert_extend_rect").animate({

												height: "-=350"

							}, 300, function(){
								//vert_extend_rect COMPLETE

						});

				});
				

		});
	}
	
}