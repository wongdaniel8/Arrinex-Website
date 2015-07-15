// function navBarHover(ident) {
// 	var id = document.getElementById(ident);
// 	id.style.color = "#606060";
// }


function navBarHoverAway(ident, ident2) {
	var id = document.getElementById(ident);
	id.style.color = "#B8B8B8";
    var id2 = document.getElementById(ident2);
    id2.style.display = "none";

}

function displayHidden(ident) {
	var id = document.getElementById(ident);
	id.style.display = "block";
}

function homeParReveal(ident) {
	var id = document.getElementById(ident);
	id.style.opacity = 1;
}