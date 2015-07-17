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

function homeParReveal(ident) {
	var id = document.getElementById(ident);
	id.style.opacity = 1;
	id.style.color = "rgb(105,105,105)";
}

function homeParHide(ident) {
	var id = document.getElementById(ident);
	id.style.opacity = 0;
}

$(document).ready(function(){
        $("body").scroll(function() {
            var scrolled = $(window).scrollTop();
            var win_height= $(window).height();
            var title = $("#homeParHeader");
            var revealTitleTop = title.offset().top;
            if (scrolled + win_height <= (revealTitleTop /1.001 )){
                    title.fadeOut(1000);
            }
        });
    });



// $(document).ready(function() {
//     $("body").scroll(function () {
//     	var scrolled = $(window).scrollTop(); 
//     	var imgApex = $("#homeImageDiv").scrollTop();
//     	if (scrolled >= imgApex) {
//     		alert("success");
//     		$("#homeParHeader").fadeOut(5000);
//     	}
//     }
// }









