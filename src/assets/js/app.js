$(document).foundation();

/*
STICKY HEADER
*/
function stickyHeader(){

	if ($(this).scrollTop() > 150){  
    $('#navbar-container').addClass("sticky");
    $('#nav-container-placeholder').css({display: 'block'});
  }
  else{
    $('#navbar-container').removeClass("sticky");
    $('#nav-container-placeholder').css({display: 'none'});
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

//AVOID THE OFF-CANVAS
Foundation.OffCanvas.defaults.forceTop = false;
Foundation.OffCanvas.defaults.autoFocus = false;

/*
EVENT HANDLERS
*/
$(window).scroll(stickyHeader);
window.addEventListener("hashchange", offsetAnchor);
$('.exit-off-canvas').on('click', closeOffCanvas);