$(document).on('scroll', function(e) {
        var S = $(this).scrollTop(),                // scrolled distance
            T = 315 + (S/45),                        // value for Top
            L = 3 + (S/24)							//value for Left
            H = 100*(S/75)							//value for height
            W = 100*(S/70)							//value for width
            D = 360 *(S/100)						//value for degrees
            //L = 10 + Math.abs(Math.sin(S/40)*50);  // value for Left
            //set CSS
            alert(S);
        if(H > 10 && H <= 401){
        	$("#dandelion").css({"margin-top": T + 'px'});
        	$("#dandelion").css({"margin-left": L + '%'});
        	$("#dandelion").css({"height": H + 'px'});
        	$("#dandelion").css({"width": W + 'px'});
        	$("#dandelion").css({"transform": 'rotate(' + D + 'deg)'});
            $("#sabHeader").css({"transition": "display 1s"});
            $("#sabHeader").css({"display": "none"});
            if(H<=390){
            $("#hwangHeader").css({"transition": "display .5s"});
            $("#hwangHeader").css({"display": "none"});
            $("#weissHeader").css({"transition": "display 1s"});
            $("#weissHeader").css({"display": "none"});
            $("#stromeHeader").css({"transition": "display 1.5s"});
            $("#stromeHeader").css({"display": "none"});
            $("#bolgerHeader").css({"transition": "display 2s"});
            $("#bolgerHeader").css({"display": "none"});
            $("#goodeHeader").css({"transition": "display 2.5s"});
            $("#goodeHeader").css({"display": "none"});
            $("#nelsonHeader").css({"transition": "display 3s"});
            $("#nelsonHeader").css({"display": "none"});
            $("#bud").css({"transition": "display .5s"});
            $("#bud").fadeOut();
            $("#bud1").css({"transition": "display 1s"});
            $("#bud1").fadeOut();
            $("#bud2").css({"transition": "display 1.5s"});
            $("#bud2").fadeOut();
            $("#bud3").css({"transition": "display 2s"});
            $("#bud3").fadeOut();
            $("#bud4").css({"transition": "display 2.5s"});
            $("#bud4").fadeOut();
            $("#bud5").css({"transition": "display 10s ease 10s"});
            $("#bud5").fadeOut();
            $("#hwangPara").css("display", "none");
            $("#weissPara").css("display", "none");
            $("#stromePara").css("display", "none");
            $("#bolgerPara").css("display", "none");
            $("#goodePara").css("display", "none");
            $("#nelsonPara").css("display", "none");
        }
        }
        if(H >= 390){
        	$("#sabHeader").css({"transition": "display .5s"});
        	$("#sabHeader").css({"display": "block"});
        	$("#hwangHeader").css({"transition": "display .5s"});
        	$("#hwangHeader").fadeIn();
            $("#hwangHeader").css({"display": "inline-block"});
        	$("#weissHeader").css({"transition": "display 1s"});
        	$("#weissHeader").fadeIn();
            $("#weissHeader").css({"display": "inline-block"});
        	$("#stromeHeader").css({"transition": "display 1.5s"});
        	$("#stromeHeader").fadeIn();
        	$("#bolgerHeader").css({"transition": "display 2s"});
        	$("#bolgerHeader").fadeIn();
        	$("#goodeHeader").css({"transition": "display 2.5s"});
        	$("#goodeHeader").fadeIn();
        	$("#nelsonHeader").css({"transition": "display 3s"});
        	$("#nelsonHeader").fadeIn();
            $("#bud").css({"transition": "display .5s"});
        	$("#bud").fadeIn();
        	$("#bud1").css({"transition": "display 1s"});
            $("#bud1").fadeIn();
        	$("#bud2").css({"transition": "display 1.5s"});
            $("#bud2").fadeIn();
        	$("#bud3").css({"transition": "display 2s"});
            $("#bud3").fadeIn();
        	$("#bud4").css({"transition": "display 10s ease 3s"});
            $("#bud4").fadeIn();
        	$("#bud5").css({"transition": "display 15s linear 5s"});
            $("#bud5").fadeIn();
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
    $(event + 'Para').css("transition", "display .7s");
    $(event + 'Para').css("display", "inline-block");
}

var angle = 0;
setInterval(function(){
      angle += .33;
      $("#bud").css({"transform": 'rotate(' + angle + 'deg)'});
      $("#bud1").css({"transform": 'rotate(' + angle + 'deg)'});
      $("#bud2").css({"transform": 'rotate(' + angle + 'deg)'});
      $("#bud3").css({"transform": 'rotate(' + angle + 'deg)'});
      $("#bud4").css({"transform": 'rotate(' + angle + 'deg)'});
      $("#bud5").css({"transform": 'rotate(' + angle + 'deg)'});
     //$("#bud").rotate(angle);
}, 50);