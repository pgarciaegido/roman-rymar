$(document).foundation();

/*
STICKY HEADER
*/
function stickyHeader(){
	if ($(this).scrollTop() > 1){  
    $('#navbar-container').addClass("sticky");
  }
  else{
    $('#navbar-container').removeClass("sticky");
  }
}

/*
ANCHOR SLIGHTLY ABOVE THE BEGGINING OF DIV WHEN CLICKING MENU
*/
function offsetAnchor() {
  if(location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 100);
  }
}

/*
CLOSE OFF CANVAS MENU WHEN CLICKING AN ANCHOR
*/
function closeOffCanvas(ev){
	$('#offCanvas').foundation('close');
}

/*
SLICK CAROUSEL
*/

/*
EVENT HANDLERS
*/
$(window).scroll(stickyHeader);
window.addEventListener("hashchange", offsetAnchor);
$('.exit-off-canvas').on('click', closeOffCanvas);