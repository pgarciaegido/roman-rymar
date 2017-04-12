// APP.JS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(document).foundation();



// Hold all necesary global variables here...
var gV = gV || {};

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
gV.stickyHeader = {
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
gV.closeOffCanvas = {
  logics () {
    $('#offCanvas').foundation('close');
  },
  eventHandler () {
    $('.exit-off-canvas').on('click', this.logics);
  }
}


// STICKY HEADER, CLOSE OFF-CANVAS AND YOUTUBE VIDEOS EVENT HANDLERS
gV.stickyHeader.eventHandler()
gV.closeOffCanvas.eventHandler()
