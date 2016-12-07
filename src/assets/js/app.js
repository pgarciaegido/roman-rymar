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

//VIDEOS YOUTUBE ON CLICK; THE YOUTUBE SRC NEEDS TO BE CHANGED IN ORDER TO STOP WHEN CLICKED OUT OF IT

var tempURL;
var videoOn = false;
var $html = document.documentElement;


function videos(){
  var top = $(window).scrollTop();
  var videoTop = top + 100;

  $('#dark-bg').css({'display':'block', 'top': top});
  $(this).find('iframe')
         .css({'display': 'block', 'top': videoTop})
         .attr('id','currentlyPlaying');
  tempURL = $('#currentlyPlaying').attr('src');
  $('body').css({'overflow':'hidden'});
  videoOn = true;
}

function videoOff(){
  if(videoOn){
    $('#dark-bg').css({'display':'none'});
    $('#currentlyPlaying').css({'display': 'none'}).attr('src', '');
    $('#currentlyPlaying').attr('src', tempURL);
    $('#currentlyPlaying').removeAttr('id');

    $('body').css({'overflow':'scroll'});
    videoOn = false;
  }
}

// MODALS PICTURES IN GALLERY

var pictureOn = false;

function pictureModal(){
  var top = $(window).scrollTop();
  $('#dark-bg').css({'display':'block', 'top': top})
  $('body').css({'overflow':'hidden'});

  var id = $(this).find('img').attr('src');
  var picId = id.replace('_tn', '').replace('/thumbnails', '');
  console.log(picId);

  var modal = $('<img />');
  var insert = modal.attr('src', picId).addClass('img-modal');
  console.log(insert);
  $('.galeria-img').append(insert);

  pictureOn = true;
}

function pictureModalOff(){
  if(pictureOn){
    $('#dark-bg').css({'display':'none'});
    $('.img-modal').remove();
    $('body').css({'overflow':'scroll'});
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
