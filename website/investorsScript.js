//============================================================
// JAVASCRIPT FOR INVESTORS PAGE
//============================================================
    
// firefox and safari lag hard when the PDFs are directly embedded into the cite so we


var executive_pdf =  '<object data="executive.pdf" type="application/pdf" width="100%" height="100%"> </object>';
var AR_and_its_impact_on_productivity = '<object data="AR & its impact on work productivity.pdf" type="application/pdf" width="100%" height="100%"> </object>';
var canning_neurology_of_AR = '<object data="Canning_ neurology of Allergic inflammation and rhinitis.pdf" type="application/pdf" width="100%" height="100%"> </object>';
var kikawada = '<object data="kikawada.pdf" type="application/pdf" width="100%" height="100%"> </object>';
var epidemiology = '<object data="epidemiology.pdf" type="application/pdf" width="100%" height="100%"> </object>';
var ikeda = '<object data="ikeda.pdf" type="application/pdf" width="100%" height="100%"> </object>';
var whitePaper = '<object data="WhitePaper.pdf" type="application/pdf" width="100%" height="100%"> </object>';
var prevelence = '<object data="prevalence.pdf" type="application/pdf" width="100%" height="100%"> </object>';
var businitch = '<object data="businitch.pdf" type="application/pdf" width="100%" height="100%"> </object>';



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
function selectMiniArticle(article_title,item)
{
	// get the HTMl for the PDF object file 
	var mini_article_HTML = '<div class = "smallPDF">' + window[article_title] +'</div>';
							// alert(window[article_title]);
	//hide instructions
	$("#instructions").css("display","none");

	// reveal the small pdf (no HTML yet)
	$(".previewItem").css("display","none");
	$(".previewItem[data-art-num="+article_title+"]").css("display","block");

	// insert the HTML
	$(".previewItem").html("");
	$(".previewItem[data-art-num="+article_title+"]").html(mini_article_HTML);

	// underline title of slected document
	
	$(".documentListLI").css("border-bottom","1px solid transparent");
	$(item).parent().css("border-bottom","1px solid black");
	// this.style.borderBottom = "2px solid black";
}

function selectMainArticleAndHideDropDown(article_title,item)
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
		deployVacuum(article_title,item);

}

var currentArticleTitle = "executive_pdf";
var permit_retraction = false;

function deployVacuum(article_title,item)
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
			          					borderTop: "120px solid transparent", 
									    borderRight: "100px solid blue", 
									    borderBottom: "120px solid transparent",
									    right: "-30px"

				    	}, 300, function() { 
				    		// vacuum_nosel COMPLETE.
				    		$(".article[data-art-num="+currentArticleTitle+"]").find(".trapazoidTop").addClass("trapazoidTopLive");
				    		$(".article[data-art-num="+currentArticleTitle+"]").find(".trapazoidBot").addClass("trapazoidBotLive");
				    		var time_to_slid = window.innerWidth * -0.5 + 1300;
				    		$(".article[data-art-num="+currentArticleTitle+"]").animate({

				    			right: "1300px"

				    			}, time_to_slid, function(){ //1600 --> 500 1400 --> 600  1200 --> 700     600 = -1/2x + 1300

				    				// article COMPLETE
				    					
				    					// set the hidden article back to default css 
				    					$(".article[data-art-num="+currentArticleTitle+"]").css("right","0px");
				    					$(".article[data-art-num="+currentArticleTitle+"]").find(".trapazoidTop").removeClass("trapazoidTopLive");
				    					$(".article[data-art-num="+currentArticleTitle+"]").find(".trapazoidBot").removeClass("trapazoidBotLive");

				    					
				    					var main_article_HTML = window[article_title] + '<div class="trapazoidTop"></div>' + '<div class="trapazoidBot"></div>';

										//insert the HTML after clearing all others
										$(".article").html("");
										$(".article[data-art-num="+article_title+"]").html(main_article_HTML);


				    					// get rid of the vacuum device
				    					retractVacuum();

				    					//hide all main articles and display the desired one (no HTML yet)
										$(".article").css("display","none");										
										$(".article[data-art-num="+article_title+"]").css("display","block");


										// set the current article number
										currentArticleTitle = article_title;
				    				

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