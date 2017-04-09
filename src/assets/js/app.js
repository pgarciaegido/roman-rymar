// APP.JS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(document).foundation();

// Hold all necesary global variables here...


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
var stickyHeader = {
  logics(){
  	if ($(this).scrollTop() > 150){
      $('#navbar-container').addClass("sticky");
      $('#nav-container-placeholder').css({display: 'block'});
    }
    else{
      $('#navbar-container').removeClass("sticky");
      $('#nav-container-placeholder').css({display: 'none'});
    }
  },
  eventHandler(){
    $(window).scroll(this.logics);
  }
}


/*
CLOSE OFF CANVAS MENU WHEN CLICKING AN ANCHOR
*/
var closeOffCanvas = {
  logics () {
    $('#offCanvas').foundation('close');
  },
  eventHandler () {
    $('.exit-off-canvas').on('click', this.logics);
  }
}



//VIDEOS YOUTUBE ON CLICK; THE YOUTUBE SRC NEEDS TO BE CHANGED IN ORDER TO STOP WHEN CLICKED OUT OF IT
globalVariables.tempURL = null
globalVariables.videoOn = false

var youtubeVideos = {

  openVideo(){
    var top = $(window).scrollTop();
    var videoTop = top + 100;

    $('#dark-bg').css({'visibility':'visible','opacity':'1', 'top': top});
    let link = $(this).find('.youtube-video-link').attr('data-yt')
    let template = `<iframe src="${link}" frameborder="0" allowfullscreen=""
                    id="currentlyPlaying" style="visibility: visible; opacity: 1;
                    top: ${videoTop}px;"></iframe>`
    $(this).append(template)
    globalVariables.tempURL = link
    $('body').css({'overflow':'hidden'});
    globalVariables.videoOn = true;
  },

  closeVideo(){
    if(globalVariables.videoOn){
      $('#dark-bg').css({'visibility':'hidden','opacity':'0'});
      $('#currentlyPlaying').remove()
      $('body').css({'overflow':'scroll'});
      globalVariables.videoOn = false;
    }
  },

  eventHandlers(){
    $('.fichas').on('click', this.openVideo);
    $('#dark-bg').on('click', this.closeVideo);
  }
}

// STICKY HEADER, CLOSE OFF-CANVAS AND YOUTUBE VIDEOS EVENT HANDLERS
stickyHeader.eventHandler()
closeOffCanvas.eventHandler()
youtubeVideos.eventHandlers()
