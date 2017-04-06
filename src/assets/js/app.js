$(document).foundation();

/*
LOADING FOTNS ASYNC
*/
WebFont.load({
  google: {
    families: ['Lato:400,700,900', 'Bree Serif']
  }
});

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


//VIDEOS YOUTUBE ON CLICK; THE YOUTUBE SRC NEEDS TO BE CHANGED IN ORDER TO STOP WHEN CLICKED OUT OF IT

var tempURL;
var videoOn = false;
var $html = document.documentElement;


function videos(){
  var top = $(window).scrollTop();
  var videoTop = top + 100;

  $('#dark-bg').css({'visibility':'visible','opacity':'1', 'top': top});
  $(this).find('iframe')
         .css({'visibility':'visible','opacity':'1', 'top': videoTop})
         .attr('id','currentlyPlaying');
  tempURL = $('#currentlyPlaying').attr('src');
  $('body').css({'overflow':'hidden'});
  videoOn = true;
}

function videoOff(){
  if(videoOn){
    $('#dark-bg').css({'visibility':'hidden','opacity':'0'});
    $('#currentlyPlaying').css({'visibility':'hidden','opacity':'0'}).attr('src', '');
    $('#currentlyPlaying').attr('src', tempURL);
    $('#currentlyPlaying').removeAttr('id');

    $('body').css({'overflow':'scroll'});
    videoOn = false;
  }
}


/*
EVENT HANDLERS
*/
$(window).scroll(stickyHeader);
window.addEventListener("hashchange", offsetAnchor);
$('.exit-off-canvas').on('click', closeOffCanvas);
$('.fichas').on('click', videos);
$('#dark-bg').on('click', videoOff);
$('.galeria-img').on('click', pictureModal);
$('#dark-bg').on('click', pictureModalOff);
