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
LAZY LOADING
*/
var bLazy = new Blazy({
  // options
  selector: "img"
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

// MODALS PICTURES IN GALLER

var pictureOn = false;

function pictureModal(){
  var top = $(window).scrollTop();
  $('#dark-bg').css({'visibility':'visible', 'opacity':'1', 'top': top})
  $('body').css({'overflow':'hidden'});

  var id = $(this).find('img').attr('src');
  var picId = id.replace('_tn', '').replace('/thumbnails', '');

  var modal = $('<img />');
  var insert = modal.attr('src', picId).addClass('img-modal');
  setTimeout(function(){
    $('.galeria-content').append(insert);
  },500)

  pictureOn = true;
}

function pictureModalOff(ev){
  if(pictureOn){
    ev.preventDefault(ev);
    $('.galeria-content').find($('.img-modal')).remove();
    $('#dark-bg').css({'visibility':'hidden', 'opacity':'0'});
    $('body').css({'overflow-y':'scroll'});
  }
}



// RENDER GALLERY PICTURES DINAMICALLY

function renderGalleryPictures () {
  // The loop starts on X number because thats the number of pictures that we have.
  // From the most recent to the older. Check img folder to see.
  let $pictContainer = $('#galeria-pics-container')
  let content = ''
  for (let i = 114; i >= 1; i--) {
    content = galleryPicturesTemplate(i)
    $pictContainer.append(content)
  }
}


function galleryPicturesTemplate (number) {
  return `<div class="column small-6 medium-4 galeria-content-pic galeria-img">
            <img class="b-lazy b-loaded" src="./assets/img/thumbnails/roman_tn (${number}).jpg">
          </div>`
}

// http://localhost:8000/galeria.html
if (window.location.href.split('/').pop() === 'galeria.html'){
  renderGalleryPictures()
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
