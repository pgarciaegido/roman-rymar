// GALLERY.JS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// RENDER GALLERY PICTURES DINAMICALLY

var gV = gV || {};

gV.pictureOn = false;
gV.totalPics = 114;
gV.remainingPics = 114;

gV.gallery = {
  // Appends 20 pictures if available
  appendPictures(){
    let rp = gV.remainingPics

    // If there are more than 20 pictures not rendered
    if (rp > 20) {
      let number = rp - 20
      this.loop(rp, number, number)
    }

    else if (rp < 20 && rp > 0) {
      this.loop(rp, 1, 0)
    }
  },
  // (remainPictures, append 20 pics or less, remainingPics after loop)
  loop(rp, l, remain) {
    let $pictContainer = $('#galeria-pics-container')
    let content = ''

    for (let i = rp; i >= l; i--) {
      content = this.template(i)
      $pictContainer.append(content)
    }
    gV.remainingPics = remain;
  },

  template(number){
    return `
      <div class="column small-6 medium-4 galeria-content-pic galeria-img">
        <img class="b-lazy" src="./assets/img/thumbnails/roman_tn (${number}).jpg">
      </div>`
  },

  pictureModalOn(){
    // Inserts an full resolution picture on click
    var top = $(window).scrollTop();
    $('#dark-bg').css({'visibility':'visible', 'opacity':'1', 'top': top});
    $('.icon-close').css({'display': 'block'});
    $('body').css({'overflow':'hidden'});

    var id = $(this).find('img').attr('src');
    var picId = id.replace('_tn', '').replace('/thumbnails', '');

    var modal = $('<img />');
    var insert = modal.attr('src', picId).addClass('img-modal');
    // Takes half a second to append pic. Better ux
    setTimeout(function(){
      $('.galeria-content').append(insert);
    },400)

    gV.pictureOn = true;
  },

  pictureModalOff(ev){
    // Removes image - modal.
    if(gV.pictureOn){
      ev.preventDefault(ev);
      $('.galeria-content').find($('.img-modal')).remove();
      $('#dark-bg').css({'visibility':'hidden', 'opacity':'0'});
      $('.icon-close').css({'display': 'none'})
      $('body').css({'overflow-y':'scroll'});
    }
  }
}


// RENDER
// http://localhost:8000/galeria.html
if (window.location.href.split('/').pop() === 'galeria.html'){
  gV.gallery.appendPictures();

  // GALLERY EVENT HANDLERS
  // When scroll down append  new pics
  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        gV.gallery.appendPictures();
    }
  };
  $(document).on("click",'.galeria-img', gV.gallery.pictureModalOn);
  $('#dark-bg').on('click', gV.gallery.pictureModalOff);

  // If user holds click on screen (like scrolling), remove pic.
  $('#dark-bg').on('mousedown', gV.gallery.pictureModalOff);
  $('#dark-bg').on('touchstart', gV.gallery.pictureModalOff);
  $('.icon-close').on('click', gV.gallery.pictureModalOff);
}
