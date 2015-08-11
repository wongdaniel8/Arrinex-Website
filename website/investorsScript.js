//============================================================
// JAVASCRIPT FOR INVESTORS PAGE
//============================================================
    
// firefox and safari lag hard when the PDFs are directly embedded into the cite and loaded all at once
// therefore each one of these (the pdf objects) is stored as a string here so it can be inserted at the approriate time not all at once
var executive_pdf =  '<object data="executive.pdf" type="application/pdf" width="100%" height="100%"> </object>';
var AR_and_its_impact_on_productivity = '<object data="AR & its impact on work productivity.pdf" type="application/pdf" width="100%" height="100%"> </object>';
var canning_neurology_of_AR = '<object data="Canning_ neurology of Allergic inflammation and rhinitis.pdf" type="application/pdf" width="100%" height="100%"> </object>';
var kikawada = '<object data="kikawada.pdf" type="application/pdf" width="100%" height="100%"> </object>';
var epidemiology = '<object data="epidemiology.pdf" type="application/pdf" width="100%" height="100%"> </object>';
var ikeda = '<object data="ikeda.pdf" type="application/pdf" width="100%" height="100%"> </object>';
var whitePaper = '<object data="WhitePaper.pdf" type="application/pdf" width="100%" height="100%"> </object>';
var prevelence = '<object data="prevalence.pdf" type="application/pdf" width="100%" height="100%"> </object>';
var businitch = '<object data="businitch.pdf" type="application/pdf" width="100%" height="100%"> </object>';


// the drop down is toggled by a hover and a mouseleave mechanism, so it tends to call the showDropDown/ hideDropDown function too many times and it lags

var dd_animation_in_progress = false; // <---- this variable keeps track of whether an animation is already in progress to avoid it getting called again if it is already running

function showDropDown()
{
	if (dd_animation_in_progress == false)
	{
		$("#documentDDContainer").css("display","block");
		$("#documentDDContainer").parent().html($("#documentDDContainer").parent().html()); //this replaces the innerHTML with itself because CSS animations only work once so the HTML must be refreshed for it to keep working
		$("#documentDDContainer").removeClass("ddUp").addClass("ddDown");
		
		$("#docDescriptionList, #descListHeader").css("display","block");
		
		dd_animation_in_progress = true;
	}
	
}


function hideDropDown()
{
	if (dd_animation_in_progress == true)
	{
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
	var mini_article_HTML = '<div class = "smallPDF">' + window[article_title] +'</div>'; // <div class = "smallPDF"> and </div> wrap around the mini articles to dictate the size of the PDF

	//hide instructions
	$("#instructions").css("display","none");

	// reveal the small pdf (no HTML yet)
	$(".previewItem").css("display","none");
	$(".previewItem[data-art-num="+article_title+"]").css("display","block");

	// insert the HTML
	$(".previewItem").html("");
	$(".previewItem[data-art-num="+article_title+"]").html(mini_article_HTML);

	// underline title of selected document
	$(".documentListLI").css("border-bottom","1px solid transparent");
	$(item).parent().css("border-bottom","1px solid black");

}

function selectMainArticleAndHideDropDown(article_title,item)
{
	//reset the drop down menu
		// hide all previewItems (aka all the miniPDFs)
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

var currentArticleTitle = "executive_pdf"; // <--- the page starts off display the Executive Summary PDF and this variable holds the currently visible article
var permit_retraction = false; // this variable indicates whether or not the vacuum can begin retracting (away to indicate that it has finished its job and can disappear)

function deployVacuum(article_title,item)
{
	permit_retraction = true;
	$( "#vert_extend_rect" ).css("display","block");
	$( "#vert_extend_rect" ).animate({

							height: "420px" //extends the vertical rectangle down (increasing its height)

	 	}, 200, function() {
		    // vert_extend_rect COMPLETE.
		    $("#horz_extend_rect").css("display","block");
		    $("#horz_extend_rect").animate({

		          					width: "150px" // extends the horizontal rectangle to the right (increaseing its width)

			    }, 200, function() {
			    	// horz_extend_rect COMPLETE.
			    	$("#vacuum_nosel").css("display","block");
			    	$("#vacuum_nosel").animate({

			          					height: "+=50",								// this animates the vacuum nosel: height of the nosel is determined by
			          					top: "345px",
									    right: "-30px"

				    	}, 200, function() { 
				    		// vacuum_nosel COMPLETE.
				    		$(".article[data-art-num="+currentArticleTitle+"]").find(".trapazoidTop").addClass("trapazoidTopLive");
				    		$(".article[data-art-num="+currentArticleTitle+"]").find(".trapazoidBot").addClass("trapazoidBotLive");
				    		var time_to_slide = window.innerWidth * -0.5 + 1300;  //<--- this is equation gives the time article should take moving the the left as a function of window.innerWidth
				    		$(".article[data-art-num="+currentArticleTitle+"]").animate({

				    			right: "1300px"

				    			}, time_to_slide, function(){ 

				    				// article COMPLETE
				    					
				    					// set the hidden article back to default css 
				    					$(".article[data-art-num="+currentArticleTitle+"]").css("right","0px");
				    					$(".article[data-art-num="+currentArticleTitle+"]").find(".trapazoidTop").removeClass("trapazoidTopLive");
				    					$(".article[data-art-num="+currentArticleTitle+"]").find(".trapazoidBot").removeClass("trapazoidBotLive");

				    					
				    					var main_article_HTML = window[article_title] + '<div class="trapazoidTop"></div>' + '<div class="trapazoidBot"></div>'; //<--- the suction animation is actually 2 right triangles that grow larger and cut off the ducument which is the purpose of the '<div class="trapazoidTop"></div>' + '<div class="trapazoidBot"></div>'

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
	if (permit_retraction == true) // only retract the vacuum when the document has left the screen
	{
		permit_retraction = false; // once it starts to retract it should not call the retractVacuum() function again until it is done retracting
		// retract blue triangle
		$("#vacuum_nosel").animate({      //the following animations are just the reverse of the animations that extend the vacuum device contraption

							height: "-=50",
	      					top: "370px",
						    right: "0px"


			}, 200, function(){
				// nosel COMPLETE
				$("#vacuum_nosel").css("display","none");
				$("#horz_extend_rect").animate({

										width: "50px"

					}, 200, function() {
						// horz_extend_rect COMPLETE
						$("#horz_extend_rect").css("display","none");
						$("#vert_extend_rect").animate({

												height: "70px"

							}, 200, function(){
								//vert_extend_rect COMPLETE
								$( "#vert_extend_rect" ).css("display","none");

						});

				});
				

		});
	}
	
}

function closeIntro() {
	$("#info").css("display","none");
}

 
 $(document).ready(function() {
    $("#info").animate({left: 40}, 1000);

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

 	if (navigator.sayswho == "Safari 8") {
 		$("#pdfDisplay").css("background-color", "rgba(0, 0, 0, 0.19)");
 		$("#pdfDisplay").css("margin-top", "16px");
 		$("#html").css("background-color", "rgba(0, 0, 0, 0.28)");
 	}
 });






















